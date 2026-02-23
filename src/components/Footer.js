export default function Footer(props) {

  const text = {
      es: {
        title: '¡Os Esperamos!',
        intro: 'Si tienes alguna alergia o necesitas, por favor comunícanoslo por teléfono.',
        intro2: 'Os daremos más información cuando se acerque la fecha ¡estad atentos!'
      },
      hz: {
        title: 'Veselimo se vašem dolasku!',
        intro: 'Sve dodatne detalje o vjenčanju, dolasku i organizaciji podijelit ćemo s vama u našoj zajedničkoj grupi.',
        intro2: 'Ukoliko imate alergije ili posebne prehrambene potrebe, molimo vas da nam to javite na vrijeme.'
      }
    }
    return (
        <section 
          data-component="Fotoer" 
          className="max-w-full px-4 flex justify-center pt-10 pb-10 bg-rosa text-crema"
        >
          <div className="text-center tex-garamod text-lg"> 

            <h2 className="text-5xl py-4">{text[props.lang].title}</h2>
            <p className="py-4 text-lg">{text[props.lang].intro}</p>
            <p className="py-4 text-lg">{text[props.lang].intro2}</p>
            <p className="py-4 text-vibes text-2xl">Nina y Alex</p>
          </div>
        </section>
    );
}