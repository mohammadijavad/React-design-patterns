import React from "react";

const Component = ({ keyword }) => {
  const init = performance.now();
  while (init > performance.now() - 100) {
    //Slowing down the component on purpose.
  }
  return (
    <div className="border mx-2 rounded-lg border-gray-500 my-3 p-3">
      <h2>I am a slow component</h2>
      {keyword}
    </div>
  );
};

export const HeavyComponent = React.memo(Component);
