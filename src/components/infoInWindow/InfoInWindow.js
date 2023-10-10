import "./../infoInWindow/infoInWindow.css"

const InfoInWindow = ({ img, h3, title, subtitle, subtitle2 }) => {
  return (
    <div className="productWindow">
      <div className="windows">
        <img src={img} alt="info" />
        <p>{h3}</p>
        <p>{title}</p>
        <p>{subtitle}</p>
        <p>{subtitle2}</p>
      </div>
    </div>
  )
}

export default InfoInWindow
