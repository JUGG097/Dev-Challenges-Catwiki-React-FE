import React from "react";
import { Link } from "react-router-dom";
import StyledHeaderComponent from "../styles/HeaderComponent.styled";

const HeaderComponent = () => {
	return (
		<StyledHeaderComponent>
			<Link to={"/"}><img className="img-fluid" src="img/CatwikiLogo.svg" alt="Site Logo"/></Link>	
		</StyledHeaderComponent>
	);
};

export default HeaderComponent;