import ProductInformation from "./components/ProductInformation";
import SimilarProduct from "./components/SimilarProduct";

const ProductDetail = () => {
  return (
    <>
      {/* Produit detail */}
      <ProductInformation />

      {/* Produit similaire */}
      <SimilarProduct />
    </>
  );
};

export default ProductDetail;
