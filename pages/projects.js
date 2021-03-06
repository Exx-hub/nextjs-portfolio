import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";
import styles from "../styles/Projects.module.css";

import Head from "next/head";

import { motion } from "framer-motion";

const Projects = () => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>Alvin Acosta | Projects</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" href="/alv.ico" />
			</Head>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className={styles.projectContainer}
			>
				<h2>
					RECENT <span>PROJECTS</span>
				</h2>

				<div className={styles.projectGrid}>
					{projects.map((project) => (
						<div key={project.title} className={styles.projectCardDiv}>
							<ProjectCard
								image={project.image}
								title={project.title}
								srcCode={project.srcCode}
								live={project.live}
							/>
						</div>
					))}
				</div>
			</motion.div>
		</>
	);
};

export default Projects;
