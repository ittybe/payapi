import "./InputEmail.css";

export function InputEmail(props) {
    return (
        <div className="input-email">
            <input className="input-email__input-field" type="text" placeholder="Enter email address"/>
            <button className="input-email__btn btn btn--pink-filled">Schedule a Demo</button>
        </div>
    )
}

export default InputEmail;