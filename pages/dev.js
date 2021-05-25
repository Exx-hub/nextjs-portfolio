import styles from "../styles/Dev.module.css";

const dev = () => {
	return (
		<div className={styles.devContainer}>
			<div className={styles.devTop}>
				<div className="educ">
					<h4>Education</h4>
					<div className="schools">
						<div className="zuitt">
							<h5>Zuitt Coding BootCamp Ph (2021)</h5>
							<p>Full Stack Web Development</p>
						</div>
						<div className="ama">
							<h5>AMA-CU (2013-2017)</h5>
							<p>B.S. Information Technology - Under graduate</p>
						</div>
						<div className="feu">
							<h5>Far Eastern University - NRMF (2007-2011)</h5>
							<p>B.S. Nursing - Registered Nurse</p>
						</div>
					</div>
				</div>
				<div className="exp">
					<h4>Experience</h4>
					<p>RESUME</p>
					<p>CONTACT ME</p>
				</div>
			</div>
			<div className="language and tools">
				<div className="languages">
					<h4>Languages and frameworks</h4>
				</div>
				<div className="tools and software">
					<h4>Tools</h4>
				</div>
			</div>
		</div>
	);
};

export default dev;
