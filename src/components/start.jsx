import { useNavigate } from 'react-router-dom';
import Footer from './Footer2';
import Header2 from './Header2';

export default function Start() {
  const navigate = useNavigate();

  const images = [
    { Title: 'Branding', src: 'branding.webp', path: '/branding' },
    { Title: 'Marketing', src: 'marketing.webp', path: '/Marketing' },
    { Title: 'Editorial', src: 'editorial.webp', path: '/editorial' },
    { Title: 'Art Direction', src: 'art diraction.webp', path: '/art_direction' },
    { Title: 'Visual Identities', src: 'visiual idenntities.webp', path: '/visual-identities' },
  ];

  return (
    <div>
      <Header2 />

      {/* Intro Section */}
      <div className="container pt-5 px-3">
        <div className="row align-items-center">
          <div className="col-12 col-md-8">
            <h1 className="font-serif fw-bold fs-2 fs-md-1 lh-sm">
              Hey there, I am a multidisciplinary designer & art
              <br className="d-none d-md-block" />
              director
            </h1>
          </div>
          <div className="col-12 col-md-4 mt-3 mt-md-0">
            <p className="text-muted small">
              *my personal favorite projects can be found below
            </p>
          </div>
        </div>
      </div>


      <div className="mx-auto h-1 bg-dark mt-4" style={{ width: '80%' }} />

      <div className="mt-4 bg-purple-200 py-2 text-center">
        <div className="marquee">
          💥 My personal Faves My personal Faves My personal Faves 💥
        </div>

      </div>


      <div className="bg-yellow-100 py-5">
        <div className="container">

          <div className="row align-items-center mb-4">
            <div className="col-12 col-lg-6 mb-3 mb-lg-0">
              <img
                src="larubiya.webp"
                className="img-fluid rounded shadow-sm w-100 cursor-pointer"
                alt="Laru Beya"
                onClick={() => navigate('/larubiya')}
              />
            </div>
            <div className="col-12 col-lg-6">
              <strong className="fs-4 font-serif">Laru Beya</strong>
              <div className="h-1 bg-dark mt-2 mb-3" style={{ width: '75%' }} />
              <p className="fs-6">
                I created a new identity for an incredible non-profit organization
                that empowers youth through surfing.
              </p>
            </div>
          </div>

          <p className="text-muted small ms-2">photo by echo yun chen</p>


          <div className="row align-items-center mt-5 flex-column-reverse flex-lg-row">
            <div className="col-12 col-lg-6 mt-3 mt-lg-0">
              <strong className="fs-4 font-serif">Blue Apron’s Kids Cooking Camp</strong>
              <div className="h-1 bg-dark mt-2 mb-3" style={{ width: '75%' }} />
              <p className="fs-6">
                I designed various materials to help educate and engage with kids
                about where their food comes from and encourage home cooking.
              </p>
            </div>
            <div className="col-12 col-lg-6 mb-3 mb-lg-0">
              <img
                src="fc.2.gif"
                className="img-fluid rounded shadow-sm w-100 cursor-pointer"
                alt="Blue Apron"
                onClick={() => navigate('/kids-cooking')}
              />
            </div>
          </div>
        </div>
      </div>


      <h1 className="font-serif text-center mb-4 mt-5 fs-2">Additional selected work</h1>


      <div className="container mb-5">
        <div className="grid grid-cols-3 gap-3 mx-10">
          {images.map((img, index) => (
            <div key={index} className="flex flex-col cursor-pointer">
              <div
                className="w-full aspect-[4/3] overflow-hidden rounded"
                onClick={() => navigate(img.path)}
              >
                <img
                  src={img.src}
                  alt={img.Title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-center mt-2 font-medium text-lg font-serif">
                {img.Title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
