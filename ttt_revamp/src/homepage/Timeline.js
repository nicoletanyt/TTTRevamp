import React from 'react'
import TimelineSection from './TimelineSection';

export default function Timeline() {
  return (
    <div id="milestone-wrapper">
      <h2>Decade</h2>
      <div className="milestone-section">
        <div className="timeline-left">
          <TimelineSection year={"2019"} description={"PLACEHOLDER"} side={"LEFT"} />
          <br />
          <TimelineSection year={"2019"} description={"PLACEHOLDER"} side={"LEFT"} />
          <br />
          <TimelineSection year={"2019"} description={"PLACEHOLDER"} side={"LEFT"} />
          <br />
        </div>
        <div className="vertical-line"></div>
        <div className="timeline-right">
          <br />
          <TimelineSection year={"2019"} description={"PLACEHOLDER"} side={"RIGHT"} />
          <br />
          <TimelineSection year={"2019"} description={"PLACEHOLDER"} side={"RIGHT"} />
          <br />
          <TimelineSection year={"2019"} description={"PLACEHOLDER"} side={"RIGHT"} />
        </div>
      </div>
    </div>
  );
}