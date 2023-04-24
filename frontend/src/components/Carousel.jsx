import { useState } from "react";
import { Header1, Header2 } from "../assets/images";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";

const images = [Header1, Header2];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextImage = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  setInterval(() => {
    prevImage();
  }, 5000);

  setInterval(() => {
    nextImage();
  }, 5000);

  return (
    <div className="carousel">
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`flex justify-end w-full h-full px-36 carousel-item-${currentIndex}`}
        >
          <div className="text-white text-center carousel-content">
            {currentIndex === 0 ? (
              <>
                <h5 className="text-2xl font-semibold">
                  ¿Viajas sola pero querés compartir un traslado con otras
                  chicas?
                </h5>
                <br />
                <h5 className="text-xl font-normal">
                  Generá <strong>comunidad</strong>, viajá con mayor{" "}
                  <strong>seguridad</strong> e intercambiá{" "}
                  <strong>experiencias.</strong>
                </h5>
              </>
            ) : (
              <h5 className="text-2xl font-normal">
                ¡Unite a nuestra comunidad de <strong>carpooling</strong> para
                mujeres!
              </h5>
            )}
          </div>
        </div>
      </div>
      <button
        className="ml-10 absolute top-1/2 left-0 transform -translate-y-1/2 focus:outline-none"
        onClick={prevImage}
      >
        <ArrowLeftCircleIcon className="w-12 text-white" />
      </button>
      <button
        className="mr-10 absolute top-1/2 right-0 transform -translate-y-1/2 focus:outline-none"
        onClick={nextImage}
      >
        <ArrowLeftCircleIcon className="w-12 text-white -rotate-180" />
      </button>
    </div>
  );
};

export default Carousel;
