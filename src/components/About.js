import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export class About extends Component {
  render() {
    return (
      <div id="about" className="columns text is-vcentered">
        <div className="column auto">
          <div className="card">
            <div className="card-content">
              <p className="title" text-align="justify">
                {" "}
                Wantika Wulandari
              </p>
              <p> +6282233449404 </p>

              <p>
                {" "}
                Strong academic and technical knowledge across Information
                Technology,Software engineering, Programming, Database, Data
                Mining and Artificial Intelligence (AI). Recognized as a
                passionate Al learner and researcher coupled with multi-tasking
                abilities. Love to work in a team and friendly environment and
                can be counted upon in completing the task within set timeframe.{" "}
              </p>
              <p>
                &nbsp; <FontAwesomeIcon icon={faGithub} /> &nbsp; &nbsp; &nbsp;
                &nbsp; <FontAwesomeIcon icon={faLinkedin} />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
