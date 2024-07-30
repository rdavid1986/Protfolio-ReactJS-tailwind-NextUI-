
const PrintSectionButton = () => {
  const handlePrint = () => {
    const sectionToPrint = document.getElementById('sectionCV');
    if (sectionCV) {
      const content = sectionToPrint.innerHTML;
      const originalContent = document.body.innerHTML;

      document.body.innerHTML = content;
      window.print();

      document.body.innerHTML = originalContent;
    } else {
      console.error('No se encontró el elemento para imprimir.');
    }
  };

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10 mb-10"
        onClick={handlePrint}
      >
        Imprimir CV
      </button>
    </div>
  );
};

export default PrintSectionButton;
