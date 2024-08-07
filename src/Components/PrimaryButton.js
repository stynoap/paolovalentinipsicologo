

function PrimaryButton({ testo, href=false, onclick, cta=false  }) {
  return (
    <>
      <button onClick={typeof onclick === 'function' ? onclick : () => {}}
       className={`px-10 lg:text-3xl text-xl tracking-wide font-medium py-3 rounded-3xl ${
        cta ? 'bg-amber-500 hover:bg-amber-600' : 'bg-indigo-500 hover:bg-indigo-600'
      } text-white`}
       >
        
      <a href={href}>{testo}</a> 
      </button>
    </>
  );
}

export default PrimaryButton;
