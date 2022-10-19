import React from "react";
import StyledHeaderComponent from "../styles/HeaderComponent.styled";

const HeaderComponent = () => {
	return (
		<StyledHeaderComponent>
			<a href="/"><img className="img-fluid" src="img/CatwikiLogo.svg" alt="Site Logo"/></a>
			
		</StyledHeaderComponent>
	);
};

export default HeaderComponent;