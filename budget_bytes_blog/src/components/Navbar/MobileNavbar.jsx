import React, { useState } from "react";
import { navLinks } from "../../assets/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import "./styles.css";

const MobileNavbar = () => {
  const [showUl2, setShowUl2] = useState(false);
  const [showUl3, setShowUl3] = useState(false);
  const [showId, setShowId] = useState(-1);
  const [showId2, setShowId2] = useState(-1);

  return (
    <article className="md:hidden">
      <ul className="ul-1 bg-white/[.9] text-center uppercase font-['Montserrat'] font-semibold tracking-wider">
        {navLinks.map((navLink) => {
          return (
            <li key={navLink.id} className="li-1">
              <a href="/" className="">
                {navLink.title}
              </a>
              {navLink.haveSubLinks ? (
                <>
                  <FontAwesomeIcon
                    // icon={`${showUl2 ? faAngleDown : faAngleRight}`}
                    icon={faAngleRight}
                    className="fa"
                    onClick={() => {
                      setShowId(navLink.id);
                      setShowUl2(!showUl2);
                    }}
                  />
                  <ul
                    className={`ul-2 ${
                      showUl2 && navLink.id === showId ? "block" : "hidden"
                    }`}
                  >
                    {navLink.subLinks.map((sublink) => {
                      return (
                        <li key={sublink.id} className="li-2">
                          <a href={sublink.link}>{sublink.title}</a>
                          {sublink.haveSubLinks ? (
                            <div>
                              <FontAwesomeIcon
                                icon={faAngleDown}
                                className="fa"
                                onClick={() => {
                                  setShowId2(sublink.id);
                                  setShowUl3(!showUl3);
                                }}
                              />
                              <ul
                                className={`ul-3 ${
                                  showUl3 && sublink.id === showId2
                                    ? "block"
                                    : "hidden"
                                }`}
                              >
                                {sublink.subLinks.map((sublink2) => {
                                  return (
                                    <li key={sublink2.id} className="li-3">
                                      <a href={sublink2.link}>
                                        {sublink2.title}
                                      </a>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          ) : (
                            ""
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </>
              ) : (
                ""
              )}
            </li>
          );
        })}
        <li className="li-1">
          <a href="/">My account</a>
        </li>
        <div className="soial-media-icons py-[30px] flex gap-6 justify-center text-[#424242] text-2xl ">
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faPinterestP} />
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faTwitter} />
        </div>
      </ul>
    </article>
  );
};

export default MobileNavbar;
