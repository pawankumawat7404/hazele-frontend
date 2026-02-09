import React from "react";
import Header from "./header";
function Gallery() {
  const images = [
    "a1.webp","a2.webp","a3.webp","a4.webp","a5.webp",
    "a6.webp","a7.webp","a8.webp","a9.webp","a10.webp"
  ];

  return (
    <div style={{ overflow: "hidden", width: "100%", border: "1px solid #ccc", padding: "10px 0" }}>
      <Header/>
      <div className="mt-5"
        style={{
          display: "flex",
          width: "max-content",
          animation: "slide 20s linear infinite",
        }}
      >
        {images.concat(images).map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`img-${index}`}
            style={{
              width: "225px",    
              height: "150px",   
              objectFit: "cover",
              borderRadius: "5px",
              marginRight: "2px",
              transition: "transform 0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.5)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        ))}
      </div>

      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
}

export default Gallery;
