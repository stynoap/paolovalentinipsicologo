function SecondaryButton({ text, onclick, href = false }) {
  return (
    <>
      <button
        onClick={typeof onclick === 'function' ? onclick : () => {}}
        className="px-5 mt-3 py-4 bg-emerald-500 text-gray-50 rounded-xl text-xl font-semibold hover:bg-emerald-600 mb-10"
      >
        <a href={href}>{text}</a>
      </button>
    </>
  );
}

export default SecondaryButton;
