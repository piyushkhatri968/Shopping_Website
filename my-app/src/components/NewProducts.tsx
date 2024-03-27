import React from "react";
import img1 from "../assets/pictures/card-image-1.png";
import img2 from "../assets/pictures/card-image-2.png";
import img3 from "../assets/pictures/card-image-3.png";
import img4 from "../assets/pictures/card-image-4.png";
import img5 from "../assets/pictures/card-image-5.png";
import img6 from "../assets/pictures/card-image-6.png";
import img7 from "../assets/pictures/card-image-7.png";

import ProductCard from "./ProductCard";

let card = [
  {
    img: img1,
    title: "JACKET",
    desc: "MEN Yarn Fleece Full-Zip Jacket",
    rating: 4,
    price: "45",
  },
  {
    img: img2,
    title: "SKIRT",
    desc: "Black Floral Wrap Midi Skirt",
    rating: 5,
    price: "55",
  },
  {
    img: img3,
    title: "PARTY WEAR",
    desc: "Women's Party Wear Shoes",
    rating: 3,
    price: "25",
  },
  {
    img: img4,
    title: "SHIRT",
    desc: "Pure Garment Dyed Cotton Shirt",
    rating: 4,
    price: "45",
  },
  {
    img: img5,
    title: "SPORTS",
    desc: "Trekking & Running Shoes - Black",
    rating: 3,
    price: "58",
  },
  {
    img: img6,
    title: "WATCHES",
    desc: "Smart Watches Vital Plus",
    rating: 4,
    price: "100",
  },
  {
    img: img7,
    title: "WATCHES",
    desc: "Pocket Watch Leather Pouch",
    rating: 4,
    price: "120",
  },
];

const NewProducts = () => {
  return (
    <div className="mx-12">
      <div className="container pt-14">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>

        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {card.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
