import { useState } from 'react';

function ControlledForm() {
  const [name, setName] = useState(""); // React state controls the input

  const handleChange = (event) => {
    setName(event.target.value); // Updating the state when the input changes
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Submitted name: " + name); // Accessing the controlled state value
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name} // Controlled by state
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;
