"use client";

import { Squash as Hamburger } from "hamburger-react";
import { NextPage } from "next";
import React from "react";
//InterFaces
interface Hero_Button_Props {
  text_feild: string;
  styles?: string;
}
//Global Components
export const Navbar = () => {
  const [dropdown_Toggled, set_dropdown_Toggle] =
    React.useState<boolean>(false);

  return (
    <section className="shadow-sm rounded-b-md shadow-darkGrey sticky">
      <nav className="mx-2 min-h-[60px] max-h-[60px] flex flex-col justify-center">
        <div className="flex justify-between">
          <div className="flex items-center">
            <a href="/">img</a>
          </div>
          <div className="flex">
            <ol className="hidden md:flex justify-between items-center gap-x-6">
              <li>
                <a href="/about-us">About</a>
              </li>
              <li>
                <a href="/info">More Info</a>
              </li>
              <li>
                <Hero_Button text_feild="Sign Up!" />
              </li>
            </ol>
            <div className="flex justify-center items-center max-h-[40px] md:hidden">
              <Hamburger
                toggled={dropdown_Toggled}
                toggle={() => {
                  set_dropdown_Toggle(!dropdown_Toggled);
                }}
                color="#C4FE76"
                size={20}
                distance="lg"
                duration={0.3}
              />
            </div>
            <div
              className={
                dropdown_Toggled === true
                  ? "absolute top-[58px] w-[150px] translate-x-[-63%] rounded-md px-2 py-2 bg-mainDark border border-darkGrey"
                  : "hidden"
              }
            >
              <div className="flex flex-col text-xl gap-y-3">
                <a href="/about-us">About</a>
                <a href="/info">More Info</a>
                <div>
                  <a href="/sign-up">
                    <Hero_Button
                      text_feild="Sign Up!"
                      styles="bg-mainDark text-mainContrast border border-mainContrast hover:bg-darkGrey"
                    />
                  </a>
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
  const { text_feild, styles } = props;
  return (
    <button
      className={`px-4 py-2 rounded-md bg-mainContrast text-black ease-in-out duration-200 hover:bg-fadeContrast ${styles}`}
    >
      {text_feild}
    </button>
  );
};

export const Footer = () => {
  return (
    <section id="footer" className="mt-6 border-t-[1px] border-t-darkGrey">
      <div className="mt-6">
        <div className="grid grid-cols-2">
          <div className="grid grid-rows-2 ml-2 gap-y-2">
            <div className="flex flex-col gap-y-2">
              <a href="/about-us">About</a>
              <a href="/info">More Info</a>
            </div>
            <div>
              <Hero_Button
                text_feild="Contact Us"
                styles="bg-mainDark text-mainContrast border border-mainContrast hover:bg-darkGrey"
              />
            </div>
          </div>
          <div>Address</div>
        </div>
      </div>
      <div className="flex justify-center my-2">
        <p className="text-xs text-mainWhite">Planos &copy; 2021-2023</p>
      </div>
    </section>
  );
};
