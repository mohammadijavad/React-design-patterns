import { useEffect, useState } from "react";
import axios from "axios";
export default function includeUpdatableUser(Component, userId) {
  return (props) => {
    //user before update
    const [initialUser, setInitialUser] = useState();
    //user info we edited on client side
    const [user, setUser] = useState();

    function onChangeUser(update) {
      setUser({ ...user, ...update });
    }

    async function onPostUser() {
      const response = await axios.post(
        `http://localhost:9090/users/${userId}`,
        { user },
      );
      setInitialUser(response.data);
      setUser(response.data);
    }
    function onResetUser() {
      setUser(initialUser);
    }

    useEffect(() => {
      (async () => {
        const response = await axios.get(
          `http://localhost:9090/users/${userId}`,
        );
        setInitialUser(response.data);
        setUser(response.data);
      })();
    }, []);

    return (
      <Component
        {...props}
        user={user}
        onPostUser={onPostUser}
        onChangeUser={onChangeUser}
        onResetUser={onResetUser}
      />
    );
  };
}
