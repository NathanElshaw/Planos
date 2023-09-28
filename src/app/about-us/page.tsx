import { Footer, Navbar } from "../Components/Globals";

export default function About() {
  return (
    <main>
      <Navbar />
      <section id="about-us-title">
        <div className="flex mx-4 py-4 justify-center border border-t-0 border-l-0 border-r-0 border-b-mainWhite rounded-b-md">
          <h1 className="text-3xl font-semibold text-mainContrast">About</h1>
        </div>
      </section>
      <section
        id="about-us-main-content"
        className="flex justify-center flex-col mx-4 my-10 sm:mx-20 lg:mx-60"
      >
        <div className="text-center  mt-62">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            accusamus quaerat pariatur quisquam suscipit veniam officiis vel,
            fugiat facilis tenetur sunt eos reiciendis? Ducimus, vel vero?
            Minima optio suscipit facere? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Commodi minus nulla explicabo natus
            iusto repellat, ex adipisci numquam expedita fugit in exercitationem
            quis consectetur culpa et unde. Vel, neque consequuntur?
          </p>
        </div>
        <div className="text-center mt-6">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            accusamus quaerat pariatur quisquam suscipit veniam officiis vel,
            fugiat facilis tenetur sunt eos reiciendis? Ducimus, vel vero?
            Minima optio suscipit facere?
          </p>
        </div>
        <div className="text-center  mt-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            accusamus quaerat pariatur quisquam suscipit veniam officiis vel,
            fugiat facilis tenetur sunt eos reiciendis? Ducimus, vel vero?
            Minima optio suscipit facere?
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
