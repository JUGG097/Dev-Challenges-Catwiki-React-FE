import styled from "styled-components";
import { numberToPixel } from "../utils/Helpers";

const StyledLoadingComponent = styled.div<{wrapper_height: number}>`

    height:  ${(props) => numberToPixel(props.wrapper_height)};
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 10px;
    color: #291507;
    
    img {
        margin: auto;
        height: 80%;
    }

    p {
        font-weight: 700;
    }

    @media (max-width: 576px) {
        height:  ${(props) => numberToPixel(props.wrapper_height)};
	}
	
`;


export default StyledLoadingComponent;