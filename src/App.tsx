import React from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyles";
import LandingPage from "./pages/LandingPage";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import MostSearchedPage from "./pages/MostSearchedPage";

function App() {
	return (
		<>
			<GlobalStyle />
			<div className="container">
				<HeaderComponent/>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/most-searched" element={<MostSearchedPage />}/>
					TODO: Start mocking the most searched page
				</Routes>
				<FooterComponent/>
			</div>
		</>
	);
}

export default App;
