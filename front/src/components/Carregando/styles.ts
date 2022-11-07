import styled from "styled-components";

export const CarregandoSld = styled.div`
    font-size: 25px;
    color: ${props => props.theme.strong};
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
`