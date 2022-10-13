import styled from "styled-components";

const StyledImageCardComponent = styled.div`

    img {
        border-radius: 20px;
        height: 150px;
        width: 100%;
    }

    @media (max-width: 576px) {
		img {
            height: 120px;
        }
	}
	
`;

export default StyledImageCardComponent;