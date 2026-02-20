export default function WeddingPlan() {

    return (
        <section data-component="Welcome" className="max-w-full flex justify-center px-4 py-10 bg-amber-100 text-amber-950 ">
          <div className="flex w-full"> 
            <div className="w-1/2">
              <p className="py-4">17.00 Ceremonia en la ermita</p>
              <p className="py-4">20.00 Cena en el Palacete</p>
              <p className="py-4">00.00 Recena</p>
            </div>
            <div className="w-0.5 h-full bg-black">
            </div>
            <div className="w-1/2 text-right">
              <p className="py-4">19.00 Cóctel</p>
              <p className="py-4">22.00 Fiesta</p>
            </div>
          </div>
        </section>
    );
}