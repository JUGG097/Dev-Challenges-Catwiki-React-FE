import React from "react";
import { useParams } from "react-router-dom";
import ImageCardComponent from "../components/ImageCardComponent";
import StyledGetDetailsPage from "../styles/GetDetailsPage.styled";
import { MockCatDetailData } from "../utils/Helpers";

const GetDetailsPage = () => {
	const { name } = useParams();
	const singleCatDetailData = MockCatDetailData[3];

	return (
		<StyledGetDetailsPage>
			<div className="row details-info">
				<div className="col-8 col-sm-4">
					<ImageCardComponent
						image_link={singleCatDetailData.image.url}
						bg_effect={true}
						img_height={220}
					/>
				</div>
				<div className="col-sm-8">
					<h4>{name}</h4>
					<p className="">{singleCatDetailData.description}</p>
					<p>
						<span>Temperament: </span>{" "}
						{singleCatDetailData.temperament}
					</p>
					<p>
						<span>Origin: </span> {singleCatDetailData.origin}
					</p>
					<p>
						<span>Life Span: </span> {singleCatDetailData.life_span}{" "}
						years
					</p>
					<p>
						<span>Adaptability: </span>{" "}
						{numberToTiles(singleCatDetailData.adaptability)}
					</p>
					<p>
						<span>Affection Level: </span>{" "}
						{numberToTiles(singleCatDetailData.affection_level)}
					</p>
					<p>
						<span>Child Friendly: </span>{" "}
						{numberToTiles(singleCatDetailData.child_friendly)}
					</p>
					<p>
						<span>Grooming: </span>{" "}
						{numberToTiles(singleCatDetailData.grooming)}
					</p>
					<p>
						<span>Intelligence: </span>{" "}
						{numberToTiles(singleCatDetailData.intelligence)}
					</p>
					<p>
						<span>Health Issues: </span>{" "}
						{numberToTiles(singleCatDetailData.health_issues)}
					</p>
					<p>
						<span>Social Needs: </span>{" "}
						{numberToTiles(singleCatDetailData.social_needs)}
					</p>
					<p>
						<span>Stranger friendly: </span>{" "}
						{numberToTiles(singleCatDetailData.stranger_friendly)}
					</p>
				</div>
			</div>
			<div className="details-other-photos mt-4">
				<h4>Other Photos</h4>
				<div className="row">
					{MockCatDetailData.map((catDetail, index) => (
						<div className="col-6 col-sm-3 mt-4" key={index}>
							<ImageCardComponent
								image_link={catDetail.image.url}
								bg_effect={false}
								img_height={180}
							/>
						</div>
					))}
					{MockCatDetailData.map((catDetail, index) => (
						<div className="col-6 col-sm-3 mt-4" key={index}>
							<ImageCardComponent
								image_link={catDetail.image.url}
								bg_effect={false}
								img_height={180}
							/>
						</div>
					))}
				</div>
			</div>
		</StyledGetDetailsPage>
	);
};

const numberToTiles = (value: Number) => {
	const mockArray = [0, 1, 2, 3, 4];
	return (
		<div className="number-to-tiles">
			{mockArray.map((el, index) => (
				<span
					key={index}
					className={el < value ? "shaded-tiles" : "unshaded-tiles"}
				></span>
			))}
		</div>
	);
};

export default GetDetailsPage;
