import React, { useState } from "react"
import "../inputInOrderPage/inputInOrderPage.css"

function InputInOrderPage({
  placeholder,
  name,
  text,
  type,
  validation,
  additionalClassName,
  isVisible,
}) {
  const [inputValue, setInputValue] = useState("")
  const [isValid, setIsValid] = useState(true)
  const [isFocused, setIsFocused] = useState(false)
  const [fillOutProgress, setFillOutProgress] = useState(1)

  const handleInputChange = (e) => {
    const value = e.target.value
    setInputValue(value)
    setIsValid(validation(value))
    if (value !== "" && validation(value) && fillOutProgress < 2) {
      setFillOutProgress(fillOutProgress + 1)
      console.log(`fillOutProgress now is ${fillOutProgress}`)
      // пока что наиболее приближенный вариант
    }
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

export default InputInOrderPage
