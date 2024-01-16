import "../secondHeader/secondHeader.css"

export const SecondHeader = ({ className, text }) => {
  return (
    <div className={className}>
      <h2>{text}</h2>
    </div>
  )
}
