import react from "react";
import {Link} from "react-router-dom";
import "./Home.css";
import phoneMockup from "./assets/home/desktop/illustration-phone-mockup.png"

import microsoftLogo from "./assets/shared/desktop/microsoft.svg";
import nvidiaLogo from "./assets/shared/desktop/nvidia.svg"
import oracleLogo from "./assets/shared/desktop/oracle.svg"
import teslaLogo from "./assets/shared/desktop/tesla.svg"
import twitterLogo from "./assets/shared/desktop/twitter.svg"
import googleLogo from "./assets/shared/desktop/google.svg"

export class Home extends react.Component {
    render() {
        return (
            <div>
                {/* start section */}
                <div className="start-section">
                    {/* image */}
                    <div className="img-wrapper">
                        <img src={phoneMockup} alt="" />
                    </div>
                    <div>
                        {/* heading */}
                        <div className="big-heading">Start building with our APIs for absolutely free.</div>
                        {/* email component */}
                        <div></div>
                        {/* under text */}
                        <div className="under-text text-center">Have any questions? <Link to="/contact"><span>Contact</span></Link> </div>
                    </div>                    
                </div>
                {/* business allies section */}
                <div className="business-allies"> 
                    {/* images */}
                    <div className="logos">
                        <div><img src={teslaLogo} alt="l" /></div>
                        <div><img src={microsoftLogo} alt="l" /></div>
                        <div><img src={oracleLogo} alt="l" /></div>
                        <div><img src={nvidiaLogo} alt="l" /></div>
                        <div><img src={twitterLogo} alt="l" /></div>
                        <div><img src={googleLogo} alt="l" /></div>
                    </div>
                    {/* text */}
                    <div>
                        <div className="big-heading">Who we work with</div>
                        <div > Today, millions of people around the world have successfully connected 
    their accounts to apps they love using our API. We provide developers 
    with the tools they need to create easy and accessible experiences 
    for their users.</div>
                        <Link to="/about" className="button">
                            About Us
                        </Link>
                    </div>
                </div>
                {/* easy to implement */}
                <div>
                    {/* image */}
                    <div></div>
                    {/* text */}
                    <div>
                        <div>Easy to implement</div>
                        <div>Our API comes with just a few lines of code. You’ll be up and running in 
    no time. We built our documentation page to integrate payments functionality 
    with ease.</div>
                    </div>
                </div>
                {/* simple ui & ux */}
                <div>
                    {/* image */}
                    <div></div>
                    {/* text */}
                    <div>
                        <div>Simple UI &amp; UX</div>
                        <div>
                        Our pre-built form is easy to integrate in your app or website’s checkout 
    flow and designed to optimize conversion.
                        </div>
                    </div>
                </div>
                {/* pros style it with grid*/}
                <div>
                    <div>
                        {/* image */}
                        <div></div>
                        {/* text */}
                        <div>Personal Finances</div>
                        <div>Consolidate financial data from multiple sources and categorize transactions up to
    2 years of history. Analyze reports to reconcile activities in your account.
</div>
                    </div>
                    <div>
                        {/* image */}
                        <div></div>
                        {/* text */}
                        <div>Banking &amp; Coverage</div>
                        <div>With our platform, you can speed up account onboarding and support ongoing payments 
    for checking, savings, credit card, and brokerage accounts.
</div>
                    </div>
                    <div>
                        {/* image */}
                        <div></div>
                        {/* text */}
                        <div>Consumer Payments</div>
                        <div>It’s easier to set up secure bank payments with us through a flow designed with the 
    user experience in mind. Customers could instantly authenticate their account.
</div>
                    </div>
                </div>
                <div>
                    <div>Ready to start?</div>
                    {/* email component */}
                    <div></div>
                </div>
            </div>
        )
    }
}

export default Home;