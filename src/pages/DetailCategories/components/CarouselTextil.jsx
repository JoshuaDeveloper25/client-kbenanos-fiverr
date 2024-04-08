import rightArrowIcon from "../../../../images/arrow-right.png";
import Carousel from "../../../components/Carousel";

import carouselImage from "../../../../images/carousel1.png";

const CarouselTextil = () => {
  return (
    <>
      <section className="container-page px-3 py-2">
        <div className="flex items-center gap-2 mb-3">
          <div>
            <img
              loading="lazy"
              decoding="async"
              className="w-5"
              src={rightArrowIcon}
              alt="Right Arrow"
            />
          </div>

          <div>
            <h3 className="font-bold text-lg">Textille</h3>
          </div>
        </div>

        {/* Carousel */}
        <Carousel
          imageOne={carouselImage}
          altOne={`Carousel Image`}
          imageTwo={carouselImage}
          altTwo={`Carousel Image`}
          imageThree={carouselImage}
          altThree={`Carousel Image`}
        />
      </section>
    </>
  );
};

export default CarouselTextil;
