const SkillCard = ({ item }) => {
	console.log(item);

	return (
		<div>
			<h3>{item.title}</h3>
			<p>{item.description}</p>
		</div>
	);
};

export default SkillCard;
