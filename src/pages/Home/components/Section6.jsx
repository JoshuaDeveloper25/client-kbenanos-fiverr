import { giftIdeas } from "../../../database/DB";

import tagIcon from "../../../../images/tag.png";
import discussionsIcon from "../../../../images/discussions-2.png";

import arrowDownIcon from "../../../../images/arrow-down.png";

const Section6 = () => {
  return (
    <section className="container mx-auto px-2 py-2">
      <div className="flex items-center gap-2 mb-3">
        <div>
          <img className="w-5" src={arrowDownIcon} alt="Arrow Down" />
        </div>

        <div>
          <h3 className="font-bold text-lg">Idées cadeaux</h3>
        </div>
      </div>

      <div className="flex gap-3 flex-wrap justify-center sm:justify-between">
        {giftIdeas?.map((offerInfography) => {
          const { image, title, alt, fcfa, id } = offerInfography;

          return (
            <div key={id} className="min-w-[15rem]">
              <div className="max-w-72">
                <img className="w-full mx-auto" src={image} alt={alt} />
              </div>
              <div>
                <h3 className="font-medium mt-2">{title}</h3>

                <h3 className="font-bold mt-2 text-primary-green">{fcfa}</h3>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between md:justify-start gap-5 py-4 border-b border-primary-green">
        <div className="flex items-center gap-2">
          <div>
            <img className="w-5" src={tagIcon} alt={"Tag Icon"} />
          </div>

          <div>
            <h3>Tous les offres imprimerie</h3>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div>
            <img className="w-5" src={discussionsIcon} alt={"Discussions Icon"} />
          </div>

          <div>
            <h3>Discuter avec nous</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;