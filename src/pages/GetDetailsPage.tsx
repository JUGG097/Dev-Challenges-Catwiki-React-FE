import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorComponent from "../components/ErrorComponent";
import ImageCardComponent from "../components/ImageCardComponent";
import LoadingComponent from "../components/LoadingComponent";
import StyledGetDetailsPage from "../styles/GetDetailsPage.styled";
import { initialCatDetailStateData } from "../utils/Helpers";
import { CatDetailsData, CatImageData } from "../utils/Types";

const GetDetailsPage = () => {
	const { name } = useParams();
	const [catDetails, setCatDetails] = useState<CatDetailsData>(
		initialCatDetailStateData
	);
	const [isDetailsLoading, setIsDetailsLoading] = useState(false);
	const [errorOccurredDetails, setErrorOccurredDetails] = useState(false);
	const [isPhotosLoading, setIsPhotosLoading] = useState(false);
	const [errorOccurredPhotos, setErrorOccurredPhotos] = useState(false);
	const [otherCatPhotos, setOtherCatPhotos] = useState<CatImageData[]>([]);

	useEffect(() => {
		setIsDetailsLoading(true);
		setIsPhotosLoading(true);
		axios
			.get("https://catwiki.juggyprojects.com/api/v1/details/" + name)
			.then((res) => {
				setCatDetails(res.data.data);
				setIsDetailsLoading(false);

				axios
					.get(
						"https://catwiki.juggyprojects.com/api/v1/photos/" +
							name
					)
					.then((res) => {
						setOtherCatPhotos(res.data.data);
						setIsPhotosLoading(false);
					})
					.catch((err) => {
						setErrorOccurredPhotos(true);
						setIsPhotosLoading(false);
					});
			})
			.catch((err) => {
				setErrorOccurredDetails(true);
				setIsDetailsLoading(false);
			});
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
							<h4>{catDetails.name}</h4>
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
							{otherCatPhotos.map((catPhoto, index) => (
								<div
									className="col-6 col-sm-3 mt-4"
									key={index}
								>
									<ImageCardComponent
										image_link={catPhoto.url}
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
