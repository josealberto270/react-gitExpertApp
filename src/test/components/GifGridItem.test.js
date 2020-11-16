import React from 'react'
import { shallow } from 'enzyme'

import { GifGridItem } from '../../components/GifGridItem'

describe('Pruebas en el componente GifGridItem', () => {

  const _title = 'Un titulo'
  const _url = 'http://localhost/algo.jpg'
  const wrapper = shallow(<GifGridItem title={_title} url={_url} />)

  test('debe de mostrar <GifGridItem /> correctamente', () => {


    expect(wrapper).toMatchSnapshot();
  })

  test('debe de tener uan parrafo con el title', () => {

    const p = wrapper.find('p')
    expect(p.text().trim()).toBe(_title)

  })

  test('debe de tener la imagen igual al url y alt de losprops', () => {
    const img = wrapper.find('img')
    // se puede acceder a los property de los elementos
    // console.log(img.props());
    // console.log(img.prop('src'));
    expect(img.prop('src')).toBe(_url)
    expect(img.prop('alt')).toBe(_title)
  })

  test('debe de tener la clase nimate__fadeIn', () => {
    const div = wrapper.find('div')
    const className = div.prop('className')

    expect(className.includes('animate__fadeIn')).toBe(true)
  })




})
