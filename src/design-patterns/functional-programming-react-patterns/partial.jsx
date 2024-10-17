import { styled } from "styled-components";

function PartialPattern(Component, initialProps) {
  return (props) => {
    return <Component {...initialProps} {...props} />;
  };
}

const BaseButton = styled.button`
  background-color: ${(props) => (props.bg ? props.bg : "red")};
  color: ${(props) => (props.color ? props.color : "white")};
  padding: ${(props) => (props.padding ? props.padding : "5px 5px")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  border-radius: 10px;
`;
function Button({ text, color, padding, fontSize, bg }) {
  return (
    <BaseButton
      text={text}
      fontSize={fontSize}
      padding={padding}
      color={color}
      bg={bg}
    >
      {text}
    </BaseButton>
  );
}

const RedBigButton = (props) => {
  return <Button {...props} />;
};

export const SmallGreenButton = PartialPattern(Button, {
  fontSize: "10px",
  bg: "red",
  padding: "5px 10px",
  text: "i am red button",
});
export default RedBigButton;
