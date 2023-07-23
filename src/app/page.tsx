import { Footer, Hero_Button, Navbar } from "./Components/Globals";

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
          <div className="flex my-2 mx-2">
            <h2 className="text-3xl">Reason</h2>
          </div>
          <div className="text-center mx-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            doloribus atque fuga! Iusto asperiores nesciunt perspiciatis
            corrupti ab architecto cum libero aspernatur deserunt! Quasi eum,
            quis dignissimos beatae est ipsum!
          </div>
        </div>
        <div>
          <div className="flex flex-row-reverse my-2 mx-2">
            <h2 className="text-3xl">Reason</h2>
          </div>
          <div className="text-center mx-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            doloribus atque fuga! Iusto asperiores nesciunt perspiciatis
            corrupti ab architecto cum libero aspernatur deserunt! Quasi eum,
            quis dignissimos beatae est ipsum!
          </div>
        </div>
        <div>
          <div className="flex my-2 mx-2">
            <h2 className="text-3xl">Reason</h2>
          </div>
          <div className="text-center mx-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            doloribus atque fuga! Iusto asperiores nesciunt perspiciatis
            corrupti ab architecto cum libero aspernatur deserunt! Quasi eum,
            quis dignissimos beatae est ipsum!
          </div>
        </div>
      </section>
      <section>
        <div id="about" className="flex justify-center my-2 mx-2">
          <h2 className="text-3xl">About</h2>
        </div>
        <p className="text-center mx-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
          aliquid alias voluptatem, similique earum fuga neque dolores vero vel
          nisi. Modi, quaerat consequatur qui perspiciatis corporis odit
          voluptate molestias dolorum!
        </p>
      </section>
      <Footer />
    </main>
  );
}
