import styled from "styled-components";

const StyledMostSearchedPage = styled.div`
	color: #291507;

	h2 {
		font-weight: 700;
		font-size: 32px;
	}

	h4 {
		font-weight: 600;
		font-size: 30px;
	}

    p {
        font-weight: 500;
        font-size: 16px;
    }

	.ms-info-rows {
		margin-top: 40px;
	}

	@media (max-width: 576px) {
		.ms-info-rows {
			margin-top: 25px;
		}
	}
`;

export default StyledMostSearchedPage;
