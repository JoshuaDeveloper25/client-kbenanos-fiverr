import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";

const Home = () => {
  return (
    <>
      <Section1 />

      {/* Ça se passe maintenant */}
      <Section2 />

      {/* Catégories imprimerie */}
      <Section3 />

      {/* Offre Impremerie */}
      <Section4 />

      {/* Offre Infographie */}
      <Section5 />

      {/* Idées cadeaux */}
      <Section6 />

      {/* CV - design */}
      <Section7 />
    </>
  );
};

export default Home;
