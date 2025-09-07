import ImgPro from "../assets/imgproo.png";

export default function Tentangkami() {
  return (
    <>
      {/* About Section - Enhanced Interactive Version */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-blue-50 border border-blue-200 rounded-full px-6 py-2 mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></span>
              <span className="text-sm font-medium text-blue-700">
                Tentang Punya Skill Academy
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Apa itu
              <span className="text-blue-600 block lg:inline lg:ml-3">
                Punya Skill Akademi?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Punya Skill Akademi adalah platform pendidikan dan pelatihan yang
              berfokus pada peningkatan keterampilan generasi muda untuk siap
              kerja maupun membangun usaha. Punya Skill Academy berada pada naungan Yayasan Sinergi Aksi Peduli.
            </p>
          </div>

          {/* Interactive Grid Layout */}
          <div className="grid lg:grid-cols-1 gap-16 items-center">
            {/* Left Side - Feature Cards */}
            <div className="space-y-8">
              {/* Right Side - Interactive Visual Content */}
              <div className="relative">
                {/* Main Visual Container */}
                <div className="relative">
                  {/* Background Decorative Elements */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-green-100 rounded-3xl transform rotate-3 opacity-20"></div>
                  <div className="absolute inset-0 bg-gradient-to-tl from-green-100 via-blue-50 to-purple-100 rounded-3xl transform -rotate-2 opacity-30"></div>

                  {/* Main Content Card */}
                  <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 gap-8 mb-8">
                      <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                        <div className="text-4xl font-bold text-blue-600 mb-2">
                          Visi
                        </div>
                        <div className="text-blue-700 font-medium">
                          Mencetak talenta yang kompeten, adaptif, dan berdaya
                          saing tinggi melalui program pelatihan, sertifikasi,
                          dan magang.
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 mb-8">
                      <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
                        <div className="text-4xl font-bold text-green-600 mb-2">
                          250 +
                        </div>
                        <div className="text-green-700 font-medium">
                          Peserta
                        </div>
                      </div>
                      <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
                        <div className="text-4xl font-bold text-purple-600 mb-2">
                          Mitra Industri
                        </div>
                        <div className="text-purple-700 font-medium">
                          Bekerja sama dengan beberapa mitra untuk mendukung
                          pengalaman nyata peserta.
                        </div>
                      </div>
                    </div>
                     <div className="grid grid-cols-1 gap-8 mb-8">
                        <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
                          <div className="text-4xl font-bold text-orange-600 mb-2">
                            100%
                          </div>
                          <div className="text-orange-700 font-medium">
                            Bersertifikat
                          </div>
                        </div>
                      </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
                  <div
                    className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-20 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}
