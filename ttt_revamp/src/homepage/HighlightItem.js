import React from 'react'

export default function HighlightItem({ image, title, desc }) {
  return (
    <div className='highlight-item'>
      <img className='highlight-img' src={image} alt={"IMAGE PLACEHOLDER"} />
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}
