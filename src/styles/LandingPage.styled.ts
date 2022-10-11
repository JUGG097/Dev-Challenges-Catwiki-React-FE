import styled from "styled-components";
import HeroImgLg from "../img/HeroImagelg.png"

const StyledLandingPage = styled.div`

    .lp-jumbotron{
        background: url(${HeroImgLg});
        background-position: center;
        background-size: cover;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
        color: #FFFFFF;
        font-weight: 500;
        font-size: 24px;
        min-height: 100px;
        padding: 30px 50px;

        img {
            width: 50%;
        }

        p {

        }
    }
    .lp-most-searched{

    }
    .lp-article{

    }

    //TODO: Add media queries
`;

export default StyledLandingPage;