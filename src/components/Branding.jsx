import Header2 from "./Header2";
import Footer from "./Footer2";

export default function Branding() {
  return (
    <div>
      <Header2 />

      <div className="container mb-4 px-3">
        <img
          src="brand1.webp"
          alt="Branding Main"
          className="img-fluid w-100 rounded shadow-sm"
        />
      </div>

      <div className="container mt-5 mb-5 px-3 px-md-5">
        <h1 className="display-5 fw-normal font-serif">Blue Apron</h1>
        <hr className="border-2 border-dark mb-4" />

        <div className="row gy-4">
          <div className="col-12 col-md-3">
            <p>
              <strong>Project</strong>
              <br />
              Branding Refresh, Brand Book
            </p>
            <p>
              <strong>Photography</strong>
              <br />
              Julie Florio
              <br />
              Rick Holbrook
            </p>
          </div>

          <div className="col-12 col-md-3">
            <p>
              <strong>Role</strong>
              <br />
              Designer + Art Director
            </p>
          </div>

          <div className="col-12 col-md-6">
            <p className="text-justify">
              The internal creative team led the brand refresh for Blue Apron.
              As a team of designers, photographers, retouchers, stylists, and
              illustrators, we elevated and implemented new designs across all
              avenues. I documented the brand and created various formulas and
              design elements into the brand book, which allowed the team to
              create consistent, on-brand assets and evolve the design for every
              campaign.
            </p>
          </div>
        </div>
      </div>

      <div className="container text-center mb-4">
        <img
          src="brand2.webp"
          alt="Branding Design 1"
          className="img-fluid rounded shadow-sm w-100 w-md-75"
        />
      </div>

      <div className="container-fluid bg-warning-subtle py-4">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6">
            <img
              src="brand3.webp"
              alt="Branding Design 2"
              className="img-fluid rounded shadow-sm w-100"
            />
          </div>
        </div>
      </div>

      <div className="container text-center py-4">
        <img
          src="brand4.webp"
          alt="Branding Design 3"
          className="img-fluid rounded shadow-sm w-100 w-md-75"
        />
      </div>

      <div className="container-fluid bg-warning-subtle py-4">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6">
            <img
              src="brand5.webp"
              alt="Branding Design 4"
              className="img-fluid rounded shadow-sm w-100"
            />
          </div>
        </div>
      </div>

      <div className="container text-center py-4">
        <img
          src="brand6.webp"
          alt="Branding Design 5"
          className="img-fluid rounded shadow-sm w-100 w-md-75"
        />
      </div>

      <Footer />
    </div>
  );
}
