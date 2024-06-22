// src/App.jsx
import React, { lazy, Suspense, useState, useEffect } from "react";
// import { ThemeProvider } from "@material-ui/core";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Loader from "./components/Loader/Loader";
import useScrollToTop from "./utils/useScrollToTop";
// import theme from "./theme";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Services = lazy(() => import("./pages/Services"));
const Resources = lazy(() => import("./pages/Resources"));
const Community = lazy(() => import("./pages/Community"));

const AppContent = () => {
	const [loading, setLoading] = useState(false);
	const location = useLocation();

	useScrollToTop();

	useEffect(() => {
		const handleStart = () => {
			setLoading(true);
		};

		const handleComplete = () => {
			setLoading(false);
		};

		handleStart();
		handleComplete();

		return () => {
			handleComplete();
		};
	}, [location]);

	return (
		<>
			{loading && <Loader />}
			<main className="main-content">
				<Suspense fallback={<Loader />}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/services" element={<Services />} />
						<Route path="/resources" element={<Resources />} />
						<Route path="/community" element={<Community />} />
					</Routes>
				</Suspense>
			</main>
		</>
	);
};

const App = ({}) => {
	return (
		<Router>
			<Navbar />
			<AppContent />
		</Router>
	);
};

export default App;
