import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategoria = ({ setCategorias }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const _inputValue = inputValue.trim()
    if(_inputValue.length>2){
      setCategorias(cats => [_inputValue, ...cats])
      setInputValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  )
}

AddCategoria.propTypes = {
  setCategorias : PropTypes.func.isRequired
}