import { useEffect, useState } from "react";
import axios from "axios";

export default function includeUser(Component, userId) {
  return (props) => {
    const [user, setUser] = useState([]);
    useEffect(() => {
      (async () => {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
        );
        setUser(response.data);
      })();
    }, [userId]);
    return <Component {...props} user={user} />;
  };
}
