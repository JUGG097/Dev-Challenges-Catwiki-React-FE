import React from "react";
import SearchComponent from "../components/SearchComponent";
import StyledLandingPage from "../styles/LandingPage.styled";
import { BsArrowRight } from "react-icons/bs";
import { MockCatDetailData } from "../utils/Helpers";
import ImageCardComponent from "../components/ImageCardComponent";
import { Masonry } from "@mui/lab";
import { Link } from "react-router-dom";

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
					<div className="col-sm-6 col-md-5">
						<h2>66+ Breeds For you to discover</h2>
					</div>
					<div className="col-sm-2 col-md-4"></div>
					<div className="col-6 col-sm-4 col-md-3 mt-2">
						<div className="most-searched-page-link">
							<Link to={"/most-searched"}>
								<p>
									SEE MORE <BsArrowRight />
								</p>
							</Link>
						</div>
					</div>
				</div>
				<div className="row mt-4">
					{/* TODO: Create a loading gif component */}
					{MockCatDetailData.map((catDetail, index) => (
						<div className="col-6 col-sm-3" key={index}>
							<ImageCardComponent
								image_link={catDetail.image.url}
								bg_effect={index === 0}
								img_height={180}
							/>
							<p className="cat-details-name mt-2">
								{catDetail.name}
							</p>
						</div>
					))}
				</div>
			</div>
			<div className="lp-article">
				<div className="row">
					<div className="col-sm-6 col-md-5 article-text">
						<div className="title-underline mt-4"></div>
						<h2 className="mt-4">Why should you have a cat?</h2>
						<p className="mt-4">
							Having a cat around you can actually trigger the
							release of calming chemicals in your body which
							lower your stress and anxiety levels
						</p>
						<a href="https://www.helpguide.org/articles/healthy-living/joys-of-owning-a-cat.htm" className="mt-4" target="_blank" rel="noreferrer">
							READ MORE <BsArrowRight />
						</a>
					</div>
					<div className="col-sm-6 col-md-7 article-images">
						<Masonry columns={2}>
							<img src="img/image 2.png" alt="Holding cat" />
							<img src="img/image 3.png" alt="Cat in backpack" />
							<img src="img/image 1.png" alt="Cat claws" />
						</Masonry>
					</div>
				</div>
			</div>
		</StyledLandingPage>
	);
};

export default LandingPage;
