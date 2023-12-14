"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <header>
        <div className="logo">
          <span>G</span>outam<span>.</span>
        </div>
        <ul className={`${show ? "navlist open" : "navlist"} `}>
          <li>
            <Link href="/" onClick={() => setShow(!show)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setShow(!show)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/service" onClick={() => setShow(!show)}>
              Service
            </Link>
          </li>
          <li>
            <Link href="/skills" onClick={() => setShow(!show)}>
              Skills
            </Link>
          </li>
          <li>
            <Link href="/projects" onClick={() => setShow(!show)}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/certificate" onClick={() => setShow(!show)}>
              Certificate
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setShow(!show)}>
              Contact
            </Link>
          </li>
        </ul>
        <div id="menu_icon" onClick={() => setShow(!show)}>
          <BiMenu className={show ? "menuNone" : ""} />
          <RxCross2 className={show ? "" : "menuNone"} />
        </div>
      </header>
    </>
  );
};

export default Header;
