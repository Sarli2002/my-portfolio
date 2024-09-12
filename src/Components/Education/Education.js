import React from "react";
import "./Education.css"
export default function Education() {
  return (
    <div class="Education-section" id="Education">
      <div class="Education-max-width">
        <div class="Education-header">
          <h1> Education</h1>
        </div>
        <ul class="timeline">
          <li>
            <div class="direction-r">
              <div class="flag-wrapper">
                <span class="flag">B.Tech</span>
              </div>
              <div class="desc">
                NETAJI SUBHAS UNIVERSITY OF TECHNOLOGY | 2021 - PRESENT
              </div>
            </div>
          </li>
          <li>
            <div class="direction-l">
              <div class="flag-wrapper">
                <span class="flag">Class XII</span>
              </div>
              <div class="desc">RJSKV | 2019-20</div>
            </div>
          </li>
          <li>
            <div class="direction-r">
              <div class="flag-wrapper">
                <span class="flag">Class X</span>
              </div>
              <div class="desc">RJSKV | 2017-18</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
