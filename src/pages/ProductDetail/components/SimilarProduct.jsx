import { similiarProducts } from "../../../database/DB";

import arrowDownIcon from "../../../../images/arrow-down.png";

const SimilarProduct = () => {
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
          <h3 className="font-bold text-lg">Produit similaire</h3>
        </div>
      </div>

      <div className="grid lg:grid-rows-1 place-content-center grid-rows-2 grid-flow-col gap-4">
        {similiarProducts?.map((offerPrinting) => {
          const { image, title, alt, discount, fcfa, id } = offerPrinting;

          return (
            <div
              key={id}
              className="max-w-[11rem] relative rounded-lg shadow-lg border"
            >
              <div className="p-4">
                <img
                  loading="lazy"
                  decoding="async"
                  className="w-40 mx-auto"
                  src={image}
                  alt={alt}
                />
              </div>
              <div className="border-t">
                <h3 className="text-center font-medium mt-2">{title}</h3>

                <h3 className="text-center font-bold mt-2 text-primary-green">
                  {fcfa}
                </h3>
              </div>

              <div className="absolute top-2 left-2">
                <h3 className="bg-primary-green text-white px-2 py-1 text-sm font-bold rounded-full">
                  {discount}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SimilarProduct;
