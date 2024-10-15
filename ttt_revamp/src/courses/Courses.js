import React from 'react'
import Footnote from '../homepage/Footnote'
import { COURSES } from '../Data';
import CourseItem from './CourseItem';

export default function Courses() {
  return (
		<div>
			<h1>Our Courses</h1>
			<p>
				Our courses are carefully crafted around the core idea that "Beauty is
				about life and the living." This concept embraces the journey from the
				beginning of life in the womb to the vast experiences of the outside
				world and beyond. Each course is designed to examine the deep
				connections between inner beauty and outer expression, highlighting the
				holistic essence of existence. Whether exploring the aesthetics of
				nature, the complexities of human development, or the philosophical
				views of beauty, our curriculum aims to inspire a greater appreciation
				for the life that surrounds and nurtures us. Through this lens, students
				are invited to discover and celebrate the beauty in every phase and
				facet of life.
			</p>
			<section>
				<div id="courses-grid-display">
					{Object.keys(COURSES).map((courseId, index) => {
            const course = COURSES[courseId]
						return (
							<CourseItem
								key={index}
								name={course.title}
								image={course.img}
								duration={course.duration}
								id={courseId}
							/>
						);
					})}
				</div>
			</section>
			<Footnote />
		</div>
	);
}
