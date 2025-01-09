import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        Major: {item.Major} <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                        <br />
                        Minor: {item.Minor}
                        <br />
                        GPA: {item.GPA}
                      </p>
                      <ul>
                        {item.Achievements &&
                          item.Achievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                          ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.work &&
              resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfLeaving} {item.YearOfLeaving}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row research">
          <div className="three columns header-col">
            <h1>
              <span>Research</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.research &&
              resumeData.research.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.ProjectName}</h3>
                      <p className="info">
                        {item.Supervisor}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.FromDate} - {item.ToDate}
                        </em>
                      </p>
                      <p>{item.Description}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{resumeData.skillsDescription}</p>

            <div className="bars">
              <ul className="skills">
                {resumeData.skills &&
                  resumeData.skills.map((item) => {
                    return (
                      <li>
                        <span
                          className={`bar-expand ${item.skillname.toLowerCase()}`}
                        />
                        <em>{item.skillname}</em>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
