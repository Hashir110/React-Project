import { useState } from "react";
import bannerImage from "../assets/images/Dp.jpg";
const About = () => {
  const [data, setData] = useState({
    Image: bannerImage,
    title: "React Native & React js Developer",
    des1: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus natus a expedita animi quod ullam ipsa porro! Dolore,
                in nam!`,
    des2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                aliquam quas voluptas quidem ipsa eaque facere repudiandae sed
                laboriosam! Totam est dolorem quam iusto consequuntur ex ullam
                quas, saepe eum.`,
    actionButton: {
      title: "Read More..",
      link: "/readmore",
    },
  });
  return (
    <>
      <div className="main-container py-16 border bg-gray-100">
        <h1 className="text-4xl pb-16 text-center underline font-bold">
          About Me
        </h1>
        {/* image container  */}
        <div className="flex items-center">
          <div className="w-full flex justify-center">
            <img
              className="rounded-full"
              src={bannerImage}
              alt="Hashir Shaikh"
            />
          </div>

          {/* text container  */}
          <div className="w-full  flex justify-center">
            <div className="space-y-5  w-2/3">
              <h1 className="text-4xl font-semibold">{data.title}</h1>
              <p>{data.des1}</p>
              <p>{data.des2}</p>
              <button className="bg-orange-500 px-3 py-2 shadow-lg rounded-full">
                {data.actionButton.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
