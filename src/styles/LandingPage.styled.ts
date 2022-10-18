import styled from "styled-components";
import HeroImgLg from "../img/HeroImagelg.png";
import HeroImgMd from "../img/HeroImagemd.png";
import HeroImgSm from "../img/HeroImagesm.png";

const StyledLandingPage = styled.div`
	font-weight: 500;

	h2 {
		font-weight: 700;
		font-size: 32px;
	}

	a {
		color: #291507;
		font-weight: 700;
		text-align: end;
		text-decoration: none;
	}

	.lp-jumbotron {
		background: url(${HeroImgLg});
		background-position: center;
		background-size: cover;
		border-top-left-radius: 25px;
		border-top-right-radius: 25px;
		color: #ffffff;
		font-size: 16px;
		padding: 50px 50px;

		img {
			width: 50%;
		}

		p {
		}
	}

	.lp-most-searched {
		padding: 30px 50px;
		background-color: #e3e1dc;
		color: #291507;
		border-bottom-left-radius: 25px;
		border-bottom-right-radius: 25px;

		h4 {
			font-size: 14px;
		}

		.most-searched-page-link {
			height: 100%;
			flex-direction: column-reverse;
			display: flex;
			font-size: 14px;
		}
	}

	.lp-article {
		padding: 40px 50px;
		color: #291507;

		.article-text {
			margin-top: 40px;
		}
	}

	.title-underline {
		width: 50px;
		border-bottom: 4px #4d270c solid;
		border-radius: 2px;
	}

	.cat-details-name {
		font-weight: 600;
		font-size: 14px;
	}

	@media (max-width: 768px) {
		.lp-jumbotron {
			background: url(${HeroImgMd});
			background-position: center;
			background-size: cover;
		}

		.lp-article {
			.article-text {
				margin-top: 20px;
			}
		}
	}
	@media (max-width: 576px) {
		.lp-jumbotron {
			background: url(${HeroImgSm});
			background-position: center;
			background-size: cover;
			padding: 20px 20px;
		}
		.lp-most-searched {
			padding: 20px 20px;

			.most-searched-page-link {
				a {
					text-align: left;
				}
			}
		}
		.lp-article {
			padding: 20px 20px;

			.article-images {
				margin-top: 40px;
			}
		}
	}

	@media (max-width: 321px) {
	}
`;

export default StyledLandingPage;
