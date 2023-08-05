import { Footer, Navbar } from "../Components/Globals";

export default function UseCases() {
  return (
    <main>
      <Navbar />
      <section id="use-cases-main">
        <div className="my-4">
          <h1 className="font-semibold text-2xl">Use Cases</h1>
        </div>
        <div className="mx-6">
          <div className="border border-darkGrey rounded-md px-4 py-2">
            <div className="my-4">
              <h2 className="font-semibold">Main use Case:</h2>
              <h3 className="font-semibold text-mainContrast text-xl ml-2">
                Construction
              </h3>
            </div>
            <div>
              <p className="mx-2 text-center">
                Imagine a construction company facing communication gaps,
                delays, and budget overruns. Enter the construction app, the
                ultimate project management tool. With real-time collaboration,
                instant messaging, and video conferencing, teams stay connected,
                making quick decisions together. Efficient task management
                assigns responsibilities, sets deadlines, and tracks progress,
                ensuring accountability.
              </p>
              <br />
              <p className="mx-2 text-center">
                Secure document sharing and version control keep everyone on the
                same page with the latest project files. Seamlessly integrated
                BIM technology centralizes data, enabling collaborative work on
                a unified 3D model. Automated notifications keep stakeholders
                informed about critical updates, preventing delays.
              </p>
              <br />
              <p className="mx-2 text-center">
                On-site accessibility allows field personnel to view and update
                project details directly. Data analytics provide valuable
                insights for continuous process improvement. Embracing the
                construction app, the company achieves heightened productivity,
                improved client satisfaction, and successful project deliveries
                - paving the way for future growth and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
