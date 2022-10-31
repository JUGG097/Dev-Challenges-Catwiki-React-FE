import React from "react";
import StyledLoadingComponent from "../styles/LoadingComponent.styled";

const LoadingComponent: React.FC<{
	height: number;
}> = ({ height }) => {
	return (
		<StyledLoadingComponent wrapper_height={height}>
			<img src="/img/Loading_Icon.svg" className="img-fluid" alt="Loading Icon"/>
      <p>Loading...</p>
		</StyledLoadingComponent>
	);
};

export default LoadingComponent;
