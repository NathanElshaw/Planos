import { Footer, Hero_Button, Navbar } from "./Components/Globals";
import Image from "next/image";
import collaboration from "../../public/assets/collaboration.svg";
import schedule from "../../public/assets/schedule.svg";
import estimates from "../../public/assets/estimates.svg";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <section className="mt-2 mx-2" id="main_hero">
        <div className="grid grid-cols-4 mr-5 text-5xl">
          <div className="col-span-3 ml-2">
            <span className="text-mainContrast font-extrabold">Project </span>
            management at your fingertips
          </div>
        </div>
        <div className="flex flex-row-reverse mr-5 mt-5">
          <a href="/sign-up">
            <Hero_Button text_feild="Sign Up Now!" />
          </a>
        </div>
      </section>
      <section>
        <div id="info">
          <div className="flex justify-center my-2 mx-2">
            <div className="bg-darkGrey px-3 py-3 rounded-full drop-shadow-md shadow-black">
              <Image priority src={schedule} alt="Collaboration" />
            </div>
          </div>
          <div className="text-center mx-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            doloribus atque fuga! Iusto asperiores nesciunt perspiciatis
            corrupti ab architecto cum libero aspernatur deserunt! Quasi eum,
            quis dignissimos beatae est ipsum!
          </div>
        </div>
        <div>
          <div className="flex justify-center my-2 mx-2">
            <div className="bg-darkGrey px-3 py-3 rounded-full drop-shadow-md shadow-black">
              <Image priority src={collaboration} alt="Collaboration" />
            </div>
          </div>
          <div className="text-center mx-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            doloribus atque fuga! Iusto asperiores nesciunt perspiciatis
            corrupti ab architecto cum libero aspernatur deserunt! Quasi eum,
            quis dignissimos beatae est ipsum!
          </div>
        </div>
        <div>
          <div className="flex justify-center my-2 mx-2">
            <div className="bg-darkGrey px-3 py-3 rounded-full drop-shadow-md shadow-black">
              <Image priority src={estimates} alt="Collaboration" />
            </div>
          </div>
          <div className="text-center mx-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            doloribus atque fuga! Iusto asperiores nesciunt perspiciatis
            corrupti ab architecto cum libero aspernatur deserunt! Quasi eum,
            quis dignissimos beatae est ipsum!
          </div>
        </div>
        <div className="flex flex-row-reverse mr-4 mt-3">
          <a href="/info">
            <Hero_Button
              text_feild="Learn more"
              styles="text-mainContrast bg-mainDark border border-mainContrast"
            />
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
