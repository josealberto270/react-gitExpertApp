import { useFetchGifs } from "../../hooks/useFetchGifs"
import { renderHook } from '@testing-library/react-hooks'
import '@testing-library/jest-dom'

describe('Pruebas en el hook useFetchGifs', () => {

  test('debe de retornar el estado inicial', async () => {

    // const { data, loading } = useFetchGifs('Dagon ball')
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Dagon ball'))
    const {data, loading} = result.current
    await waitForNextUpdate()
    // console.log(data,loading);

    expect( data ).toEqual([])
    expect( loading ).toBe(true)
  })

  test('debe retornar un arreglo de imagenes y el loading en false', async () => {
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Dagon ball'))
    await waitForNextUpdate()
    const {data, loading} = result.current

    // console.log(data,loading);

    expect( data.length ).toBe(10)
    expect( loading ).toBe(false)
  })
  

})
