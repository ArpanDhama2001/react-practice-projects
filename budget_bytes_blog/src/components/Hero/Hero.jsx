import { data } from "../../assets/data";
import "./styles.css";

const Hero = () => (
  <section className="bg-[#2a2a2a]">
    <img src={require("../../assets/images/Hero.jpg")} alt="Homemade Granola" />
    <div className="text-white py-3 px-6">
      <div className="hero-head mb-3 font-['Montserrat']">
        <h2 className="uppercase font-bold text-2xl tracking-widest cursor-pointer hover:text-[#fbc41b] transition-all duration-300">
          Homemade Granola
        </h2>
        <p className="text-[10px] text-[#949494] uppercase font-bold">
          ${data[0].price.recipe} recipe / ${data[0].price.serving} serving
        </p>
      </div>
      <p className="mb-3 text-[18px]">{data[0].description}</p>
      <p className="uppercase text-lg font-['Montserrat'] cursor-pointer">
        Read <span className="more">more ...</span>
      </p>
    </div>
  </section>
);

export default Hero;
