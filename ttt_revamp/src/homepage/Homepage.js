import React from 'react'
import Footnote from './Footnote';
import Timeline from './Timeline';

export default function Homepage() {
  return (
    <div id="homepage">
      <section>
        <p>Key messages</p>
      </section>
      <section>
        <h1>Highlights</h1>
      </section>
      <hr />
      <section>
        <h1>Milestones</h1>
        <Timeline/>
      </section>
      <Footnote/>
    </div>
  );
}
