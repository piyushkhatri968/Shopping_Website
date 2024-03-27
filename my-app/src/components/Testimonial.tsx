import Image from "next/image";
import React from "react";
import img1 from "../assets/pictures/person-image.png";
import img2 from "../assets/pictures/review-image.png";
import img3 from "../assets/pictures/quotes.png";

const Testimonial = () => {
  return (
    <div className="px-14">
      <div className="container pt-14 pb-14 grid-cols-2">
        <h2 className="font-medium text-2xl pb-4">Testimonial</h2>
        <div className="grid lg:grid-cols-[300px,1fr] gap-4">
          <div className="border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0">
            <div className="flex text-center flex-col items-center gap-1">
              <Image
                src={img1}
                alt="person"
                width={80}
                height={80}
                className="rounded-full inline-block"
              />
              <h2 className="text-gray-500 font-black text-[20px]">Elsa Doe</h2>
              <p>CEO & Founder Invision</p>
              <Image
                src={img3}
                width={30}
                height={30}
                alt="quote"
                className="inline-block py-2"
              />
              <p className="max-w-[200px] text-gray-500">
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor
                sit amet.
              </p>
            </div>
          </div>
          <div className="bg-red-600 bg-[url('../assets/pictures/review-image.png')] bg-cover h-[500px] rounded-2xl grid place-items-center">
            <div className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8  px-2 grid place-items-center gap-3">
              <button className="bg-black text-white p-2 rounded-xl font-bold">
                25% Percent
              </button>
              <h2 className="font-extrabold text-2xl text-[#272727]">
                Summer Collection
              </h2>
              <p className="flex gap-2 text-gray-500 text-[20px]">
                Starting @ $20
                <b>Shop Now</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
