import styled from "@emotion/styled";

const ContenedorFrase = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: white;
    max-width: 800px;
    margin: -25rem auto 0 auto;

    @media (min-width:768px)  {
        margin-top: 10rem;
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4px;
        &::before {
            content: open-quote;
            font-size: 6rem;
            color: black;
            position: absolute;
            left: -3rem;
            top: -2rem;
        }
    }

    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.6rem;
        font-weight: bold;
        text-align: right;
        color: #666666;
        margin-top: 2rem;
    }
`

const Frase = ({frase}) => {
    return ( 
        <ContenedorFrase>
            <h1>{frase.quote}</h1>
            <p>-
            {frase.author}</p>
        </ContenedorFrase>
    );
}
 
export default Frase;