import styled from 'styled-components'

export const NumerosSld = styled.div`
    diplay: flex;
    padding: 10px 0px;
`

export const NumeroSld = styled.div`
    font-size: 35px;
    color: ${props => props.theme.colorNumber};
    background-color: ${props => props.theme.backgroundNumber};
    border-radius: 35px;
    display: inline-block;
    margin-right: 10px;
    width: 55px;
    height: 55px;
    text-align: center;
`
