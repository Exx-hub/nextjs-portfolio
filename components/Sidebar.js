import Image from "next/image";

const SideBar = () => {
	return (
		<div>
			<div>
				<Image
					className="my-img"
					src={"/images/me4.jpg"}
					width={95}
					height={90}
				/>
				<h3>
					<span>Alvin</span> Acosta
				</h3>
				<p>Full Stack Web Developer</p>
				{/* download resume */}
				<p>Download Resume</p>
			</div>
			<div>{/* social icons */}</div>
			<div>{/* contact info */}</div>
			<div>{/* buttons  */}</div>
		</div>
	);
};

export default SideBar;
