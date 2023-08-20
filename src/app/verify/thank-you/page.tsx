import { Footer, Hero_Button, Navbar } from "@/app/Components/Globals";

const Thank_You = () => {
  return (
    <main>
      <Navbar />
      <section id="Thank-you" className="flex  w-[vw-100] h-[58vh]">
        <div className=" flex flex-col gap-y-3 mx-auto my-auto text-center">
          <h2 className="text-3xl font-semibold">Thank You for signing up!</h2>
          <div className="px-8">
            <p className="text-s">
              We will be in touch about exciting news and when the beta is
              available for testing!
            </p>
          </div>
          <div>
            <a href="/">
              <Hero_Button text_feild="Return Home" styles="" />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Thank_You;
