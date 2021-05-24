import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";
import styles from "../styles/Projects.module.css";

const Projects = () => {
	return (
		<div className={styles.projectContainer}>
			<h1>Projects</h1>

			<div className={styles.projectGrid}>
				{projects.map((project) => (
					<div key={project.title} className={styles.projectCardDiv}>
						<ProjectCard image={project.image} title={project.title} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
