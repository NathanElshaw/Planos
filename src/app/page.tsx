"use client";
import { Footer, Hero_Button, Navbar } from "./Components/Globals";
import Image from "next/image";
import collaboration from "../../public/assets/collaboration.svg";
import schedule from "../../public/assets/schedule.svg";
import estimates from "../../public/assets/estimates.svg";
import { Iphone } from "../../public/assets";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [image_Loaded, set_Image_Loaded] = useState<boolean>(false);

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <section className="mt-2 mx-2 md:mx-20" id="main_hero">
        <div className="grid grid-cols-4 mr-5 text-5xl">
          <div className="col-span-3 ml-2">
            <span className="text-mainContrast font-extrabold">
              Project management <br />
            </span>
            at your fingertips
          </div>
        </div>
        <div className="flex flex-row-reverse mr-5 mt-5">
          <a href="/sign-up" className="z-[1]">
            <Hero_Button text_feild="Sign Up for Beta!" />
          </a>
        </div>
        <motion.div
          className="z-[-1] min-h-full "
          initial="initialState"
          animate="animatedState"
          transition={{
            duration: 0.75,
          }}
          variants={{
            initialState: { opacity: 0 },
            animatedState: { opacity: 1, y: -50 },
          }}
        >
          <Image
            src={Iphone}
            alt="iphone"
            className="absolute z-[-1] md:max-h-[350px] md:right-[50px]"
            priority={true}
            onLoad={(event) => {
              const target: any = event.target;
              if (target.src.indexOf("data:image/gif;base64") < 0) {
                set_Image_Loaded(!image_Loaded);
              }
            }}
          />
        </motion.div>
        <div className="h-[350px]" />
      </section>
      <section className="mx-2 text-base">
        <div
          id="info-title"
          className="flex justify-center pb-2 mt-4 border border-l-0 border-r-0 border-t-0 rounded-b-md border-b-mainWhite"
        >
          <h2 className="text-3xl">
            Why use{" "}
            <span className="font-semibold text-mainContrast">Planos</span>
          </h2>
        </div>
        <div id="info" className="mt-4">
          <div className="flex justify-center my-2 mx-2">
            <div className="bg-darkGrey px-3 py-3 rounded-full drop-shadow-md shadow-black">
              <Image priority src={schedule} alt="Collaboration" />
            </div>
          </div>
          <div className="text-center mx-2 md:mx-40">
            <span className="font-semibold text-lg">Scheduling: </span>
            <p>
              Our app empowers efficient project management. Real-time updates,
              prioritized tasks, and BIM integration ensure seamless execution.
              Stay ahead with instant notifications. Elevate your projects with
              smart scheduling
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <div>
            <div className="flex justify-center my-2 mx-2">
              <div className="bg-darkGrey px-3 py-3 rounded-full drop-shadow-md shadow-black">
                <Image priority src={collaboration} alt="Collaboration" />
              </div>
            </div>
            <div className="text-center mx-2 md:mx-40">
              <span className="font-semibold text-lg">Collaboration: </span>
              <p>
                Embrace our app for seamless collaboration and peak
                productivity. Real-time messaging, project management, and
                document sharing keep teams connected. BIM integration ensures
                data synchronization. Stay ahead with instant updates.
                Experience the future of project management!
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-center my-2 mx-2">
              <div className="bg-darkGrey px-3 py-3 rounded-full drop-shadow-md shadow-black">
                <Image priority src={estimates} alt="Collaboration" />
              </div>
            </div>
            <div className="text-center mx-2 md:mx-40">
              <span className="font-semibold text-lg">
                Invoice and Job Payroll management:{" "}
              </span>
              <p>
                Our app simplifies invoice and payroll management. Real-time
                tracking, automation, and precise control ensure efficiency.
                Take charge of your projects with ease!
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse mr-4 mt-3">
            <a href="/info">
              <Hero_Button
                text_feild="Learn more"
                styles="text-mainContrast bg-mainDark border border-mainContrast hover:text-mainDark"
              />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
