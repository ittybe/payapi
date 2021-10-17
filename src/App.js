import react from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./Home";
import About from "./About";

import logo from "./assets/shared/desktop/logo.svg"

export class App extends react.Component {
    render() {
        return (
            <Router>
                <div>
                    <header>
                        <div>
                            <Link to="/">
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
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
                                <button>
                                    Schedule a Demo
                                </button>
                            </ul>
                        </nav>
                        <button className="hidden" onClick="showHideMenu"></button>
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

                    </footer>
                </div>
            </Router>
        )
    }
}

export default App;