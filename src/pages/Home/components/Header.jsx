import primaryHomeImage from "../../../../images/primary-home-image.png";
import magnifyingGlassIcon from "../../../../images/magnifying-glass.png";
import Carousel from "../../../components/Carousel";

const Header = () => {
  return (
    <section className="container-page px-3 py-2">
      <div className="flex items-center w-full bg-white px-1 py-2 rounded">
        <div className="me-2">
          <img
            loading="lazy"
            decoding="async"
            className="w-8 pe-2 border-r border-primary-green"
            src={magnifyingGlassIcon}
            alt="Magnifying Glass Icon"
          />
        </div>

        <div className="w-full">
          <input
            className=" placeholder-black outline-none w-full"
            placeholder="Chercher un produit, ou catégorie"
          />
        </div>
      </div>

      <div className="mt-4">
        <Carousel
          imageOne={primaryHomeImage}
          altOne={`Carousel Image`}
          imageTwo={primaryHomeImage}
          altTwo={`Carousel Image`}
          imageThree={primaryHomeImage}
          altThree={`Carousel Image`}
        />
      </div>
    </section>
  );
};

export default Header;
