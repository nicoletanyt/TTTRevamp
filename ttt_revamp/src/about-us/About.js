import React from 'react'
import Footnote from '../homepage/Footnote'
import { TEAM } from '../Data'
import Member from './Member'

export default function About() {
  return (
    <div id='about-us-page'>
      <h1>Our Team</h1>
      <br/>
      <div id='team-wrapper'>
        {
          TEAM.map((person, index) => {
            return (
              <Member key={index} person={person}/>
            )
          })
        }
      </div>
      <Footnote/>
    </div>
  )
}
