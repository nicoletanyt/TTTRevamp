import React from 'react'
import { NavLink } from 'react-router-dom'
import { domain } from '../App'

export default function CourseItem({course, id}) {
  return (
    <NavLink to={course.content && "/" + domain + "/courses/" + id}>
        <div className='course-item'>
            <img className='course-image' src={course.image}/>
            <h3>{course.name}</h3>
            <p>Duration: {course.duration} hours</p>
        </div>
    </NavLink>
  )
}
