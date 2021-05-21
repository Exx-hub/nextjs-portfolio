import Head from "next/head";
import Image from "next/image";
import SkillCard from "../components/SkillCard";
import { skills } from "../data";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.container}>
				<h5>
					Animation typing for frontend dev,backend dev, web design / traits
					Animation typing for frontend dev,backend dev, web design / traits
					Animation typing for frontend dev,backend dev, web design / traits
					Animation typing for frontend dev,backend dev, web design / traits
					Animation typing for frontend dev,backend dev, web design / traits
					Animation typing for frontend dev,backend dev, web design / traits
				</h5>

				<div className={styles.cardsContainer}>
					<h3>What I do:</h3>
					<div className={styles.cardGrid}>
						{skills.map((item) => (
							<div className={styles.card} key={item.title}>
								<SkillCard item={item} />
							</div>
						))}
					</div>
				</div>
			</main>
		</>
	);
}
