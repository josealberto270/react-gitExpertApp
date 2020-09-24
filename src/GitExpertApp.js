import React, {useState} from 'react'
import { AddCategoria } from './components/AddCategoria'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

  // const categorias = ['One Punch', 'Samurai X', 'Dragon Ball']
  const [categorias, setCategorias] = useState(['Dragon Ball'])

  // const handleAdd = () => {
  //   const newCategoria = 'One Piece'
  //   setCategorias([...categorias,newCategoria])
  // }

  return <>
    <h2>GifExpertApp</h2>
    <AddCategoria setCategorias={setCategorias} />
    <hr/>
    <ol>
      {
        categorias.map((categoria, index)=>
          <GifGrid key={index} categoria={categoria} />
        )
      }
    </ol>
  </>
}