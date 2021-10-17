import react from "react";
import {Link} from "react-router-dom";

export class Home extends react.Component {
    render() {
        return (
            <div>
                {/* start section */}
                <div>
                    {/* image */}
                    <div></div>
                    <div>
                        {/* heading */}
                        <div>Start building with our APIs for absolutely free.</div>
                        {/* email component */}
                        <div></div>
                        {/* under text */}
                        <div>Have any questions?<Link to="/contact"> Contact Us</Link> </div>
                    </div>                    
                </div>
                {/* business allies section */}
                <div>
                    {/* images */}
                    <div></div>
                    {/* text */}
                    <div>
                        <div>Who we work with</div>
                        <div> Today, millions of people around the world have successfully connected 
    their accounts to apps they love using our API. We provide developers 
    with the tools they need to create easy and accessible experiences 
    for their users.</div>
                        <Link to="/about">
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