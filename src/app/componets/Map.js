import React from "react";

const Map = () => {
  return (
    <>
      <section  className="mapDiv" style={{ paddingBottom: "0px" }} >
        <div>
        <div className="main_text">
          <span>You can find me on Google Maps</span>
          <h1>My Location</h1>
        </div>
        <iframe
        data-aos="fade-up" data-aos-duration="2000"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.376084543892!2d77.60779169999999!3d12.9177448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15f0ae8df521%3A0x249cd4e41aecb32c!2sKESHAVA%20PG%20FOR%20Gents!5e0!3m2!1sen!2sin!4v1693756196609!5m2!1sen!2sin"
          width={"100%"}
          height={330}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        </div>
      </section>
    </>
  );
};

export default Map;
