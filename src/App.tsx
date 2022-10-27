import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyles";
import LandingPage from "./pages/LandingPage";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import MostSearchedPage from "./pages/MostSearchedPage";
import GetDetailsPage from "./pages/GetDetailsPage";
import { CatDetailsData } from "./utils/Types";
import { MockCatDetailData } from "./utils/Helpers";

function App() {
	const [topCatDetails, setTopCatDetails] = useState<CatDetailsData[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [errorOccuured, setErrorOccuured] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		setErrorOccuured(false)
		setTimeout(() => {
			setTopCatDetails(MockCatDetailData);
			setIsLoading(false);
		}, 2000);
	}, []);

	return (
		<>
			<GlobalStyle />
			<div className="container">
				<HeaderComponent />
				<Routes>
					<Route
						path="/"
						element={
							<LandingPage
								dataLoading={isLoading}
								dataError={errorOccuured}
								catData={topCatDetails}
							/>
						}
					/>
					<Route
						path="/most-searched"
						element={
							<MostSearchedPage
								dataLoading={isLoading}
								dataError={errorOccuured}
								catData={topCatDetails}
							/>
						}
					/>
					<Route path="/details/:name" element={<GetDetailsPage />} />
					TODO: Use MockData and timeout to simulate API requests
				</Routes>
				<FooterComponent />
			</div>
		</>
	);
}

export default App;
