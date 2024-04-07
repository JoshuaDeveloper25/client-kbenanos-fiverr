import { happening } from "../../../database/DB.js";

const Section2 = () => {
  return (
    <section className="container mx-auto px-2 py-2">
      <h3 className="font-bold text-lg mb-5">Ça se passe maintenant</h3>

      <div className="flex flex-wrap justify-between items-center gap-7">
        {happening?.map((happen) => {
          const { image, title, text, textSpan, alt, id } = happen;

          return (
            <div key={id} className="min-w-[10rem]">
              <div className="flex gap-5">
                <div>
                  <img className="w-14" src={image} alt={alt} />
                </div>

                <div>
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="leading-5">
                    {text} <span className="block">{textSpan}</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section2;
