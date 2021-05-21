import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { FaLightbulb } from "react-icons/fa";

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
		<div className="themeButton" onClick={handleTheme}>
			<FaLightbulb className="themeIcon" />
		</div>
	);
};

export default ThemeChanger;
