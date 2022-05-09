import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { About } from '../About'
import { Home } from '../Home.js'
import { Services } from '../Services.js'
import styles from './menu.module.css'

export function Menu() {
    return (
        <div>
            <Router>
                <nav className={styles.menu}>
                    <Link to="/">Home</Link>
                    <Link to="/about-us">About</Link>
                    <Link to="/services">Services</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<About />} />
                    <Route path="/services/*" element={<Services />} />
                </Routes>
            </Router>
        </div>
    )
}
