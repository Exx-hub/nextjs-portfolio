import Image from "next/image";
import { useState } from "react";
import styles from "../styles/ProjectCard.module.css";

const ProjectCard = ({ image, title }) => {
	const [enlarge, setEnlarge] = useState(false);
	return (
		<div className={styles.projectCard}>
			{/* image  */}

			<Image
				src={image}
				alt="random"
				layout="responsive"
				height="180"
				width="300"
				onClick={() => setEnlarge("true")}
			/>

			{/* title  */}
			<h4>{title}</h4>
			{/* description */}
			{/* <p>project description</p> */}

			{enlarge && (
				<div
					className="click project to enlarge"
					style={{ position: "absolute", top: "0", right: "0" }}
				>
					<h1>ENLARGED VIEW OF PROJECT CARD</h1>

					{/* image  */}
					{/* title  */}
					{/* description  */}
					{/* view  */}
					{/* src code  */}
					{/* tech tags 	 */}
					{/* x button to close  */}
					{/* onClick={() => setEnlarge(false)} */}
				</div>
			)}
		</div>
	);
};

export default ProjectCard;
