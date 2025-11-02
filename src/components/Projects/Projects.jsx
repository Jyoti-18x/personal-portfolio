import React from "react";
import Card from "../Card/Card";
import port from "../../assets/portfolio.png";
import fw from "../../assets/Food.png";
import weather from "../../assets/weather.png";
import calc from "../../assets/calc1.png";
import ise from "../../assets/ise.png";
import hb from "../../assets/Hotel.png"
import ai from "../../assets/Aiprojectpic.png"
import "./Projects.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
function Projects() {
  const projectsData = [
      {
      title:"AI POWERED ECOMMERCE WEBSITE",
      image: ai,
      liveurl:"https://onecart-frontend-dom2.onrender.com",

    },
    {
      title: "PERSONAL PORTFOLIO",
      image: port,
      liveurl: "https://jytiiii.netlify.app/",
    },
      {
      title:"HOTEL-BOOKING WEBSITE",
      image: hb,
      liveurl:"https://hotelbookingssamhbdj.netlify.app/"
    },
    {
      title: "FOOD DELIVERY WEBSITE",
      image: fw,
      liveurl: "https://jyotisfooddel.netlify.app/",
    },
    {
      title: "WEATHER APP",
      image: weather,
      liveurl: "https://jyoti-18x.github.io/weather-App/",
    },
    {
      title: "SIMPLE CALCULATOR",
      image: calc,
      liveurl: "https://jyoti-18x.github.io/Calculator/",
    },
    {
      title: "IMAGE SEARCH ENGINE",
      image: ise,
      liveurl: "https://jyoti-18x.github.io/Image-search-engine/",
    },
  
  
  ];
  const handleLivePreview = (url, title) => {
    if (url && url.length > 0) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      alert(`Live preview not available for ${title} yet!`);
    }
  };
  useGSAP(() => {
    gsap.from("#para", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: "#para",
        scroll: "body",
        scrub: 2,

        start: "top 80%",
        end: "top 30%",
      },
    });
    gsap.from(".slider", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".slider",
        scroll: "body",
        scrub: 2,

        start: "top 80%",
        end: "top 30%",
      },
    });
  });
  return (
    <div id="projects">
      <h1 id="para">1+ YEARS EXPERIENCED IN PROJECTS</h1>
      <div className="slider">
        {projectsData.map((project, index) => (
          <div key={index} className="project-item">
            <Card title={project.title} image={project.image} />
            <button
              className="project-preview-btn"
              onClick={() => handleLivePreview(project.liveurl, project.title)}
            >
              🔗 Live Preview
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
