import styled from "styled-components";

const StyledSearchComponent = styled.div`

    margin-top: 20px;
    position: relative;

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
    
`;

export default StyledSearchComponent;