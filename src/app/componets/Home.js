import React from "react";
import {
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoGmail,
  BiLogoYoutube,
  BiLogoWhatsapp,
} from "react-icons/bi";

const Home = ({ years, months }) => {
  return (
    <>
      <section className="home" id="home">
        <video
          src="https://v4.cdnpk.net/videvo_files/video/free/video0466/large_watermarked/_import_614eb638cdee05.43942843_FPpreview.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="home_content">
          <h1>Hi! I'm Goutam Behara</h1>
          <div className="change_text">
            <h3>And I'm a</h3>
            <h3>
              <span className="word">Front End Developer</span>
            </h3>
            <p>
              I've <span> {years}.{months}+ </span>
              Years of Experience
            </p>
          </div>

          <div className="btn_box banner_btnbx">
            <a
              href="Goutam's_Resume.pdf"
              className="btn"
              download={"Goutam's_Resume.pdf"}
            >
              Download Resume
            </a>
            <a
              href="Goutam's_Resume.pdf"
              className="btn"
              download={"Goutam's_Resume.pdf"}
            >
              Hire Me Now!
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
