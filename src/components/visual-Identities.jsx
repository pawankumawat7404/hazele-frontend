import Header2 from './Header2';
import Footer from './Footer2';

export default function Visualidentities() {
  return (
    <div>
      <Header2 />

      <div className="mt-8 px-4 md:px-16 mb-8">
        <h1 className="text-4xl md:text-5xl font-serif font-normal">Visual Identities</h1>
        <hr className="border-t-2 border-black my-6" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p><strong>Project</strong><br />Branding + Visual Identities</p>
            <p className="mt-3">
              <strong>Photography</strong><br />Julie Florio<br />Rick Holbrook
            </p>
          </div>
          <div>
            <p><strong>Role</strong><br />Designer + Art Director</p>
          </div>
          <div>
            <p>
              Various identities I created for new start-ups, providing concepts on different applications and campaigns, as well as collaborating to bring concepts to life with supporting marketing + social assets, templates and libraries.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-pink-200 py-8">
        <p className="ml-4 md:ml-16 text-lg">Quinn audio for erotics women</p>
        <div className="flex justify-center mt-4">
          <img src="visual1.gif" alt="" className="w-full md:w-[1000px] h-auto rounded" />
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <img src="visual2a.webp" alt="" className="w-[45%] sm:w-[250px] h-auto rounded" />
          <img src="visual2.gif" alt="" className="w-[45%] sm:w-[250px] h-auto rounded" />
          <img src="visual2b.webp" alt="" className="w-[45%] sm:w-[250px] h-auto rounded" />
        </div>
      </div>

      <p className="ml-4 md:ml-16 mt-6 text-lg">Vice Ventures, early stage venture capital fund</p>
      <div className="flex justify-center mt-4 mb-6">
        <img src="visual3.webp" alt="" className="w-full md:w-[1000px] h-auto rounded" />
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <img src="visual4.webp" alt="" className="w-[45%] sm:w-[400px] h-auto rounded" />
        <img src="visual4a.gif" alt="" className="w-[45%] sm:w-[400px] h-auto rounded" />
      </div>

      <div className="bg-yellow-50 py-8 mt-8">
        <p className="ml-4 md:ml-16 text-lg">Stuf Storage, self-storage for the tech-enabled generation</p>
        <div className="flex justify-center mt-4 mb-6">
          <img src="visual5.webp" alt="" className="w-full md:w-[1000px] h-auto rounded" />
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <img src="visual7c.webp" alt="" className="w-[30%] sm:w-[220px] h-auto rounded" />
          <img src="visual7a.webp" alt="" className="w-[30%] sm:w-[220px] h-auto rounded" />
          <img src="visual7b.webp" alt="" className="w-[30%] sm:w-[220px] h-auto rounded" />
        </div>
      </div>

      <p className="ml-4 md:ml-16 mt-6 text-lg">Allswell, design-centric digital brand for luxe mattresses + curated bedding</p>
      <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
        <img src="visual7.webp" alt="" className="w-full md:w-[1000px] h-auto rounded" />
        <img src="visual8.webp" alt="" className="w-full md:w-[1050px] h-auto rounded" />
      </div>

      <Footer />
    </div>
  );
}
