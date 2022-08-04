import styled from "styled-components"


export const ContainerNavbar = styled.div`
    width: 100%;
    height: 100px;

    background: #4942fc;

    display: flex;
    
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    border-bottom: 5px solid;
`

export const Icon = styled.img`
    width: 80px;
    height: 80px;
    margin: auto 10px auto 10%;
    border: 3px solid black;
`

export const TitleNavbar = styled.h1`
display: block;
    font-size: 3rem;
    margin: auto auto auto 10px;
`

export const Button = styled.button`
    width: auto;
    height: 80%;

    font-size: 2.6rem;

    background: whitesmoke;
    margin: auto 5% auto auto;

    border-radius: 10px;
    padding: 20px;
`