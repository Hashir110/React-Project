import { useState } from "react";

const Services = () => {
  return (
    <>
      <div className="main-container py-14">
        <h1 className="underline font-bold text-center text-4xl">
          My Services
        </h1>
        <div className="services-container space-x-5 px-10 flex mt-10">
          <div className="cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl service1 space-y-4">
            <i class="text-5xl fa-brands fa-aws"></i>
            <h1 className="text-4xl">Web Development</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              laborum nisi impedit animi assumenda ea!
            </p>
            <button className="px-3 py-2 bg-orange-500 shadow-lg rounded-full text-1xl">
              Check
            </button>
          </div>
          <div>
            <div className="cursor-pointer hover:bg-gray-100 bg-slate-100  p-5 text-center shadow-lg rounded-xlservice1 space-y-4">
              <i class="text-5xl fa-solid fa-server"></i>
              <h1 className="text-4xl">Backend Development</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
                neque ex, vel molestias tempore molestiae.
              </p>
              <button className="px-3 py-2 bg-orange-500 shadow-lg rounded-full text-1xl">
                Check
              </button>
            </div>
          </div>
          <div>
            <div className="cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xlservice1 space-y-4">
              <i class="text-5xl fa-solid fa-mobile"></i>
              <h1 className="text-4xl">Android Development</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
                iusto, blanditiis at totam quasi vel?
              </p>
              <button className="px-3 py-2 bg-orange-500 shadow-lg rounded-full text-1xl">
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
