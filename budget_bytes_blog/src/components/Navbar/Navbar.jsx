import MenuIcon from "../MenuIcon/MenuIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faRss,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav className="">
      <div className="nav-sm md:hidden py-2 px-4 flex flex-row items-center justify-between">
        <MenuIcon />
        <img
          src={require("../../assets/images/icon.jpg")}
          alt="icon"
          className="w-[35px] h-[30px] cursor-pointer "
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="cursor-pointer" />
      </div>

      <div className="nav-md hidden md:flex justify-between items-center">
        <img
          src={require("../../assets/images/logo@2x.jpg")}
          alt="logo"
          className="nav-md-left w-[454px]"
        />
        <div className="nav-md-right flex justify-end items-center w-[calc(100%-460px)]">
          <div className="social-media-icons flex mr-[30px]">
            <FontAwesomeIcon icon={faRss} className="cursor-pointer px-[5px]" />
            <FontAwesomeIcon
              icon={faTwitter}
              className="cursor-pointer px-[5px]"
            />
            <FontAwesomeIcon
              icon={faFacebookF}
              className="cursor-pointer px-[5px]"
            />
            <FontAwesomeIcon
              icon={faPinterestP}
              className="cursor-pointer px-[5px]"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="cursor-pointer px-[5px]"
            />
            <FontAwesomeIcon
              icon={faUser}
              className="cursor-pointer px-[5px]"
            />
          </div>
          <div className="search-box w-[170px] flex items-center justify-evenly border-black border-2 border-solid px-2 py-1">
            <input
              type="text"
              className="search-input w-[120px] italic"
              placeholder="searh reipes"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="cursor-pointer text-[#fbc41b]"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
