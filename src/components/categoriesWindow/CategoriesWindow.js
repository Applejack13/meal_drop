import "../categoriesWindow/categoriesWindow.css"

function CategoriesWindow({ img, title }) {
  return (
    <div className="categoriesWindow">
      <div className="categoriesWindowContainer">
        <img src={img} alt={title} />
        <h3>{title}</h3>
      </div>
    </div>
  )
}

export default CategoriesWindow
