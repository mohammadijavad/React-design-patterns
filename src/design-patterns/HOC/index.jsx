import checkProps from "./example-1-check-props/check-props";
import User from "./example-1-check-props/user";
import includeUser from "./example-2-feetch-data/include-user";

export default function HOCPattern() {
  //example 1 usage
  const WrapperProps = checkProps(User);
  //<WrapperProps user={{email:"test@gmail.com"}} />

  //example 2 usage
  const WrapperUser = includeUser(User, 1);

  return (
    <div>
      <WrapperUser />
    </div>
  );
}
