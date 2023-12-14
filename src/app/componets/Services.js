import Link from "next/link";
import React from "react";
import { BiLayer, BiDesktop, BiCodeAlt } from "react-icons/bi";

const Services = () => {
  return (
    <>
      <section className="services">
        <div className="main_text">
          <span>what i will do for you</span>
          <h1>Our Service</h1>
        </div>
        <div className="section_service">
          <div
            className="service_box"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <BiLayer />
            <h3>Frontend Developer</h3>
            <p>
              I've been a frontend developer for 1.6 years, using HTML, CSS,
              JavaScript, React, Next Js, Bootstrap, and MUI. I also know PHP,
              MySQLi, and have basic Node.js skills.
            </p>
            <div className="btn_box service_btn">
              <Link href="/about" className="btn">
                Read more!
              </Link>
            </div>
          </div>
          <div
            className="service_box"
            data-aos="flip-left"
            data-aos-duration="2000"
          >
            <BiCodeAlt />
            <h3>React Developer</h3>
            <p>
              I've been a frontend developer for 1.6 years, using HTML, CSS,
              JavaScript, React, Next Js, Bootstrap, and MUI. I also know PHP,
              MySQLi, and have basic Node.js skills.
            </p>
            <div className="btn_box service_btn">
              <Link href="/about" className="btn">
                Read more!
              </Link>
            </div>
          </div>
          <div
            className="service_box"
            data-aos="flip-left"
            data-aos-duration="3000"
          >
            <BiDesktop />
            <h3>Next Js Developer</h3>
            <p>
              I've been a frontend developer for 1.6 years, using HTML, CSS,
              JavaScript, React, Next Js, Bootstrap, and MUI. I also know PHP,
              MySQLi, and have basic Node.js skills.
            </p>
            <div className="btn_box service_btn">
              <Link href="/about" className="btn">
                Read more!
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
