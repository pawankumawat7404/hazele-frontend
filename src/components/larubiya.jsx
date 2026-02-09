import Footer from './Footer2';
import Header2 from './Header2';

export default function LaruBiya() {

  return (
    <div>
      <Header2 />

      {/* Banner Image */}
      <div className="container mb-4 px-3">
        <img
          src="larubiya1.webp"
          alt="Laru Beya Banner"
          className="img-fluid w-100 rounded shadow-sm"
        />
      </div>

      {/* Intro Section */}
      <div className="container mt-5 mb-5 px-3 px-md-5">
        <h1 className="display-5 fw-normal font-serif">Laru Beya</h1>
        <hr className="border-2 border-dark mb-4" />

        <div className="row gy-4">
          {/* Left Info */}
          <div className="col-12 col-md-3">
            <p>
              <strong>Project</strong>
              <br />
              Identity Refresh and Branding
            </p>
            <p>
              <strong>Photography</strong>
              <br />
              Julie Florio
              <br />
              Rick Holbrook
            </p>
            <div>
              <strong>Original Logo</strong>
              <br />
              <img
                src="larubiya2.webp"
                alt="Original Logo"
                className="img-fluid mt-2 rounded"
              />
            </div>
          </div>

          {/* Middle Info */}
          <div className="col-12 col-md-3">
            <p>
              <strong>Role</strong>
              <br />
              Designer
            </p>
          </div>

          {/* Right Text */}
          <div className="col-12 col-md-6">
            <p className="text-justify">
              Laru Beya is a non-profit organization empowering the historically
              excluded youth of the Far Rockaways through surfing and water
              safety. Laru Beya means “on the beach” in the language of the
              Garifuna — a culturally preserved and unique Afro-Indigenous people
              still residing throughout Central America and the Caribbean.
              <br />
              <br />
              The organization was in need of a brand refresh. The mark pays
              homage to the founders who hail from Belize, where the national
              bird is the toucan. The different letter forms represent the
              people involved, coming together from all walks of life to create
              this community.
            </p>
            <div>
              <strong>New Logo</strong>
              <br />
              <img
                src="larubiya2a.gif"
                alt="New Logo"
                className="img-fluid mt-2 rounded"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Images */}
      <div className="container-fluid px-0">
        <div className="text-center mb-4">
          <img
            src="larubiya4.webp"
            alt="Laru Beya Showcase 1"
            className="img-fluid rounded w-100"
          />
        </div>

        <div className="text-center mb-4">
          <img
            src="larubiya3.webp"
            alt="Laru Beya Showcase 2"
            className="img-fluid rounded w-100"
          />
        </div>

        {/* Side-by-side images (responsive stack) */}
        <div className="row justify-content-center gx-3 gy-3 mb-5 px-2">
          <div className="col-12 col-sm-6 col-md-5">
            <img
              src="larubiya5.webp"
              alt="Laru Beya design 1"
              className="img-fluid rounded shadow-sm w-100"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-5">
            <img
              src="larubiya5a.webp"
              alt="Laru Beya design 2"
              className="img-fluid rounded shadow-sm w-100"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
