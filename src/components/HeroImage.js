export default function HeroImage({ props }) {
  return (
    <section data-component="HeroImage" className="max-w-full flex justify-center">
      <div className="relative h-[500px] min-h-[420px] w-full overflow-hidden flex justify-center bg-center bg-cover">
        <div className="flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white text-vibes">Nina & Alex</h1>
        </div>
      </div>
    </section>
  );
}
