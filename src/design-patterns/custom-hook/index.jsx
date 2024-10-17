import useCurrentUserHook from "./current-user.hook";
import User from "../HOC/example-1-check-props/user";

export default function CustomHook() {
  const user = useCurrentUserHook();
  return (
    <div>
      <User user={user} />
    </div>
  );
}
