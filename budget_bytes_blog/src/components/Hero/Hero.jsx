import { data } from "../../assets/data";
import "./styles.css";

const Hero = () => (
  <section id="hero" className="bg-[#2a2a2a] flex md:flex-row flex-col">
    <img
      src={require("../../assets/images/Hero.jpg")}
      alt="Homemade Granola"
      className="md:w-[50%]"
    />
    <div className="md:w-[50%] py-[1.5rem] px-[4%] ">
      <div className="hero-body text-white md:max-w-[500px] flex justify-center items-start flex-col h-[100%]">
        <div className="inline-block bg-[#fbc41b] text-white py-[2px] px-[10px]">
          <h2 className="text-[14px] font-semibold font-['Montserrat'] uppercase">
            Latest & greatest
          </h2>
        </div>
        <div className="hero-title font-['Montserrat']">
          <h2 className="uppercase font-bold text-[4vw] md:text-[22px] tracking-widest cursor-pointer hover:text-[#fbc41b] transition-all duration-300">
            Homemade Granola
          </h2>
          <p className="text-[10px] text-[#949494] uppercase font-bold">
            ${data[0].price.recipe} recipe / ${data[0].price.serving} serving
          </p>
        </div>
        <p className="my-[12px] md:my-[25px] text-[18px]">
          {data[0].description}
        </p>
        <p className="uppercase text-lg font-['Montserrat'] cursor-pointer">
          Read <span className="more">more ...</span>
        </p>
      </div>
    </div>
  </section>
);

export default Hero;
