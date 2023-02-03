import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Please feel free to contact me for any work or suggestions
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <a href="https://www.linkedin.com/in/lynden-jones-39022a226/" target="_blank">
                  <h4>LinkedIn : 
                    {resumeData.linkedinId}
                  </h4>
                </a>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}