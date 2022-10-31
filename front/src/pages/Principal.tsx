import { useEffect, useState } from "react";
import { Acumulado } from "../components/Acumulado";
import { Cabecalho } from "../components/Cabecalho";
import { Local } from "../components/Local";
import service from "../services"
import { Props } from "../types";

export default function Principal() {

  const [concurso, setConcurso] = useState({} as Props) 

    useEffect (
       function() {
            (async function() {
                const numero = Math.floor(Math.random() * 2533)
                const concurso: Props = await service.get(numero)
                console.log(concurso)
                setConcurso(concurso)
            })()
            
       }, 
       []
    )

  return (
    <>
      <Cabecalho numero={concurso.numero} dataApuracao={concurso.dataApuracao}/>
      { concurso.acumulado && <Acumulado /> } 
      <Local localSorteio={concurso.localSorteio} nomeMunicipioUFSorteio={concurso.nomeMunicipioUFSorteio}/>
    </>
  )
}
