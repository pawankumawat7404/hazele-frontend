import Footer from './footer';
import Header from './header';
function Home() {
  const images = [
    'a1.webp','a2.webp','a3.webp','a4.webp','a5.webp','a6.webp','a7.webp','a8.webp',
    'a9.webp','a10.webp','a11.webp','a12.webp','a13.webp','a14.webp','a15.webp',
    'a16.webp','a17.webp','a18.webp','a19.webp','a20.webp','a21.webp','a22.webp',
    'a23.webp','a24.webp','a25.webp',
  ];

  return (
    <div className="container my-4">
      <Header/>
     
      {/* Main headings */}
      <h2 className="text-center mb-3">
        Gallery Website
      </h2>
      <h5 className="text-center mb-4" style={{ fontSize: '1.25rem', fontWeight: '400', lineHeight: '1.6' }}>
        Inspirational designs, illustrations, and graphic elements from the world’s best designers.
        Want more inspiration? Browse our search results...
      </h5>

      {/* Image grid */}
      <div className="d-flex flex-wrap justify-content-center">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`gallery-${index}`}
            style={{
              width: '200px',
              height: 'auto',
              margin: '10px',
              borderRadius: '10px',
              objectFit: 'cover',
            }}
          />
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
