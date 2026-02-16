import { Buttons } from "./Buttons";

const layout =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <Buttons />
        <Component {...props} />
      </div>
    );
  };

export default layout;
