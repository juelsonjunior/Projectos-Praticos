export function Buttons({ text, action }) {
  return (
    <>
      <button
        className="bg-slate-950 px-5 py-2 text-white rounded-lg hover:text-indigo-500 duration-300 transition ease-in-out hover:-translate-y-2 hover:shadow-md hover:shadow-indigo-500/40 active:scale-95"
        onClick={action}
      >
        {text}
      </button>
    </>
  );
}
