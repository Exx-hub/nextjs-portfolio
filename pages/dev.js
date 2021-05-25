import styles from "../styles/Dev.module.css";
import { FaFileDownload, FaPaperPlane, FaLinkedinIn } from "react-icons/fa";

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
							<p>
								<FaLinkedinIn className={styles.cta} />
								LinkedIn
							</p>
							<p>
								<FaFileDownload className={styles.cta} />
								Resume
							</p>
							<p>
								<FaPaperPlane className={styles.cta} />
								Contact Me
							</p>
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
					<h4>Languages and frameworks</h4>
					<p>HTML</p>
					<p>CSS</p>
					<p>JavaScript</p>
					<p>ReactJs</p>
					<p>NextJs</p>
					<p>NodeJs</p>
					<p>ExpressJs</p>
					<p>MongoDb</p>
					<p>Redux</p>
					<p>Firebase</p>
					<p>Bootstarp</p>
					<p>Material-UI</p>
					<p>Sass</p>
				</div>
				<div className="tools and software">
					<h4>Tools</h4>
					<p>Git</p>
					<p>Terminal</p>
					<p>Dev Tools</p>
					<p>Postman</p>
					<p>VsCode</p>
					<p>Sublime Text</p>
					<p>Figma</p>
					<p>Canva</p>
					<p>Github</p>
					<p>GitLab</p>
				</div>
			</div>
		</div>
	);
};

export default dev;
