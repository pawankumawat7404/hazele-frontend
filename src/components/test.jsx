export default function PageScroll() {
  return (
    <div
      className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory"
    >
      {/* Section 1 */}
      <section className="h-screen flex items-center justify-center bg-blue-500 snap-start">
        <h1 className="text-5xl text-white font-bold">Page 1</h1>
      </section>

      {/* Section 2 */}
      <section className="h-screen flex items-center justify-center bg-green-500 snap-start">
        <h1 className="text-5xl text-white font-bold">Page 2</h1>
      </section>

      {/* Section 3 */}
      <section className="h-screen flex items-center justify-center bg-purple-500 snap-start">
        <h1 className="text-5xl text-white font-bold">Page 3</h1>
      </section>
    </div>
  );
}
