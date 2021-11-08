import microsoftLogo from "./assets/shared/desktop/microsoft.svg";
import nvidiaLogo from "./assets/shared/desktop/nvidia.svg"
import oracleLogo from "./assets/shared/desktop/oracle.svg"
import teslaLogo from "./assets/shared/desktop/tesla.svg"
import hewlettLogo from "./assets/shared/desktop/hewlett-packard.svg"
import googleLogo from "./assets/shared/desktop/google.svg"

import "./Contact.css";

import react from "react";

import validateEmail from "./utils/validateEmail";

export class Contact extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                "email": "",
                "name": "",
                "compname": "",
                "title": "",
                "message": "",

            },
            validation: {
                // -2 is invalid email
                // -1 is empty 
                // 1 is ok 
                "email": 0,
                "name": 0,
                "compname": 0,
                "title": 0,
                "message": 0
            },
        }

        this.emailRef = react.createRef();
        this.emailWrapperRef = react.createRef();
        this.nameRef = react.createRef();
        this.nameWrapperRef = react.createRef();
        this.compnameRef = react.createRef();
        this.compnameWrapperRef = react.createRef();
        this.titleRef = react.createRef();
        this.titleWrapperRef = react.createRef();

        this.inputRefs = {
            "name" : {
                "input": this.nameRef,
                "wrapper": this.nameWrapperRef
            },
            "email" : {
                "input": this.emailRef,
                "wrapper": this.emailWrapperRef
            },
            "compname" : {
                "input": this.compnameRef,
                "wrapper": this.compnameWrapperRef
            },
            "title" : {
                "input": this.titleRef,
                "wrapper": this.titleWrapperRef
            }
        }
        this.errorInputClass = "text-input--error";
        this.errorEmptyMessageWrapperClass = "contact-form__text-input-wrapper--empty-field";
        this.errorInvalidEmailMessageWrapperClass = "contact-form__text-input-wrapper--invalid-email";

        this.contactSubmit = this.contactSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    contactSubmit(e) {
        e.preventDefault();

        const email = "email";
        const name = "name";
        const compname = "compname";
        const title = "title";
        const message = "message";

        const fields = this.state.fields;
        const validation = this.state.validation;

        validation[name] = fields[name] ? 1 : -1;
        validation[compname] = fields[compname] ? 1 : -1;
        validation[title] = fields[title] ? 1 : -1;
        validation[email] = fields[email] ? 1 : -1;
        validation[message] = fields[message] ? 0 : 0;

        if (validation[email] === 1) {
            validation[email] = validateEmail(fields[email]) ? 1 : -2;
            console.log(`validationg of email ${fields[email]} is ${validateEmail(fields[email]) ? 1 : -2}`)
        }
        this.setState(
            {
                validation: validation
            }
        );
        this.addClassesAfterValidation()
    }
    addClassesAfterValidation() {
        const validation = this.state.validation;
        
        if (validation.name === -1) {
            this.addClassIfNotExists(this.nameRef, this.errorInputClass);
            this.addClassIfNotExists(this.nameWrapperRef, this.errorEmptyMessageWrapperClass);
        }

        if (validation.email === -1) {
            this.addClassIfNotExists(this.emailRef, this.errorInputClass);
            this.addClassIfNotExists(this.emailWrapperRef, this.errorEmptyMessageWrapperClass);
        }
        else if (validation.email === -2) {
            this.addClassIfNotExists(this.emailRef, this.errorInputClass);
            this.addClassIfNotExists(this.emailWrapperRef, this.errorInvalidEmailMessageWrapperClass);
        }

        if (validation.compname === -1) {
            this.addClassIfNotExists(this.compnameRef, this.errorInputClass);
            this.addClassIfNotExists(this.compnameWrapperRef, this.errorEmptyMessageWrapperClass);
        }

        if (validation.title === -1) {
            this.addClassIfNotExists(this.titleRef, this.errorInputClass);
            this.addClassIfNotExists(this.titleWrapperRef, this.errorEmptyMessageWrapperClass);
        }
    }

    addClassIfNotExists(ref, className) {
        let classNames = ref.current.className.split(" ")
        const index = classNames.indexOf(className);
        if (index === -1) {
            classNames.push(className);
        }
        ref.current.className = classNames.join(" ")
    }

    removeClassIfExists(ref, className) {
        let classNames = ref.current.className.split(" ")
        const index = classNames.indexOf(className);
        if (index > -1) {
            classNames.splice(index, 1);
        }
        ref.current.className = classNames.join(" ")
    }

    handleChange(fieldname, e) {
        const validation = this.state.validation;
        let fields = this.state.fields;
        fields[fieldname] = e.target.value;
        this.setState({ fields: fields });
        if (validation[fieldname] === -1) {
            let ref = this.inputRefs[fieldname]["input"];
            let refWrapper = this.inputRefs[fieldname]["wrapper"];

            this.removeClassIfExists(ref, this.errorInputClass);
            this.removeClassIfExists(refWrapper, this.errorEmptyMessageWrapperClass);
        }
        else if (validation[fieldname] === -2) {
            let ref = this.inputRefs[fieldname]["input"];
            let refWrapper = this.inputRefs[fieldname]["wrapper"];

            this.removeClassIfExists(ref, this.errorInputClass);
            this.removeClassIfExists(refWrapper, this.errorInvalidEmailMessageWrapperClass);
        }
    }
    render() {
        return (
            <div className="contact-page page-margin-x top-circle">
                <div className="page-heading page-heading--contacts">Submit a help request and we’ll get in touch shortly.</div>
                <div className="contact-page__content-wrapper">
                    <div className="contact-page__form-wrapper">
                        <form className="contact-form" action="" onSubmit={(event) => this.contactSubmit(event)}>
                            <div className={`contact-form__text-input-wrapper `} ref={this.nameWrapperRef}>
                                <input className={`text-input contact-form__name-field`} ref={this.nameRef} type="text" id="name" name="name" placeholder="Name" autoComplete="off" onChange={(event) => this.handleChange("name", event)} value={this.state.fields["name"]}></input>
                            </div>
                            <div className={`contact-form__text-input-wrapper `} ref={this.emailWrapperRef}>
                                <input className={`text-input contact-form__email-field `} ref={this.emailRef} type="text" id="email" name="email" placeholder="Email Address" autoComplete="off" onChange={(event) => this.handleChange("email", event)} value={this.state.fields["email"]}></input>
                            </div>
                            <div className={`contact-form__text-input-wrapper `} ref={this.compnameWrapperRef}>
                                <input className={`text-input contact-form__company-name-field `} ref={this.compnameRef} type="text" id="compname" name="compname" placeholder="Company Name" autoComplete="off" onChange={(event) => this.handleChange("compname", event)} value={this.state.fields["compname"]}></input>
                            </div>
                            <div className={`contact-form__text-input-wrapper `} ref={this.titleWrapperRef}>
                                <input className={`text-input contact-form__title-field `} ref={this.titleRef} type="text" id="title" name="title" placeholder="Title" autoComplete="off" onChange={(event) => this.handleChange("title", event)} value={this.state.fields["title"]}></input>
                            </div>
                            <textarea className={`text-input contact-form__message `} name="message" id="message" cols="30" rows="3" placeholder="Message" autoComplete="off" onChange={(event) => this.handleChange("message", event)}></textarea>
                            <label className="contact-form__subscribe-label">Stay up-to-date with company announcements and updates to our API
                                <input className="contact-form__subscribe-input " type="checkbox" id="subscribe" name="subscribe"
                                    unchecked="true"></input>
                                <span className="contact-form__subscribe-span"></span>
                            </label>

                            <input className="btn btn--hollow-blue contact-form__submit-btn " type="submit" value="Submit"></input>
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
            </div>
        )
    }
}

export default Contact;