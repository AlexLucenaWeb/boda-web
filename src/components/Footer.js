export default function Footer(props) {

  const text = {
      es: {
        title: '¡Os Esperamos!',
        intro: 'Si tienes alguna alergia o necesitas una opción especial, por favor comunícanoslo por teléfono.'
      },
      hz: {
        title: 'Veselimo se vašem dolasku!',
        intro: 'Ako imate bilo kakvu alergiju ili trebate posebnu opciju, molimo vas da nam to javite telefonom.'
      }
    }
    return (
        <section 
          data-component="Fotoer" 
          className="max-w-full px-4 flex justify-center pt-10 pb-20 bg-rosa text-crema"
        >
          <div className="text-center tex-garamod text-lg"> 

            <h2 className="text-5xl py-4">{text[props.lang].title}</h2>
            <p className="py-4">{text[props.lang].intro}</p>
            <p className="py-4 text-vibes text-2xl">Nina y Alex</p>
          </div>
        </section>
    );
}