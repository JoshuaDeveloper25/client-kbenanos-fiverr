import Slider from "react-slick";

const Carousel = ({
  imageOne,
  imageTwo,
  imageThree,
  altOne,
  altTwo,
  altThree,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          loading="lazy"
          decoding="async"
          className="w-full"
          src={imageOne}
          alt={altOne}
        />
      </div>

      <div>
        <img
          loading="lazy"
          decoding="async"
          className="w-full"
          src={imageTwo}
          alt={altTwo}
        />
      </div>

      <div>
        <img
          loading="lazy"
          decoding="async"
          className="w-full"
          src={imageThree}
          alt={altThree}
        />
      </div>
    </Slider>
  );
};

export default Carousel;
