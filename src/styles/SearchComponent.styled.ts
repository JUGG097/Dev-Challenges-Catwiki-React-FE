import styled from "styled-components";

const StyledSearchComponent = styled.div`
	margin-top: 20px;
	position: relative;

	.desktop-search {
		input {
			border-radius: 16px;
			width: 100%;
			height: 40px;
			padding: 0 30px 0 5px;
		}

		input::placeholder {
			font-size: 12px;
			color: black;
		}

		svg {
			color: black;
			position: absolute;
			top: 14px;
			right: 12px;
		}

		.search-list-container {
			color: black;
			position: absolute;
			border-radius: 16px;
			min-height: 200px;
			max-height: 200px;
			width: 100%;
			background-color: white;
			top: 50px;
			overflow-y: scroll;
			padding: 10px 10px;

			span {
				cursor: pointer;
				padding: 7px 10px;
				border: 1px solid rgba(151, 151, 151, 0.1);
				background-color: rgba(151, 151, 151, 0.1);
				border-radius: 5px;
			}

			p {
				margin: 0;
				padding: 15px 5px;
				border-radius: 10px;
			}
			p:hover {
				background-color: rgba(151, 151, 151, 0.1);
			}
		}
	}

	.mobile-search {
		display: none;
		font-size: 12px;
		color: black;

		button {
			border-radius: 16px;
			width: 100%;
			height: 40px;
			padding: 0 30px 0 5px;
		}

		svg {
			color: black;
			position: absolute;
			top: 14px;
			right: 12px;
		}
	}

	@media (max-width: 576px) {
		.desktop-search {
			display: none;
		}

		.mobile-search {
			display: block;
		}
	}
`;

export const StyledSearchModal = styled.div`
	padding: 10px 15px;

	.modal-close {
		text-align: right;
		font-size: 16px;

		span {
			cursor: pointer;
			padding: 8px 10px;
			border: 1px solid rgba(151, 151, 151, 0.1);
			background-color: rgba(151, 151, 151, 0.1);
			border-radius: 5px;
		}
	}

	.desktop-search {
		padding: relative;

		input {
			border-radius: 16px;
			width: 100%;
			height: 40px;
			padding: 0 30px 0 5px;
		}

		input::placeholder {
			font-size: 12px;
			color: black;
		}

		svg {
			color: black;
			position: absolute;
			top: 72px;
			right: 25px;
		}

		a {
			text-decoration: none;
			color: #291507;
			font-weight: 700;
		}

		.search-list-container {
			border-radius: 16px;
			min-height: 180px;
			max-height: 180px;
			width: 100%;
			background-color: white;
			top: 50px;
			overflow-y: scroll;
			margin-top: 10px;

			p {
				margin: 0;
				padding: 15px 5px;
				border-radius: 10px;
			}
			p:hover {
				background-color: rgba(151, 151, 151, 0.1);
			}
		}
	}
`;

export default StyledSearchComponent;
