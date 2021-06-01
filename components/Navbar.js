import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navbar = () => {
	const { pathname } = useRouter();

	const [active, setActive] = useState("");

	useEffect(() => {
		if (pathname === "/") setActive("About");
		else if (pathname === "/projects") setActive("Projects");
		else if (pathname === "/dev") setActive("Dev Background");
	}, [pathname]);

	return (
		<nav className={styles.navbar}>
			{active && <h2>{active}</h2>}
			<Link href="/" scroll={false}>
				<a className={active === "About" ? styles.active : styles.inactive}>
					ABOUT
				</a>
			</Link>
			<Link href="/dev" scroll={false}>
				<a
					className={
						active === "Dev Background" ? styles.active : styles.inactive
					}
				>
					DEV
				</a>
			</Link>
			<Link href="/projects" scroll={false}>
				<a className={active === "Projects" ? styles.active : styles.inactive}>
					PROJECTS
				</a>
			</Link>
		</nav>
	);
};

export default Navbar;
