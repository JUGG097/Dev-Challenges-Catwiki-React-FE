import React from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyles";
import LandingPage from "./pages/LandingPage";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import MostSearchedPage from "./pages/MostSearchedPage";
import GetDetailsPage from "./pages/GetDetailsPage";

function App() {
	return (
		<>
			<GlobalStyle />
			<div className="container">
				<HeaderComponent/>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/most-searched" element={<MostSearchedPage />}/>
					<Route path="/details/:name" element={<GetDetailsPage />}/>
					TODO: Make search box dynamic, idea is to hid and reveal using media query, 
					all implementations like the Modal for mobile should be in Search Component
					TODO: Follow example in Remotive Jobs call the API here at the root once and pass as props into
					LandingPage and MostSearchedPage
					TODO: Pass the error and loading states as props into the pages as only a section of LandingPage 
					depends on API data
				</Routes>
				<FooterComponent/>
			</div>
		</>
	);
}

export default App;
