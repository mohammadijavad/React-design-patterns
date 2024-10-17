import { useEffect, useState } from "react";
import axios from "axios";

export default function useUser(userId) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/users/${userId}`);
      setUser(response.data);
    })();
  }, [userId]);
}
