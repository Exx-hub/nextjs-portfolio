import Image from "next/image";

const ProjectCard = () => {
	return (
		<div>
			{/* image  */}

			<Image
				src={"/projectImages/cmdd.png"}
				alt="random"
				layout="responsive"
				height="180"
				width="300"
			/>

			{/* title  */}
			<h4>PROJECT TITLE</h4>
			{/* description */}
			<p>project description</p>
			<div>
				{/* EXPAND?  */}

				{/* or  */}

				{/* live button  */}
				{/* src code  */}
			</div>
		</div>
	);
};

export default ProjectCard;
