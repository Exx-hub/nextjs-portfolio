import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { FaLightbulb } from "react-icons/fa";
import { BsBrightnessAltLow, BsMoon, IconName } from "react-icons/bs";

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
			<FaLightbulb onClick={handleTheme} className="themeIcon" />
		</div>
	);
};

export default ThemeChanger;

// BsBrightnessLow
// BsMoon
// FaLightbulb
