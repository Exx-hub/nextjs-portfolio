import Image from "next/image";

import styles from "../styles/ProjectCard.module.css";

import { FaEye, FaCode } from "react-icons/fa";

const ProjectCard = ({ image, title, srcCode, live }) => {
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
			<div className={styles.projectButtons}>
				<a href={live} target="_blank">
					<FaCode />
					<span className={styles.projectButtonsSpan}>Live</span>
				</a>
				<a href={srcCode} target="_blank">
					<FaEye />
					<span className={styles.projectButtonsSpan}>Src Code</span>
				</a>
			</div>
		</div>
	);
};

export default ProjectCard;
