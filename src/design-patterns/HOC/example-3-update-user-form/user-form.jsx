import includeUpdatableUser from "./include-updateble-user";
import User from "../example-1-check-props/user";

function UserForm({ user, onPostUser, onChangeUser, onResetUser }) {
  return (
    <div>
      <User user={user} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="user name"
          value={user?.name}
          onChange={(e) => onChangeUser({ name: e.target.value })}
        />
        <input
          type="text"
          placeholder="user email"
          value={user?.email}
          onChange={(e) => onChangeUser({ email: e.target.value })}
        />
        <button type="button" onClick={onResetUser}>
          Rest info
        </button>
        <input type="submit" value="update user" onClick={onPostUser} />
      </form>
    </div>
  );
}
export const FormWrapper = includeUpdatableUser(UserForm, 3);
