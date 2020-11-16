import { shallow } from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom'
import { GifExpertApp } from '../GitExpertApp';


describe('Prueba de la pagina GifExpertApp', () => {

  test('debe de mostrar <GifExpertApp />', () => {

    const wrapper = shallow(<GifExpertApp />)
    expect(wrapper).toMatchSnapshot()

  })

  test('debe de mostrar una lista de categotras', () => {
    const categorias = ['Naruto', 'Dragon ball']
    const wrapper = shallow(<GifExpertApp defaultCategorias={categorias} />)

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('GifGrid').length).toBe(categorias.length)

  })


})
