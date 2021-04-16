import React, { Component } from "react";

class Skill extends Component {
  render() {
    return (
      <div id="skill" className="columns text is-vcentered">
        <div className="column auto">
          <div className="card">
            <div className="card-content">
              <p class="title">Skill</p>
              <div className="content">
                <ul>
                  <li>
                    {" "}
                    Business Process Improvement - history of successful
                    innovations leading to cost saving
                  </li>
                  <li>
                    Vendor Management - proven track record of managing vendors
                    in projects with budgets of over $1'0000
                  </li>
                  <li>
                    {" "}
                    Project Scheduling - over 90% of project led were finished
                    in due time
                  </li>
                  <li>
                    {" "}
                    Sales Analysis - background in IT Sales with deep
                    understanding of negotiating contracts
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skill;
