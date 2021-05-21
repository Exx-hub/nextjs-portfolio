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
			<h2>{active}</h2>
			<Link href="/">
				<a>ABOUT</a>
			</Link>
			<Link href="/dev">
				<a>DEV</a>
			</Link>
			<Link href="/projects">
				<a>PROJECTS</a>
			</Link>
		</nav>
	);
};

export default Navbar;
