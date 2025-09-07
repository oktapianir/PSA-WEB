import ImgPro from "../assets/imgproo.png";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white pt-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              <span className="text-sm font-medium text-blue-700">
                250+ Peserta Terdaftar
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Tingkatkan Skill,
              <br />
              <span className="text-blue-600">Raih Karier Impian</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              Platform pendidikan dan pelatihan profesional yang berfokus pada
              peningkatan keterampilan generasi muda untuk siap kerja dan
              membangun usaha.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Daftar Program
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Konsultasi Gratis
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-blue-600">250+</div>
                <div className="text-sm text-gray-600">Peserta Aktif</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Tersertifikasi</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-blue-600">95%</div>
                <div className="text-sm text-gray-600">Job Placement</div>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Education Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              {/* Main Image */}
              <img
                src={ImgPro}
                alt="Professional team working on laptops in modern office environment"
                className="w-full h-[700px] object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </section>

      {/* About Section - Enhanced Interactive Version */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-blue-50 border border-blue-200 rounded-full px-6 py-2 mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></span>
              <span className="text-sm font-medium text-blue-700">
                Keunggulan Kami
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Mengapa Memilih
              <span className="text-blue-600 block lg:inline lg:ml-3">
                Punya Skill Akademi?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Berdiri di bawah naungan Yayasan Sinergi Aksi Peduli, kami
              berkomitmen mencetak talenta yang kompeten dan berdaya saing
              tinggi
            </p>
          </div>

          {/* Interactive Grid Layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Feature Cards */}
            <div className="space-y-8">
              {/* Card 1 - Sertifikasi BNSP */}
              <div className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <div className="relative flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg
                        className="w-8 h-8 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                      Sertifikasi BNSP
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Dapatkan sertifikasi resmi yang diakui industri untuk
                      meningkatkan kredibilitas profesional Anda di dunia kerja.
                    </p>
                    <div className="mt-4 flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm">Pelajari lebih lanjut</span>
                      <svg
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 - Program Magang */}
              <div className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-green-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <div className="relative flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg
                        className="w-8 h-8 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors duration-300">
                      Program Magang
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Pengalaman kerja nyata dengan perusahaan mitra untuk
                      membangun mindset profesional dan kesiapan kerja.
                    </p>
                    <div className="mt-4 flex items-center text-green-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm">Pelajari lebih lanjut</span>
                      <svg
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 - Mentoring Ahli */}
              <div className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-purple-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <div className="relative flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg
                        className="w-8 h-8 text-purple-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                      Mentoring Ahli
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Bimbingan langsung dari praktisi berpengalaman untuk
                      mempercepat proses pembelajaran dan pengembangan karier.
                    </p>
                    <div className="mt-4 flex items-center text-purple-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm">Pelajari lebih lanjut</span>
                      <svg
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
                  <div className="grid grid-cols-2 gap-8 mb-8">
                    <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                      <div className="text-4xl font-bold text-blue-600 mb-2">
                        250+
                      </div>
                      <div className="text-blue-700 font-medium">
                        Peserta Aktif
                      </div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
                      <div className="text-4xl font-bold text-green-600 mb-2">
                        95%
                      </div>
                      <div className="text-green-700 font-medium">
                        Job Placement
                      </div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
                      <div className="text-4xl font-bold text-purple-600 mb-2">
                        50+
                      </div>
                      <div className="text-purple-700 font-medium">
                        Mitra Industri
                      </div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
                      <div className="text-4xl font-bold text-orange-600 mb-2">
                        100%
                      </div>
                      <div className="text-orange-700 font-medium">
                        Bersertifikat
                      </div>
                    </div>
                  </div>

                  {/* Bottom Message */}
                  <div className="text-center p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Siap Menjadi Bagian Dari Kesuksesan?
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Bergabunglah dengan ribuan peserta yang telah merasakan
                      manfaatnya
                    </p>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                      Daftar Sekarang
                    </button>
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
      </section>

      {/*Program Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Beberapa Program
              <span className="text-blue-600 block lg:inline lg:ml-3">
                Punya Skill Akademi?
              </span>
            </h2>
            <p className="text-lg text-blue-600 max-w-3xl mx-auto">
              Anda tertarik? Langsung daftar yuk, untuk mendapatkan pengalaman
              pelatihan yang lebih profesional.
            </p>
          </div>

          {/* Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="max-w-sm bg-white rounded-lg shadow-sm dark:bg-white-800 dark:border-gray-700 hover:shadow-xl transform hover:-translate-y-0.5">
              <a href="#">
                <img className="rounded-t-lg" src={ImgPro} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-700">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="max-w-sm bg-white rounded-lg shadow-sm dark:bg-white-800 dark:border-gray-700 hover:shadow-xl transform hover:-translate-y-0.5 ">
              <a href="#">
                <img className="rounded-t-lg" src={ImgPro} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-700">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div class="max-w-sm bg-white rounded-lg shadow-sm dark:bg-white-800 dark:border-gray-700 hover:shadow-xl transform hover:-translate-y-0.5">
              <a href="#">
                <img class="rounded-t-lg" src={ImgPro} alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-700">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div class="max-w-sm bg-white rounded-lg shadow-sm dark:bg-white-800 dark:border-gray-700 hover:shadow-xl transform hover:-translate-y-0.5">
              <a href="#">
                <img class="rounded-t-lg" src={ImgPro} alt="" />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-700">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section - Permanent Floating Effect */}
      <div className="py-20 text-center relative">
        <div className="relative max-w-6xl mx-auto px-6">
          {/* Permanent Shadow Layers - Always Visible */}
          <div className="absolute inset-0 bg-black/12 rounded-3xl blur-xl transform translate-x-3 translate-y-6 scale-105"></div>
          <div className="absolute inset-0 bg-black/8 rounded-3xl blur-2xl transform translate-x-1 translate-y-3 scale-102"></div>
          <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-lg transform translate-x-2 translate-y-4 scale-103"></div>

          {/* Main Floating Container - Always Elevated */}
          <div
            className="relative bg-gradient-to-r from-blue-600 to-blue-600 rounded-3xl p-12 text-white overflow-hidden transform -translate-y-2 hover:scale-105 hover:-translate-y-4 transition-all duration-500 ease-out"
            style={{
              boxShadow: `
          0 25px 50px -12px rgba(0, 0, 0, 0.25),
          0 35px 80px -15px rgba(0, 0, 0, 0.15),
          0 45px 100px -20px rgba(59, 130, 246, 0.1)
        `,
            }}
          >
            {/* Inner Shadow for Depth */}
            <div className="absolute inset-0 bg-black/10"></div>

            {/* Content */}
            <div className="relative">
              <h3 className="text-3xl font-bold mb-4">Visi kami</h3>
              <p className="text-xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Mencetak talenta yang kompeten, adaptif, dan berdaya saing
                tinggi melalui program pelatihan, sertifikasi, dan magang.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Yuk Gabung!
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Lihat Program
                </button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full transform translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full transform -translate-x-16 translate-y-16"></div>
          </div>
        </div>
      </div>
    </>
  );
}
