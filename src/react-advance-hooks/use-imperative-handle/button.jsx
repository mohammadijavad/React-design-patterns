export default function Button({ onclick }) {
  return (
    <div>
      <button
        onClick={onclick}
        className="mt-3 bg-blue-400 text-white rounded-md p-3"
      >
        click me
      </button>
    </div>
  );
}
