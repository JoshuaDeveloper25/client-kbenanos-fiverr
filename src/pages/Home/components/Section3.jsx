import { printingCategories } from "../../../database/DB";

import arrowDownIcon from "../../../../images/arrow-down.png";
import arrowRightIcon from "../../../../images/arrow-right.png";

const Section3 = () => {
  return (
    <section className="container mx-auto px-2 py-2">
      <div className="flex justify-between mb-3">
        <div className="flex items-center gap-2">
          <div>
            <img className="w-5" src={arrowDownIcon} alt="Arrow Down" />
          </div>

          <div>
            <h3 className="font-bold text-lg">Catégories imprimerie</h3>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div>
            <h3 className="text-lg">Toutes les catégories</h3>
          </div>

          <div>
            <img className="w-5" src={arrowRightIcon} alt="Arrow Right" />
          </div>
        </div>
      </div>

      <div className="flex gap-3 flex-wrap justify-between">
        {printingCategories?.map((printCategory) => {
          const { image, title, alt, id } = printCategory;

          return (
            <div key={id} className="min-w-[7rem]">
              <div className="bg-black rounded-xl p-2">
                <img className="w-32" src={image} alt={alt} />
              </div>
              <h3 className="text-center font-medium mt-2">{title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section3;
