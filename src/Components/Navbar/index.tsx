import React, { useState } from 'react'
import { Button, ContainerNavbar, Icon, TitleNavbar } from './navStyle'

export const Navbar = ({setIsActive,isActive}:{setIsActive:any,isActive:boolean}) => {
 

  

  return (
    <ContainerNavbar>
        <Icon
        src='https://previews.123rf.com/images/sanek13744/sanek137441708/sanek13744170800030/83342846-mundo-noticias-plana-vector-icono-noticias-s%C3%ADmbolo-logo-ilustraci%C3%B3n-pictograma-plano-simple-del-conc.jpg'
        ></Icon>
        <TitleNavbar>
           
        </TitleNavbar>
        <Button
          onClick={()=>{
            setIsActive(!isActive)
          }}
        >
          Categories
        </Button>
    </ContainerNavbar>
  )
}
