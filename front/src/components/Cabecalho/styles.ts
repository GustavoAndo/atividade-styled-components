import styled from 'styled-components'

export const WrapperSld = styled.div`
    border-bottom: 1px solid ${props => props.theme.text};
    display: flex;
    padding: 10px 0px;
`

export const ResultadoSld = styled.div`
    font-size: 30px;
    color: ${props => props.theme.strong};
    font-weight: bold;
    align-items: flex-end;
`

export const ConcursoSld = styled.div`
    font-size: 20px;
    color: ${props => props.theme.text};
    display: flex;
    align-items: flex-end;
    padding-bottom: 3px;
    margin-left: 10px;
`