import useCurrentUserHook from "./current-user.hook";
import User from "../HOC/example-1-check-props/user";
import useUser from "./user-hook";

export default function CustomHook() {
  const user = useCurrentUserHook();
  const getUserWithId = useUser(1);
  return (
    <div>
      <User user={user} />
      <User user={getUserWithId} />
    </div>
  );
}
