import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { COURSES } from '../Data';
import { domain } from '../App';

export default function CourseDetail() {

    let { courseId } = useParams();
    const course = COURSES[courseId]

  return (
		<div className="course-detail-page">
            <NavLink to={"/" + domain + "/courses"} className="back-btn">
			    <p>← Back</p>
            </NavLink>
			{/* <img className="course-img" src={course.img} /> */}
			<section className="course-intro">
				<br />
				<h2>Course Introduction</h2>
				<p>
					Welcome to the Nurturing Touch Pre & Post Natal Well-being course!
					This comprehensive program is designed for healthcare professionals,
					therapists, beauticians, and anyone interested in enhancing their
					knowledge and skills in providing essential care for expectant and new
					mothers. Over the course of 16 hours, delivered through either two
					full days or four half days, participants will engage with a rich
					curriculum tailored to address the unique needs of pre- and post-natal
					care. The course combines theoretical knowledge with practical
					applications, ensuring that learners can provide nurturing touch
					effectively and safely. Participants will explore the physical and
					emotional changes that accompany pregnancy, gaining insights into how
					nurturing touch can alleviate discomfort and foster well-being during
					this transformative period. Through a combination of PowerPoint
					presentations, a comprehensive workbook, and hands-on massage
					techniques, learners will be equipped to deliver qualified health
					interventions that address the challenges faced by mothers before,
					during, and after childbirth.
				</p>
			</section>
			<section>
				<h2>Course Summary</h2>
				<p>
					The Nurturing Touch Pre & Post Natal Well-being course offers a
					holistic approach to understanding the benefits of massage and
					nurturing care during one of life's most significant transitions.
				</p>
			</section>
			<section>
				<h2>What you will learn</h2>
				<ul>
					<li>
						Contextualization of Nurturing Massages: Understanding how and why
						nurturing touch is crucial during pregnancy.
					</li>
					<li>
						Physical and Emotional Changes: Exploring how these changes impact
						women during pregnancy and postpartum.
					</li>
					<li>
						Physical Benefits of Massage: Learning the various physiological
						advantages of massage throughout pregnancy, labor, and recovery.
					</li>
				</ul>
			</section>
			<p>
				Join us in this empowering journey to enhance your practice and make a
				positive impact on the lives of mothers and their families!
			</p>
		</div>
	);
}
