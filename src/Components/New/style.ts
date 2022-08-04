import styled from 'styled-components'

export const ContainerNew = styled.div`
    width: 90%;
    height: auto;
    margin: 10px auto;
   
    padding: 20px 40px;
    background: whitesmoke;
    border-radius: 10px;

    border: 3px solid black;
    margin-bottom: 30px;
`

export const TitleNew = styled.h2`
    color: black;
    font-size: 2.6rem;
`

export const BodyNew = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(270px,1fr));
    gap: 30px;
    align-content: center;
    justify-items: center;
`

export const Image = styled.img`
    
    width: 100%;
    max-width: 400px;
    margin: auto;
    border-radius: 10px;
`

export const TextContainer= styled.div`
    margin: auto;
    
`

export const TextBody = styled.p`
display: block;

height: auto;
text-align: justify;
color: gray;

margin: auto;

font-size: 2rem;
`
