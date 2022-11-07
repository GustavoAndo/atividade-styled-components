import styled from 'styled-components'

export const EstimativaSld = styled.div`
    display: flex;
    padding: 10px 0px;
`

export const DataEstimadaSld = styled.div`
    font-size: 16px;
    color: ${props => props.theme.text};
    align-items: flex-start;
    width: 155px;
    text-align: justify;
`

export const PremioEstimadoSld = styled.div`
    font-size: 30px;
    color: ${props => props.theme.colorNext};
    align-items: flex-start;
    padding-bottom: 3px;
    margin-left: 10px;
`