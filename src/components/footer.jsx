import React from 'react';

function Footer() {
  const images = [
    'a1.webp','a2.webp','a3.webp','a4.webp','a5.webp','a6.webp','a7.webp','a8.webp',
    'a9.webp','a10.webp','a11.webp','a12.webp','a13.webp','a14.webp','a15.webp',
    'a16.webp','a17.webp','a18.webp','a19.webp','a20.webp','a21.webp','a22.webp',
    'a23.webp','a24.webp','a25.webp',
  ];

  return (
    <div className="mt-4">

      {/* 🔹 Image Slider */}
      <div
        style={{
          overflow: "hidden",
          width: "100%",
          borderTop: "2px solid #eee",
          borderBottom: "2px solid #eee",
          background: "#fff",
        }}
      >
        <div
          style={{
            display: "flex",
            animation: "scroll 8s linear infinite",
          }}
        >
          {images.concat(images).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`slide-${index}`}
              style={{
                width: "250px",
                height: "200px",
                objectFit: "cover",
                marginRight: "10px",
                borderRadius: "5px",
                flexShrink: 0,
              }}
            />
          ))}
        </div>

        {/* Inline CSS for scroll animation */}
        <style>
          {`
            @keyframes scroll {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
          `}
        </style>
      </div>

      {/* 🔹 Footer Links */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center py-3 px-2">
        <h4 className="mb-2 mb-md-0">My App</h4>
        <div className="d-flex gap-3">
          <p className="mb-0">Blog</p>
          <p className="mb-0">About</p>
          <p className="mb-0">Support</p>
        </div>
      </div>

      {/* 🔹 Bottom Footer */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-secondary py-2 px-2 border-top">
        <h6 className="mb-1 mb-md-0">© 2025 Dribble &nbsp; Terms &nbsp; Privacy &nbsp; Policy</h6>
        <h6 className="mb-0">Jobs &nbsp; Designers &nbsp; Freelancers</h6>
      </div>

    </div>
  );
}

export default Footer;
