import React from "react";
import Aboutmeimg from "../../Assets/Aboutme-img.png";
import "./Aboutme.css"
export default function Aboutme() {
  return (
    <div class="Aboutme-section" id="Aboutme">
      <div class="Aboutme-container">
        <div class="Aboutme-row">
          <div class="Aboutme-column l-coumn">
            <div class="heading">
              <h1>About Me</h1>
            </div>
            <p>
              Hello! My name is Sarli. I am final year student, persuing Electronics and
              Communication Engineering with specialization in Artificial
              Intelligence and Machine Learning from Netaji Subhas University Of
              Technology. I live in Faridabad, Haryana.
            </p>
          </div>
          <div class="Aboutme-column r-column">
            <img class="Aboutme-img" src={Aboutmeimg}  alt="aboutme"/>
          </div>
        </div>
      </div>
    </div>
  );
}
