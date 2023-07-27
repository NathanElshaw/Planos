import { Navbar } from "../Components/Globals";
import Image from "next/image";
import collaboration from "../../../public/assets/collaboration.svg";
import {
  schedule,
  estimates,
  business_network,
  inspection,
  exchange,
} from "../../../public/assets";

export default function Info() {
  return (
    <main>
      <Navbar />
      <section id="info" className="mx-4">
        <div>
          <h2 className="text-3xl">Info</h2>
        </div>
        <div>
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
        <div>
          <div className="flex justify-center my-2 mx-2">
            <div className="bg-darkGrey px-3 py-3 rounded-full drop-shadow-md shadow-black">
              <Image priority src={business_network} alt="Collaboration" />
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
              <Image priority src={inspection} alt="Collaboration" />
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
              <Image priority src={exchange} alt="Collaboration" />
            </div>
          </div>
          <div className="text-center mx-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            doloribus atque fuga! Iusto asperiores nesciunt perspiciatis
            corrupti ab architecto cum libero aspernatur deserunt! Quasi eum,
            quis dignissimos beatae est ipsum!
          </div>
        </div>
      </section>
    </main>
  );
}
