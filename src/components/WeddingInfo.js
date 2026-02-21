export default function WeddingInfo() {

    return (
        <section 
          data-component="Welcome" 
          className="max-w-full px-4 flex justify-center py-10 text-rosa bg-crema"
        >
          <div className="text-center tex-garamod text-lg"> 

            <h2 className="text-5xl py-4">¡Nos casamos!</h2>

            <div className="space-y-3">
              <p className="text-2xl flex gap-5 justify-center">
                  <span>24</span>
                  <span>-</span>
                  <span>25</span>
                  <span>-</span>
                  <span>26</span>
              </p>
              <div className="flex justify-center items-center gap-2">
                <span className="w-8 h-px bg-amber-950"></span>
                <p className="text-4xl pb-1">Abril</p>
                <span className="w-8 h-px bg-amber-950"></span>
              </div>
              <p className="text-3xl">2026</p>
            </div>

            <p className="text-base py-10">Pasaremos el fin de semana juntos para celebrar y compartir este momento tan importante. Os esperamos a todos en</p>
            <div className="space-y-2">
              <p className="text-2xl">Palacete de</p>
              <p className="text-vibes text-5xl">Belmonte</p>
              <p>Cuenca - Spain</p>
            </div>
          </div>
        </section>
    );
}