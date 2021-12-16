import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Ilmo extends Component {
  render() {
    return (
      <section id="ilmo">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <h1>Ilmoittautuminen</h1>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            {false ? (
              <div>
                <form
                  action=""
                  method="post"
                  id="contactForm"
                  name="contactForm"
                >
                  <fieldset>
                    <div>
                      <label htmlFor="contactName">
                        Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        defaultValue=""
                        size="35"
                        id="contactName"
                        name="contactName"
                        onChange={this.handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="contactEmail">
                        Email <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        defaultValue=""
                        size="35"
                        id="contactEmail"
                        name="contactEmail"
                        onChange={this.handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="contactSubject">Subject</label>
                      <input
                        type="text"
                        defaultValue=""
                        size="35"
                        id="contactSubject"
                        name="contactSubject"
                        onChange={this.handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="contactMessage">
                        Message <span className="required">*</span>
                      </label>
                      <textarea
                        cols="50"
                        rows="15"
                        id="contactMessage"
                        name="contactMessage"
                      ></textarea>
                    </div>

                    <div>
                      <button className="submit">Submit</button>
                      <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                      </span>
                    </div>
                  </fieldset>
                </form>

                <div id="message-warning"> Error boy</div>
                <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank
                  you!
                  <br />
                </div>
              </div>
            ) : (
              <div>Ilmo ei ole auki vielä</div>
            )}
          </Slide>
        </div>
      </section>
    );
  }
}

export default Ilmo;
