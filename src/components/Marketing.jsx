import { Link } from 'react-router-dom';

export default function Marketing() {
  return (
    <div className="container mx-auto px-4 md:px-16">
      <div className="flex justify-between items-center my-4">
        <p className="font-serif text-lg md:text-xl">HAZEL <br />A.C.</p>
        <Link className="text-dark text-decoration-none font-medium">About</Link>
      </div>

      <div className="mb-6">
        <img src="mark.1.webp" alt="Ellevest" className="w-full h-auto rounded" />
      </div>

      <div className="mt-6 mb-6">
        <h1 className="text-4xl md:text-5xl font-serif font-normal">Ellevest</h1>
        <hr className="border-t-2 border-black my-4" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p><strong>Project</strong><br />Brand Marketing Campaigns</p>
            <p className="mt-3">
              <strong>Photography</strong><br />Julie Florio<br />Rick Holbrook
            </p>
          </div>

          <div>
            <p><strong>Role</strong><br />Designer + Art Director</p>
          </div>

          <div>
            <p>
              Provided art direction and concepts for editorial and product still life photography used in email marketing and across the website and social channels, for Walmart’s incubation mattress brand, Allswell.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#e8e2d3] py-6">
        <p className="text-center font-medium">Summer campaign</p>

        <div className="flex justify-center mt-4">
          <img src="mark.2.webp" alt="" className="w-full md:w-3/4 h-auto rounded" />
        </div>
        <div className="flex justify-center mt-4">
          <img src="mark.3.webp" alt="" className="w-full md:w-3/4 h-auto rounded" />
        </div>
        <div className="flex justify-center mt-4">
          <img src="mark.4.webp" alt="" className="w-full md:w-3/4 h-auto rounded" />
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="font-medium">Small Winns Campaign</p>
        <div className="flex justify-center mt-4 mb-4">
          <img src="mark.5.webp" alt="" className="w-full md:w-3/4 h-auto rounded" />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 my-6">
        <img src="mark.6.webp" alt="" className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded" />
        <img src="mark7.webp" alt="" className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded" />
        <img src="mark8.webp" alt="" className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded" />
        <img src="mark.6.webp" alt="" className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded" />
      </div>

      <div className="mt-6 mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link to="/Start" className="text-center md:text-left font-medium text-lg text-dark">Back to home page</Link>
        <div className="text-center md:text-right">
          <p className="mb-2">
            <strong>My personal faves:</strong><br />
            Laru Beya<br />
            Kids cooking camp
          </p>
          <p>
            <strong>Other things I do for…</strong><br />
            Branding<br />
            Marketing<br />
            Art Direction<br />
            Editorial<br />
            Visual Identities
          </p>
        </div>
      </div>
    </div>
  );
}
