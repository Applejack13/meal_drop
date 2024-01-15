import "../secondHeader/secondHeader.css"

export const SecondHeader = (props) => {
  const { className, text } = props
  return (
    <div className={className}>
      <h2>{text}</h2>
    </div>
  )
}
