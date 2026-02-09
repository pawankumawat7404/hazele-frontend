import Header2 from './Header2';
import Footer from './Footer2';

export default function Editorial() {
  return (
    <div>
      <Header2 />
      <div className="container mx-auto">
        <img src="edit1.gif" alt="" className="w-full h-auto" />
      </div>

      <div className="mt-8 px-4 md:px-16 mb-8">
        <h1
          className="text-4xl md:text-5xl font-normal font-serif"
        >
          The Swell
        </h1>
        <hr className="border-t-2 border-black my-6" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p><strong>Project</strong><br />Editorial + Social Design</p>
            <p className="mt-3">
              <strong>Photography</strong><br />Julie Florio<br />Rick Holbrook
            </p>
          </div>

          <div>
            <p><strong>Role</strong><br />Designer + Art Director</p>
          </div>

          <div>
            <p>
              The Swell is a new member-based community for those in their midlife, celebrating all that comes with this stage of life. I helped create content-rich publications and supporting assets on various subjects about reinventing midlife. Every new event was its own campaign, breaking down expert-led talks into bite-sized pulses and long-form mediums for easy consumption.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <img src="edit2.webp" alt="" className="w-full md:w-[1000px] h-auto" />
      </div>

      <div className="bg-yellow-100 py-6 mt-6">
        <div className="flex justify-center">
          <img src="edit3.webp" alt="" className="w-4/5 h-auto" />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-6 px-4">
        <img src="edit4.gif" alt="" className="w-[45%] sm:w-[180px] md:w-[200px] h-auto" />
        <img src="edit4a.webp" alt="" className="w-[45%] sm:w-[180px] md:w-[200px] h-auto" />
        <img src="edit4b.webp" alt="" className="w-[45%] sm:w-[180px] md:w-[200px] h-auto" />
        <img src="edit4c.webp" alt="" className="w-[45%] sm:w-[180px] md:w-[200px] h-auto" />
        <img src="edit4d.gif" alt="" className="w-[45%] sm:w-[180px] md:w-[200px] h-auto" />
      </div>

      <div className="bg-yellow-200 mt-6 py-6 flex flex-col md:flex-row justify-center items-center gap-5">
        <img src="edit5.webp" alt="" className="w-full md:w-[500px] h-auto" />
        <img src="edit5a.gif" alt="" className="w-full md:w-[400px] h-auto" />
      </div>

      <div className="bg-yellow-50 mt-8 py-8">
        <div className="flex justify-center">
          <img src="edit6.gif" alt="" className="w-full md:w-[1000px] h-auto" />
        </div>
        <Footer />
      </div>
    </div>
  );
}
