import React from "react";
import StyledLandingPage from "../styles/LandingPage.styled";

const LandingPage = () => {
	return (
		<StyledLandingPage>
			<div className="lp-jumbotron">
				<div className="row">
					<div className="col-6 col-sm-4">
						<img
							src="img/CatwikiLogoWhite.svg"
							alt="White Cat Wiki Logo"
							className="img-fluid"
						/>
						<p className="mt-4">Get to know more about about your cat breed</p>
					</div>
				</div>
			</div>
			<div className="lp-most-searched">Most Searched</div>
			<div className="lp-article">Article</div>
		</StyledLandingPage>
	);
};

export default LandingPage;
