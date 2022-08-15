import React from "react";

const Recipes = ({ image, name, description, rPrice, sPrice }) => {
  return (
    <div>
      <img
        // src={require("../../assets/images/Hero.jpg")}
        src={require(`../../assets/images/${image}`)}
        alt={name}
        className=""
      />
      <div className="py-[1.5rem] px-[4%] ">
        <div className="hero-body md:max-w-[500px] flex justify-center items-start flex-col h-[100%]">
          <div className="hero-title font-['Montserrat']">
            <h2 className="uppercase font-bold text-[18px] md:text-[22px] tracking-widest cursor-pointer hover:text-[#fbc41b] transition-all duration-300">
              {name}
            </h2>
            <p className="text-[10px] text-[#fbc41b] uppercase font-bold tracking-wide">
              ${rPrice} recipe / ${sPrice} serving
            </p>
          </div>
          <p className="my-[12px] md:my-[25px] text-[18px]">{description}</p>
          <p className="uppercase text-lg font-['Montserrat'] font-bold cursor-pointer">
            Read <span className="text-black">more ...</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
