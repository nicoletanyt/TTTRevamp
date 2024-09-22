import React from 'react'
import Footnote from './Footnote';

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
        <h1>Why choose us?</h1>
      </section>
      <hr />
      <section>
        <h1>Milestones</h1>
      </section>
      <Footnote/>
    </div>
  );
}
