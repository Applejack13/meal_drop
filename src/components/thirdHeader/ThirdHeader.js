import "../thirdHeader/thirdHeader.css";

export function ThirdHeader({ ...props }) {
  return (
    <div className={`otherStyles ${props.thirdHeaderClassName}`}>
      <h2>{props.restaurantName}</h2>
      <p>{props.description}</p>
      <p>{props.rating}</p>
      <p>{props.buttons}</p>
    </div>
  );
}
