import { Link } from "react-router-dom";

import homeIcon from "../../images/home.png";
import groupsIcon from "../../images/groups.png";
import discussionsIcon from "../../images/discussions.png";
import cartIcon from "../../images/cart.png";
import hamburguerMenuIcon from "../../images/hamburguer-menu.png";

const Footer = () => {
  return (
    <div className="container-page my-3 px-2">
      <div className="flex items-center justify-between md:gap-9 gap-3">
        <div className="text-center">
          <Link className="text-center text-sm" to={"/"}>
            <img
              loading="lazy"
              decoding="async"
              className="mx-auto w-8 mb-2"
              src={homeIcon}
              alt="Home Icon"
            />
            <p className="sm:leading-5 leading-3">Accueil</p>
          </Link>
        </div>

        <div className="text-center">
          <Link className="text-center text-sm" to={"/categories"}>
            <img
              loading="lazy"
              decoding="async"
              className="mx-auto w-8 mb-2"
              src={groupsIcon}
              alt="Categories Icon"
            />
            <p className="sm:leading-5 leading-3">Categories</p>
          </Link>
        </div>

        <div className="text-center">
          <Link className="text-center text-sm" to={"/discussion"}>
            <img
              loading="lazy"
              decoding="async"
              className="mx-auto w-8 mb-2"
              src={discussionsIcon}
              alt="Discussions Icon"
            />
            <p className="sm:leading-5 leading-3">Discussions</p>
          </Link>
        </div>

        <div className="text-center">
          <Link className="text-center text-sm" to={"/order-completion"}>
            <img
              loading="lazy"
              decoding="async"
              className="mx-auto w-8 mb-2"
              src={cartIcon}
              alt="Cart Icon"
            />
            <p className="sm:leading-5 leading-3">Panier commande</p>
          </Link>
        </div>

        <div className="text-center">
          <Link className="text-center text-sm" to={"/settings"}>
            <img
              loading="lazy"
              decoding="async"
              className="mx-auto w-8 mb-2"
              src={hamburguerMenuIcon}
              alt="Hamburguer Menu Icon"
            />
            <p className="sm:leading-5 leading-3">Paramettre</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
