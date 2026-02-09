import Header2 from './Header2';
import Footer from './Footer2';

export default function KidsCooking() {
  return (
    <div>
      <Header2 />

      {/* Hero Image */}
      <div className="container mb-4 px-3">
        <img
          src="kids1.webp"
          alt="Blue Apron Kids Cooking Camp"
          className="img-fluid w-100 rounded shadow-sm"
        />
      </div>

      {/* Project Info Section */}
      <div className="container mt-5 mb-5 px-3 px-md-5">
        <h1 className="display-5 fw-normal font-serif">
          Blue Apron’s Kids Cooking Camp
        </h1>
        <hr className="border-2 border-dark mb-4" />

        <div className="row gy-4">
          <div className="col-12 col-md-3">
            <p>
              <strong>Project</strong>
              <br />
              Marketing Campaign
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
              School's out for summer — enter Blue Apron’s Kids Cooking Camp.
              Every week for 8 weeks, worksheets were created with the meal kits
              to engage families and provide activities, knowledge, memories,
              and fun during dinner time.
            </p>
          </div>
        </div>
      </div>

      {/* Full Width Images */}
      <div className="container mb-4 px-3">
        <img
          src="kids2.webp"
          alt="Kids Cooking Activity 1"
          className="img-fluid w-100 rounded shadow-sm"
        />
      </div>

      <div className="container mb-4 px-3">
        <img
          src="kids3.webp"
          alt="Kids Cooking Activity 2"
          className="img-fluid w-100 rounded shadow-sm"
        />
      </div>

      {/* Two Side-by-Side Images */}
      <div className="container-fluid bg-warning-subtle py-4">
        <div className="row justify-content-center gx-3 gy-3 mt-2">
          <div className="col-12 col-sm-6 col-md-5">
            <img
              src="kids4.webp"
              alt="Kids Cooking Design 1"
              className="img-fluid rounded shadow-sm w-100"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-5">
            <img
              src="kids4a.webp"
              alt="Kids Cooking Design 2"
              className="img-fluid rounded shadow-sm w-100"
            />
          </div>
        </div>
      </div>

      {/* Large Centered Images */}
      <div className="container text-center py-4">
        <img
          src="kids5.gif"
          alt="Kids Cooking Animation"
          className="img-fluid rounded shadow-sm w-100"
        />
      </div>

      <div className="container text-center py-4">
        <img
          src="kids6.webp"
          alt="Kids Cooking Worksheet"
          className="img-fluid rounded shadow-sm w-100"
        />
      </div>

      <Footer />
    </div>
  );
}
