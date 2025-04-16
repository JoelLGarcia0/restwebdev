import React from "react";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { TbBolt } from "react-icons/tb";
import { IoBarChartSharp } from "react-icons/io5";

const About = () => {
  return (
    <section id="about" className=" scroll-mt-30 py-12 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-left">
        <h2 className="text-3xl drop-shadow-lg font-bold mb-4">
          We Bring Your Vision to Life
        </h2>
        <p className="text-gray-600 text-lg mb-10">
          RESTweb is a web development studio based in South Florida. We
          specialize in building clean, responsive, frontend websites tailored
          to small businesses
        </p>

        <div className="flex flex-col md:flex-row gap-8 px-10 justify-center items-center">
          <div className="border rounded-lg p-8 w-full md:w-1/3 text-center shadow-sm hover:shadow-md transition">
            <MdOutlinePhoneIphone
              size={36}
              className="mx-auto text-purple mb-3"
            />
            <p className="font-semibold">Mobile Optimized</p>
            <p className="font-semibold">Design</p>
          </div>
          <div className="border rounded-lg p-8 w-full md:w-1/3 text-center shadow-sm hover:shadow-md transition">
            <IoBarChartSharp size={36} className="mx-auto text-blue mb-3" />
            <p className="font-semibold">SEO-Ready</p>
            <p className="font-semibold">Builds</p>
          </div>
          <div className="border rounded-lg p-8 w-full md:w-1/3 text-center shadow-sm hover:shadow-md transition">
            <TbBolt size={36} className="mx-auto text-orange mb-3" />
            <p className="font-semibold">Lightning Fast</p>
            <p className="font-semibold">Performance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
