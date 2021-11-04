import microsoftLogo from "./assets/shared/desktop/microsoft.svg";
import nvidiaLogo from "./assets/shared/desktop/nvidia.svg"
import oracleLogo from "./assets/shared/desktop/oracle.svg"
import teslaLogo from "./assets/shared/desktop/tesla.svg"
import hewlettLogo from "./assets/shared/desktop/hewlett-packard.svg"
import googleLogo from "./assets/shared/desktop/google.svg"

import "./Contact.css";

export function Contact() {
    return (
        <div className="contact-page page-margin-x">
            <div className="page-heading">Submit a help request and we’ll get in touch shortly.</div>
            <div>
                <div className="contact-page__form-wrapper">
                    <form className="contact-form" action="">
                        <input className="text-input contact-form__name-field" type="text" id="name" name="name" placeholder="Name" autocomplete="off" ></input>
                        <input className="text-input contact-form__email-field" type="text" id="email" name="email" placeholder="Email Address" autocomplete="off"></input>
                        <input className="text-input contact-form__company-name-field" type="text" id="compname" name="compname" placeholder="Company Name" autocomplete="off"></input>
                        <input className="text-input contact-form__title-field" type="text" id="title" name="title" placeholder="Title" autocomplete="off"></input>
                        <textarea className="text-input contact-form__message" name="message" id="message" cols="30" rows="3" placeholder="Message" autocomplete="off"></textarea>
                        <label className="contact-form__subscribe-label">Stay up-to-date with company announcements and updates to our API
                            <input className="contact-form__subscribe-input" type="checkbox" id="subscribe" name="subscribe"
                                unchecked></input>
                            <span className="contact-form__subscribe-span"></span>
                        </label>

                        <input className="btn btn--hollow-blue contact-form__submit-btn" type="submit" value="Submit"></input>
                    </form>
                </div>
                <div className="business-allies-contacts">
                    <div className="business-allies-contacts__heading">Join the thousands of innovators already building with us</div>
                    <div className="logos logos--contacts">
                        <div><img src={teslaLogo} alt="l" /></div>
                        <div><img src={oracleLogo} alt="l" /></div>
                        <div><img src={microsoftLogo} alt="l" /></div>
                        <div><img src={nvidiaLogo} alt="l" /></div>
                        <div><img src={hewlettLogo} alt="l" /></div>
                        <div><img src={googleLogo} alt="l" /></div>
                    </div>
                </div>
            </div>
            <div className="email-section page-margin-x">
                <div className="email-section__heading">Ready to start?</div>
            </div>
        </div>
    )
}

export default Contact;