import Image from "next/image";

const contactPage = () => {
  return (
    <section className="dark:bg-gray-100">
      <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900">
            Get in Touch
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-600">
            Connect with Kryzotech
          </p>
        </div>

        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">
              How Can We Assist You?
            </h3>
            <p className="mt-3 text-lg dark:text-gray-600">
              We’re here to help you achieve your digital transformation goals
              whether you&apos;re looking to enhance your data science
              capabilities, develop cutting edge web and app solutions, or
              enroll in our IT courses. Reach out to us, and let’s build
              something remarkable together!
            </p>
            <div className="mt-12 space-y-12">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucideMapPinHouse"
                    >
                      <path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" />
                      <path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" />
                      <path d="M18 22v-3" />
                      <circle cx="10" cy="10" r="3" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                    Explore Our Services
                  </h4>
                  <p className="mt-2 dark:text-gray-600">
                    Whether you need support with data science, web development,
                    or app development, we offer tailored solutions to fit your
                    needs.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucideMail"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                    Course Inquiries
                  </h4>
                  <p className="mt-2 dark:text-gray-600">
                    Learn more about our specialized IT courses in Python, SQL
                    for Data Analytics, and Data Science. Our team will guide
                    you to the right learning path.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                    Collaboration Opportunities
                  </h4>
                  <p className="mt-2 dark:text-gray-600">
                    We&apos;re always open to new partnerships. Let’s
                    collaborate and make an impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="mt-10 lg:mt-0">
            {/* make this black & white */}
            {/* <Image
              src="https://images.unsplash.com/photo-1560264357-8d9202250f21"
              alt=""
              className="mx-auto rounded-lg shadow-lg dark:bg-gray-500 "
              width={500}
              height={500}
            /> */}
            <Image
              src="https://images.unsplash.com/photo-1560264357-8d9202250f21"
              alt=""
              className="mx-auto rounded-lg shadow-lg dark:bg-gray-500 "
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default contactPage;
