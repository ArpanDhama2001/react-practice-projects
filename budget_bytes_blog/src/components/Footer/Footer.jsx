import React from "react";

const Footer = () => {
  return (
    <section
      id="footer"
      className="md:grid grid-cols-2 grid-rows-1 gap-6 mt-6 pt-4 border-t-[1px] "
    >
      <div className="footer-top pt-[24px] md:mr-[10%] pl-[67px]">
        <img
          src={require("../../assets/images/logo@2x.jpg")}
          alt="logo"
          title="logo"
          className="w-[315px] mx-auto md:mx-0 md:ml-[-67px]"
        />
        <p className="text-[18px] text-center md:text-left">
          <span className="font-bold">SMALL BUDGET? NO PROBLEM!</span> Cooking
          on a budget shouldn't mean canned beans and ramen noodles night after
          night. Welcome to the world of delicious recipes designed for small
          budgets.
        </p>
      </div>
      <div className="footer-bottom grid grid-rows-1 grid-cols-3 p-6 gap-4">
        <div className="connect text-center md:text-left">
          <h2 className="font-bold uppercase font-['Montserrat'] mb-2">
            connect
          </h2>
          <a href="/" className="block">
            Facebook
          </a>
          <a href="/" className="block">
            Pinterest
          </a>
          <a href="/" className="block">
            Instagram
          </a>
          <a href="/" className="block">
            Twitter
          </a>
          <a href="/" className="block">
            YouTube
          </a>
        </div>
        <div className="browse text-center md:text-left">
          <h2 className="font-bold uppercase font-['Montserrat'] mb-2">
            browse
          </h2>
          <a href="/" className="block">
            Recipes
          </a>
          <a href="/" className="block">
            How-To
          </a>
          <a href="/" className="block">
            Kitchen Basics
          </a>
          <a href="/" className="block">
            Pantry Staples
          </a>
          <a href="/" className="block">
            Extra Bytes
          </a>
        </div>
        <div className="information text-center md:text-left">
          <h2 className="font-bold uppercase font-['Montserrat'] mb-2">
            information
          </h2>
          <a href="/" className="block">
            Contact
          </a>
          <a href="/" className="block">
            FAQ
          </a>
          <a href="/" className="block">
            Terms & Conditions
          </a>
          <a href="/" className="block">
            Pricavy Policy
          </a>
          <a href="/" className="block">
            Accessibility
          </a>
        </div>
      </div>

      <div className="my-[30px] credit text-[14px] font-light text-[#B7B7B7] text-center col-span-2">
        ©2022 Budget Bytes. Made by{" "}
        <a href="/" className="cursor-pointer">
          Arpan
        </a>
        .
      </div>
    </section>
  );
};

export default Footer;
