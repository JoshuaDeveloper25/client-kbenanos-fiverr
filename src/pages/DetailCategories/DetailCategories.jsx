import CarouselTextil from "./components/CarouselTextil";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";

const DetailCategories = () => {
  return (
    <>
      {/* Textille */}
      <CarouselTextil />

      {/* Catégories Textille */}
      <Section1 />

      {/* Tshirt */}
      <Section2 />

      {/* Polo */}
      <Section3 />

      {/* Chemise */}
      <Section4 />

      {/* Chemise */}
      <Section5 />
    </>
  );
};

export default DetailCategories;
