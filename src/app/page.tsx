"use client";
import { Footer, Hero_Button, Navbar } from "./Components/Globals";
import Image from "next/image";
import collaboration from "../../public/assets/collaboration.svg";
import schedule from "../../public/assets/schedule.svg";
import estimates from "../../public/assets/estimates.svg";
import { Iphone } from "../../public/assets";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Home() {
  const [image_Loaded, set_Image_Loaded] = useState<boolean>(false);

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <section className="mt-2 mx-2 md:mx-20 lg:mx-60 " id="main_hero">
        <div className="grid grid-cols-4 mr-5 text-5xl">
          <div className="col-span-3 ml-2">
            <span className="text-mainContrast font-extrabold">
              Construction management <br />
            </span>
            at your fingertips
          </div>
        </div>
        <div className="flex flex-row-reverse mr-5 mt-5 sm:hidden">
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
            className="absolute z-[-1] max-h-[450px] sm:max-h-[400px] md:max-h-[375px] md:right-[50px] sm:top-[70px]"
            priority={true}
            onLoad={(event) => {
              const target: any = event.target;
              if (target.src.indexOf("data:image/gif;base64") < 0) {
                set_Image_Loaded(!image_Loaded);
              }
            }}
          />
        </motion.div>
        <div className="h-[400px] sm:h-[350px]" />
        <div className="hidden flex-row-reverse mr-5 mt-5 sm:flex">
          <a href="/sign-up" className="z-[1]">
            <Hero_Button text_feild="Sign Up for Beta!" />
          </a>
        </div>
      </section>
      <section id="quick-info" className="px-2 pb-4 text-base lg:mx-60">
        <div
          id="info-title"
          className="flex justify-center pb-2 mt-4 border border-l-0 border-r-0 border-t-0 rounded-b-md border-b-mainWhite"
        >
          <h2 className="text-3xl">
            Why use{" "}
            <span className="font-semibold text-mainContrast">Planos</span>
          </h2>
        </div>
        <div
          id="info"
          className="mt-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 md:gap-x-3"
        >
          <div>
            <div className="flex justify-center my-2 mx-2">
              <div className="bg-darkGrey px-3 py-3 rounded-full drop-shadow-md shadow-black">
                <Image priority src={schedule} alt="Collaboration" />
              </div>
            </div>
            <div className="text-center mx-2 md:mx-0">
              <span className="font-semibold text-lg">Scheduling: </span>
              <p>
                Our app empowers efficient project management. Real-time
                updates, prioritized tasks, and BIM integration ensure seamless
                execution. Stay ahead with instant notifications. Elevate your
                projects with smart scheduling
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
              <div className="text-center mx-2 md:mx-0">
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
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className="flex justify-center my-2 mx-2">
              <div className="bg-darkGrey px-3 py-3 rounded-full drop-shadow-md shadow-black">
                <Image priority src={estimates} alt="Collaboration" />
              </div>
            </div>
            <div className="text-center mx-2 sm:mx-40 md:mx-0">
              <span className="font-semibold text-lg">
                Invoice and Job Payroll management:
              </span>
              <p>
                Our app simplifies invoice and payroll management. Real-time
                tracking, automation, and precise control ensure efficiency.
                Take charge of your projects with ease!
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse mr-4 mt-3">
          <a href="/info">
            <Hero_Button
              text_feild="See more"
              styles="text-mainContrast bg-mainDark border border-mainContrast hover:text-mainDark"
            />
          </a>
        </div>
      </section>
      <section id="how-it-works" className="px-2 pb-4 text-base lg:mx-60">
        <div className="flex justify-center pb-2 mt-4 border border-l-0 border-r-0 border-t-0 rounded-b-md border-b-mainWhite">
          <h2 className="text-3xl">How it works</h2>
        </div>
        <div className="md:grid md:grid-cols-2 mx-4 gap-x-4 ">
          <div id="as-single-compnay">
            <div className="flex justify-center mt-2 md:ml-2">
              <h2 className="text-xl font-semibold">As a Single Company:</h2>
            </div>
            <div className="text-center my-2">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
                vitae laboriosam aliquid optio accusantium, eligendi nesciunt
                soluta fugiat eos quidem consequatur impedit, tenetur itaque,
                expedita id. Provident sint rerum beatae!
              </p>
            </div>
          </div>
          <div id="working-with-multiple-companies">
            <div className="flex justify-center mt-2 md:ml-2">
              <h2 className="text-xl font-semibold">
                With Multiple Companies:
              </h2>
            </div>
            <div className="text-center my-2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                beatae eius deleniti optio, id similique dignissimos,
                blanditiis, aliquam molestias exercitationem reprehenderit
                laudantium odit? Assumenda eaque, consectetur expedita vitae
                veniam totam?
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <a href="/features#collaboration">
            <Hero_Button text_feild="Explore more" />
          </a>
        </div>
      </section>
      <section id="timeline" className="mx-2 mt-10 text-base lg:mx-60">
        <div className="flex justify-center text-center py-2 mt-4 border border-l-0 border-r-0 border-t-0 rounded-b-md border-b-mainWhite">
          <h2 className="text-3xl">Timeline Projection</h2>
        </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            contentStyle={{ background: "#272727", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rbg(33,150,250)" }}
            date="End of December 2023"
            textClassName="text-mainWhite"
          >
            <h2 className="text-mainWhite">Closed Beta MVP</h2>
            <p>
              Towards the end of Q4 we project to have a collaborative calendar
              where companies can communicate where they may need worker to
              finish jobs before the deadline. Furthermore will help to make
              sure previous step were completed before sending the next phase
              crew to find out that it was not ready. This will beta will only
              be avaliable to those who sign up prior to the deadline (Mid
              December)
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "#272727", color: "#fff" }}
            contentArrowStyle={{ borderLeft: "7px solid rbg(33,150,250)" }}
            date="End of March 2024"
          >
            <h2 className="text-mainWhite">Open Beta</h2>
            <p>
              By the end of Q1 of 2024 we plan to have a fully ready mvp for
              open beta testing. We hope to include the fully functional
              calendar as well as communication feature to encourage more
              collaboration. Additionally we plan to have fully digital time
              cards for better reading for both keeping track of job hours and
              to streamline payroll.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <div className="flex flex-row-reverse my-2">
          <a href="/timeline">
            <Hero_Button
              text_feild="See Full Timeline"
              styles="text-mainContrast bg-mainDark border border-mainContrast hover:text-mainDark"
            />
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
