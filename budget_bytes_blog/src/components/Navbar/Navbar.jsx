import MenuIcon from "../MenuIcon/MenuIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="py-2 px-4 flex flex-row items-center justify-between">
      <MenuIcon />
      <img
        src={require("../../assets/images/icon.jpg")}
        alt="icon"
        className="w-[35px] h-[30px] cursor-pointer "
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} className="cursor-pointer" />
    </nav>
  );
};

export default Navbar;
