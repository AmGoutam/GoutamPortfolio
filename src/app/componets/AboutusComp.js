"use client";
import Link from "next/link";
import React, { useEffect,useState } from "react";
import ProjectsData from "./ProjectsData";
import Image from "next/image";
const AboutusComp = () => {


  
  const [Years, setYears] = useState("")
  const [Months, setMonths] = useState("")
  
  
    function calculateAgeInYearsAndMonths(dateString) {
      const currentDate = new Date();
      const inputDate = new Date(dateString);
    
      // Calculate the difference in years and months
      let yearsDiff = currentDate.getFullYear() - inputDate.getFullYear();
      let monthsDiff = currentDate.getMonth() - inputDate.getMonth();
    
      // Adjust for negative months difference
      if (monthsDiff < 0) {
        yearsDiff--;
        monthsDiff += 12;
      }
    
      return {
        years: yearsDiff,
        months: monthsDiff,
      };
    }
    
    const inputDate = "2022-04-10";
    const age = calculateAgeInYearsAndMonths(inputDate);
  
  
    useEffect(() => {
      setYears(age.years);
      setMonths(age.months)
    }, [Years,Months])
    
  
  


  return (
    <>
      <section className="about">
        <div className="img_about" data-aos="fade-right">
          <Image src="/banner_img.jpg" alt="about image" width={500} height={500} loading="lazy"/>
        </div>
        <div className="about_content" data-aos="fade-left">
          <span>Let me Introduce myself</span>
          <h2>About Me</h2>
          <h3>A story of good</h3>
            <ul className="aboutSection">
              {
                ProjectsData.aboutData.map((curElm,index) => {
                  return <li key={index}>{curElm.para}</li>
                })
              }
            </ul>
          <div className="info_about1">
            <p>
            I've  <span>{Years}.{Months}+</span> Years of Experience
            </p>
          </div>
          <div className="btn_box">
          <Link href="/" className="btn">
            Back to Home
          </Link>
        </div>
        </div>
      </section>
    </>
  );
};

export default AboutusComp;
