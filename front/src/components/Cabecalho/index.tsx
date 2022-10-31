import { HTMLAttributes } from "react";
import { WrapperSld, ResultadoSld, ConcursoSld } from "./styles";

type Props = HTMLAttributes<HTMLElement> & {
    numero: number,
    dataApuracao: string
}

export function Cabecalho({numero, dataApuracao}: Props){
    console.log(numero)
    console.log(dataApuracao)

    return (
        <WrapperSld>
            <ResultadoSld>Resultado</ResultadoSld>
            <ConcursoSld>Concurso {numero} ({dataApuracao})</ConcursoSld>
        </WrapperSld>
    )
}