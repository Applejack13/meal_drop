import React, { useState } from "react"

import "../inputInOrderPage/inputInOrderPage.css"

export function InputInOrderPage(props) {
  const {
    placeholder,
    name,
    text,
    type,
    validation,
    additionalClassName,
    isVisible,
  } = props
  const [inputValue, setInputValue] = useState("")
  const [isValid, setIsValid] = useState(true)
  const [isFocused, setIsFocused] = useState(false)
  const [counter, setCounter] = useState(0)

  const handleInputChange = (e) => {
    const value = e.target.value
    setInputValue(value)
    setIsValid(validation(value))
    if (value.length > 0) {
      setCounter(counter + 1)
    }

    console.log(counter)
    return counter
  }

  const handleInputFocus = () => {
    setIsFocused(true)
  }

  const handleInputBlur = () => {
    setIsFocused(false)
  }

  return (
    <div className={isVisible}>
      <p>{text}</p>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className={`input ${
          isFocused || inputValue ? (isValid ? "valid" : "invalid") : ""
        } ${additionalClassName}`}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </div>
  )
}
