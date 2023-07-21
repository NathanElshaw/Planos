import { Hero_Button, Navbar } from "./Components/Globals";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <section className="mt-2 mx-0">
        <div className="flex mr-5 text-5xl">
          <p>
            <span className="text-mainContrast font-extrabold">Project </span>
            management at your fingertips
          </p>
        </div>
        <div className="flex flex-row-reverse mr-5 mt-5">
          <Hero_Button text_feild="Sign Up Now!" />
        </div>
        <div></div>
      </section>
    </main>
  );
}
