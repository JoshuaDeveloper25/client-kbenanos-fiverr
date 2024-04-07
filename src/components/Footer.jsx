import { Link } from "react-router-dom";

import homeIcon from "../../images/home.png";
import groupsIcon from "../../images/groups.png";
import discussionsIcon from "../../images/discussions.png";
import cartIcon from "../../images/cart.png";
import hamburguerMenuIcon from "../../images/hamburguer-menu.png";

const Footer = () => {
  return (
    <div className="container mx-auto my-3 px-2">
      <div className="flex items-end justify-between md:gap-9 gap-3">
        <div className="text-center">
          <Link className="text-center text-sm leading-3" to={"/"}>
            <img className="mx-auto w-8 mb-2" src={homeIcon} alt="Home Icon" />
            Accueil
          </Link>
        </div>

        <div className="text-center">
          <Link className="text-center text-sm leading-3" to={"/"}>
            <img
              className="mx-auto w-8 mb-2"
              src={groupsIcon}
              alt="Categories Icon"
            />
            Categories
          </Link>
        </div>

        <div className="text-center">
          <Link className="text-center text-sm leading-3" to={"/"}>
            <img
              className="mx-auto w-8 mb-2"
              src={discussionsIcon}
              alt="Discussions Icon"
            />
            Discussions
          </Link>
        </div>

        <div className="text-center">
          <Link className="text-center text-sm leading-3" to={"/"}>
            <img className="mx-auto w-8 mb-2" src={cartIcon} alt="Cart Icon" />
            Panier commande
          </Link>
        </div>

        <div className="text-center">
          <Link className="text-center text-sm leading-3" to={"/"}>
            <img
              className="mx-auto w-8 mb-2"
              src={hamburguerMenuIcon}
              alt="Hamburguer Menu Icon"
            />
            Paramettre
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
