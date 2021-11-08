import react from "react";
import "./InputEmail.css";
import addClassToString from "./utils/addClassToString";
import removeClassFromString from "./utils/removeClassFromString";
import validateEmail from "./utils/validateEmail";

export class InputEmail extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
        this.emailComponentRef = react.createRef();
    }

    checkEmail() {
        const classNames = this.emailComponentRef.current.className
        let updatedClassNames = this.emailComponentRef.current.className
        if (!validateEmail(this.state.value)) {
            let tmp = addClassToString(classNames, "input-email--invalid-email");
            updatedClassNames = tmp;
        }
        else {
            let tmp = removeClassFromString(classNames, "input-email--invalid-email");
            updatedClassNames = tmp;
        }
        this.emailComponentRef.current.className = updatedClassNames;
    }

    handleChange(e) {
        const value = e.target.value;
        console.log(value)
        this.setState({ value: value });

        const classNames = this.emailComponentRef.current.className
        let updatedClassNames = this.emailComponentRef.current.className
        let tmp = removeClassFromString(classNames, "input-email--invalid-email");
        updatedClassNames = tmp;
        this.emailComponentRef.current.className = updatedClassNames;
    }

    render() {
        return (
            <div className="input-email" ref={this.emailComponentRef}>
                <input className="input-email__input-field" type="text" placeholder="Enter email address" onChange={(event) => { this.handleChange(event) }} />
                <button className="input-email__btn btn btn--pink-filled" onClick={() => this.checkEmail()}>Schedule a Demo</button>
            </div>
        )
    }
}

export default InputEmail;