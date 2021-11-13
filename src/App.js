import react from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    HashRouter
} from "react-router-dom";

import Home from "./Home";
import Pricing from "./Pricing";
import About from "./About";
import Contact from "./Contact";
import InputEmail from "./InputEmail";

import './App.css';

import logo from "./assets/shared/desktop/logo.svg"
// import closeMenu from "./assets/shared/mobile/close.svg"

import facebook from "./assets/shared/desktop/facebook.svg"
import linkedin from "./assets/shared/desktop/linkedin.svg"
import twitter from "./assets/shared/desktop/twitter.svg"

export class App extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuHidden: true
        }
        this.onResizeSetIsMenuHidden = this.onResizeSetIsMenuHidden.bind(this)
        window.onresize = this.onResizeSetIsMenuHidden;
    }
    onResizeSetIsMenuHidden() {
        if (window.innerWidth >= 768) {
            this.setState({
                isMenuHidden: true
            })
        }
    }
    showHideMenu() {
        const isMenuHidden = this.state.isMenuHidden;
        this.setState(
            {
                isMenuHidden: !isMenuHidden
            }
        )
    }
    render() {
        return (
            <HashRouter basename="/">
                <Router>
                    <div className={`page-wrapper ${this.state.isMenuHidden ? "" : "scroll-lock"}`}>
                        <header className="header flex flex-row page-margin-x">
                            <div className="header__logo-link-wrapper flex items-center justify-center">
                                <Link to="/">
                                    <img src={logo} alt="logo" />
                                </Link>
                            </div>
                            <nav className={`header__nav ${(this.state.isMenuHidden ? "hidden" : "")}`}>
                                <ul className="header__link-list flex flex-row items-center">
                                    <li className="header__link">
                                        <Link to="pricing">Pricing</Link>
                                    </li>
                                    <li className="header__link">
                                        <Link to="about">About</Link>
                                    </li>
                                    <li className="header__link">
                                        <Link to="contact">Contact</Link>
                                    </li>
                                </ul>
                                <button className="header__schedule-button btn btn--pink-filled">
                                    Schedule a Demo
                                </button>
                            </nav>
                            <nav className={`header__nav-mobile ${(this.state.isMenuHidden ? "hidden" : "")}`}>
                                <ul className="header__link-list-mobile flex flex-row items-center">
                                    <li className="header__link-mobile">
                                        <Link to="pricing">Pricing</Link>
                                    </li>
                                    <li className="header__link-mobile">
                                        <Link to="about">About</Link>
                                    </li>
                                    <li className="header__link-mobile">
                                        <Link to="contact">Contact</Link>
                                    </li>
                                </ul>
                                <button className="header__schedule-button-mobile btn btn--pink-filled">
                                    Schedule a Demo
                                </button>
                            </nav>
                            <button className={`header__show-hide-menu ${this.state.isMenuHidden ? "" : "header__show-hide-menu--hide-menu"}`} onClick={() => this.showHideMenu()}>
                            </button>
                        </header>
                        <div>
                            <Switch>
                                <Route path="/contact">
                                    <Contact />
                                </Route>
                                <Route path="/pricing">
                                    <Pricing />
                                </Route>
                                <Route path="/about">
                                    <About />
                                </Route>
                                <Route path="/">
                                    <Home />
                                </Route>
                            </Switch>
                        </div>
                        <div className="email-section text-center page-margin-x">
                            <div className="email-section__heading">Ready to start?</div>
                            {/* email component */}
                            <div className="email-wrapper email-wrapper--bottom">
                                <InputEmail />
                            </div>
                        </div>
                        <footer className="text-center page-padding-x">
                            <div className="footer__content-wrapper">
                                {/* logo */}
                                <div className="logo inline-block">
                                    <Link to="/">
                                        <img src={logo} alt="logo" />
                                    </Link>
                                </div>
                                {/* links */}
                                <nav className="nav-bottom">
                                    <ul>
                                        <li>
                                            <Link to="pricing">Pricing</Link>
                                        </li>
                                        <li>
                                            <Link to="about">About</Link>
                                        </li>
                                        <li>
                                            <Link to="contact">Contact</Link>
                                        </li>
                                    </ul>
                                </nav>
                                {/* social media */}
                                <div className="social-media flex flex-row justify-center">
                                    <a href="#">
                                        <img src={facebook} alt="" />
                                    </a>
                                    <a href="#">
                                        <img src={linkedin} alt="" />
                                    </a>
                                    <a href="#">
                                        <img src={twitter} alt="" />
                                    </a>
                                </div>
                            </div>

                        </footer>
                    </div>
                </Router>
            </HashRouter>
        )
    }
}

export default App;