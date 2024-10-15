import React from 'react'
import { NavLink } from 'react-router-dom'
import { domain } from '../App'

export default function CourseItem({name, image, duration, id}) {
  return (
    <NavLink to={"/" + domain + "/courses/" + id}>
        <div className='course-item'>
            <img className='course-image' src={image}/>
            <h3>{name}</h3>
            <p>Duration: {duration} hours</p>
        </div>
    </NavLink>
  )
}
