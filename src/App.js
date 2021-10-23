import react from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import './App.css';

import logo from "./assets/shared/desktop/logo.svg"
// import closeMenu from "./assets/shared/mobile/close.svg"
import menu from "./assets/shared/mobile/menu.svg"

import facebook from "./assets/shared/desktop/facebook.svg"
import linkedin from "./assets/shared/desktop/linkedin.svg"
import twitter from "./assets/shared/desktop/twitter.svg"

export class App extends react.Component {
    render() {
        return (
            <Router>
                <div className="page-wrapper">
                    <header className="flex flex-row page-margin-x">
                        <div className="flex items-center justify-center">
                            <Link to="/">
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
                        <nav className="nav-top">
                            <ul className="flex flex-row items-center">
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
                            <button className="">
                                Schedule a Demo
                            </button>
                        </nav>
                        <button className="show-hide-menu" onClick="showHideMenu">
                            <img src={menu} alt="" />
                        </button>
                    </header>
                    <div>
                        <Switch>
                            <Route path="/contact">

                            </Route>
                            <Route path="/pricing">

                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </div>
                    <footer className="text-center page-padding-x">
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
                    </footer>
                </div>
            </Router>
        )
    }
}

export default App;