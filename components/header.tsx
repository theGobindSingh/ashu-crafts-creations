import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [state, setState] = useState<boolean>(false);
  const toggleSetting = () => {
    setState(!state);
  };
  function scrollEvent() {
    setState(false);
    document.removeEventListener("scroll", scrollEvent);
  }
  function clickHandler() {
    if (state) {
      document.removeEventListener("scroll", scrollEvent);
    } else {
      document.addEventListener("scroll", scrollEvent);
    }
    toggleSetting();
  }
  function linkClickHandler() {
    toggleSetting();
    document.removeEventListener("scroll", scrollEvent);
  }
  return (
    <header id="header-container">
      <Link href="/" className="logo">
        AshuCrafts
      </Link>
      <nav className={state ? "active" : "inactive"}>
        <Link href="/" onClick={linkClickHandler}>
          Home
        </Link>
        <Link href="/about" onClick={linkClickHandler}>
          About
        </Link>
        <Link href="/portfolio" onClick={linkClickHandler}>
          Portfolio
        </Link>
        <Link href="/services" onClick={linkClickHandler}>
          Services
        </Link>
        <Link href="/contact-us" onClick={linkClickHandler}>
          Contact Us
        </Link>
      </nav>
      <div
        className={"burger " + (state ? "active" : "inactive")}
        onClick={clickHandler}
      >
        <div className="line _1"></div>
        <div className="line _2"></div>
        <div className="line _3"></div>
      </div>
    </header>
  );
}
