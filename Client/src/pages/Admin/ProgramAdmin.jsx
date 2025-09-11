import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function ProgramAdmin() {
  const [formData, setFormData] = useState({
    nama_program: "",
    deskripsi: "",
    image: "",
    tanggal_dilaksanakan: "",
  });

  const [programs, setPrograms] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const fetchPrograms = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/programs");
      setPrograms(res.data);
    } catch (err) {
      console.error("Gagal mengambil data program:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append("nama_program", formData.nama_program);
      data.append("deskripsi", formData.deskripsi);
      data.append("image", formData.image);
      data.append("tanggal_dilaksanakan", formData.tanggal_dilaksanakan);

      await axios.post("http://localhost:5000/api/programs/add", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setFormData({
        nama_program: "",
        deskripsi: "",
        image: "",
        tanggal_dilaksanakan: "",
      });
      fetchPrograms();
    } catch (err) {
      console.error("Gagal menambahkan program:", err);
    } finally {
      setIsSubmitting(false);
    }
  };
  useEffect(() => {
    fetchPrograms();
  }, []);

  const [selectedProgram, setSelectedProgram] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleDetail = (program) => {
    setSelectedProgram(program);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProgram(null);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Yakin ingin menghapus program ini?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/programs/${id}`);
      
      // Hapus program dari state
      setPrograms((prevPrograms) =>
        prevPrograms.filter((program) => program.id !== id)
    );
    
      alert("Program berhasil dihapus!");
    } catch (err) {
      console.error("Gagal menghapus program:", err.message);
      alert("Terjadi kesalahan saat menghapus program.");
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4 text-black">Manajemen Program</h2>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <input
          type="text"
          name="nama_program"
          value={formData.nama_program}
          onChange={handleChange}
          placeholder="Nama Program"
          required
          className="w-full border px-4 py-2 rounded"
        />

        <textarea
          name="deskripsi"
          value={formData.deskripsi}
          onChange={handleChange}
          placeholder="Deskripsi Program"
          required
          className="w-full border px-4 py-2 rounded"
        />

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, image: e.target.files[0] }))
          }
          required
          className="w-full border px-4 py-2 rounded"
        />

        <input
          type="date"
          name="tanggal_dilaksanakan"
          value={formData.tanggal_dilaksanakan}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          {isSubmitting ? "Mengirim..." : "Tambah Program"}
        </button>
      </form>

      {/* TABEL */}
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-200 text-center">
            <th className="border px-4 py-2">Nama</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Dibuat</th>
            <th className="border px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {programs.map((program) => (
            <tr className="text-center" key={program.id}>
              <td className="border px-4 py-2">{program.nama_program}</td>
              <td className="border px-4 py-2">{program.status}</td>
              <td className="border px-4 py-2">{program.created_at}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleDetail(program)}
                  type="button"
                  className="max-w-sm text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                >
                  Detail
                </button>
                <button
                  // onClick={() => handleUpdate(program.id)}
                  type="button"
                  className="max-w-sm text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(program.id)}
                  type="button"
                  className="max-w-sm text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                >
                  Hapus
                </button>
              </td>
              {showModal && selectedProgram && (
                <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
                  <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl p-8 relative transition-all duration-300">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6 border-b pb-4">
                      <h3 className="text-2xl font-bold text-gray-800">
                        Detail Program
                      </h3>
                      <button
                        onClick={closeModal}
                        className="text-gray-400 hover:text-red-600 text-2xl font-semibold"
                      >
                        ✖
                      </button>
                    </div>

                    {/* Konten 2 kolom */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Kolom kiri: Tabel Informasi */}
                      <div>
                        <table className="w-full table-auto text-sm text-gray-700">
                          <tbody>
                            <tr className="border-b">
                              <td className="py-2 pr-4 font-bold text-gray-800">
                                Nama Program
                              </td>
                              <td className="py-2">
                                {selectedProgram.nama_program}
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2 pr-4 font-bold text-gray-800">
                                Deskripsi
                              </td>
                              <td className="py-2">
                                {selectedProgram.deskripsi}
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2 pr-4 font-bold text-gray-800">
                                Tanggal
                              </td>
                              <td className="py-2">
                                {selectedProgram.tanggal_dilaksanakan}
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="py-2 pr-4 font-bold text-gray-800">
                                Status
                              </td>
                              <td className="py-2">{selectedProgram.status}</td>
                            </tr>
                            <tr>
                              <td className="py-2 pr-4 font-bold text-gray-800">
                                Dibuat
                              </td>
                              <td className="py-2">
                                {selectedProgram.created_at}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* Kolom kanan: Gambar */}
                      <div className="flex justify-center items-start">
                        {selectedProgram.image ? (
                          <img
                            src={`http://localhost:5000/uploads/${selectedProgram.image ?? ''}`}
                            alt={selectedProgram.nama_program}
                            className="w-full max-h-100 object-contain rounded-md border shadow"
                          />
                        ) : (
                          <p className="text-gray-400 italic">
                            Tidak ada gambar
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
