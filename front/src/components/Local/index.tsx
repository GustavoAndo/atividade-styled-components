import { HTMLAttributes } from "react";
import { LocalSld } from "./styles";

type Props = HTMLAttributes<HTMLElement> & {
    localSorteio: string,
    nomeMunicipioUFSorteio: string;
}

export function Local({localSorteio, nomeMunicipioUFSorteio}: Props){
    console.log(localSorteio)
    console.log(nomeMunicipioUFSorteio)

    return (
        <LocalSld>
            Sorteio realizado no {localSorteio} em {nomeMunicipioUFSorteio}
        </LocalSld>
    )
}