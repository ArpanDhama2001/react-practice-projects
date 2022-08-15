import React from "react";

const Footer = () => {
  return (
    <section id="footer" className="md:grid grid-cols-2 grid-rows-1 gap-6 mt-6">
      <div className="footer-top mt-[40px] md:mr-[10%] pl-[67px]">
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
        <div className="connect text-center">
          <h2 className="font-bold uppercase font-['Montserrat'] mb-2">
            connect
          </h2>
          <h5>Facebook</h5>
          <h5>Pinterest</h5>
          <h5>Instagram</h5>
          <h5>Twitter</h5>
          <h5>YouTube</h5>
        </div>
        <div className="browse text-center">
          <h2 className="font-bold uppercase font-['Montserrat'] mb-2">
            browse
          </h2>
          <h5>Recipes</h5>
          <h5>How-To</h5>
          <h5>Kitchen Basics</h5>
          <h5>Pantry Staples</h5>
          <h5>Extra Bytes</h5>
        </div>
        <div className="information text-center font-">
          <h2 className="font-bold uppercase font-['Montserrat'] mb-2">
            information
          </h2>
          <h5>Contact</h5>
          <h5>FAQ</h5>
          <h5>Terms & Conditions</h5>
          <h5>Pricavy Policy</h5>
          <h5>Accessibility</h5>
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
