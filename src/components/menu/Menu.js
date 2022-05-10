import { Link, Route, Routes } from "react-router-dom";
import { About } from '../../pages/About'
import { Home } from '../../pages/Home.js'
import { Services } from '../../pages/Services.js'
import styles from './menu.module.css'

export function Menu() {

    return (
        <div>
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
        </div>
    )
}
