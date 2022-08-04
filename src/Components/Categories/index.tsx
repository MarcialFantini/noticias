
import React from 'react'
import { ButtonExit, ContainerCategories, Li, Ul } from './styled'

export const Categories = ({
  isActive,
  setIsActive,
  setShare
}:{isActive:boolean,
  setIsActive:any,
  setShare:Function
}) => {
  
  const handlerOnClick = (e:any)=>{
   
    setShare(e.target.textContent)
    setIsActive(!isActive)
  }

  return (
    <ContainerCategories positionX={isActive}>
      <ButtonExit
      onClick={()=>{
        setIsActive(!isActive)
      }}
      >X</ButtonExit>
        <Ul>
          <Li
        
          onClick={handlerOnClick}
          >Política</Li>
          <Li
          onClick={handlerOnClick}
      
          >Economía</Li>
          <Li
          onClick={handlerOnClick}
         
          >IT</Li>
          <Li
          onClick={handlerOnClick}
        
         
          >Deportes</Li>
          <Li
          onClick={handlerOnClick}
         
          >Opinion</Li>
          <Li
          onClick={handlerOnClick}
        
          >Espectáculos</Li>
        </Ul>
    </ContainerCategories>
  )
}
