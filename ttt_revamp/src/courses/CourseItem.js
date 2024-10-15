import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CourseItem({name, image, duration, id}) {
  return (
    <NavLink to={"/courses/" + id}>
        <div className='course-item'>
            <img className='course-image' src={image}/>
            <h3>{name}</h3>
            <p>Duration: {duration} hours</p>
        </div>
    </NavLink>
  )
}
