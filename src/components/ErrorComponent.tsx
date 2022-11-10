import React from "react";
import StyledLoadingComponent from "../styles/LoadingComponent.styled";

const ErrorComponent: React.FC<{
	height: number;
}> = ({ height }) => {
	return (
		<StyledLoadingComponent wrapper_height={height}>
			<img
				src="/img/Error_Icon.svg"
				className="img-fluid"
				alt="Error Icon"
			/>
			<p>Could Not Fetch Data</p>
		</StyledLoadingComponent>
	);
};

export default ErrorComponent;
