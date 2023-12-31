import { useState } from "react"

export default function MyContador() {
    
    const [contador, setContador]  =  useState(0)
    

    function aumentar() {
        setContador(contador + 1)
    }
    function diminuir() {
        setContador(contador - 1)
    }

    if (contador > 5) {
        return (
            
            <div className="container">
                <h1> Valor muito alto</h1>
                <button onClick={aumentar}> Aumentar</button>
                <button onClick={diminuir}>Diminuir</button>
            </div>
        )
    }

    return (
        <div className="container">
            <h1>Meu Contador? {contador}</h1>
            <button onClick={aumentar}> Aumentar</button>
            <button onClick={diminuir}>Diminuir</button>
        </div>
    )
    
}

