import jsPDF from 'jspdf';

const DownloadSectionButton = () => {
    const handleDownload = () => {
        const sectionToDownload = document.getElementById('sectionCV');
        if (sectionToDownload) {
            const doc = new jsPDF();
            const content = sectionToDownload.innerText || sectionToDownload.textContent;

            doc.text(content, 10, 10);
            doc.save('CV.pdf');
        } else {
            console.error('No se encontró el elemento para descargar.');
        }
    };

    return (
        <div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10 mb-10"
                onClick={handleDownload}
            >
                Descargar CV
            </button>
        </div>
    );
};

export default DownloadSectionButton;

