"use client";
import { useState } from "react";

const FiexContactForm = () => {
  const [show, setShow] = useState(false);

  const hideDiv = () => {
    setShow(false);
  };

  const ShowDiv = () => {
    setShow(true);
  };

  return (
    <>
      <div className={`FiexContactForm ${show ? "active" : ""}`}>
        <div className="contactHead">
          <h5>contact me</h5>
          <button className="hideBtn" onClick={hideDiv}>
            hide
          </button>
        </div>
        <div>
        <form action="https://formspree.io/f/mnqkvdng" data-aos="fade-up" data-aos-duration="2000" method="post">
            <input type="text" name="usename" autoComplete="off" required placeholder="Your Name"/>
            <input type="email" name="email" autoComplete="off" required placeholder="Your Email"/>
            <input type="text" name="address" autoComplete="off" required placeholder="Your Address"/>
            <input type="number" name="number" autoComplete="off" required placeholder="Phone Number"/>
            <textarea id="" cols="10" rows="2" name="message" autoComplete="off" required placeholder="Your Message"></textarea>
            <div className="btn_box fromBtn">
                <button type="submit" className="btn">Send Message</button>
            </div>
        </form>
        </div>
      </div>
      <div className="contactusBtn btn_box">
        <button
          className={`btn btnBackClr ${show ? "active" : ""}`}
          onClick={ShowDiv}
        >
          contact me
        </button>
      </div>
    </>
  );
};

export default FiexContactForm;
