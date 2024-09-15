import React from "react";

import DogImages from "./dog-images";

export default function Example1() {
  return (
    <div>
      <h1>
        Browse Dog Images{" "}
        <span role="img" aria-label="emoji">
          🐕
        </span>
      </h1>
      <DogImages />
    </div>
  );
}

