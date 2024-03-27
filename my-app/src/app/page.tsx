import React from "react";
import NewProducts from "@/components/NewProducts";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";
const page = () => {
  return (
    <div>
      <Hero />
      <NewProducts />
      <Testimonial/>
    </div>
  );
};

export default page;
