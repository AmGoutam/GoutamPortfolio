import React from "react";
import Map from "./Map";

const Contact = () => {
  return (
    <>
      <Map/>
      <section className="contact">
        <div className="main_text">
          <span>ask me qustions</span>
          <h1>Contact Me</h1>
        </div>

        <form action="https://formspree.io/f/mnqkvdng" data-aos="fade-up" data-aos-duration="2000" method="post">
            <input type="text" name="usename" autoComplete="off" required placeholder="Your Name"/>
            <input type="email" name="email" autoComplete="off" required placeholder="Your Email"/>
            <input type="text" name="address" autoComplete="off" required placeholder="Your Address"/>
            <input type="number" name="number" autoComplete="off" required placeholder="Phone Number"/>
            <textarea id="" cols="30" rows="10" name="message" autoComplete="off" required placeholder="Your Message"></textarea>
            <div className="btn_box fromBtn">
                <button type="submit" className="btn">Send Message</button>
            </div>
        </form>

      </section>
    </>
  );
};

export default Contact;
