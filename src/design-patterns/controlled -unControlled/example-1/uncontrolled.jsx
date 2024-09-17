import { useRef } from 'react';

function UncontrolledForm() {
  const nameInputRef = useRef(null); // Using a ref to access the DOM directly

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Submitted name: " + nameInputRef.current.value); // Accessing the input's value using ref
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          ref={nameInputRef} // Uncontrolled by state, handled by DOM
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
