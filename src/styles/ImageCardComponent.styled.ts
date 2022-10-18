import styled from "styled-components";
import { numberToPixel } from "../utils/Helpers";

const StyledImageCardComponent = styled.div<{img_height: number}>`

    position: relative;

    img {
        border-radius: 20px;
        height: ${(props) => numberToPixel(props.img_height)};
        width: 100%;
    }

    .special-bg-effect {
        height: ${(props) => numberToPixel(props.img_height - 30)};
        width: 10px;
        background: #DEC68B;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        position: absolute;
        top: 15px;
        left: -10px;
    }

    @media (max-width: 576px) {
		img {
            height: ${(props) => numberToPixel(props.img_height - 30)};
        }

        .special-bg-effect {
            height: ${(props) => numberToPixel(props.img_height - 60)};
        }
	}
	
`;


export default StyledImageCardComponent;