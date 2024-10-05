import React from 'react'

export default function HighlightItem({ image, title, desc }) {
  return (
    <div className='highlight-item'>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
