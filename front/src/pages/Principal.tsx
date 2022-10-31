import { useEffect } from "react";
import service from "../services"

export default function Principal() {

    useEffect (
       function() {
            (async function() {
                const numero = Math.floor(Math.random() * 2533)
                const concurso = await service.get(numero)
                console.log(concurso)
            })()
            
       }, 
       []
    )

  return <div>Principal</div>;
}
