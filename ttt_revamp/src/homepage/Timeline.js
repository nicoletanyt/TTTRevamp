import React, { useEffect } from "react";
import TimelineSection from "./TimelineSection";
import { MILESTONES } from "../Data";

export default function Timeline() {
  return (
    <div className="timeline-wrapper">
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
