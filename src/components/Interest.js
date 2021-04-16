import React, { Component } from "react";

export class Interest extends Component {
  render() {
    return (
      <div id="interest" className="columns text is-vcentered">
        <div className="column auto">
          <div className="card">
            <div className="card-content">
              <p class="title">Interest</p>
              <div className="content">
                <ul>
                  <li>Music</li>
                  <li>The Internet</li>
                  <li>Media Productions</li>
                  <li>Traveling Experiences</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Interest;
