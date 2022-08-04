import styled from "styled-components";

export const FormSearch = styled.form`
    width: 80%;
    height: auto;
    margin: 120px auto auto auto;

    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(250px,1fr));

    background: whitesmoke;

    gap: 10px;
    padding: 20px;
    border-radius: 10px;
    border: 3px solid black;
`

export const Input = styled.input`
    width: 80%;
    height: auto;
    font-size: 2rem;

`

export const Button = styled.button`
    
    height: 40px;

    font-size: 2rem;


`