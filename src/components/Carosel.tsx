import React, { useState } from 'react';

interface CarouselProps {
    images: string;
}

const ResumeCarousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fallback to an empty array if images is undefined or null
    if (!images || images.length === 0) {
        return <div>No images available</div>; // Or any fallback content you prefer
    }

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="max-w-2xl mx-auto mt-12 border border-gray-300 rounded-lg shadow-sm overflow-hidden">
            {/* Card Header (No color, just text) */}
            <div className="p-6 text-center">
                <h2 className="text-2xl font-semibold">Resume Templates</h2>
                <p className="mt-2 text-gray-600">Choose your preferred template</p>
            </div>

            {/* Carousel Content */}
            <div className="relative">
                <img
                    src={images}
                    alt={`Template ${currentIndex + 1}`}
                    className="w-full h-60 object-cover rounded-t-lg transition-transform duration-700 ease-in-out transform"
                />

                {/* Previous Button */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-40 p-3 rounded-full hover:bg-opacity-60 transition"
                >
                    &#8249;
                </button>

                {/* Next Button */}
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-40 p-3 rounded-full hover:bg-opacity-60 transition"
                >
                    &#8250;
                </button>
            </div>

            {/* Use Template Button */}
            <div className="p-4 text-center">
                <button
                    className="bg-blue-500 text-white text-xl px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
                >
                    Use Template
                </button>
            </div>
        </div>
    );
};

export default ResumeCarousel;
