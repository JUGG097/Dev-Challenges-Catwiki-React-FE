import React from "react";
import SearchComponent from "../components/SearchComponent";
import StyledLandingPage from "../styles/LandingPage.styled";
import { BsArrowRight } from "react-icons/bs";

const LandingPage = () => {
	return (
		<StyledLandingPage>
			<div className="lp-jumbotron">
				<div className="row">
					<div className="col-7 col-sm-4">
						<img
							src="img/CatwikiLogoWhite.svg"
							alt="White Cat Wiki Logo"
							className="img-fluid"
						/>
						<p className="mt-2">
							Get to know more about about your cat breed
						</p>
						<SearchComponent />
					</div>
				</div>
			</div>
			<div className="lp-most-searched">
				<h4 className="mb-2">Most Searched Breeds</h4>
				<div className="title-underline"></div>
				<div className="row mt-4">
					<div className="col-sm-6 col-md-4">
						<h2>66+ Breeds For you to discover</h2>
					</div>
					<div className="col-sm-2 col-md-4"></div>
					<div className="col-6 col-sm-4 col-md-4 mt-2">
						<div className="most-searched-page-link">
							<a href="FDDDDD">
								<p>
									SEE MORE <BsArrowRight />
								</p>
							</a>
						</div>
					</div>
				</div>
				<div className="row">
					{/* TODO: Map through an array of cat images use card components */}
				</div>
			</div>
			<div className="lp-article">Article</div>
		</StyledLandingPage>
	);
};

export default LandingPage;
