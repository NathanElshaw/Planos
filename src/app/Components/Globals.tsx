"use client";

import { Squash as Hamburger } from "hamburger-react";
import { NextPage } from "next";
import React from "react";
//InterFaces
interface Hero_Button_Props {
  text_feild: string;
  styles?: string;
}

interface Thank_You_Props {
  name: string;
  message: string;
}

//Global Components
export const Navbar = () => {
  const [dropdown_Toggled, set_dropdown_Toggle] =
    React.useState<boolean>(false);

  return (
    <section className="shadow-sm rounded-b-md shadow-darkGrey">
      <nav className="mx-2 min-h-[60px] max-h-[60px] flex flex-col justify-center sm:mx-10 lg:mx-40">
        <div className="flex justify-between">
          <div className="flex items-center">
            <a href="/">img</a>
          </div>
          <div className="flex">
            <ol className="hidden lg:flex justify-between items-center gap-x-6">
              <li>
                <a href="/about-us">About</a>
              </li>
              <li>
                <a href="/info">More Info</a>
              </li>
              <li>
                <a href="/use-cases">Use Cases</a>
              </li>
              <li>
                <a href="/sign-up">
                  <Hero_Button
                    text_feild="Sign Up!"
                    styles="bg-mainDark text-mainContrast border border-mainContrast hover:bg-darkGrey hover:text-mainDark"
                  />
                </a>
              </li>
            </ol>
            <div className="flex justify-center items-center max-h-[40px] lg:hidden">
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
                <a href="/use-cases">Use Cases</a>
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
    <section
      id="footer"
      className="mt-6 border-t-[1px] border-t-darkGrey z-10 sm:mx-16 lg:mx-36"
    >
      <div className="mt-6 z-10">
        <div className="grid grid-cols-2">
          <div className="grid grid-rows-2 ml-2 gap-y-2">
            <div className="flex flex-col gap-y-2 z-[1]">
              <a href="/about-us">About</a>
              <a href="/info">More Info</a>
            </div>
            <div className="z-[1]">
              <a href="/contact-us">
                <Hero_Button
                  text_feild="Contact Us"
                  styles="bg-mainDark text-mainContrast border border-mainContrast hover:text-mainDark"
                />
              </a>
            </div>
          </div>
          <div className="z-[1]">Address</div>
        </div>
      </div>
      <div className="flex justify-center my-2">
        <p className="text-xs text-mainWhite">Planos &copy; 2021-2023</p>
      </div>
    </section>
  );
};

export const Thank_You_Page: NextPage<Thank_You_Props> = (props) => {
  const { name, message } = props;
  return (
    <section id="contact-thank-you">
      <div className="flex h-[85vh] w-[100vw]">
        <div className="flex flex-col gap-y-2 mx-auto my-auto text-center">
          <div className="flex">
            <h2 className="text-2xl font-semibold">Thank You {name}!</h2>
          </div>
          <p>{message}</p>
          <div>
            <a href="/">
              <Hero_Button text_feild="Return home" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
