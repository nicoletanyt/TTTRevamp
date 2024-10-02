import React from 'react'

export default function TimelineSection({year, description, side}) {
  return (
    <div className='timeline-component'>
      <div className='timeline-text'>
        <h3>{year}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
