import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";
import styles from "../styles/Projects.module.css";

const Projects = () => {
	return (
		<div className={styles.projectContainer}>
			<h1>Projects</h1>

			<div className="project-cards-grid">
				{projects.map((project) => (
					<div className="project-card-div">
						<ProjectCard />
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
