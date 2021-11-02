export function Contact() {
    return (
        <div className="contact-page page-margin-x">
            <div className="page-heading">Submit a help request and we’ll get in touch shortly.</div>
            <div className="contact-page__form-wrapper">
                <form action="">
                    <input type="text" id="name" name="name" placeholder="Name" />
                    <input type="text" id="email" name="email" placeholder="Email Address" />
                    <input type="text" id="compname" name="compname" placeholder="Company Name" />
                    <input type="text" id="title" name="title" placeholder="Title" />
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                    <input type="checkbox" id="subscribe" name="subscribe"
                        unchecked></input>
                    <label htmlFor="subscribe">Stay up-to-date with company announcements and updates to our API</label>
                    <input type="submit" value="Submit">Submit</input>
                </form>
            </div>
            <div>
                <div className="logos">
                    <div><img src={teslaLogo} alt="l" /></div>
                    <div><img src={oracleLogo} alt="l" /></div>
                    <div><img src={microsoftLogo} alt="l" /></div>
                    <div><img src={nvidiaLogo} alt="l" /></div>
                    <div><img src={hewlettLogo} alt="l" /></div>
                    <div><img src={googleLogo} alt="l" /></div>
                </div>
                <div>Join the thousands of innovators already building with us</div>
            </div>
            <div className="email-section page-margin-x">
                <div className="email-section__heading">Ready to start?</div>
            </div>
        </div>
    )
}

export default Contact;