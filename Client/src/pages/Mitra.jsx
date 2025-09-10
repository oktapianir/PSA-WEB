import ImgPro from "../assets/img-kemnaker.png";

export default function Mitra() {
  return (
    <>
      {/*Program Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-5xl xl:text-5xl font-bold leading-tight">
              Mitra mitra yang bekerja sama dengan{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-400 to-blue-700 animate-pulse">
                Punya Skill Akademi
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Mari bergabung menjadi mitra kami...
            </p>
          </div>

          {/* Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="max-w-sm bg-white rounded-lg shadow-sm dark:bg-white-800 dark:border-gray-700 hover:shadow-xl transform hover:-translate-y-0.5">
              <img className="rounded-t-lg" src={ImgPro} alt="" />

              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  Noteworthy technology acquisitions 2021
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-700">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="/detail-program"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 hover:from-blue-600 hover:to-teal-600"
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
              <img className="rounded-t-lg" src={ImgPro} alt="" />

              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  Noteworthy technology acquisitions 2021
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-700">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="/detail-program"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 hover:from-blue-600 hover:to-teal-600"
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
              <img class="rounded-t-lg" src={ImgPro} alt="" />

              <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  Noteworthy technology acquisitions 2021
                </h5>

                <p class="mb-3 font-normal text-gray-700 dark:text-gray-700">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="/detail-program"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 hover:from-blue-600 hover:to-teal-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
    </>
  );
}
