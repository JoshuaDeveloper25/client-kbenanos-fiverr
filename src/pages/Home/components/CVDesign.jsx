import { cvDesign } from "../../../database/DB";

import motoManIcon from "../../../../images/motoman.png";
import luggageIcon from "../../../../images/luggage.png";

import arrowDownIcon from "../../../../images/arrow-down.png";

const Section7 = () => {
  return (
    <section className="container-page px-3 py-2">
      <div className="flex items-center gap-2 mb-3">
        <div>
          <img
            loading="lazy"
            decoding="async"
            className="w-5"
            src={arrowDownIcon}
            alt="Arrow Down"
          />
        </div>

        <div>
          <h3 className="font-bold text-lg">CV - design</h3>
        </div>

        <div>
          <h3 className="text-md">Personnalisée vos CV profesionelle</h3>
        </div>
      </div>

      <div className="grid place-content-center lg:grid-rows-1 grid-rows-2 grid-flow-col gap-4">
        {cvDesign?.map((offerInfography) => {
          const { image, title, alt, fcfa, id } = offerInfography;

          return (
            <div key={id} className="min-w-[5rem]">
              <div className="max-w-64">
                <img
                  loading="lazy"
                  decoding="async"
                  className="w-full mx-auto"
                  src={image}
                  alt={alt}
                />
              </div>
              <div>
                <h3 className="font-medium mt-2">{title}</h3>

                <h3 className="font-bold mt-2 text-primary-green">{fcfa}</h3>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between md:justify-start gap-10 my-8">
        <div className="flex items-center gap-5">
          <div>
            <img
              loading="lazy"
              decoding="async"
              className="w-12"
              src={motoManIcon}
              alt={"Moto Man Icon"}
            />
          </div>

          <div>
            <h3 className="font-bold text-lg">Livraison á domicile</h3>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div>
            <img
              loading="lazy"
              decoding="async"
              className="w-12"
              src={luggageIcon}
              alt={"Luggage Icon"}
            />
          </div>

          <div>
            <h3 className="font-bold text-lg">Notre entreprise</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
