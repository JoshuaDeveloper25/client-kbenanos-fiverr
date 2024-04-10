import { printingCategories } from "../../../database/DB";
import { Link } from "react-router-dom";

import arrowDownIcon from "../../../../images/arrow-down.png";
import arrowRightIcon from "../../../../images/arrow-right.png";

const PrintingCategories = () => {
  return (
    <section className="container-page px-3 py-2">
      <div className="flex justify-between mb-3">
        <div className="flex items-center gap-2">
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
            <h3 className="font-bold text-lg">Catégories imprimerie</h3>
          </div>
        </div>

        <Link to={`/categories`}>
          <div className="flex items-center gap-2">
            <div>
              <h3 className="text-lg">Toutes les catégories</h3>
            </div>

            <div>
              <img
                loading="lazy"
                decoding="async"
                className="w-5"
                src={arrowRightIcon}
                alt="Arrow Right"
              />
            </div>
          </div>
        </Link>
      </div>

      <div className="grid place-content-center lg:grid-rows-1 grid-rows-2 grid-flow-col gap-4">
        {printingCategories?.map((printCategory) => {
          const { image, title, alt, id } = printCategory;

          return (
            <div key={id} className="min-w-[1rem]">
              <div className="bg-black rounded-xl p-2">
                <img
                  loading="lazy"
                  decoding="async"
                  className="w-28"
                  src={image}
                  alt={alt}
                />
              </div>
              <h3 className="text-center font-medium mt-2">{title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PrintingCategories;
