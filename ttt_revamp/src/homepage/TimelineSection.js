import React from 'react'

export default function TimelineSection({year, description, side}) {
  return (
    <div className={side == "LEFT" ? "year-container-left" : "year-container-right"}>
      {side == "LEFT" ? (
        <div className="year-title left">
          <div className="timeline-text">
            <h3>{year}</h3>
            <p>{description}</p>
          </div>
          <div className="indicator">
            <div className="line"></div>
            <div className="circle"></div>
          </div>
        </div>
      ) : (
        <div className="year-title right">
          <div className="indicator">
            <div className="circle"></div>
            <div className="line"></div>
          </div>
          <div className="timeline-text">
            <h3>{year}</h3>
            <p>{description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
