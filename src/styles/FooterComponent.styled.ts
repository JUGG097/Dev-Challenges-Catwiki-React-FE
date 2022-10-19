import styled from "styled-components";

const StyledFooterComponent = styled.div`
    margin-top: 20px;
    padding: 10px 50px;
    background: black;
    color: white;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;

    p {
        margin: 0;
        text-align: end;
    }

    @media (max-width: 576px) {
		padding: 10px 20px;

        p {
            text-align: start;
        }
	}
`;

export default StyledFooterComponent;
