import "../styles/globals.css";
import { ThemeProvider, themeProvider } from "next-themes";
import SideBar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider>
			<div className="outer-container">
				<div className="sidebar-container">
					<SideBar />
				</div>
				<div className="main-container">
					<Navbar />
					<Component {...pageProps} />
				</div>
			</div>
		</ThemeProvider>
	);
}

export default MyApp;
