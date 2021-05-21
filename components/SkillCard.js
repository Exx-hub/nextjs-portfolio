import styles from "../styles/SkillCard.module.css";

const SkillCard = ({ item }) => {
	const { Icon, title, description } = item;

	return (
		<div className={styles.skillcard}>
			<Icon className={styles.icon} />
			<div>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default SkillCard;
