"use clint";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import ProjectsData from "./ProjectsData";
import Image from "next/image";
const Projects = () => {
  return (
    <>
      <section className="portfolio">
        <div className="main_text">
          <span>What I will do for you</span>
          <h1>Latest Project</h1>
        </div>
        <div className="portfolio_gallery">
          {ProjectsData.projects.map((curElm, index) => {
            return (
              <div className="port_box" data-aos="zoom-in" data-aos-duration={curElm.duration} key={index}>
                <div className="prot_image">
                  <Image src={`/${curElm.projectimg}`} alt="portfolio image" width={200} height={200} loading="lazy" />
                </div>
                <div className="prot_content">
                  <h3>{curElm.projectName}</h3>
                  <p>
                    {curElm.description}
                  </p>
                  <a href={curElm.projectLinks} target="_blank">
                    <BiLinkExternal />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;
