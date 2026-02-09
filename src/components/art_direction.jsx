import { Link } from "react-router-dom";
import Header2 from "./Header2";

export default function ArtDirection() {
  return (
    <div className="container-fluid px-3 px-md-5">
      <Header2 />

      <div className="container-fluid mt-5 mb-4">
        <img
          src="a1.webp"
          alt="Allswell"
          className="img-fluid w-100 rounded shadow-sm"
        />
      </div>

      <div className="container mt-5 mb-5">
        <h1 className="display-5 fw-normal font-serif">Allswell</h1>
        <hr className="border-2 border-dark mb-4" />

        <div className="row gy-4">
          <div className="col-12 col-md-3">
            <p>
              <strong>Project</strong>
              <br />
              Art Direction
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
              Provided art direction and concepts for editorial and product
              still life photography used in email marketing and across the
              website and social channels, for Walmart’s incubation mattress
              brand, Allswell.
            </p>
          </div>
        </div>
      </div>

      <div className="row g-3 mt-4">
        <div className="col-6 col-md-3">
          <img src="a2.webp" alt="" className="img-fluid rounded shadow-sm" />
        </div>
        <div className="col-6 col-md-3">
          <img src="a3.webp" alt="" className="img-fluid rounded shadow-sm" />
        </div>
        <div className="col-6 col-md-3">
          <img src="a4.webp" alt="" className="img-fluid rounded shadow-sm" />
        </div>
        <div className="col-6 col-md-3">
          <img src="a5.webp" alt="" className="img-fluid rounded shadow-sm" />
        </div>
      </div>

      <div className="row g-3 mt-4">
        <div className="col-6 col-md-3">
          <img src="a6.webp" alt="" className="img-fluid rounded shadow-sm" />
        </div>
        <div className="col-6 col-md-3">
          <img src="a7.webp" alt="" className="img-fluid rounded shadow-sm" />
        </div>
        <div className="col-6 col-md-3">
          <img src="a8.webp" alt="" className="img-fluid rounded shadow-sm" />
        </div>
        <div className="col-6 col-md-3">
          <img src="a9.webp" alt="" className="img-fluid rounded shadow-sm" />
        </div>
      </div>

      <div className="row g-3 mt-4">
        <div className="col-6 col-md-3">
          <img src="a10.webp" alt="" className="img-fluid rounded shadow-sm" />
        </div>
        <div className="col-6 col-md-3">
          <img src="a11.webp" alt="" className="img-fluid rounded shadow-sm" />
        </div>
        <div className="col-12 col-md-6">
          <img src="a12.webp" alt="" className="img-fluid rounded shadow-sm" />
        </div>
      </div>

      <div className="row g-3 mt-4">
        <div className="col-12 col-md-6">
          <img src="a13.webp" alt="" className="img-fluid rounded shadow-sm" />
        </div>
        <div className="col-6 col-md-3">
          <img src="a14.webp" alt="" className="img-fluid rounded shadow-sm" />
        </div>
        <div className="col-6 col-md-3">
          <img src="a15.webp" alt="" className="img-fluid rounded shadow-sm" />
        </div>
      </div>

      <div className="row g-3 mt-4">
        <div className="col-6 col-md-3">
          <img src="a16.webp" alt="" className="img-fluid rounded shadow-sm" />
        </div>
        <div className="col-12 col-md-6">
          <img src="a17.webp" alt="" className="img-fluid rounded shadow-sm" />
        </div>
        <div className="col-6 col-md-3">
          <img src="a18.webp" alt="" className="img-fluid rounded shadow-sm" />
        </div>
      </div>

      <div className="row g-3 mt-4">
        <div className="col-6 col-md-3">
          <img src="a19.webp" alt="" className="img-fluid rounded shadow-sm" />
        </div>
        <div className="col-6 col-md-3">
          <img src="a15.webp" alt="" className="img-fluid rounded shadow-sm" />
        </div>
        <div className="col-12 col-md-6">
          <img src="a20.webp" alt="" className="img-fluid rounded shadow-sm" />
        </div>
      </div>

      <div className="row g-3 mt-4">
        <div className="col-6 col-md-3">
          <img src="a18.webp" alt="" className="img-fluid rounded shadow-sm" />
        </div>
        <div className="col-6 col-md-3">
          <img src="a22.webp" alt="" className="img-fluid rounded shadow-sm" />
        </div>
        <div className="col-6 col-md-3">
          <img src="a23.webp" alt="" className="img-fluid rounded shadow-sm" />
        </div>
        <div className="col-6 col-md-3">
          <img src="a24.webp" alt="" className="img-fluid rounded shadow-sm" />
        </div>
      </div>

      <div className="row mt-5 mb-5 gy-3">
        <div className="col-12 col-md-6 text-center text-md-start">
          <Link to="/Start" className="text-decoration-none text-dark fw-medium">
            Back to home page
          </Link>
        </div>
        <div className="col-12 col-md-6 text-md-end text-center">
          <p className="mb-2">
            <strong>My personal faves:</strong>
            <br />
            Laru Beya
            <br />
            Kids cooking camp
          </p>
          <p>
            <strong>Other things I do for…</strong>
            <br />
            Branding
            <br />
            Marketing
            <br />
            Art Direction
            <br />
            Editorial
            <br />
            Visual Identities
          </p>
        </div>
      </div>
    </div>
  );
}
