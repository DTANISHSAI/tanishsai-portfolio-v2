import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
    layout
    animate={{
    top: scrolled ? 20 : 0,
    left: scrolled ? "50%" : 0,
    x: scrolled ? "-50%" : 0
}}
    transition={{
    type: "spring",
    stiffness: 85,
    damping: 18,
    mass: 1.1
}}
    className={scrolled ? "navbar navbar-scrolled" : "navbar"}
>
                <motion.div
                    layout
                    className="logo"
                >
                    {scrolled ? "DTS" : "D TANISHSAI"}
                </motion.div>

                <motion.div
                    layout
                    className="nav-links"
                >
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/work"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    Work
                </NavLink>

                <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    Projects
                </NavLink>

                <NavLink
                    to="/journey"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    Journey
                </NavLink>

                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive ? "active" : ""
                    }
                >
                    Contact
                </NavLink>
            </motion.div>
        </motion.nav>
    );
}

export default Navbar;