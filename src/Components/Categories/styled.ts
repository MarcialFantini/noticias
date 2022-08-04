import styled from "styled-components";
import { NavProps } from "../../Interfaces/props";

export const ContainerCategories = styled.div<NavProps>`
    width: 70vw;
    height: 90%;
    max-width: 360px;

    background: whitesmoke;
    
    position: fixed;
    top: 0;
    left:${props=>props.positionX?"0%":"-70%"};

    transition: all 0.3s;
    
`

export const ButtonExit = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    
    width: 40px;
    height: 40px;
    
    font-size: 2rem;

    background: transparent;

`

export const Ul = styled.ul`
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 60px 0 0 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const Li = styled.li`
    width: 100%;
  
    height: 20%;

    background: skyblue;
   

    font-size: 3rem;

    
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;    

  
`
