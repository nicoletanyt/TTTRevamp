import React from "react";
import TimelineSection from "./TimelineSection";
import { MILESTONES } from "../Data";

export default function Timeline({mobileNav}) {
  return (
    <div className={mobileNav ? "mobile-timeline-wrapper" : "timeline-wrapper"}>
        {
          MILESTONES.map((item, index) => {
            return (
              <TimelineSection
                year={item.year}
                description={item.description}
                key={index}
              />
            )
          })
        }
    </div>
  );
}
