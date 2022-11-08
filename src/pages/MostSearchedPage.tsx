import React from "react";
import { Link } from "react-router-dom";
import ErrorComponent from "../components/ErrorComponent";
import ImageCardComponent from "../components/ImageCardComponent";
import LoadingComponent from "../components/LoadingComponent";
import StyledMostSearchedPage from "../styles/MostSearchedPage.styled";
import { CatDetailsData } from "../utils/Types";

const MostSearchedPage: React.FC<{
	dataLoading: boolean;
	dataError: boolean;
	catData: CatDetailsData[];
}> = ({ dataLoading, dataError, catData }) => {
	return (
		<StyledMostSearchedPage>
			<h2 className="mt-4">Top 10 most searched breeds</h2>

			{dataLoading ? (
				<LoadingComponent height={550} />
			) : dataError ? (
				<ErrorComponent height={550} />
			) : (
				catData.map((catDetail, index) => (
					<div className="row ms-info-rows" key={index}>
						<div className="col-7 col-sm-3">
							<ImageCardComponent
								image_link={catDetail.image.url}
								bg_effect={false}
								img_height={150}
							/>
						</div>
						<div className="col-sm-9">
							<Link to={`/details/${catDetail.id}`}>
								<h4>
									{(index + 1).toString()}. {catDetail.name}
								</h4>
							</Link>

							<p>{catDetail.description}</p>
						</div>
					</div>
				))
			)}
		</StyledMostSearchedPage>
	);
};

export default MostSearchedPage;
