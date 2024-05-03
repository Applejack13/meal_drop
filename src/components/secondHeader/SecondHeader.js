import { ThirdHeader } from "../../allPages";

export function SecondHeader({ ...props }) {
  return (
    <div className={props.className}>
      <h2>{props.text}</h2>
      <ThirdHeader {...props} />
    </div>
  );
}
