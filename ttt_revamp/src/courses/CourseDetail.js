import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { COURSES } from "../Data";
import { domain } from "../App";

export default function CourseDetail() {
	let { courseId } = useParams();
	const course = COURSES[courseId];

	return (
		<div className="course-detail-page page">
			<NavLink to={"/" + domain + "/courses"} className="back-btn">
				<p>← Back</p>
			</NavLink>
			{/* <img className="course-img" src={course.img} /> */}
			<section className="course-intro">
				<h2>About the {course.title} Course</h2>
				<p>{course.content["about"]}</p>
			</section>
			<section>
				<h2>Why this course?</h2>
				<ul>
					{course.content["why"].split(".").map((point, index) => {
						if (point) return <li key={index}>{point}</li>;
					})}
				</ul>
			</section>
			<section>
				<h2>What you will learn</h2>
				<ul>
					{course.content["learning-objectives"]
						.split(".")
						.map((point, index) => {
							if (point) return <li key={index}>{point}</li>;
						})}
				</ul>
			</section>
			<p>{course.content["call-to-action"]}</p>
		</div>
	);
}
