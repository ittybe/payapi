import react from "react";
import "./Pricing.css";

export class Pricing extends react.Component {
    render() {
        return (
            <div className="pricing-page top-circle page-margin-x">
                <div className="page-heading">Pricing</div>
                <div className="pricing-section">
                    <div className="plan">
                        <div className="plan__heading">Free Plan</div>
                        <div className="plan__about">Build and test using our core set of products with up to 100 API requests</div>
                        <div className="plan__price">
                            $0.00
                        </div>
                        <div className="plan__pros">
                            <div className="plan__pro">Transactions</div>
                            <div className="plan__pro">Auth</div>
                            <div className="plan__pro">Identity</div>
                            <div className="plan__pro plan__pro--unactive">Investments</div>
                            <div className="plan__pro plan__pro--unactive">Assets</div>
                            <div className="plan__pro plan__pro--unactive">Liabilities</div>
                            <div className="plan__pro plan__pro--unactive">Income</div>
                        </div>
                        <button className="btn btn--hollow-blue">Request Access</button>
                    </div>
                    <div className="plan">
                        <div className="plan__heading">Basic Plan</div>
                        <div className="plan__about">Launch your project with unlimited requests and no contractual minimums
                        </div>
                        <div className="plan__price">
                            $249.00
                        </div>
                        <div className="plan__pros">
                            <div className="plan__pro">Transactions</div>
                            <div className="plan__pro">Auth</div>
                            <div className="plan__pro">Identity</div>
                            <div className="plan__pro">Investments</div>
                            <div className="plan__pro">Assets</div>
                            <div className="plan__pro plan__pro--unactive">Liabilities</div>
                            <div className="plan__pro plan__pro--unactive">Income</div>
                        </div>
                        <button className="btn btn--hollow-blue">Request Access</button>
                    </div>
                    <div className="plan">
                        <div className="plan__heading">Premium Plan</div>
                        <div className="plan__about"> Get tailored solutions, volume pricing, and dedicated support for your team
                        </div>
                        <div className="plan__price">
                            $499.00
                        </div>
                        <div className="plan__pros">
                            <div className="plan__pro">Transactions</div>
                            <div className="plan__pro">Auth</div>
                            <div className="plan__pro">Identity</div>
                            <div className="plan__pro">Investments</div>
                            <div className="plan__pro">Assets</div>
                            <div className="plan__pro">Liabilities</div>
                            <div className="plan__pro">Income</div>
                        </div>
                        <button className="btn btn--hollow-blue">Request Access</button>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Pricing;