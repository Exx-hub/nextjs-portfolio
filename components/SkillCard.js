const SkillCard = ({ item }) => {
	const { Icon, title, description } = item;
	console.log(item);
	return (
		<div>
			<Icon />
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
};

export default SkillCard;
