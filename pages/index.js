import Head from "next/head";
import Image from "next/image";
import SkillCard from "../components/SkillCard";
import { skills } from "../data";
import styles from "../styles/Home.module.css";

import { motion } from "framer-motion";

export default function Home() {
	const line1 = [
		"H",
		"e",
		"l",
		"l",
		"o",
		",",
		" ",
		"W",
		"o",
		"r",
		"l",
		"d",
		"!",
		" ",
		"I",
		" ",
		"a",
		"m",
		" ",
		"A",
		"l",
		"v",
		"i",
		"n",
		" ",
		"A",
		"c",
		"o",
		"s",
		"t",
		"a",
		".",
	];
	const line2 = ["I", " ", "do", " ", ".", " ", ".", " ", "."];
	const words = [
		"Web developer",
		"Frontend dev",
		"Backend dev",
		"Full-stack dev",
		"Web designer",
	];
	const sentence = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
			},
		},
	};
	const letter = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	};
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<title>Alvin Acosta | About</title>
				<meta name="title" property="og:title" content='Personal Portfolio'/>
				<meta name="description" property="og:description" content='Showcase of my personal work'/>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="author" content="Alvin Flores Acosta" />
				<meta name="url" property="og:url" content="https://alvinacosta-next.vercel.app/" />
				<meta name="image" property="og:image" content="https://i.ibb.co/6Zp8VhN/black-Thumb.png" />
				<link rel="icon" href="/alv.ico" />
			</Head>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className={styles.container}
			>
				<motion.h3
					className={styles.flashHeader}
					variants={sentence}
					initial="hidden"
					animate="show"
				>
					{line1.map((char, index) => {
						return (
							<motion.span key={char + "-" + index} variants={letter}>
								{char}
							</motion.span>
						);
					})}
					<br />
					{line2.map((char, index) => {
						return (
							<motion.span key={char + "-" + index} variants={letter}>
								{char}
							</motion.span>
						);
					})}
					<span>
						<h3 className={styles.mainTitle}></h3>
					</span>
				</motion.h3>

				<div className={styles.cardsContainer}>
					<h3>
						What I <span>Do</span>
					</h3>
					<motion.div
						initial={{ scale: 0.9 }}
						animate={{ scale: 1 }}
						transition={{ type: "tween", stiffness: 500, duration: 0.5 }}
						className={styles.cardGrid}
					>
						{skills.map((item) => (
							<div className={styles.card} key={item.title}>
								<SkillCard item={item} />
							</div>
						))}
					</motion.div>
				</div>
			</motion.div>
		</>
	);
}
