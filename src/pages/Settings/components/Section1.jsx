import { Link } from "react-router-dom";

import carlProfile from "../../../../images/carl-profile.png";

import informationIcon from "../../../../images/information.png";
import sheetTimeIcon from "../../../../images/sheet-time.png";
import cartSettingsIcon from "../../../../images/cart-settings.png";

import arrowDownIcon from "../../../../images/arrow-down.png";

const Section1 = () => {
  return (
    <div className="container-page container px-3 py-2 mt-8">
      <div className="max-w-2xl md:mx-auto mx-0 mb-5">
        {/* Back page icon */}
        <div className="flex items-center gap-3">
          <Link to={`/`}>
            <img
              loading="lazy"
              decoding="async"
              className="w-5 rotate-90"
              src={arrowDownIcon}
              alt="Arrow Down"
            />
          </Link>
          <div>
            <h3 className="font-bold">Votre compte Doncreati</h3>
          </div>
        </div>
      </div>

      <article className="max-w-xl mx-auto mb-4">
        <div className="flex items-center gap-4 mb-6">
          <div>
            <img
              loading="lazy"
              decoding="async"
              className="w-20"
              src={carlProfile}
            />
          </div>

          <div>
            <h3 className="text-lg">Carl MASSALA</h3>
            <h3 className="text-lg">carl.graphiste@hotmail.com</h3>
            <h3 className="text-lg">077801513</h3>
          </div>
        </div>

        <div className="bg-primary-green/15 rounded">
          <button className="py-2 px-3 w-full flex gap-4 items-center border-b border-gray-300">
            <div>
              <img
                loading="lazy"
                decoding="async"
                className="w-7"
                src={informationIcon}
                alt="Information Icon"
              />
            </div>

            <div>
              <h4>Modifier le profil</h4>
            </div>
          </button>

          <button className="py-2 px-3 w-full flex gap-4 items-center border-b border-gray-300">
            <div>
              <img
                loading="lazy"
                decoding="async"
                className="w-7"
                src={sheetTimeIcon}
                alt="Sheet Time Icon"
              />
            </div>

            <div>
              <h4>Historique des commandes</h4>
            </div>
          </button>

          <button className="py-2 px-3 w-full flex gap-4 items-center">
            <div>
              <img
                loading="lazy"
                decoding="async"
                className="w-7"
                src={cartSettingsIcon}
                alt="Cart Settings Icon"
              />
            </div>

            <div>
              <h4>Modifier le profil</h4>
            </div>
          </button>
        </div>
      </article>
    </div>
  );
};

export default Section1;
