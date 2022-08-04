import React, { useState } from 'react'
import { Button, FormSearch, Input } from './styled'

export const Search = ({setShare}:{setShare:Function}) => {
  const [state,setSate] = useState("")

  const handlerOnSubmit = (event: any)=>{
    event.preventDefault()
    setShare(state)
  }

  return (
    <div>
      <FormSearch
      onSubmit={handlerOnSubmit}
      >
        <Input
        onChange={(event)=>{
            setSate(event.target.value)
        }}

        placeholder='Buscar con palabra clave!'
        ></Input>
        <Button type="submit">
          Buscar!

        </Button>
      </FormSearch>
    </div>
  )
}
