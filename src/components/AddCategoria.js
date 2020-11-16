import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategoria = ({ setCategorias }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const _inputValue = inputValue.trim()
    if (_inputValue.length > 2) {
      setCategorias(cats => [_inputValue, ...cats])
      setInputValue('')
    }
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>{inputValue}</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
}

AddCategoria.propTypes = {
  setCategorias: PropTypes.func.isRequired
}