"use client";
import { Footer, Navbar } from "../Components/Globals";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export function Timeline() {
  return (
    <main>
      <Navbar />
      <section id="timeline" className="mx-4 text-sm md:text-base">
        <div className="flex py-4 justify-center border border-t-0 border-l-0 border-r-0 border-b-2 border-b-mainWhite rounded-b-md">
          <h1 className="font-semibold text-4xl">Projected Timeline</h1>
        </div>
        <div>
          <VerticalTimeline lineColor="#FDFDFD">
            <VerticalTimelineElement
              contentStyle={{ background: "#272727", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid rbg(33,150,250)" }}
              date="End of December 2023"
              textClassName="text-mainWhite"
            >
              <h2 className="text-mainWhite">Closed Beta MVP</h2>
              <p>
                Towards the end of Q4 we project to have a collaborative
                calendar where companies can communicate where they may need
                worker to finish jobs before the deadline. Furthermore will help
                to make sure previous step were completed before sending the
                next phase crew to find out that it was not ready. This will
                beta will only be avaliable to those who sign up prior to the
                deadline (Mid December)
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
            <VerticalTimelineElement
              contentStyle={{ background: "#272727", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid rbg(33,150,250)" }}
              date="End of December 2023"
              textClassName="text-mainWhite"
            >
              <h2 className="text-mainWhite">Closed Beta MVP</h2>
              <p>
                Towards the end of Q4 we project to have a collaborative
                calendar where companies can communicate where they may need
                worker to finish jobs before the deadline. Furthermore will help
                to make sure previous step were completed before sending the
                next phase crew to find out that it was not ready. This will
                beta will only be avaliable to those who sign up prior to the
                deadline (Mid December)
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
            <VerticalTimelineElement
              contentStyle={{ background: "#272727", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid rbg(33,150,250)" }}
              date="End of December 2023"
              textClassName="text-mainWhite"
            >
              <h2 className="text-mainWhite">Closed Beta MVP</h2>
              <p>
                Towards the end of Q4 we project to have a collaborative
                calendar where companies can communicate where they may need
                worker to finish jobs before the deadline. Furthermore will help
                to make sure previous step were completed before sending the
                next phase crew to find out that it was not ready. This will
                beta will only be avaliable to those who sign up prior to the
                deadline (Mid December)
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
        </div>
        <div className="flex py-2 justify-center border border-t-2 border-l-0 border-r-0 border-b-0 rounded-t-md border-t-mainWhite">
          <p className="text-lightGrey text-xs">
            Please note these dates may changes
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Timeline;
