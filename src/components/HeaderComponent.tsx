import React from "react";
import StyledHeaderComponent from "../styles/HeaderComponent.styled";

const HeaderComponent = () => {
	return (
		<StyledHeaderComponent>
			<img className="img-fluid" src="img/CatwikiLogo.svg" alt="Site Logo"/>
		</StyledHeaderComponent>
	);
};

export default HeaderComponent;
