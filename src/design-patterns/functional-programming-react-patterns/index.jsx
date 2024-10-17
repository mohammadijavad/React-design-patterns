import RedBigButton, { SmallGreenButton } from "./partial";

export default function FunctionalProgrammingReact() {
  return (
    <div>
      <RedBigButton
        fontSize={"18px"}
        color="black"
        text={"click me"}
        padding="10px 20px"
        bg={"lime"}
      />
      <SmallGreenButton />
    </div>
  );
}
