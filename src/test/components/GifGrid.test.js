import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs')


describe('Pruebas en el componente GifGrid', () => {


  test('debe mostrar <GifGrid /> correctamente', () => {

    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    })

    const wrapper = shallow(<GifGrid categoria={'Naruto'} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('debe de mostrar items cuando se cargan imagenes useFetchgifs ', () => {

    const gifs = [{
      id: '1234',
      url: 'http://localhost/cualquiercosa/img.png',
      title: 'cualquier cosa'
    }]

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    })

    const wrapper = shallow(<GifGrid categoria={'Naruto'} />)
    expect(wrapper).toMatchSnapshot()
  })


})
