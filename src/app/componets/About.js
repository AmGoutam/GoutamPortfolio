import Link from "next/link";
import ProjectsData from "./ProjectsData";

const About = ({years,months}) => {

  return (
    <section className="about">
      <div className="img_about" data-aos="fade-right">
        <img src="banner_img.jpg" alt="about image" />
      </div>
      <div className="about_content" data-aos="fade-left">
        <span>Let me Introduce myself</span>
        <h2>About Me</h2>
        <h3>A story of good</h3>
            <ul className="aboutSection">
              {
                <li>{ProjectsData.aboutData[0].para}...</li>
              }
            </ul>
        <div className="info_about1">
          <p>
          I've <span>{years}.{months}+</span> Years of Experience
          </p>
        </div>
        <div className="btn_box">
          <Link href="/about" className="btn">
            Read more!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
