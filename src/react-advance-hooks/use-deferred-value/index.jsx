import { useState } from "react";
import { HeavyComponent } from "./heavy-component";
//priority of re-render
function DeferredValue() {
  const [keyword, setKeyword] = useState("");
  return (
    <div className="mt-4 mx-3">
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="border p-3 rounded-lg focus:outline-none"
      />
      <HeavyComponent keyword={keyword} />
    </div>
  );
}

export default DeferredValue;
