import "./../foodCategory/foodCategory.css"

function FoodCategory({ img, alt, title }) {
  return (
    <div className="FoodCategory">
      <img src={img} alt={alt} />
      <p>{title}</p>
    </div>
  )
}

export default FoodCategory
