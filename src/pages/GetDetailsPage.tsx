import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorComponent from "../components/ErrorComponent";
import ImageCardComponent from "../components/ImageCardComponent";
import LoadingComponent from "../components/LoadingComponent";
import StyledGetDetailsPage from "../styles/GetDetailsPage.styled";
import { initialCatDetailStateData, MockCatDetailData } from "../utils/Helpers";
import { CatDetailsData } from "../utils/Types";

const GetDetailsPage = () => {
	const { name } = useParams();
	const [catDetails, setCatDetails] = useState<CatDetailsData>(
		initialCatDetailStateData
	);
	const [isDetailsLoading, setIsDetailsLoading] = useState(false);
	const [errorOccurredDetails, setErrorOccurredDetails] = useState(false);
	const [isPhotosLoading, setIsPhotosLoading] = useState(false);
	const [errorOccurredPhotos, setErrorOccurredPhotos] = useState(false);
	// TODO: Set a state for array of photos, set types

	useEffect(() => {
		setIsDetailsLoading(true);
		setIsPhotosLoading(true);
		// TODO: Run the fetch photos endpoint after successful fetching of  cat details
		setTimeout(() => {
			const filterData = MockCatDetailData.filter(
				(catDetails) => catDetails.name === name
			);
			if (filterData.length === 0) {
				setErrorOccurredDetails(true);
				setErrorOccurredPhotos(true);
			}
			setCatDetails(filterData[0]);
			setIsDetailsLoading(false);
		}, 2000);

		setTimeout(() => {
			setIsPhotosLoading(false);
		}, 4000);
	}, [name]);

	return (
		<StyledGetDetailsPage>
			<div className="row details-info">
				{isDetailsLoading ? (
					<LoadingComponent height={250} />
				) : errorOccurredDetails ? (
					<ErrorComponent height={250} />
				) : (
					<>
						<div className="col-8 col-sm-4">
							<ImageCardComponent
								image_link={catDetails.image.url}
								bg_effect={true}
								img_height={220}
							/>
						</div>
						<div className="col-sm-8">
							<h4>{name}</h4>
							<p className="">{catDetails.description}</p>
							<p>
								<span>Temperament: </span>{" "}
								{catDetails.temperament}
							</p>
							<p>
								<span>Origin: </span> {catDetails.origin}
							</p>
							<p>
								<span>Life Span: </span> {catDetails.life_span}{" "}
								years
							</p>
							<p>
								<span>Adaptability: </span>{" "}
								{numberToTiles(catDetails.adaptability)}
							</p>
							<p>
								<span>Affection Level: </span>{" "}
								{numberToTiles(catDetails.affection_level)}
							</p>
							<p>
								<span>Child Friendly: </span>{" "}
								{numberToTiles(catDetails.child_friendly)}
							</p>
							<p>
								<span>Grooming: </span>{" "}
								{numberToTiles(catDetails.grooming)}
							</p>
							<p>
								<span>Intelligence: </span>{" "}
								{numberToTiles(catDetails.intelligence)}
							</p>
							<p>
								<span>Health Issues: </span>{" "}
								{numberToTiles(catDetails.health_issues)}
							</p>
							<p>
								<span>Social Needs: </span>{" "}
								{numberToTiles(catDetails.social_needs)}
							</p>
							<p>
								<span>Stranger friendly: </span>{" "}
								{numberToTiles(catDetails.stranger_friendly)}
							</p>
						</div>
					</>
				)}
			</div>

			<div className="details-other-photos mt-4">
				<h4>Other Photos</h4>
				<div className="row">
					{isPhotosLoading ? (
						<LoadingComponent height={250} />
					) : errorOccurredPhotos ? (
						<ErrorComponent height={250} />
					) : (
						<>
							{MockCatDetailData.map((catDetail, index) => (
								<div
									className="col-6 col-sm-3 mt-4"
									key={index}
								>
									<ImageCardComponent
										image_link={catDetail.image.url}
										bg_effect={false}
										img_height={180}
									/>
								</div>
							))}
							{MockCatDetailData.map((catDetail, index) => (
								<div
									className="col-6 col-sm-3 mt-4"
									key={index}
								>
									<ImageCardComponent
										image_link={catDetail.image.url}
										bg_effect={false}
										img_height={180}
									/>
								</div>
							))}
						</>
					)}
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
