import OurCategories from "./components/OurCategories";
import PrintCategories from "./components/PrintCategories";
import Infography from "./components/Infography";
import GiftIdeas from "./components/GiftIdeas";
import CVDesign from "./components/CVDesign";

const Categories = () => {
  return (
    <>
      {/* Nos Cátegories */}
      <OurCategories />

      {/* Catégories imprimerie */}
      <PrintCategories />

      {/* Infographie */}
      <Infography />

      {/* Idées Cadeau */}
      <GiftIdeas />

      {/* CV - design */}
      <CVDesign />
    </>
  );
};

export default Categories;
