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

import { useRouter } from "next/router";

const SideBar = () => {
  const router = useRouter();

  const handleScroll = () => {
    router.push("/projects").then(() => window.scrollTo(0, 700));
  };
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
        <p className={styles.title}>Software Developer</p>

        <div className={styles.socialIcons}>
          <a href="https://github.com/Exx-hub" target="_blank">
            <FontAwesomeIcon className={styles.icon} icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/alvin-acosta/" target="_blank">
            <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
          </a>
          <a href="https://gitlab.com/Exx-hub" target="_blank">
            <FontAwesomeIcon className={styles.icon} icon={faGitlab} />
          </a>
        </div>
        <div className={styles.contactSection}>
          <p>Manila, Philippines</p>
          <p>alvinfloresacosta@gmail.com</p>
          <p>0916-420-9977</p>
        </div>
        <div className={styles.sidebarButtons}>
          <p
            onClick={() => window.open("mailto:alvinfloresacosta@gmail.com")}
            className={styles.contact}
          >
            Get in touch!
          </p>
          <p onClick={handleScroll} className={styles.resume}>
            View my Work
          </p>
        </div>
        <ThemeChanger />
      </div>
    </>
  );
};

export default SideBar;
