import React from "react";
import bgProduct from "../../../assets/products/bgProducts.png";
import bgProductMobile from "../../../assets/products/bgProductsMobile.png";
import card1 from "../../../assets/products/card1.png";
import card2 from "../../../assets/products/card2.png";
import card3 from "../../../assets/products/card3.png";

const ProductCards = () => {
  const cards = [
    { id: 1, image: { card1 } },
    { id: 2, image: "card2" },
    { id: 3, image: "card3" },
  ];
  return (
    <div className="relative border flex flex-col justify-center items-center sm:flex-row w-full h-[1012.71px] sm:h-[527px] sm:w-[1358px]">
      <img
        src={bgProduct}
        alt="bg"
        className="absolute hidden sm:block top-0"
      />
      <img
        src={bgProductMobile}
        alt="bg"
        className="absolute block sm:hidden top-[302.8px]"
      />
      {/* cards */}
      <div className="flex flex-col sm:flex-row sm:w-[1280px] sm:h-[472px] gap-12 border z-10">
        {cards.map((card) => (
          <div key={card.id} className=" rounded shadow-lg">
            <img className="w-full" src={card1} alt="card-image" />
            <div className="px-6 py-4">
              <div className="">Title</div>
              <p className="">
                Egestas elit dui scelerisque ut eu purus aliquam vitae
                habitasse.
              </p>
              <button>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
