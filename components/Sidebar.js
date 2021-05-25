import Image from "next/image";
import styles from "../styles/Sidebar.module.css";

import Head from "next/head";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import {
	faLinkedin,
	faGithub,
	faGitlab,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeChanger from "./ThemeChanger";

const SideBar = () => {
	return (
		<>
			<Head>
				<style>{dom.css()}</style>
			</Head>
			<div className="sidebar">
				<Image
					className={styles.img}
					src={"/images/me4.jpg"}
					width={110}
					height={105}
					quality="100"
				/>
				<h3 className={styles.name}>
					Alvin <span className={styles.firstName}>Acosta</span>
				</h3>
				<p className={styles.title}>Web Developer</p>

				<div className={styles.socialIcons}>
					<FontAwesomeIcon className={styles.icon} icon={faGithub} />
					<FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
					<FontAwesomeIcon className={styles.icon} icon={faGitlab} />
				</div>
				<div className={styles.contactSection}>
					<p>Manila, Philippines</p>
					<p>alvinfloresacosta@gmail.com</p>
					<p>0916-420-9977</p>
				</div>
				<div className="sidebar-buttons">
					<p className={styles.contact}>Get in touch!</p>
					<p className={styles.resume}>Download Resume</p>
					<ThemeChanger />
				</div>
			</div>
		</>
	);
};

export default SideBar;
