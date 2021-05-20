import { useTheme } from "next-themes";

const ThemeChanger = () => {
	const { theme, setTheme } = useTheme();
	const handleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};
	return (
		<div>
			The current theme is: {theme}
			<button onClick={handleTheme}>switch</button>
		</div>
	);
};

export default ThemeChanger;
