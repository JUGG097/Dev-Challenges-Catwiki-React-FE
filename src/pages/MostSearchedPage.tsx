import React from "react";
import ImageCardComponent from "../components/ImageCardComponent";
import StyledMostSearchedPage from "../styles/MostSearchedPage.styled";
import { MockCatDetailData } from "../utils/Helpers";

const MostSearchedPage = () => {
	return (
		<StyledMostSearchedPage>
			<h2 className="mt-4">Top 10 most searched breeds</h2>

			{MockCatDetailData.map((catDetail, index) => (
				<div className="row ms-info-rows" key={index}>
					<div className="col-7 col-sm-3" >
						<ImageCardComponent
							image_link={catDetail.image.url}
							bg_effect={false}
							img_height={150}
						/>
					</div>
					<div className="col-sm-9">
						<h4>
							{(index + 1).toString()}. {catDetail.name}
						</h4>
						<p>{catDetail.description}</p>
					</div>
				</div>
			))}
		</StyledMostSearchedPage>
	);
};

export default MostSearchedPage;