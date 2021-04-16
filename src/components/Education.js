import React, { Component } from "react";

export class Education extends Component {
  render() {
    return (
      <div id="education" className="columns text is-vcentered">
        <div className="column auto">
          <div className="card">
            <div className="card-content">
              <p class="title">Education</p>
              <div className="content">
                <ul>
                  <li>Madrasah Ibtidaiyah</li>
                  <li>SMP Negeri 1 Beringin</li>
                  <li>SMA Ngeri 2 Lubuk Pakam</li>
                  <li>Universitas Sumatera Utara</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
