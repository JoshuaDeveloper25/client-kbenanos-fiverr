import arrowDownIcon from "../../../../images/arrow-down.png";

import telephoneIcon from "../../../../images/telephone.png";
import notificationsIcon from "../../../../images/notifications.png";
import shareIcon from "../../../../images/share.png";
import sheetsLetterIcon from "../../../../images/sheets-letter.png";
import lockBadgeIcon from "../../../../images/lock-badge.png";
import signOutIcon from "../../../../images/sign-out.png";

const Section2 = () => {
  return (
    <>
      <div className="container-page px-3 py-2 mt-2">
        <div className="max-w-2xl md:mx-auto mx-0 mb-5">
          <div className="flex items-center gap-3">
            <img
              loading="lazy"
              decoding="async"
              className="w-5"
              src={arrowDownIcon}
              alt="Arrow Down"
            />
            <div>
              <h3 className="font-bold">Paramétre Doncreati.PRO</h3>
            </div>
          </div>
        </div>

        <article className="max-w-xl mx-auto mb-4">
          <div className="bg-primary-green/15 rounded">
            <button
              type="button"
              className="py-2 px-3 w-full flex gap-4 items-center border-b border-gray-300"
            >
              <div>
                <img
                  loading="lazy"
                  decoding="async"
                  className="w-7"
                  src={telephoneIcon}
                  alt="Telephone Icon"
                />
              </div>

              <div>
                <h4>Contactez-nous</h4>
              </div>
            </button>

            <button
              type="button"
              className="py-2 px-3 w-full flex gap-4 items-center border-b border-gray-300"
            >
              <div>
                <img
                  loading="lazy"
                  decoding="async"
                  className="w-7"
                  src={notificationsIcon}
                  alt="Sheet Time Icon"
                />
              </div>

              <div>
                <h4>Notifications</h4>
              </div>
            </button>

            <button
              type="button"
              className="py-2 px-3 w-full flex gap-4 items-center border-b border-gray-300"
            >
              <div>
                <img
                  loading="lazy"
                  decoding="async"
                  className="w-7"
                  src={shareIcon}
                  alt="Share Icon"
                />
              </div>

              <div>
                <h4>Partager avec des amis</h4>
              </div>
            </button>

            <button
              type="button"
              className="py-2 px-3 w-full flex gap-4 items-center border-b border-gray-300"
            >
              <div>
                <img
                  loading="lazy"
                  decoding="async"
                  className="w-7"
                  src={sheetsLetterIcon}
                  alt="Sheets with Letters Icon"
                />
              </div>

              <div>
                <h4>Termes et conditions</h4>
              </div>
            </button>

            <button
              type="button"
              className="py-2 px-3 w-full flex gap-4 items-center border-b border-gray-300"
            >
              <div>
                <img
                  loading="lazy"
                  decoding="async"
                  className="w-7"
                  src={lockBadgeIcon}
                  alt="Lock with Badge Icon"
                />
              </div>

              <div>
                <h4>Politique de confidentialité</h4>
              </div>
            </button>

            <button
              type="button"
              className="py-2 px-3 w-full flex gap-4 items-center"
            >
              <div>
                <img
                  loading="lazy"
                  decoding="async"
                  className="w-7"
                  src={signOutIcon}
                  alt="Sign Out Icon"
                />
              </div>

              <div>
                <h4>Se déconnecter</h4>
              </div>
            </button>
          </div>
        </article>
      </div>
    </>
  );
};

export default Section2;
