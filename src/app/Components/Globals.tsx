"use client";

import { NextPage } from "next";
import React from "react";
//InterFaces
interface Hero_Button_Props {
  text_feild: string;
}
//Global Components
export const Navbar = () => {
  const [dropdown_Toggled, set_dropdown_Toggle] =
    React.useState<boolean>(false);

  return (
    <section className=" shadow-sm rounded-b-md shadow-darkGrey">
      <nav className="mx-2 min-h-[60px] max-h-[60px] flex flex-col justify-center">
        <div className="flex justify-between">
          <div className="flex items-center">
            <a href="/">img</a>
          </div>
          <div className="flex">
            <ol className="hidden md:flex justify-between items-center gap-x-6">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/info">More Info</a>
              </li>
              <li>
                <Hero_Button text_feild="Sign Up!" />
              </li>
            </ol>
            <div
              className="flex sm:hidden"
              onClick={() => {
                set_dropdown_Toggle(!dropdown_Toggled);
              }}
            >
              <Hero_Button
                text_feild={dropdown_Toggled === true ? "Close" : "Menu"}
              />
            </div>
            <div
              className={
                dropdown_Toggled === true
                  ? "absolute top-[58px] w-[150px] translate-x-[-45%] rounded-md px-2 py-2 bg-mainDark border border-darkGrey"
                  : "hidden"
              }
            >
              <div className="flex flex-col gap-y-3">
                <div>
                  <a href="/about">About</a>
                </div>
                <div>
                  <a href="/info">More Info</a>
                </div>
                <div>
                  <Hero_Button text_feild="Sign Up!" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export const Hero_Button: NextPage<Hero_Button_Props> = (props) => {
  const { text_feild } = props;
  return (
    <button className="px-4 py-2 rounded-md bg-mainContrast text-black ease-in-out duration-200 hover:bg-fadeContrast">
      {text_feild}
    </button>
  );
};
