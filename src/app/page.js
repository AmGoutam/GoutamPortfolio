"use client";
import Home from "./componets/Home";
import About from "./componets/About";
import Services from "./componets/Services";
import Skills from "./componets/Skills";
import Projects from "./componets/Projects";
import Contact from "./componets/Contact";
import React, { useEffect,useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SwiperComp from "./componets/SwiperComp";
import AutoSlider from "./componets/AutoSlider";
const page = () => {
  useEffect(() => {
    AOS.init();
    // console.clear()
  }, []);



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
      <Home years={Years} months={Months}/>
      <About  years={Years} months={Months}/>
      <Services />
      <Skills />
      <Projects />
      <AutoSlider />
      <SwiperComp />
      <Contact />
    </>
  );
};

export default page;
