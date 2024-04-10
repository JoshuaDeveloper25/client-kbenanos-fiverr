import arrowDownIcon from "../../../../images/arrow-down.png";
import whatsappIcon from "../../../../images/whatsapp.png";
import carlProfile from "../../../../images/carl-profile.png";
import trashRed from "../../../../images/trash-red.png";
import trashWhite from "../../../../images/trash-white.png";
import visa from "../../../../images/visa.png";
import moovMoney from "../../../../images/moov-money.png";
import artielMoney from "../../../../images/artiel-money.png";
import moneyHand from "../../../../images/money-hand.png";
import cardBank from "../../../../images/card-bank.png";
import verificationGreen from "../../../../images/verification-green.png";
import verificationGray from "../../../../images/verification-gray.png";
import offreImpremerie1 from "../../../../images/offre-impremerie-1.png";

import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";

const FinishingOrder = () => {
  return (
    <>
      <section className="container-page container px-3 py-2 mt-4">
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
            <h3 className="font-bold">Finalisation de la commande</h3>
          </div>
        </div>

        <div className="flex justify-center flex-col md:flex-row items-start md:gap-12 gap-0">
          <article className="bg-white p-3 rounded-md md:mb-0 mb-4 flex-[65%] mx-auto">
            {/* 1 */}
            <h3 className="font-bold pb-2 pt-3 text-primary-green text-lg border-b border-gray-300/50">
              1. Votre commande
            </h3>

            <div className="flex gap-4 mt-2 mb-4">
              <div>
                <img
                  loading="lazy"
                  decoding="async"
                  className="w-24 border border-primary-green p-2 rounded-lg"
                  src={offreImpremerie1}
                  alt="Shirt"
                />
              </div>

              <div className="flex flex-col justify-between w-full">
                <div>
                  <h3 className="text-md">
                    Fashion Homme Imprimpe T-Shirt Manches Courtes 200 recto
                    verso
                  </h3>
                </div>

                <div className="lg:flex hidden justify-between">
                  <div>
                    <h3 className="text-sm leading-4">Prix unitaire</h3>
                    <h3 className="text-primary-green font-bold text-sm leading-4">
                      78000 FCFA
                    </h3>
                  </div>

                  <div className="flex items-center px-5 border-l border-r border-gray-500/70">
                    <div className="me-5">
                      <p>Quantité</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="bg-primary-green text-white rounded p-1">
                        <FaMinus />
                      </div>
                      <h3>1</h3>
                      <div className="bg-primary-green text-white rounded p-1">
                        <FaPlus />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm leading-4">Sous-Total</h3>
                    <h3 className="text-primary-green font-bold text-sm leading-4">
                      78000 FCFA
                    </h3>
                  </div>

                  <div className=" border-l border-gray-500/70 flex items-center ps-5">
                    <img
                      loading="lazy"
                      decoding="async"
                      className="w-5"
                      src={trashRed}
                      alt="Trash Red"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:hidden flex justify-between">
              <div>
                <h3 className="text-sm leading-4">Prix unitaire</h3>
                <h3 className="text-primary-green font-bold text-sm leading-4">
                  78000 FCFA
                </h3>
              </div>

              <div className="flex items-center px-2 border-l border-r border-gray-500/70">
                <div className="me-5">
                  <p>Quantité</p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="bg-primary-green text-white rounded p-1">
                    <FaMinus />
                  </div>
                  <h3>1</h3>
                  <div className="bg-primary-green text-white rounded p-1">
                    <FaPlus />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm leading-4">Sous-Total</h3>
                <h3 className="text-primary-green font-bold text-sm leading-4">
                  78000 FCFA
                </h3>
              </div>

              <div className=" border-l border-gray-500/70 flex items-center ps-5">
                <img
                  loading="lazy"
                  decoding="async"
                  className="w-5"
                  src={trashRed}
                  alt="Trash Red"
                />
              </div>
            </div>

            {/* 2 */}
            <h3 className="font-bold pb-2 pt-10 text-primary-green text-lg border-b border-gray-300/50">
              2. Lieu de livraison
            </h3>

            <h3 className="py-2">Ville et quartier</h3>

            <div className="flex gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Ville"
                  className="placeholder:text-black w-full px-4 py-2 rounded border border-primary-green text-sm mb-2 outline-none"
                />
              </div>

              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Quartier"
                  className="placeholder:text-black w-full px-4 py-2 rounded border border-primary-green text-sm mb-2 outline-none"
                />
              </div>
            </div>

            {/* 3 */}
            <h3 className="font-bold pb-2 pt-10 text-primary-green text-lg border-b border-gray-300/50">
              3. Mode de paiement
            </h3>

            <div className="flex flex-col gap-5 lg:flex-row justify-between">
              <div className="flex justify-between gap-5">
                {/* Mobile Banque */}
                <div className="my-3 md:flex-[40%] flex-auto">
                  <h2 className="font-bold mb-2 text-sm">Mobile Banque</h2>

                  <div className="flex gap-3 border border-primary-green rounded px-1 py-2">
                    <div className="flex items-center ">
                      <img
                        loading="lazy"
                        decoding="async"
                        className="lg:w-7 w-4"
                        src={verificationGreen}
                        alt="Verification Green"
                      />
                    </div>

                    <div className="flex items-center gap-3">
                      <div>
                        <img
                          loading="lazy"
                          decoding="async"
                          className="lg:w-24 h-10 w-14 object-contain"
                          src={artielMoney}
                          alt="Artiel Money"
                        />
                      </div>

                      <div>
                        <h3 className="leading-3 text-[.8rem]">
                          Airtel <span className="block">money</span>
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div>
                        <img
                          loading="lazy"
                          decoding="async"
                          className="lg:w-24 h-10 w-14 object-contain"
                          src={moovMoney}
                          alt="Moov Money"
                        />
                      </div>

                      <div>
                        <h3 className="leading-3 text-[.8rem]">
                          MOOV <span className="block">money</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cash */}
                <div className="my-3 md:flex-1 flex-auto">
                  <h2 className="font-bold mb-2 text-sm">Cash</h2>

                  <div className="flex gap-3 border border-primary-green rounded px-1 py-2">
                    <div className="flex items-center">
                      <img
                        loading="lazy"
                        decoding="async"
                        className="lg:w-7 w-4"
                        src={verificationGray}
                        alt="Verification Gray"
                      />
                    </div>

                    <div className="flex items-center gap-3">
                      <div>
                        <img
                          loading="lazy"
                          decoding="async"
                          className="lg:w-24 h-10 w-14 object-contain"
                          src={moneyHand}
                          alt="Money Hand"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between gap-5">
                {/* Virement ou chéque */}
                <div className="my-3 md:flex-[40%] flex-auto">
                  <h2 className="font-bold mb-2 text-sm">Virement ou chéque</h2>

                  <div className="flex gap-3 border border-primary-green rounded px-1 py-2 h-[3.6rem]">
                    <div className="flex items-center ">
                      <img
                        loading="lazy"
                        decoding="async"
                        className="lg:w-7 w-4"
                        src={verificationGray}
                        alt="Verification Gray"
                      />
                    </div>

                    <div className="flex items-center gap-3">
                      <div>
                        <img
                          loading="lazy"
                          decoding="async"
                          className="lg:w-24 h-10 w-14 object-contain"
                          src={cardBank}
                          alt="Card Bank Icon"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <h3 className="leading-4 text-[.7rem]">
                        DONCREATI compte{" "}
                        <span className="lg:inline block">
                          CRABANK 21720400201
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Carte Visa */}
                <div className="my-3 md:flex-1 flex-auto">
                  <h2 className="font-bold mb-2 text-sm">Carte Visa</h2>

                  <div className="flex gap-3 border border-primary-green rounded px-1 py-2 h-14">
                    <div className="flex items-center ">
                      <img
                        loading="lazy"
                        decoding="async"
                        className="lg:w-7 w-4"
                        src={verificationGray}
                        alt="Verification Gray"
                      />
                    </div>

                    <div className="flex items-center gap-3">
                      <div>
                        <img
                          loading="lazy"
                          decoding="async"
                          className="lg:w-20 object-contain lg:h-10 h-auto w-14"
                          src={visa}
                          alt="Visa Logo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:flex hidden gap-2 items-center mt-3">
              <button className="flex-[50%] bg-primary-green text-white text-sm w-full font-bold rounded py-2">
                <MdKeyboardArrowRight className="me-3 inline-block text-primary-green rounded-full bg-white" />
                Commandez
              </button>

              <button className="flex-[35%] bg-whatsapp-green text-white text-sm w-full font-bold rounded py-2">
                <img
                  loading="lazy"
                  decoding="async"
                  src={whatsappIcon}
                  className="inline-block me-3 w-5 text-sm"
                />
                Par WhatsApp
              </button>

              <button className="flex-[10%] bg-red-600 py-2 rounded">
                <img
                  loading="lazy"
                  decoding="async"
                  className="w-4 mx-auto"
                  src={trashWhite}
                  alt="Trash White Icon"
                />
              </button>
            </div>
          </article>

          <article className="bg-white p-3 rounded-md flex-[35%] mx-auto">
            <h3 className="font-bold pb-2 pt-3 text-primary-green text-lg border-b border-gray-300/50">
              Résumé facturation
            </h3>

            <div className="py-2">
              <div className="flex justify-between">
                <div>
                  <h3>Sous-Total:</h3>
                </div>

                <div>
                  <h3 className="text-primary-green font-bold">7800 FCFA</h3>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <h3>Livraison:</h3>
                </div>

                <div>
                  <h3 className="text-primary-green font-bold">2000 FCFA</h3>
                </div>
              </div>

              <div>
                <h3>Bon de réduction:</h3>
              </div>
            </div>

            <div className="flex justify-between items-center border-t border-b border-gray-300/50">
              <div>
                <h3 className="font-bold py-3 text-primary-green text-lg">
                  Somme finale:
                </h3>
              </div>

              <div>
                <h3 className="font-bold text-lg text-primary-green">
                  98000 FCFA
                </h3>
              </div>
            </div>

            <div className="mt-2 mb-5">
              <input
                type="text"
                placeholder="Entrez votre code promo si vous en avez un"
                className="placeholder:text-black w-full px-4 py-2 rounded border border-primary-green text-sm mb-2 outline-none"
              />

              <button
                type="button"
                className="w-full px-2 py-2 rounded bg-primary-green text-lg font-bold text-white"
              >
                Appliquer le code promotionnel
              </button>
            </div>

            <div>
              <h3 className="font-bold pb-2 pt-3 text-primary-green text-lg border-b border-gray-300/50">
                Inforamtions client
              </h3>

              <div className="flex items-center gap-3 mt-3">
                <div>
                  <img
                    loading="lazy"
                    decoding="async"
                    className="w-16"
                    src={carlProfile}
                    alt="Carl Profile"
                  />
                </div>

                <div>
                  <h3 className="leading-5 text-sm">Carl MASSALA</h3>
                  <h3 className="leading-5 text-sm">
                    carl.graphiste@hotmail.com
                  </h3>
                  <h3 className="leading-5 text-sm">077801513</h3>
                </div>
              </div>
            </div>

            <div className="md:hidden flex gap-2 items-center mt-3">
              <button className="flex-[50%] bg-primary-green text-white text-sm w-full font-bold rounded py-2">
                <MdKeyboardArrowRight className="me-3 inline-block text-primary-green rounded-full bg-white" />
                Commandez
              </button>

              <button className="flex-[35%] bg-whatsapp-green text-white text-sm w-full font-bold rounded py-2">
                <img
                  loading="lazy"
                  decoding="async"
                  src={whatsappIcon}
                  className="inline-block me-3 w-5 text-sm"
                />
                Par WhatsApp
              </button>

              <button className="flex-[10%] bg-red-600 py-2 rounded">
                <img
                  loading="lazy"
                  decoding="async"
                  className="w-4 mx-auto"
                  src={trashWhite}
                  alt="Trash White Icon"
                />
              </button>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default FinishingOrder;
