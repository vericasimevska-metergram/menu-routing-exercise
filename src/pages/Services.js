import { Link, Route, Routes } from "react-router-dom";
import { CustomSoftware } from "./nested-components/CustomSoftware";
import { DedicatedTeam } from "./nested-components/DedicatedTeam";
import styles from '../components/menu/menu.module.css'
export function Services() {
    return (
        <div>
            <nav className={styles.menu}>
                <Link to="custom-software">Custom Software</Link>
                <Link to="dedicated-team">Dedicated team</Link>
            </nav>
            <Routes>
                <Route path="custom-software" element={<CustomSoftware />} />
                <Route path="dedicated-team" element={<DedicatedTeam />} />
            </Routes>

        </div>
    )
}