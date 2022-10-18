import React from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyles";
import LandingPage from "./pages/LandingPage";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
	return (
		<>
			<GlobalStyle />
			<div className="container">
				<HeaderComponent/>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					TODO: Start mocking the most searched page
				</Routes>
				<FooterComponent/>
			</div>
		</>
	);
}

export default App;
