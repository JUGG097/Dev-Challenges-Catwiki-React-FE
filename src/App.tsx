import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyles";
import LandingPage from "./pages/LandingPage";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import MostSearchedPage from "./pages/MostSearchedPage";
import GetDetailsPage from "./pages/GetDetailsPage";
import { CatDetailsData } from "./utils/Types";
import axios from "axios";

function App() {
	const [topCatDetails, setTopCatDetails] = useState<CatDetailsData[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [errorOccurred, setErrorOccurred] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		setErrorOccurred(false);
		axios.get(
			"https://catwiki.juggyprojects.com/api/v1/topTen"
		).then((res) => {
			setTopCatDetails(res.data.data)
			setIsLoading(false)
		}).catch((err) => {
			setErrorOccurred(true)
			setIsLoading(false)
		})
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
								dataError={errorOccurred}
								catData={topCatDetails.slice(0, 4)}
							/>
						}
					/>
					<Route
						path="/most-searched"
						element={
							<MostSearchedPage
								dataLoading={isLoading}
								dataError={errorOccurred}
								catData={topCatDetails}
							/>
						}
					/>
					<Route path="/details/:name" element={<GetDetailsPage />} />
				</Routes>
				<FooterComponent />
			</div>
		</>
	);
}

export default App;
