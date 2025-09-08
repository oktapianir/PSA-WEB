import React from "react";
import {
  Calendar,
  Clock,
  Users,
  Star,
  PlayCircle,
  Download,
  BookOpen,
  Award,
  ChevronRight,
  Heart,
  Share2,
  CheckCircle,
  ArrowLeft,
  Globe,
  MessageSquare,
  Target,
  TrendingUp,
} from "lucide-react";

export default function DetailProgram() {
  return (
    <>
      {/* Program Detail Section - Full Width */}
      <div className="w-full relative overflow-hidden mt-16 pt-12 pb-24">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-600/20 to-blue-600/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-600/15 to-purple-600/15 rounded-full filter blur-3xl animate-pulse delay-700"></div>
          <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-gradient-to-r from-purple-600/20 to-teal-600/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Geometric decorations */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-20 h-20 border border-teal-500/20 rotate-45"></div>
          <div className="absolute top-1/3 right-20 w-16 h-16 border border-blue-500/20 rotate-12"></div>
          <div className="absolute bottom-1/4 left-1/4 w-12 h-12 border border-purple-500/20 rotate-45"></div>
        </div>

        {/* Main content container - Full width */}
        <div className="relative z-10 w-full">
          <div className="w-full px-8 py-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
              {/* Left Section - Program Info */}
              <div className="space-y-8 text-gray-900">
                <div className="space-y-6">

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                    Advanced Digital
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-400 to-blue-700 animate-pulse">
                      Marketing Strategy
                    </span>
                  </h1>

                  <p className="text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                    Kuasai strategi pemasaran digital terdepan dengan program
                    komprehensif yang menggabungkan teori dan praktik langsung.
                    Dipandu oleh praktisi berpengalaman dari perusahaan
                    multinasional.
                  </p>
                </div>

                {/* Program Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-8">
                  <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200">
                    <Clock className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">12</div>
                    <div className="text-sm text-gray-600">Minggu</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200">
                    <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">
                      18/25
                    </div>
                    <div className="text-sm text-gray-600">Peserta</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200">
                    <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">100%</div>
                    <div className="text-sm text-gray-600">Sertifikat</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200">
                    <Globe className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">
                      Online
                    </div>
                    <div className="text-sm text-gray-600">& Offline</div>
                  </div>
                </div>

                {/* What You'll Learn */}
                <div className="space-y-6 pt-8">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">
                    Yang Akan Anda Pelajari
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Digital Strategy Planning & Implementation",
                      "SEO & SEM untuk meningkatkan visibility",
                      "Social Media Marketing yang efektif",
                      "Content Marketing & Email Automation",
                      "Analytics & Performance Measurement",
                      "Campaign Management & Optimization",
                    ].map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-4 text-gray-700"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-base lg:text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-8">
                  <button className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/50">
                    <span>Daftar Program</span>
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Right Section - Program Details Card */}
              <div className="relative">
                {/* Program Details Card */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 lg:p-8 shadow-2xl border border-gray-200 relative overflow-hidden">
                  {/* Card decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-400/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>

                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                        Detail Program
                      </h2>
                      <p className="text-gray-600 text-sm lg:text-base">
                        Informasi lengkap tentang program pelatihan ini
                      </p>
                    </div>

                    {/* Price Section */}
                    <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-6 mb-8 border border-teal-100">
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-2">
                          Harga Spesial
                        </p>
                        <div className="flex items-center justify-center space-x-2 mb-2">
                          <span className="text-4xl font-bold text-gray-900">
                            Rp 2.499.000
                          </span>
                        </div>
                        <p className="text-lg text-gray-500 line-through mb-1">
                          Rp 3.499.000
                        </p>
                        <p className="text-sm text-red-600 font-medium">
                          Hemat Rp 1.000.000 (29%)
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                          *Promo terbatas hingga akhir bulan
                        </p>
                      </div>
                    </div>

                    {/* Program Features */}
                    <div className="space-y-6 mb-8">
                      <h4 className="font-semibold text-gray-900 text-lg">
                        Fasilitas Program
                      </h4>
                      <div className="grid grid-cols-1 gap-4">
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <Award className="w-6 h-6 text-teal-500 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-gray-900">
                              Sertifikat BNSP
                            </span>
                            <p className="text-sm text-gray-600">
                              Sertifikat resmi yang diakui industri
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <Users className="w-6 h-6 text-blue-500 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-gray-900">
                              Mentoring 1-on-1
                            </span>
                            <p className="text-sm text-gray-600">
                              Bimbingan personal dari expert
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <Target className="w-6 h-6 text-purple-500 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-gray-900">
                              Job Placement Support
                            </span>
                            <p className="text-sm text-gray-600">
                              Bantuan penempatan kerja
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <Download className="w-6 h-6 text-green-500 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-gray-900">
                              Akses Materi Selamanya
                            </span>
                            <p className="text-sm text-gray-600">
                              Lifetime access ke semua resource
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <Globe className="w-6 h-6 text-orange-500 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-gray-900">
                              Hybrid Learning
                            </span>
                            <p className="text-sm text-gray-600">
                              Kombinasi online & offline
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <MessageSquare className="w-6 h-6 text-pink-500 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-gray-900">
                              Community Access
                            </span>
                            <p className="text-sm text-gray-600">
                              Akses ke komunitas alumni
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Main CTA */}
                    <button className="w-full py-4 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl mb-4">
                      Daftar Program Sekarang
                    </button>

                    {/* Contact Information */}
                    <div className="pt-6 border-t border-gray-200">
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-3">
                          Butuh bantuan? Hubungi kami
                        </p>
                        <div className="flex items-center justify-center space-x-6">
                          <a
                            href="mailto:info@punyaskillakademi.co.id"
                            className="flex items-center text-teal-600 hover:text-teal-700 text-sm font-medium"
                          >
                            <svg
                              className="w-4 h-4 mr-2"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            Email
                          </a>
                          <a
                            href="https://www.instagram.com/punyaskillakademi/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-pink-600 hover:text-pink-700 text-sm font-medium"
                          >
                            <svg
                              className="w-4 h-4 mr-2"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.5.5.2.9.5 1.3.9.4.4.7.8.9 1.3.2.4.4 1 .5 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.5 2.2-.2.5-.5.9-.9 1.3-.4.4-.8.7-1.3.9-.4.2-1 .4-2.2.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.5-.5-.2-.9-.5-1.3-.9-.4-.4-.7-.8-.9-1.3-.2-.4-.4-1-.5-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.5-2.2.2-.5.5-.9.9-1.3.4-.4.8-.7 1.3-.9.4-.2 1-.4 2.2-.5C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7 .1 5.6.2 4.6.5 3.8.9c-.9.4-1.7 1-2.4 1.7C.7 3.3.2 4.2 0 5.1c-.4.8-.7 1.8-.8 3.2C-.1 9.2 0 9.6 0 12s-.1 2.8.1 3.7c.1 1.4.4 2.4.8 3.2.2.9.7 1.8 1.4 2.5.7.7 1.5 1.3 2.4 1.7.8.4 1.8.7 3.2.8.9.1 1.3.1 3.7.1s2.8 0 3.7-.1c1.4-.1 2.4-.4 3.2-.8.9-.4 1.8-1 2.4-1.7.7-.7 1.3-1.5 1.7-2.4.4-.8.7-1.8.8-3.2.1-.9.1-1.3.1-3.7s0-2.8-.1-3.7c-.1-1.4-.4-2.4-.8-3.2-.4-.9-1-1.8-1.7-2.4-.7-.7-1.5-1.3-2.4-1.7-.8-.4-1.8-.7-3.2-.8C15.3 0 14.9 0 12 0zM12 5.8A6.2 6.2 0 1 0 12 18.2 6.2 6.2 0 1 0 12 5.8zm0 10.2a4 4 0 1 1 0-8.1 4 4 0 0 1 0 8.1zm6.4-11.7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                            </svg>
                            Instagram
                          </a>
                          {/* <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 hover:text-green-700 text-sm font-medium">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                            </svg>
                            WhatsApp
                          </a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
