import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineDelete, AiOutlineDownload } from "react-icons/ai";

const ImageGallery = () => {
  const [images, setImages] = useState(
    Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      src: `https://picsum.photos/200/200?random=${i + 1}`,
    }))
  );

  const [selectedImage, setSelectedImage] = useState(null);

  const handleAdd = () => {
    const newId = images.length + 1;
    setImages([...images, { id: newId, src: `https://picsum.photos/200/200?random=${newId}` }]);
  };

  const handleDelete = () => {
    if (selectedImage) {
      setImages(images.filter((img) => img.id !== selectedImage.id));
      setSelectedImage(null);
    }
  };

  const handleDownload = () => {
    if (selectedImage) {
      const link = document.createElement("a");
      link.href = selectedImage.src;
      link.download = `image-${selectedImage.id}.jpg`;
      link.click();
    }
  };

  return (
    <div className="relative h-screen flex flex-col justify-end bg-white">
      {/* Fullscreen overlay with selected image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-white flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          {/* Transparent album background */}
          <div className="absolute inset-0 p-8 grid grid-cols-4 gap-4 overflow-auto opacity-30">
            {images
              .filter((img) => img.id !== selectedImage.id)
              .map((img) => (
                <img
                  key={img.id}
                  src={img.src}
                  alt={`bg-${img.id}`}
                  className="w-full h-40 object-cover rounded shadow"
                />
              ))}
          </div>

          {/* Selected image */}
          <img
            src={selectedImage.src}
            alt="selected"
            className="max-w-3xl max-h-full rounded shadow-lg relative z-10"
          />
        </div>
      )}

      {/* Buttons on top right */}
      <div className="absolute top-4 right-4 flex gap-3 z-20">
        <button
          onClick={handleAdd}
          className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          <AiOutlinePlus size={20} />
        </button>
        <button
          onClick={handleDelete}
          className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          <AiOutlineDelete size={20} />
        </button>
        <button
          onClick={handleDownload}
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          <AiOutlineDownload size={20} />
        </button>
      </div>

      {/* Horizontal scrollable image row at bottom */}
      <div className="flex overflow-x-auto gap-4 p-4 bg-gray-100">
        {images.map((img) => (
          <div
            key={img.id}
            className="relative w-28 h-28 flex-shrink-0 cursor-pointer transition-transform duration-200"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img.src}
              alt={`img-${img.id}`}
              className="w-full h-full object-cover rounded border border-transparent transform transition duration-200 hover:scale-110 hover:border-black"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
 