import React, { useState } from 'react'
import PLACEHOLDER from "../assets/PLACEHOLDER.png";

export default function Member({person}) {
  
  const [readMore, setReadMore] = useState(false)

  return (
    <div className='member'>
        <img className='member-picture' src={person.image ? person.image : PLACEHOLDER}/>
        <h2>{person.name}</h2>
        <h3>Position</h3>
        <p className='read-more-btn' onClick={() => setReadMore(!readMore)}>{readMore ? "Read Less" : "Read More"}</p>
        <p className={(!readMore && "text-hidden") + " description"}>{person.desc}</p>
    </div>
  )
}
