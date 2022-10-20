import styled from "styled-components";

const StyledGetDetailsPage = styled.div`
	color: #291507;

	h4 {
		font-weight: 600;
		font-size: 32px;
        text-transform: capitalize;
	}

	p {
		font-weight: 500;
		font-size: 16px;
	}

	.details-info {
		padding: 25px 30px;

		p {
			margin-top: 20px;

			span {
				font-weight: 700;
			}
		}
	}

	.number-to-tiles {
		display: inline;
		text-align: center;
	}

	.shaded-tiles {
		display: inline-block;
		min-width: 42px;
		border-bottom: 10px #544439 solid;
		border-radius: 5px;
		margin-left: 10px;
	}

	.unshaded-tiles {
		display: inline-block;
		width: 42px;
		border-bottom: 10px #e0e0e0 solid;
		border-radius: 5px;
		margin-left: 10px;
	}

    @media (max-width: 768px) {
		
		.number-to-tiles {
			display: inline;
			text-align: center;
		}

		.shaded-tiles {
			min-width: 25px;
			border-radius: 5px;
			margin-left: 5px;
		}

		.unshaded-tiles {
			width: 25px;
			border-radius: 5px;
			margin-left: 5px;
		}
	}

	@media (max-width: 576px) {
		.details-info {
			padding: 25px 5px;
		}
	}
`;

export default StyledGetDetailsPage;
