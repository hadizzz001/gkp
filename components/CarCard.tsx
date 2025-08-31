"use client";

import { TempProps } from "../types";
import { motion } from "framer-motion";

interface CarCardProps {
  temp: TempProps;
}

const CarCard = ({ temp }: CarCardProps) => {
  const { _id, title, price, discount, img, category, description } = temp;
 

  return (
    <a href={`/product?id=${_id}`}>
      <motion.div className="  rounded-md overflow-hidden bg-white">
        {/* Image container - same size for all */}
        <div className="w-full h-[250px] flex justify-center items-center  ">
          <img
            src={img}
            alt={title}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        {/* <div className="px-2 text-center mt-2"> 
          <p className="myP1">{category}</p>
        </div> */}
        {/* Title */}
        <div className="myProduct1 px-2 text-center mt-2">{title}</div>

        {/* Description & Category */}


        {/* Price & Discount */}
        <div className="px-2 flex justify-center gap-3 items-center">
          {/* <span className="line-through text-gray-500 myP2">${price}</span> */}
          <span className="myP2">USD ${discount}</span>
        </div>
      </motion.div>
    </a>
  );
};

export default CarCard;
