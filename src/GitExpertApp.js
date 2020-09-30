import React, {useEffect, useState} from 'react'
import { AddCategoria } from './components/AddCategoria'
import { GifGrid } from './components/GifGrid'
import '../src/static/nps'

export const GifExpertApp = () => {

  // const categorias = ['One Punch', 'Samurai X', 'Dragon Ball']
  const [categorias, setCategorias] = useState(['Dragon Ball'])

  // const handleAdd = () => {
  //   const newCategoria = 'One Piece'
  //   setCategorias([...categorias,newCategoria])
  // }
  useEffect(()=>{
    delighted.survey({
      email: "customer@hemandstitch.com", // customer email (optional)
      name: "Bailey Dixon",               // customer name (optional)
      properties: {                       // extra context (optional)
        orderId: "123ABC",
        shippingMethod: "Ground"
      }
    })
  })

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