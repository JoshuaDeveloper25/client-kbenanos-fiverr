import { Link } from "react-router-dom";
import { happening } from "../../../database/DB";

import arrowDownIcon from "../../../../images/arrow-down.png";

const Section1 = () => {
  return (
    <section className="container-page px-3 py-2">
      {/* Back page icon */}
      <div className="flex items-center gap-3 mb-6">
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
          <h3 className="font-bold">Nos Catégories</h3>
        </div>
      </div>

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

export default Section1;
