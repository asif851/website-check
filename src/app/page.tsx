import Image from "next/image";

export default function Home() {
  return (
    <section className="relative py-12 overflow-hidden sm:pb-16 lg:pb-20 xl:pb-24">
      <div className="px-4 mx-auto relativea sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
          <div>
            <h1 className="text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Connecting Devs with Employers
            </h1>
            <p className="mt-4 text-lg font-normal text-gray-400 sm:mt-8">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat.
            </p>

            <form
              action="#"
              method="POST"
              className="relative mt-8 rounded-full sm:mt-12"
            >
              <div className="relative">
                <div className="absolute rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-6">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Try Java Developer, React Dev etc."
                    className="block w-full py-4 pr-6 text-white  bg-gray-500 border border-transparent rounded-full pl-14 sm:py-5 focus:border-transparent focus:ring-0"
                  />
                </div>
              </div>
              <div className="sm:absolute flex sm:right-1.5 sm:inset-y-1.5 mt-4 sm:mt-0">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-5 py-5 text-sm font-semibold tracking-widest text-black uppercase transition-all duration-200 bg-white rounded-full sm:w-auto sm:py-3 hover:opacity-90"
                >
                  Find A Developer
                </button>
              </div>
            </form>

            <div className="mt-8 sm:mt-12">
              <div className="flex items-center mt-3">
                <div className="flex"></div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0">
              <svg
                className="blur-3xl filter opacity-70"
                width="444"
                height="536"
                viewBox="0 0 444 536"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M225.919 112.719C343.98 64.6648 389.388 -70.487 437.442 47.574C485.496 165.635 253.266 481.381 135.205 529.435C17.1445 577.488 57.9596 339.654 9.9057 221.593C-38.1482 103.532 107.858 160.773 225.919 112.719Z"
                  fill="url(#c)"
                />
                <defs>
                  {/* <linearGradient id="c" x1="82.7339" y1="550.792" x2="-39.945" y2="118.965" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" style="stop-color: var(--color-cyan-500)" />
                                    <stop offset="100%" style="stop-color: var(--color-purple-500)" />
                                </linearGradient> */}
                </defs>
              </svg>
            </div>

            <div className="absolute inset-0">
              <img
                className="object-cover w-full h-full opacity-50"
                src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
                alt=""
              />
            </div>

            <img
              className="relative w-full max-w-md mx-auto"
              src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/2/illustration.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
