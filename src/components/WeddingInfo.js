export default function WeddingInfo(props) {

    const text = {
      es: {
        title: '¡Nos casamos!',
        month: 'Abril',
        intro: 'Pasaremos el fin de semana juntos para celebrar y compartir este momento tan importante. Os esperamos a todos en',
        sp: 'España'
      },
      hz: {
        title: 'Vjenčamo se!',
        month: 'Travanj',
        intro: 'Provest ćemo vikend zajedno kako bismo proslavili i podijelili ovaj tako važan trenutak. Sve vas očekujemo u',
        sp: 'Španjolska'
      },
      en: {
        title: '¡Nos casamos!',
        month: 'Abril',
        intro: 'Pasaremos el fin de semana juntos para celebrar y compartir este momento tan importante. Os esperamos a todos en',
        sp: 'España'
      }
    }

    return (
        <section 
          data-component="Welcome" 
          className="max-w-full px-4 flex justify-center py-10 text-rosa bg-crema"
        >
          <div className="text-center tex-garamod text-lg"> 

            <h2 className="text-5xl py-4">{text[props.lang].title}</h2>

            <div className="space-y-3">
              <p className="text-2xl flex gap-5 justify-center">
                  <span>24</span>
                  <span>-</span>
                  <span>25</span>
                  <span>-</span>
                  <span>26</span>
              </p>
              <div className="flex justify-center items-center gap-2">
                <span className="w-8 h-px bg-rosa"></span>
                <p className="text-4xl pb-1">{text[props.lang].month}</p>
                <span className="w-8 h-px bg-rosa"></span>
              </div>
              <p className="text-3xl">2026</p>
            </div>

            <p className="text-base py-10">{text[props.lang].intro}</p>
            <div className="space-y-2">
              <p className="text-2xl">Palacete de</p>
              <p className="text-vibes text-5xl">Belmonte</p>
              <p>Cuenca - {text[props.lang].sp}</p>
            </div>
          </div>
        </section>
    );
}