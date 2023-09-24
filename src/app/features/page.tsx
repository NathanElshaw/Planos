import { Footer, Hero_Button, Navbar } from "../Components/Globals";
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
      <section id="info" className="mx-2 overflow-x-hidden">
        <div className="my-4 flex justify-center border border-t-0 border-l-0 border-r-0 rounded-b-md border-b-mainWhite">
          <div className="my-2">
            <h2 className="text-3xl font-semibold text-mainContrast">
              Features
            </h2>
          </div>
        </div>
        <div className="flex md:grid flex-col gap-y-2 mx-0 sm:mx-24 md:grid-cols-2 md:gap-y-6 md:gap-x-4 lg:text-lg">
          <div>
            <div className="flex justify-center my-2 mx-2">
              <div className="bg-darkGrey px-3 py-3 rounded-full drop-shadow-md shadow-black">
                <Image priority src={schedule} alt="Collaboration" />
              </div>
            </div>
            <div className="text-center mx-2">
              <span className="font-semibold text-lg sm:text-xl lg:text-2xl">
                Scheduling:{" "}
              </span>
              <p>
                Our app empowers efficient project management. Real-time
                updates, prioritized tasks, and BIM integration ensure seamless
                execution. Stay ahead with instant notifications. Elevate your
                projects with smart scheduling
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-center my-2 mx-2">
              <div className="bg-darkGrey px-3 py-3 rounded-full drop-shadow-md shadow-black">
                <Image priority src={collaboration} alt="Collaboration" />
              </div>
            </div>
            <div className="text-center mx-2">
              <span className="font-semibold text-lg md:text-xl lg:text-2xl">
                Collaboration:{" "}
              </span>
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
            <div className="text-center mx-2">
              <span className="font-semibold text-lg sm:text-xl lg:text-2xl">
                Invoice and Job Payroll management:{" "}
              </span>
              <p>
                Our app simplifies invoice and payroll management. Real-time
                tracking, automation, and precise control ensure efficiency.
                Take charge of your projects with ease!
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-center my-2 mx-2">
              <div className="bg-darkGrey px-3 py-3 rounded-full drop-shadow-md shadow-black">
                <Image priority src={business_network} alt="Collaboration" />
              </div>
            </div>
            <div className="text-center mx-2">
              <span className="font-semibold text-lg sm:text-xl lg:text-2xl">
                Customer Relations
              </span>
              <p>
                Elevate your construction experience with our app{"'"}s seamless
                communication platform. Stay connected with customers in
                real-time, ensuring clarity and transparency throughout the
                project. Share progress updates, address concerns, and receive
                valuable feedback effortlessly. Build trust and foster positive
                relationships, leading to satisfied clients and successful
                projects. Experience the power of customer communication -
                revolutionize your construction journey today!
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-center my-2 mx-2">
              <div className="bg-darkGrey px-3 py-3 rounded-full drop-shadow-md shadow-black">
                <Image priority src={inspection} alt="Collaboration" />
              </div>
            </div>
            <div className="text-center mx-2">
              <span className="font-semibold text-lg sm:text-xl lg:text-2xl">
                Continuous Checklists
              </span>
              <p>
                Embrace the power of checklists and meticulous checks with our
                app. Sail through your project without a hitch as you ensure
                nothing is overlooked. From tasks to quality control, our system
                keeps you on track. Minimize bumps, delays, and errors with ease
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-center my-2 mx-2">
              <div className="bg-darkGrey px-3 py-3 rounded-full drop-shadow-md shadow-black">
                <Image priority src={exchange} alt="Collaboration" />
              </div>
            </div>
            <div className="text-center mx-2">
              <span className="font-semibold text-lg sm:text-xl lg:text-2xl">
                Seemless Payments
              </span>
              <p>
                - Experience the magic of seamless payments with our app. Say
                goodbye to payment headaches and project delays. Streamline
                financial transactions, from vendor payments to project
                expenses, with real-time tracking and automation. Boost cash
                flow, improve relationships, and ensure smooth operations.
                Embrace the future of construction projects
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-col">
          <p className="text-l">Interested in signing up for early access?</p>
          <div className="flex flex-row-reverse mt-4">
            <a href="/sign-up">
              <Hero_Button text_feild="Sign Up for Beta!" />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
