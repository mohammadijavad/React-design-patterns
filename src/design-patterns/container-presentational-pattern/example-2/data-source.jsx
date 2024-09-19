import React, { useEffect } from "react";
import { useState } from "react";

export default function  DataSource  ({ getData = () => {},render  }) {
    const [resource, setResource] = useState(null);

    useEffect(() => {
        (async () => {
            const data = await getData();
            setResource(data);
        })();
    }, [getData]);

    return render(resource)
};
