import "../categoriesWindow/categoriesWindow.css"

export const CategoriesWindow = (props) => {
  const { img, title } = props
  return (
    <div className="categoriesWindow">
      <div className="categoriesWindowContainer">
        <img src={img} alt={title} />
        <h3>{title}</h3>
      </div>
    </div>
  )
}
