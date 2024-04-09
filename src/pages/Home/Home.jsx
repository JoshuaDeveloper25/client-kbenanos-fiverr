import Header from "./components/Header";
import HappeningNow from "./components/HappeningNow";
import PrintingCategories from "./components/PrintingCategories";
import OffersPrinting from "./components/OffersPrinting";
import InfographicOffer from "./components/InfographicOffer";
import GiftIdeas from "./components/GiftIdeas";
import CVDesign from "./components/CVDesign";

const Home = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Ça se passe maintenant */}
      <HappeningNow />

      {/* Catégories imprimerie */}
      <PrintingCategories />

      {/* Offre Impremerie */}
      <OffersPrinting />

      {/* Offre Infographie */}
      <InfographicOffer />

      {/* Idées cadeaux */}
      <GiftIdeas />

      {/* CV - design */}
      <CVDesign />
    </>
  );
};

export default Home;
