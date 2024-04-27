import React from "react";
import Header from "./components/Header";
import ProductCards from "./components/ProductCards";

const ProductsPage = () => {
  return (
    <div className=" flex justify-between items-center flex-col text-white h-[1739px] sm:h-[776px] bg-[#0F172A] py-12 px-4 gap-8">
      <Header />
      <ProductCards />
    </div>
  );
};

export default ProductsPage;
