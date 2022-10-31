import { HTMLAttributes } from "react"
import { NumeroSld } from "./styles"

type Props = HTMLAttributes<HTMLElement> & {
    listaDezenas: string[]
}

export function Numeros({ listaDezenas }: Props) {
    return (
        <>
            {listaDezenas.map((n) => (
                <NumeroSld key={n}>{n}</NumeroSld>
            ))}
        </>
    )
}