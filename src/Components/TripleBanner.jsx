import React from "react";
import BannerSection from "./BannerSection";

const TripleBanner = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 md:flex-row gap-8 max-w-7xl mx-auto my-10">
      {/* তিনটি সেকশন পাশাপাশি */}
      <div className="w-full md:w-1/3">
        <BannerSection title="New Products" />
      </div>
      <div className="w-full md:w-1/3">
        <BannerSection title="Featured Products" />
      </div>
      <div className="w-full md:w-1/3">
        <BannerSection title="Best Sellers" />
      </div>
    </div>
  );
};

export default TripleBanner;
