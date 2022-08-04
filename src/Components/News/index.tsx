import React from 'react'
import { PropsNews } from '../../Interfaces/apiInterfaces'
import { New } from '../New'
import { ContainerNews } from './styled'




export const News = ( {articles}:PropsNews) => {
  

  return (
    <ContainerNews>
      {
        articles.map((item)=>{
          return <New
          key={item.title}
          title={item.title}
          content={item.content}
          urlToImage = {item.urlToImage}
        
          />
        })
      }      
    </ContainerNews>
  )
}
