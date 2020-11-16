import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { AddCategoria } from '../../components/AddCategoria'

describe('pruebas el componente AddCategoria', () => {

  const setCategorias = jest.fn()
  let wrapper = shallow(<AddCategoria setCategorias={setCategorias}/>)

  beforeEach(()=>{
    jest.clearAllMocks()
    wrapper = shallow(<AddCategoria setCategorias={setCategorias}/>)
  })

  test('debe mostrarce correctamente', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('debe de cambiar la caja de texto', () => {

    const input = wrapper.find('input')
    const value = 'Hola Mundo'

    input.simulate('change', { target: { value } })

    expect(wrapper.find('p').text().trim()).toBe(value)
  })
  
  test('no debe de postear la informacion', () => {
    
    wrapper.find('form').simulate('submit', { preventDefault(){} })

    expect( setCategorias).not.toHaveBeenCalled()
  })
  
  test('debe de llamar a setCategoria y limpiar la caja de texto', () => {
    
    const value = 'Hola Mundo'
    const input = wrapper.find('input')

    input.simulate('change', { target: { value } })
    wrapper.find('form').simulate('submit', { preventDefault(){} })

    // que sea llamada la funcion por lo menos una vez
    expect(setCategorias).toHaveBeenCalled()
    // que sea llamada la funcion n veces
    expect(setCategorias).toHaveBeenCalledTimes(1)
    // que sea llamada por lo menos una vez y que sea una funcion
    expect(setCategorias).toHaveBeenCalledWith( expect.any(Function) )

    // el valor del input debe de estar ''
    expect(input.prop('value')).toBe('')

  })
  
  
})
