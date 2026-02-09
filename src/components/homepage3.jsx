import Header from './header';

function Home3() {

  const images = [
    'a1.webp','a2.webp','a3.webp','a4.webp','a5.webp','a6.webp','a7.webp','a8.webp',
    'a9.webp','a10.webp','a11.webp','a12.webp','a13.webp','a14.webp','a15.webp',
    'a16.webp','a17.webp','a18.webp','a19.webp','a20.webp','a21.webp','a22.webp',
    'a23.webp','a24.webp','a25.webp',
  ];

  return (
    <div>
      <Header />

      <div className="container-fluid mt-4">
        <p className="text-center fs-3 mb-3">All Images in One Row</p>

        {/* Scrollable Row of Images */}
        <div
          className="d-flex flex-row flex-nowrap overflow-auto p-3"
          style={{ gap: '15px', scrollBehavior: 'smooth' }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt=""
              className="rounded shadow-sm"
              style={{
                width: '220px',
                height: '150px',
                objectFit: 'cover',
                flexShrink: 0,
                borderRadius: '10px',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home3;
