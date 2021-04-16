import React, { Component } from "react";

export class Experience extends Component {
  render() {
    return (
      <div id="experience" className="columns text is-vcentered">
        <div className="column auto">
          <div className="card">
            <div className="card-content">
              <p class="title">Experience</p>
              <div className="content">
                <p>
                  1900 &nbsp; &nbsp; &nbsp; &nbsp; Alice in Wonderland-The Circa
                  (1900's) Silent Film{" "}
                </p>
                <p>
                  1933 &nbsp; &nbsp; &nbsp; &nbsp; Alice in Wonderland 1933
                  version
                </p>
                <p>
                  {" "}
                  1951 &nbsp; &nbsp; &nbsp; &nbsp; Wait Disney brings Lewis
                  Carroll's fantasy story to life in this well done animated
                  classic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
