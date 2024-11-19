import { useState } from "react";
import Cover from "./cover";
import Reviews from "./reviews";
import Writer from "./writer";
import { StyledButton } from "./styled-elements";

function Transition() {
  const [section, setSection] = useState("Cover");

  const sectionHandler = (sec) => {
    setSection(sec);
  };
  return (
    <>
      <Button onClick={() => sectionHandler("Cover")}>Cover</Button>
      <Button onClick={() => sectionHandler("Reviews")}>Book Reviews</Button>
      <Button onClick={() => sectionHandler("Writer")}>Book's Writer</Button>
      {section === "Cover" ? (
        <Cover />
      ) : section === "Reviews" ? (
        <Reviews />
      ) : (
        <Writer />
      )}
    </>
  );
}

const Button = ({ onClick, ...props }) => {
  return (
    <StyledButton
      onClick={() => {
        onClick();
      }}
      {...props}
    />
  );
};

export default Transition;
