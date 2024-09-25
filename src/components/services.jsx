import { useState } from "react";

const Services = () => {
  return (
    <>
      <div
        id="services"
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-delay="300"
        className="py-14 px-4 sm:px-8"
      >
        <div className="main-container">
          {/* Heading */}
          <h1 className="underline font-bold text-center text-3xl sm:text-4xl mb-8">
            My Services
          </h1>

          {/* Services Container */}
          <div className="services-container flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-8 mt-8">
            {/* Service 1 */}
            <div className="w-full md:w-1/3 lg:w-1/4 p-4 flex flex-col items-center cursor-pointer hover:bg-gray-100 bg-slate-100 text-center shadow-lg rounded-xl space-y-4">
              <i className="text-5xl fa-brands fa-aws"></i>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                Web Development
              </h1>
              <p className="text-sm sm:text-base lg:text-lg px-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                laborum nisi impedit animi assumenda ea!
              </p>
              <button className="px-3 py-2 bg-orange-500 shadow-lg rounded-full text-sm md:text-base lg:text-lg text-black hover:bg-orange-600 transition">
                Check
              </button>
            </div>

            {/* Service 2 */}
            <div className="w-full md:w-1/3 lg:w-1/4 p-4 flex flex-col items-center cursor-pointer hover:bg-gray-100 bg-slate-100 text-center shadow-lg rounded-xl space-y-4">
              <i className="text-5xl fa-solid fa-server"></i>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                Backend Development
              </h1>
              <p className="text-sm sm:text-base lg:text-lg px-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                neque ex, vel molestias tempore molestiae.
              </p>
              <button className="px-3 py-2 bg-orange-500 shadow-lg rounded-full text-sm md:text-base lg:text-lg text-black hover:bg-orange-600 transition">
                Check
              </button>
            </div>

            {/* Service 3 */}
            <div className="w-full md:w-1/3 lg:w-1/4 p-4 flex flex-col items-center cursor-pointer hover:bg-gray-100 bg-slate-100 text-center shadow-lg rounded-xl space-y-4">
              <i className="text-5xl fa-solid fa-mobile"></i>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                Android Development
              </h1>
              <p className="text-sm sm:text-base lg:text-lg px-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                iusto, blanditiis at totam quasi vel?
              </p>
              <button className="px-3 py-2 bg-orange-500 shadow-lg rounded-full text-sm md:text-base lg:text-lg text-black hover:bg-orange-600 transition">
                Check
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
