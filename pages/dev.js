import styles from "../styles/Dev.module.css";
import { FaFileDownload, FaPaperPlane, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

import { languages, tools } from "../data";

const dev = () => {
	return (
		<div className={styles.devContainer}>
			<div className={styles.devTop}>
				<div className={styles.education}>
					<h4>Education</h4>
					<div className="schools">
						<div className="zuitt">
							<h5>Zuitt Coding BootCamp Ph (2021)</h5>
							<p>• Full Stack Web Development</p>
						</div>
						<div className="ama">
							<h5>AMA-CU (2013-2017)</h5>
							<p>• B.S. Information Technology - Under graduate</p>
						</div>
						<div className="feu">
							<h5>Far Eastern University - NRMF (2007-2011)</h5>
							<p>• B.S. Nursing - Registered Nurse</p>
						</div>
					</div>
				</div>
				<div className={styles.experience}>
					<h4>Experience / Affiliations</h4>
					<div className={styles.experienceBottom}>
						<div className={styles.ctaDiv}>
							<a
								href="https://www.linkedin.com/in/alvin-acosta/"
								target="_blank"
							>
								<FaLinkedinIn className={styles.cta} />
								LinkedIn
							</a>
							<a
								href="https://www.linkedin.com/resume-builder/urn:li:fs_memberResume:19094244/?edit=true"
								target="_blank"
								download
							>
								<FaFileDownload className={styles.cta} />
								Resume
							</a>
							<a
								onClick={() =>
									window.open("mailto:alvinfloresacosta@gmail.com")
								}
							>
								<FaPaperPlane className={styles.cta} />
								Contact Me
							</a>
						</div>
						<div className={styles.listDiv}>
							<h6>• Cauld & Clark IT Solutions</h6>
							<h6>• FreeCodeCamp Manila</h6>
							<h6>• ReactJs Philippines</h6>
							<h6>• Zuitt Coding Bootcamp</h6>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.devBottom}>
				<div className="languages">
					<h4>Languages and Frameworks</h4>
					<div className={styles.techGrid}>
						{languages.map((lang) => (
							<div className={styles.techDiv}>
								<Image src={lang.image} width={30} height={30} />
								<p>{lang.title}</p>
							</div>
						))}
					</div>
				</div>
				<div className="tools and software">
					<h4>Tools and Software</h4>
					<div className={styles.techGrid}>
						{tools.map((tool) => (
							<div className={styles.techDiv}>
								<Image src={tool.image} width={30} height={30} />
								<p>{tool.title}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default dev;
