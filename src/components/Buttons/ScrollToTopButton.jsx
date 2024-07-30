const ScrollToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-40 bg-gray-800 text-white p-4 rounded-xl shadow-lg hover:bg-blue-700 transition duration-700"
            aria-label="Scroll to top">
            ↑
        </button>
    );
};

export default ScrollToTopButton;
