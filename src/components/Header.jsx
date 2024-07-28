import React, { useState } from 'react';

const Header = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "https://i.pinimg.com/564x/0f/aa/49/0faa4950da4f999291eee08be667634b.jpg",
        "https://i.pinimg.com/736x/e6/da/e5/e6dae5f903c9942930114b9ce075ef23.jpg",
        "https://i.pinimg.com/736x/89/0b/5b/890b5bb7a244f77f2adda70ca57224ee.jpg"
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="pr-10 pl-10 relative w-[13in] h-[3in] shadow-xl rounded-2xl flex-row" data-carousel="slide">
            <div className="relative h-full overflow-hidden rounded-lg sm:h-64 md:h-80 lg:h-[6in]">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`flex absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                        data-carousel-item
                    >
                        <img src={image} alt={`Slide ${index + 1}`} className="w-auto h-full object-cover rounded-2xl" />
                        <h1
                            key={index}
                            className="p-2 ml-5 mt-10 text-4xl font-semibold font-mono drop-shadow-lg flex-col justify-self-center"
                            >
                                TOP CLASSIC
                                <p className="text-sm text-balance mt-4">Super classic happy ending, edge balance pass me as a king. Super classic happy ending, edge balance pass me as a king. Super classic happy ending, edge balance pass me as a king. balance pass me as a king</p>
                        </h1>
                        
                    </div>
                ))}
        </div>
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-600' : 'bg-white'}`}
                        aria-current={index === currentIndex}
                        aria-label={`Slide ${index + 1}`}
                        data-carousel-slide-to={index}
                        onClick={() => setCurrentIndex(index)}
                    ></button>
                ))}
            </div>
            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={handlePrev} data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={handleNext} data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default Header;
