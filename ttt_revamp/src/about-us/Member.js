import React from 'react'
import PLACEHOLDER from "../assets/PLACEHOLDER.png";

export default function Member({person}) {
  return (
    <div className='member'>
        <img className='member-picture' src={person.image ? person.image : PLACEHOLDER}/>
        <div>
            <h3>{person.name}</h3>
            <p>{person.desc}</p>
        </div>
    </div>
  )
}
