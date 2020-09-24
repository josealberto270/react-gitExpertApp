import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ categoria }) => {

  const {data,loading} = useFetchGifs( categoria )

  return (
    <>
      <h3 className=" animate__animated animate__fadeIn">{categoria}</h3>
      {loading && <p className="animate__animated animate__flash">Loading</p>}      
      <div className="card-grid">
        {
          data.map((img) => {
            return <GifGridItem {...img} key={img.id} />
          })
        }
      </div>
    </>
  )
}
