"use client";

import { useState } from "react";

import WhyInvestSection from "@/components/whyInvestSection";
import MarketSituationSection from "@/components/marketSituation";
import AboutContentSection from "@/components/contentSection";

function ShowComponent() {
  const [showComponent, setShowComponent] = useState(false);
  const [showComponent1, setShowComponent1] = useState(false);
  const [showComponent2, setShowComponent2] = useState(false);
  return (
    <div className="w-full  border  rounded-lg shadow bg-inmodocs-blue border-slate-500">
      <div className=" border-0 border-b   text-sm rounded-t-lg focus:ring-blue-500  block w-full p-2.5 bg-inmodocs-blue border-slate-500 placeholder-gray-400 text-white :focus:ring-inmodocs-light-blue focus:border-inmodocs-light-blue">
        <ul
          className="text-sm font-medium text-center  divide-x divide-gray-200 rounded-lg sm:flex  text-gray-400"
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
              className=" text-base text-gray-100 inline-block w-full p-4 focus:outline-none bg-inmodocs-blue hover:bg-gray-600"
              onClick={() => setShowComponent(!showComponent)}
            >
              {showComponent ? `Close` : `About Us`}
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
              className=" text-base text-gray-100 inline-block w-full p-4   focus:outline-none bg-inmodocs-blue hover:bg-gray-600"
              onClick={() => setShowComponent1(!showComponent1)}
            >
              {showComponent1 ? `Close` : `Why invest in Spain`}
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
              onClick={() => setShowComponent2(!showComponent2)}
            >
              {showComponent2 ? `Close` : `Market situations`}
            </button>
          </li>
        </ul>
      </div>

      <div className={showComponent ? ["show-element"] : null}>
        {showComponent && <AboutContentSection />}
      </div>
      <div className={showComponent1 ? ["show-element"] : null}>
        {showComponent1 && <WhyInvestSection />}
      </div>
      <div className={showComponent2 ? ["show-element"] : null}>
        {showComponent2 && <MarketSituationSection />}
      </div>
    </div>
  );
}

export default ShowComponent;
