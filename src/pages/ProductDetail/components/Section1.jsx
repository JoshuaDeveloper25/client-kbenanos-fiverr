import { MdKeyboardArrowRight } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";

import { IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";

import arrowDownIcon from "../../../../images/arrow-down.png";
import heartIcon from "../../../../images/heart.png";
import whatsappIcon from "../../../../images/whatsapp.png";

import offreImpremerie1 from "../../../../images/offre-impremerie-1.png";

const Section1 = () => {
  return (
    <div className="container mx-auto px-3 py-2 mt-8">
      <div className="flex flex-col md:flex-row md:gap-8 gap-0">
        {/* Back page icon */}
        <div>
          <Link className="inline" to={`/`}>
            <img
              loading="lazy"
              decoding="async"
              className="inline-block w-7 rotate-90"
              src={arrowDownIcon}
              alt="Arrow Down"
            />
          </Link>
        </div>

        {/* Product Images Detail */}
        <article className="md:mb-0 mb-4">
          <div className="mx-auto max-w-80">
            <img
              loading="lazy"
              decoding="async"
              className="w-full"
              src={offreImpremerie1}
              alt={`Product Detail Image`}
            />
          </div>

          <div className="flex md:justify-start justify-center gap-2 mt-4">
            <img
              loading="lazy"
              decoding="async"
              className="w-14 border border-gray-300 p-2 rounded"
              src={offreImpremerie1}
              alt={`Product Detail Image`}
            />
            <img
              loading="lazy"
              decoding="async"
              className="w-14 border border-gray-300 p-2 rounded"
              src={offreImpremerie1}
              alt={`Product Detail Image`}
            />
            <img
              loading="lazy"
              decoding="async"
              className="w-14 border border-gray-300 p-2 rounded"
              src={offreImpremerie1}
              alt={`Product Detail Image`}
            />
          </div>
        </article>

        {/* Product Information Detail */}
        <article className="md:ms-10 ms-0">
          <div>
            {/* Review */}
            <div className="flex items-center gap-5">
              <ul className="flex gap-1">
                <li className="text-primary-green">
                  <IoStar />
                </li>

                <li className="text-primary-green">
                  <IoStar />
                </li>

                <li className="text-primary-green">
                  <IoStar />
                </li>

                <li className="text-gray-300">
                  <IoStar />
                </li>

                <li className="text-gray-300">
                  <IoStar />
                </li>
              </ul>

              <div>
                <p className="text-sm text-gray-700">(1 customer review)</p>
              </div>
            </div>

            <h2 className="leading-5 font-bold my-4">
              Fashion Homme Imprimé T-Shirt Manches{" "}
              <span className="block">Courtes 200 rect verso</span>
            </h2>
          </div>

          <div className="flex items-end gap-5">
            <div>
              <h3 className="text-primary-green font-bold text-3xl">
                78000 FCFA
              </h3>
            </div>

            <div>
              <h3 className="text-primary-green font-bold text-xl">-5%</h3>
            </div>

            <div>
              <h3 className="text-sm line-through text-gray-700">90000 FCFA</h3>
            </div>
          </div>

          <div className="flex justify-between py-3 md:border-t-0 md:border-b-0 border-t border-b">
            <div className="flex">
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
              <p className="text-sm">In stock 98</p>
            </div>
          </div>

          <div className="flex items-center gap-5 py-3 md:border-b-0 border-b">
            <div>
              <p className="text-gray-900">Options disponibles</p>
            </div>

            <div className="flex gap-2">
              <div className="rounded border border-primary-green w-8 h-8 text-center">
                <h3 className="text-primary-green text-sm mt-1">M</h3>
              </div>

              <div className="rounded border border-primary-green w-8 h-8 text-center">
                <h3 className="text-primary-green text-sm mt-1">L</h3>
              </div>

              <div className="rounded border border-primary-green w-8 h-8 text-center">
                <h3 className="text-primary-green text-sm mt-1">XL</h3>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center gap-7 my-5">
            <div className="flex gap-2 items-center">
              <img
                loading="lazy"
                decoding="async"
                className="w-7"
                src={heartIcon}
                alt="Heart Icon"
              />
              <p>Ajouter á la liste de commande</p>
            </div>

            <div>
              <p className="text-sm">Partagez ce produit</p>
            </div>
          </div>

          <div className="hidden md:flex flex-col">
            <button className="bg-primary-green text-white w-full font-bold rounded py-2">
              <MdKeyboardArrowRight className="me-3 inline-block text-primary-green rounded-full bg-white text-2xl" />
              J'achéte
            </button>

            <button className="bg-whatsapp-green text-white mt-2 w-full font-bold rounded py-2">
              <img
                loading="lazy"
                decoding="async"
                src={whatsappIcon}
                className="inline-block me-3 w-5 text-2xl"
              />
              Par WhatsApp
            </button>
          </div>
        </article>

        {/* More Information Detail */}
        <article className="flex flex-col justify-around mb-10 gap-8">
          <div>
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
                <h3 className="font-bold text-lg">Détails du produit</h3>
              </div>
            </div>

            <p className="text-gray-800 mt-3 leading-5 text-sm">
              Tshirt de marque cotons qualité xxl super max{" "}
              <span className="lg:block">200G recto verso</span>
            </p>
          </div>

          <div>
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
                <h3 className="font-bold text-lg">Livraison</h3>
              </div>
            </div>

            <p className="text-gray-800 mt-3 leading-5 text-sm">
              Nous livrons prés de chez vous á partir de 2000{" "}
              <span className="lg:block">
                FCFA Nos livreus sont préts et préts á vous
              </span>
              servir.
            </p>
          </div>
        </article>

        {/* Responsive Buttons */}
        <div className="flex gap-2 items-center md:hidden">
          <button className="flex-[55%] bg-primary-green text-white text-sm w-full font-bold rounded py-2">
            <MdKeyboardArrowRight className="me-3 inline-block text-primary-green rounded-full bg-white" />
            J'achéte
          </button>

          <button className="flex-[45%] bg-whatsapp-green text-white text-sm w-full font-bold rounded py-2">
            <img
              loading="lazy"
              decoding="async"
              src={whatsappIcon}
              className="inline-block me-3 w-5 text-sm"
            />
            Par WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section1;
