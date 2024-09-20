export default function checkProps(Component) {
  return (props) => {
    return <Component {...props} />;
  };
}
