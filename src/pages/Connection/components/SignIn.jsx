import { FcGoogle } from "react-icons/fc";

import { RiFacebookBoxFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { PiEyeThin } from "react-icons/pi";
import { CiLock } from "react-icons/ci";

import { Link } from "react-router-dom";

import arrowDownIcon from "../../../../images/arrow-down.png";

const SignIn = () => {
  return (
    <div className="container-page px-3 py-2 mt-8">
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
            <h3 className="font-bold">Connexion</h3>
          </div>
        </div>
      </div>

      <form className="max-w-80 mx-auto mb-10">
        <h3 className="text-primary-green font-bold mb-4">Se connecter</h3>

        <div className="relative mb-3">
          <input
            type="tel"
            className="border border-primary-green rounded placeholder-black/90 outline-none w-full px-10 py-2"
            placeholder="Numéro de téléphone ou votre nom"
          />
          <FaWhatsapp className="text-primary-green absolute top-3 left-3 text-xl" />
        </div>

        <div className="relative">
          <input
            type="password"
            className="border border-primary-green rounded placeholder-black/90 outline-none w-full px-10 py-2"
            placeholder="Password"
          />
          <CiLock className="text-primary-green absolute top-3 left-3 text-xl" />
          <PiEyeThin className="text-primary-green absolute top-3 right-3 text-xl" />
        </div>

        <p className="text-end my-3">Mot de passe oublié ?</p>

        <button
          className="text-center py-2 w-full rounded text-white font-bold bg-primary-green"
          type="button"
        >
          Connexion
        </button>

        <p className="text-xs text-center my-3">Continuer avec</p>

        <div className="flex justify-center gap-5 border-b border-gray-300 pb-3">
          <button type="button">
            <FcGoogle className="text-4xl border border-primary-green p-1 rounded" />
          </button>

          <button type="button">
            <RiFacebookBoxFill className="text-[#3b5998] text-4xl border border-primary-green p-1 rounded" />
          </button>
        </div>

        <div className="flex justify-between pt-3">
          <div>
            <p>Vous n'avez pas de compte ?</p>
          </div>

          <div>
            <p className="text-primary-green font-bold">S'inscrire</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
