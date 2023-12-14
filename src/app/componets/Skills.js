import React from "react";

const Skills = () => {
  return (
    <>
      <section className="skills" id="skills">
        <div className="main_text">
          <span>Technical and Professional</span>
          <h1>My Skills</h1>
        </div>

        <div className="skill_main">
          <div
            className="skill_left"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h3>Technical Skills</h3>
            <div className="skill_bar">
              <div className="info">
                <p>html</p>
                <p>77%</p>
              </div>
              <div className="bar">
                <span className="html"></span>
              </div>
            </div>
            <div className="skill_bar">
              <div className="info">
                <p>css</p>
                <p>72%</p>
              </div>
              <div className="bar">
                <span className="css"></span>
              </div>
            </div>
            <div className="skill_bar">
              <div className="info">
                <p>javascript</p>
                <p>64%</p>
              </div>
              <div className="bar">
                <span className="javascript"></span>
              </div>
            </div>
            <div className="skill_bar">
              <div className="info">
                <p>react</p>
                <p>63%</p>
              </div>
              <div className="bar">
                <span className="react"></span>
              </div>
            </div>
            <div className="skill_bar">
              <div className="info">
                <p>next</p>
                <p>40%</p>
              </div>
              <div className="bar">
                <span className="react"></span>
              </div>
            </div>
          </div>
          <div
            className="skill_right"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <h3>Professional Skills</h3>
            <div className="wrap">
              <div className="progress-radial progress-50">
                <span className="overlay">50%</span>
                <p>Team Work</p>
              </div>

              <div className="progress-radial progress-60">
                <span className="overlay">60%</span>
                <p>Creativity</p>
              </div>
            </div>
            <div className="wrap">
              <div className="progress-radial progress-75">
                <span className="overlay">75%</span>
                <p>Patience</p>
              </div>

              <div className="progress-radial progress-60">
                <span className="overlay">60%</span>
                <p>Communication</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
