import React from "react";
import myimage from "../../Assets/my-image.png";
import "./Header.css";
export default function Header() {
  return (
    <div id="header" class="header">
      <div class="header-max-width">
        <div class="header-content">
          <div class="text-1">
            Hello, <span>I am</span>
          </div>
          <div class="text-2">Sarli</div>
          <div class="text-3">And I'm a Full-stack Developer</div>
          <a href="#Aboutme" class="btn">
            About me
          </a>
          <div class="social-media">
            <p> Check out my </p>
            <a href="https://www.linkedin.com/in/sarli-sengar-5093a322a/"   target="_blank"  class="social-btn">
              <i class="fa-brands fa-linkedin-in "></i>
            </a>
            <a href="https://www.instagram.com/ss_14723617/?hl=en"   target="_blank"  class="social-btn">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://github.com/Sarli2002"  target="_blank" class="social-btn">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div class="right">
          <img class="header-image" src={myimage}  alt="profile-pic"/>
        </div>
      </div>
    </div>
  );
}
