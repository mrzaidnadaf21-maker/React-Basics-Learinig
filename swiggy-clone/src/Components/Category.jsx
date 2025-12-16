import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export const Category = () => {
  const [category, setCategory] = useState([]);

  const fetchCategory = async () => {
    const response = await fetch(
      "https://drive.google.com/uc?export=download&id=1ZG6tHNLhjZ6y4fSQ2Nm4vS07_UrvHY8V"
    );
    const data = await response.json();
    setCategory(data);
    // console.log(data);
  };

  useEffect(() => {
    fetchCategory;

    return () => {};
  }, []);

  return (
    <div className="max-w-[1000px] mx-auto ">
      <div className="flex my-1 items-center justify-between">
        <div className="text-[25px] font-bold">What's on your mind?</div>
        <div className="flex">
          <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            <FaArrowLeft />
          </div>
          <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 ">
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        {category.map((cat, index) => (
          <div key={index}>
            <img
              src={`https://drive.google.com/uc?export=download&id=${cat.image}`}
              alt={cat.name}
              className="w-32 h-32 object-cover"
            />
            <p className="text-center mt-2">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Category;
