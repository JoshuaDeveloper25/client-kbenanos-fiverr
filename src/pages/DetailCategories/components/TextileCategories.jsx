import { textileCategories } from "../../../database/DB";
import { Link } from "react-router-dom";

import arrowDownIcon from "../../../../images/arrow-down.png";

const TextileCategories = () => {
  return (
    <section className="container-page px-3 py-2">
      {/* Back page icon */}
      <div className="flex items-center gap-3 mb-3">
        <Link to={`/`}>
          <img
            loading="lazy"
            decoding="async"
            className="w-5"
            src={arrowDownIcon}
            alt="Arrow Down"
          />
        </Link>
        <div>
          <h3 className="font-bold">Catégories Textille</h3>
        </div>
      </div>

      <div className="flex row-gap-3 gap-3 min-[1125px]:justify-between justify-center">
        {textileCategories?.map((printCategory) => {
          const { image, title, alt, id, bgBox } = printCategory;

          return (
            <div key={id} className="min-w-[1rem]">
              <div
                className="rounded-xl p-2"
                style={{ background: `${bgBox}` }}
              >
                <img
                  loading="lazy"
                  decoding="async"
                  className="w-32"
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

export default TextileCategories;