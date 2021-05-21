import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { faLightbulb, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThemeChanger = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	const handleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};

	// When mounted on client, now we can show the UI
	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<div className="themeButton">
			{theme === "dark" ? (
				<FontAwesomeIcon
					onClick={handleTheme}
					className="themeIcon"
					icon={faLightbulb}
				/>
			) : (
				<FontAwesomeIcon
					onClick={handleTheme}
					className="themeIcon"
					icon={faMoon}
				/>
			)}
		</div>
	);
};

export default ThemeChanger;
