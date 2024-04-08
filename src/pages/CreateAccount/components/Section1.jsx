import { FcGoogle } from "react-icons/fc";

import { FiUser } from "react-icons/fi";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { PiEyeThin } from "react-icons/pi";
import { CiLock } from "react-icons/ci";

import { Link } from "react-router-dom";

import arrowDownIcon from "../../../../images/arrow-down.png";

const Section1 = () => {
  return (
    <div className="container-page container px-3 py-2 mt-8">
      <div className="max-w-xl md:mx-auto mx-0 mb-10">
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
            <h3 className="font-bold">Créer un compte</h3>
          </div>
        </div>
      </div>

      <form className="max-w-80 mx-auto mb-10">
        <h3 className="text-primary-green font-bold mb-4">S'inscrire</h3>

        <div className="relative mb-3">
          <input
            type="tel"
            className="border border-primary-green rounded placeholder-black/90 outline-none w-full px-10 py-2"
            placeholder="Nom & Prénom"
          />
          <FiUser className="text-primary-green absolute top-3 left-3 text-xl" />
        </div>

        <div className="relative mb-3">
          <input
            type="tel"
            className="border border-primary-green rounded placeholder-black/90 outline-none w-full px-10 py-2"
            placeholder="Numéro de téléphone"
          />
          <FaWhatsapp className="text-primary-green absolute top-3 left-3 text-xl" />
        </div>

        <div className="relative mb-5">
          <input
            type="password"
            className="border border-primary-green rounded placeholder-black/90 outline-none w-full px-10 py-2"
            placeholder="Mot de passe"
          />
          <CiLock className="text-primary-green absolute top-3 left-3 text-xl" />
          <PiEyeThin className="text-primary-green absolute top-3 right-3 text-xl" />
        </div>

        <button
          className="text-center py-2 w-full rounded text-white font-bold bg-primary-green"
          type="button"
        >
          S'inscrire
        </button>

        <p className="text-xs text-center my-3">Continuer avec</p>

        <div className="flex justify-center gap-5">
          <button type="button">
            <FcGoogle className="text-4xl border border-primary-green p-1 rounded" />
          </button>

          <button type="button">
            <RiFacebookBoxFill className="text-[#3b5998] text-4xl border border-primary-green p-1 rounded" />
          </button>
        </div>

        <div className="flex justify-between mt-3 py-3 border-t border-b border-gray-300">
          <div>
            <p>Déjá membre ?</p>
          </div>

          <div>
            <p className="text-primary-green font-bold">Se connecter</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Section1;
