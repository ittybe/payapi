import react from "react";
import {Link} from "react-router-dom";
import "./Home.css";
import phoneMockup from "./assets/home/desktop/illustration-phone-mockup.png"

import microsoftLogo from "./assets/shared/desktop/microsoft.svg";
import nvidiaLogo from "./assets/shared/desktop/nvidia.svg"
import oracleLogo from "./assets/shared/desktop/oracle.svg"
import teslaLogo from "./assets/shared/desktop/tesla.svg"
import hewlettLogo from "./assets/shared/desktop/hewlett-packard.svg"
import googleLogo from "./assets/shared/desktop/google.svg"

import easyToImp from "./assets/home/desktop/illustration-easy-to-implement.png"
import simpleUi from "./assets/home/desktop/illustration-simple-ui.svg"

import personalFinances from "./assets/home/desktop/icon-personal-finances.svg"
import bankingAndCoverage from "./assets/home/desktop/icon-banking-and-coverage.svg"
import consumerPayments from "./assets/home/desktop/icon-consumer-payments.svg"


export class Home extends react.Component {
    render() {
        return (
            <div className="home-page">
                {/* start section */}
                <div className="start-section page-margin-x">
                    {/* image */}
                    <div className="img-wrapper mb-6">
                        <img src={phoneMockup} alt="" />
                    </div>
                    <div>
                        {/* heading */}
                        <div className="big-heading text-blue">Start building with our APIs for absolutely free.</div>
                        {/* email component */}
                        <div></div>
                        {/* under text */}
                        <div className="under-text text-center">Have any questions? <Link to="/contact"><span>Contact</span></Link> </div>
                    </div>                    
                </div>
                {/* business allies section */}
                <div className="business-allies page-padding-x"> 
                    {/* images */}
                    <div className="logos">
                        <div><img src={teslaLogo} alt="l" /></div>
                        <div><img src={oracleLogo} alt="l" /></div>
                        <div><img src={microsoftLogo} alt="l" /></div>
                        <div><img src={nvidiaLogo} alt="l" /></div>
                        <div><img src={hewlettLogo} alt="l" /></div>
                        <div><img src={googleLogo} alt="l" /></div>
                    </div>
                    {/* text */}
                    <div className="text-center business-allies__text">
                        <div className="big-heading text-white mb-4">Who we work with</div>
                        <div className="text-gray mb-16"> Today, millions of people around the world have successfully connected 
    their accounts to apps they love using our API. We provide developers 
    with the tools they need to create easy and accessible experiences 
    for their users.</div>
                        <Link to="/about" className="rounded-full border-2 border-white py-3 px-8 text-white inline-block">
                            About Us
                        </Link>
                    </div>
                </div>
                {/* easy to implement section*/}
                <div className="text-under-image-section page-margin-x">
                    {/* image */}
                    <div className="mb-10">
                        <img src={easyToImp} alt="l" />
                    </div>
                    {/* text */}
                    <div>
                        <div className="text-blue">Easy to implement</div>
                        <div className="text-light-blue">Our API comes with just a few lines of code. You’ll be up and running in 
    no time. We built our documentation page to integrate payments functionality 
    with ease.</div>
                    </div>
                </div>
                {/* simple ui & ux */}
                <div className="text-under-image-section page-margin-x">
                    {/* image */}
                    <div className="">
                        <img src={simpleUi} alt="image" />
                    </div>
                    {/* text */}
                    <div>
                        <div className="text-blue">Simple UI &amp; UX</div>
                        <div className="text-light-blue">
                        Our pre-built form is easy to integrate in your app or website’s checkout 
    flow and designed to optimize conversion.
                        </div>
                    </div>
                </div>
                {/* pros style it with grid*/}
                <div className="pros-section page-margin-x">
                    <div className="pro">
                        {/* image */}
                        <div className="">
                            <img src={personalFinances} alt="" />
                        </div>
                        {/* text */}
                        <div className="text-blue font-bold mb-4">Personal Finances</div>
                        <div className="text-light-blue">Consolidate financial data from multiple sources and categorize transactions up to
    2 years of history. Analyze reports to reconcile activities in your account.
</div>
                    </div>
                    <div className="pro">
                        {/* image */}
                        <div className="">
                            <img src={bankingAndCoverage} alt="" />
                        </div>
                        {/* text */}
                        <div className="text-blue font-bold mb-4">Banking &amp; Coverage</div>
                        <div className="text-light-blue">With our platform, you can speed up account onboarding and support ongoing payments 
    for checking, savings, credit card, and brokerage accounts.
</div>
                    </div>
                    <div className="pro">
                        {/* image */}
                        <div className="">
                            <img src={consumerPayments} alt="" />
                        </div>
                        {/* text */}
                        <div className="text-blue font-bold mb-4">Consumer Payments</div>
                        <div className="text-light-blue">It’s easier to set up secure bank payments with us through a flow designed with the 
    user experience in mind. Customers could instantly authenticate their account.
</div>
                    </div>
                </div>
                <div className="email-section text-center page-margin-x">
                    <div className="big-heading text-blue">Ready to start?</div>
                    {/* email component */}
                    <div></div>
                </div>
            </div>
        )
    }
}

export default Home;