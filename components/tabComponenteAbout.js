"use client";
import { useState, useEffect, useRef } from "react";

const TabsComponenteAbout = ({ items }) => {
  const [selectedTabAbout, setSelectedTabAbout] = useState(0);
  const firstBtnRefAbout = useRef(null);

  useEffect(() => {
    if (firstBtnRefAbout.current) {
      firstBtnRefAbout.current.focus();
    }
  }, []);

  return (
    <div className="">
      <div className="max-w-full flex flex-col gap-y-2 w-full">
        <div className="bg-inmodocs-blue p-1 rounded-xl flex justify-between items-center gap-x-2 font-bold text-white">
          {items?.map((item, index) => (
            <button
              ref={index === 0 ? firstBtnRefAbout : null}
              key={item.title}
              onClick={() => setSelectedTabAbout(item)}
              className={`outline-none w-full p-2 hover:bg-gray-400 hover:text-inmodocs-blue rounded-xl text-center focus:ring-2 focus:bg-white focus:text-inmodocs-blue ${
                selectedTabAbout === item
                  ? "ring-inmodocs-blue hover:ring-inmodocs-light-blue bg-white text-inmodocs-blue"
                  : ""
              } `}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="bg-white p-2 rounded-xl">
          {items?.map((item) => (
            <div
              key={item.title}
              className={`${selectedTabAbout === item ? "" : "hidden"}`}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabsComponenteAbout;
