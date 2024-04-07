import { happening } from "../../../database/DB.js";

const Section2 = () => {
  return (
    <section className="container mx-auto px-3 py-2">
      <h3 className="font-bold text-lg mb-5">Ça se passe maintenant</h3>

      <div className="flex flex-col sm:flex-row flex-wrap justify-between gap-7">
        {happening?.map((happen) => {
          const { image, title, text, textSpan, alt, id } = happen;

          return (
            <div key={id} className="min-w-[10rem]">
              <div className="flex sm:max-w-[auto] max-w-[18rem] mx-auto gap-5">
                <div>
                  <img
                    loading="lazy"
                    decoding="async"
                    className="w-14"
                    src={image}
                    alt={alt}
                  />
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
