import React, { useState } from "react";
import "./styles.css";

const MenuIcon = () => {
  const [open, setOpen] = useState(false);

  const handleChange = () => {
    setOpen(!open);
  };

  return (
    <div
      className={open === true ? "change menu" : "menu"}
      onClick={handleChange}
    >
      <span className="line-1 "></span>
      <span className="line-2 "></span>
      <span className="line-3 "></span>
    </div>
  );
};

export default MenuIcon;
