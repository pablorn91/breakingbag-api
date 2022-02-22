import { useState, useEffect } from "react"
import styled from "@emotion/styled"
import Frase from "./components/Frase"

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
  margin: 5rem 1rem auto 1rem;
`

const Boton = styled.button`
  background: -webkit-linear-gradient( top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #ffffff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border:3px solid black;
  transition: background-size .3s ease;
  &:hover {
    cursor: pointer;
    background-size: 400px;
  }
`

function App() {

  const [ frase, setFrase ] = useState({})
  
  const consultarAPI = async () => {
    const url = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';
    const respuesta = await fetch(url);
    const resultado = await respuesta.json()

    setFrase(resultado[0])
  }

  useEffect (()=> {
    consultarAPI()
  }, [])

  return (
        <Contenedor>
          <Frase
            frase={frase}
          />
          <Boton
            onClick={consultarAPI}
          >Obtener Frase</Boton>

        </Contenedor>
     
  )
}

export default App
