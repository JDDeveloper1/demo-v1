"use client";

import { useState } from "react";

import BarcelonaRegion from "@/components/productRegionBarcelona";
import ProductRegionBal from "@/components/productRegionBal";
import ProductRegionMad from "@/components/productRegionMad";

function OptionsComponent() {
  const [showOptions, setShowOptions] = useState(false);
  const [showOptions1, setShowOptions1] = useState(false);
  const [showOptions2, setShowOptions2] = useState(false);

  return (
    <div className="w-full rounded-lg shadow bg-inmodocs-blue border-slate-500">
      <div className=" border-0 border-b   text-sm rounded-t-lg block w-full p-2.5 bg-inmodocs-blue border-slate-500 placeholder-gray-400 text-white focus:ring-inmodocs-light-blue focus:border-inmodocs-light-blue">
        <ul
          className="text-sm font-medium text-center divide-x rounded-lg sm:flex divide-gray-200 text-gray-400"
          id="fullWidthTab"
          data-tabs-toggle="#fullWidthTabContent"
          role="tablist"
        >
          <li className="w-full">
            <button
              id="about-tab"
              data-tabs-target="#about"
              type="button"
              role="tab"
              aria-controls="about"
              aria-selected="false"
              className=" text-base text-gray-100 inline-block w-full p-4   focus:outline-none bg-inmodocs-blue hover:bg-gray-600"
              onClick={() => setShowOptions(!showOptions)}
            >
              {showOptions ? `Close` : `Catalunya`}
            </button>
          </li>
          <li className="w-full">
            <button
              id="about-tab"
              data-tabs-target="#about"
              type="button"
              role="tab"
              aria-controls="about"
              aria-selected="false"
              className=" text-base text-gray-100 inline-block w-full p-4 focus:outline-none bg-inmodocs-blue hover:bg-gray-600"
              onClick={() => setShowOptions1(!showOptions1)}
            >
              {showOptions1 ? `Close` : `Baleares`}
            </button>
          </li>
          <li className="w-full">
            <button
              id="about-tab"
              data-tabs-target="#about"
              type="button"
              role="tab"
              aria-controls="about"
              aria-selected="false"
              className=" text-base text-gray-100 inline-block w-full p-4  focus:outline-none bg-inmodocs-blue hover:bg-gray-600"
              onClick={() => setShowOptions2(!showOptions2)}
            >
              {showOptions2 ? `Close` : `Madrid`}
            </button>
          </li>
        </ul>
      </div>

      <div className={showOptions ? ["show-element"] : null}>
        {showOptions && <BarcelonaRegion />}
      </div>
      <div className={showOptions1 ? ["show-element"] : null}>
        {showOptions1 && <ProductRegionBal />}
      </div>
      <div className={showOptions2 ? ["show-element"] : null}>
        {showOptions2 && <ProductRegionMad />}
      </div>
    </div>
  );
}

export default OptionsComponent;
