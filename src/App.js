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

export class App extends react.Component {
    render() {
        return (
            <Router>
                <div className="page-wrapper">
                    <header className="flex flex-row">
                        <div className="flex items-center justify-center">
                            <Link to="/">
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
                        <nav className="hidden navigation">
                            <ul className="flex flex-row items-center mx-auto">
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
                            <button className="ml-auto">
                                Schedule a Demo
                            </button>
                        </nav>
                        <button className="sm:hidden ml-auto" onClick="showHideMenu">
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
                    <footer>
                        {/* logo */}
                        <div>
                            <Link to="/">
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
                        {/* links */}
                        <nav>
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
                        <div>
                            <a href="#">

                            </a>
                            <a href="#">

                            </a>
                            <a href="#">
                                <img src="" alt="" />
                            </a>
                        </div>
                    </footer>
                </div>
            </Router>
        )
    }
}

export default App;