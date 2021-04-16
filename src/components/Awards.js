import React, { Component } from "react";

export class Awards extends Component {
  render() {
    return (
      <div id="awards" className="columns text is-vcentered">
        <div className="column auto">
          <div className="card">
            <div className="card-content">
              <p class="title">Awards</p>
              <div className="content">
                <ul>
                  <li> All-Time Best Fantasy novel </li>
                  <li> All-Time Best Fantasy Novel before 1990</li>
                  <li> Faculty of Science Masters Scholarship</li>
                  <li> The Achiever Award - Physics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Awards;
