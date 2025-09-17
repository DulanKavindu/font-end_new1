import { useState } from "react";

export function Imageslider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-square flex items-center justify-center bg-gray-200">
        No images available
      </div>
    );
  }

  return (
    <div className="w-full aspect-square flex flex-col items-center gap-2">
      
      <div className="w-full flex-1">
        <img
          src={images[currentIndex]}
          alt={`image-${currentIndex}`}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

    
      <div className="flex gap-2 mt-2 overflow-x-auto">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`thumb-${index}`}
            className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
              index === currentIndex ? "border-blue-500" : "border-transparent"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
