import "./styles.css";
import { navLinks } from "../../assets/constants";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Banner = () => {
  return (
    <section className="banner border-y-2 border-black">
      <img
        src={require("../../assets/images/logo@2x.jpg")}
        alt="logo"
        className="p-4 flex justify-center items-center md:hidden"
      />

      <div className="hidden md:block w-full">
        <ul className="nav-ul-1 flex inline-block item-center font-['Montserrat'] font-bold uppercase justify-center">
          {navLinks.map((navLink, index) => {
            return (
              <li key={navLink.id}>
                <a href={navLink.link}>{navLink.title}</a>
                {navLink.haveSubLinks ? (
                  <ul className="nav-ul-2">
                    {navLink.subLinks.map((sublink, index) => {
                      return (
                        <li key={sublink.id}>
                          <a href={sublink.link}>{sublink.title}</a>
                          {sublink.subLinks ? (
                            <FontAwesomeIcon
                              icon={faAngleRight}
                              className="faIcon"
                            />
                          ) : (
                            ""
                          )}
                          {sublink.haveSubLinks ? (
                            <ul className="nav-ul-3">
                              {sublink.subLinks.map((subs, index) => {
                                return (
                                  <li key={subs.id}>
                                    <a href={subs.link}>{subs.title}</a>
                                  </li>
                                );
                              })}
                            </ul>
                          ) : (
                            ""
                          )}
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  ""
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Banner;
