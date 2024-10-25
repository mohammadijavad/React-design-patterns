import Buttons from "./buttons";
import Counter from "./counter";
import mitt from "mitt";
export const emitter = mitt();
const Parent = () => {
  return (
    <>
      <Buttons />
      <Counter />
    </>
  );
};

export default Parent;
