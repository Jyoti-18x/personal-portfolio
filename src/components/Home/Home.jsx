import React from "react";
import "./Home.css";
import man from "../../assets/Jyoti.jpg";
import { ReactTyped } from "react-typed";
import { useGSAP } from "@gsap/react";
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import newcv from "../../assets/newcv.pdf"
import gsap from "gsap";
function Home() {
  const socialLinks = {
    github: "https://github.com/Jyoti-18x",
    linkedin: "https://www.linkedin.com/in/jyotiaranjan",
    instagram: "https://www.instagram.com/jyoti.bastia.5?igsh=c2RqbTJzb3VoaGt1",
  };
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = newcv // Update this path to your CV file
    link.download = 'JyotiRanjan_Resume.pdf'; // This will be the downloaded filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  useGSAP(() => {
    let tl1 = gsap.timeline();
    tl1.from(".line1", {
      y: 80,
      duration: 1,
      opacity: 0,
    });
    tl1.from(".line2", {
      y: 80,
      duration: 1,
      opacity: 0,
    });
    tl1.from(".line3", {
      y: 80,
      duration: 1,
      opacity: 0,
    });
    gsap.from(".righthome img", {
      x: 200,
      duration: 1,
      opacity: 0,
    });
  });
  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">JYOTI RANJAN</div>
          <div className="line3">
            <ReactTyped
              strings={["WEB DEVELOPER", "SOFTWARE DEVELOPER", "CODER"]}
              typespeed={100}
              backSpeed={50}
              loop={true}
              cursor="|"
            />
          </div>
          <button onClick={handleDownloadCV}>HIRE ME</button>
            <div className="social-icons">
            <a 
              href={socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon github"
            >
              <FaGithub />
            </a>
            <a 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon linkedin"
            >
              <FaLinkedin />
            </a>
            <a 
              href={socialLinks.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon instagram"
            >
              <FaInstagram />
            </a>
          </div>

        </div>
      </div>
      <div className="righthome">
        <img src={man} alt="" />
      </div>
    </div>
  );
}

export default Home;
