import CarouselTextil from "./components/CarouselTextil";
import TextileCategories from "./components/TextileCategories";
import TshirtCategory from "./components/TshirtCategory";
import PoloCategory from "./components/PoloCategory";
import ChemiseCategory from "./components/ChemiseCategory";
import ChemiseCategory2 from "./components/ChemiseCategory2";

const DetailCategories = () => {
  return (
    <>
      {/* Textille */}
      <CarouselTextil />

      {/* Catégories Textille */}
      <TextileCategories />

      {/* Tshirt */}
      <TshirtCategory />

      {/* Polo */}
      <PoloCategory />

      {/* Chemise */}
      <ChemiseCategory />

      {/* Chemise */}
      <ChemiseCategory2 />
    </>
  );
};

export default DetailCategories;
