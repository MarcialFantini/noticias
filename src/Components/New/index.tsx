import React from 'react'
import { NewProps } from '../../Interfaces/props'
import { BodyNew,Image, ContainerNew, TextBody, TitleNew, TextContainer } from './style'

export const New = 
({title,
  urlToImage,
  content
}:NewProps) => {
  return (
    <ContainerNew  >
        <TitleNew>
          {title}
        </TitleNew>
        <BodyNew>
            <Image
            src={urlToImage}
            />
         <TextContainer>
            <TextBody>
              {content}
            </TextBody>
           

         </TextContainer>
              
        </BodyNew>
    </ContainerNew>
  )
}
