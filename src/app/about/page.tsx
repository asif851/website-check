import Image from "next/image";

const aboutUsPage = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900">
            Kryzotech is an innovative IT firm and training institute based in Dhaka, Bangladesh, specializing in Data Science, Web Development, and App Development. We deliver top-tier services globally and offer comprehensive courses to empower future tech professionals.
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-600">
            this is a description about us
          </p>
        </div>
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">
              Innovating the Future of Technology
            </h3>
            <p className="mt-3 text-lg dark:text-gray-600">
           At Kryzotech, we shape the future with cutting-edge solutions in data science, web innovation, and app development. Our global presence allows us to deliver tailored solutions for every client's unique challenges.
            </p>
            <div className="mt-12 space-y-12">
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
                    Empowering Businesses with Data Science
                  </h4>
                  <p className="mt-2 dark:text-gray-600">
                    Unlock the power of data-driven insights to make smarter
                    business decisions. Our advanced data analysis techniques
                    and predictive models help businesses optimize operations
                    and deliver tailored solutions to their customers.
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
                    Creative Web Solutions for Modern Enterprises
                  </h4>
                  <p className="mt-2 dark:text-gray-600">
                    From sleek, engaging websites to robust web applications,
                    our web development team excels at delivering top-tier user
                    experiences, ensuring that your digital presence stands out
                    in today&apos;s competitive landscape.
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
                    Agile & Scalable App Development
                  </h4>
                  <p className="mt-2 dark:text-gray-600">
                    With a focus on agility and scalability, our app development
                    services are designed to grow with your business. We create
                    apps that are not only visually appealing but also highly
                    functional and intuitive for users.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="mt-10 lg:mt-0">
            <Image
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
              alt=""
              className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">
                Empowering Your Future with Kryzotech&apos;s Courses
              </h3>
              <p className="mt-3 text-lg dark:text-gray-600">
                Kryzotech is more than a service provider; we are an educational
                hub offering industry-relevant courses to shape the tech leaders
                of tomorrow. Our training programs are designed for beginners
                and professionals alike, enabling you to gain master skills in
                areas such as data science, web development, SQL for data
                analytics, python programming and more.
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
                        className="lucide lucideCameraOff"
                      >
                        <line x1="2" x2="22" y1="2" y2="22" />
                        <path d="M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16" />
                        <path d="M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5" />
                        <path d="M14.121 15.121A3 3 0 1 1 9.88 10.88" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                      Expert-Led Data Science Training
                    </h4>
                    <p className="mt-2 dark:text-gray-600">
                      Our data science courses cover everything from the basics
                      to advanced machine learning techniques, ensuring you gain
                      hands-on experience.
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
                      Comprehensive Web Development Course
                    </h4>
                    <p className="mt-2 dark:text-gray-600">
                      Learn to build dynamic and scalable websites with our
                      interactive web development curriculum.
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
                      SQL for Data Analytics
                    </h4>
                    <p className="mt-2 dark:text-gray-600">
                      Master the essentials of SQL and elevate your data
                      analysis capabilities with our practical, project-based
                      training.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
              <Image
                src="https://images.unsplash.com/photo-1593697821094-53ed19153f21"
                alt=""
                className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default aboutUsPage;
