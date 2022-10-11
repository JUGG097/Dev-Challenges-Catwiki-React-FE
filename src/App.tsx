import React from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyles";
import LandingPage from "./pages/LandingPage";
import HeaderComponent from "./components/HeaderComponent";

function App() {
	return (
		<>
			<GlobalStyle />
			<div className="container">
				<HeaderComponent/>
				<Routes>
					<Route path="/" element={<LandingPage />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
