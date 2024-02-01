export function CategoriesWindow({ ...props }) {
  return (
    <div className="categoriesWindow">
      <div className="categoriesWindowContainer">
        <img src={props.img} alt={props.title} />
        <h3>{props.title}</h3>
      </div>
    </div>
  );
}
