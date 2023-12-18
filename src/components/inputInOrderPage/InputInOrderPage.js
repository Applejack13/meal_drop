import "../inputInOrderPage/inputInOrderPage.css"
import { useState } from "react"

function InputInOrderPage({
  placeholder,
  name,
  text,
  type,
  validation,
  additionalClassName,
}) {
  const [inputValue, setInputValue] = useState("")
  const [isValid, setIsValid] = useState(true)
  const [isFocused, setIsFocused] = useState(false)

  const handleInputChange = (e) => {
    const value = e.target.value
    setInputValue(value)

    setIsValid(validation(value))
  }

  const handleInputFocus = () => {
    setIsFocused(true)
  }

  const handleInputBlur = () => {
    setIsFocused(false)
  }

  return (
    <div>
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
