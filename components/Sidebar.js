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

const SideBar = () => {
	return (
		<>
			<Head>
				<style>{dom.css()}</style>
			</Head>
			<div className="sidebarcontainer">
				<div className="sidebar_top">
					<Image
						className={styles.img}
						src={"/images/me4.jpg"}
						width={95}
						height={90}
					/>
					<h3>
						<span>Alvin</span> Acosta
					</h3>
					<p>Full Stack Web Developer</p>
					{/* download resume */}
					<p>Download Resume</p>
				</div>
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
					<p>Get in touch!</p>
					<p>Switch Mode</p>
				</div>
			</div>
		</>
	);
};

export default SideBar;
