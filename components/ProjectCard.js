import Image from "next/image";

import styles from "../styles/ProjectCard.module.css";

const ProjectCard = ({ image, title }) => {
	return (
		<div className={styles.projectCard}>
			<Image
				src={image}
				alt="random"
				layout="responsive"
				height="180"
				width="300"
			/>
			<h4>{title}</h4>
			{/* view  || 	src code */}
			{/* modal???  */}
		</div>
	);
};

export default ProjectCard;
