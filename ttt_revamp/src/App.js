import './index.css';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './homepage/Homepage';
import NoPage from './homepage/NoPage';
import About from './about-us/About';
import Navbar from './homepage/Navbar';
import Courses from './courses/Courses';
import CourseDetail from './courses/CourseDetail';
import PrincipalWelcome from './principal/PrincipalWelcome';
import Footnote from './homepage/Footnote';
import { useEffect, useState } from 'react';

function App() {

	const [mobileNav, setMobileNav] = useState(false);

	useEffect(() => {
		setMobileNav(window.innerWidth <= 600);
	}, []);

  return (
		<Router>
			<Routes>
				<Route path="/" element={<Navbar mobileNav={mobileNav} />}>
					<Route index element={<Homepage mobileNav={mobileNav} />} />
					<Route path="courses" element={<Courses />} />
					<Route path="about" element={<About />} />
					<Route path="courses/:courseId" element={<CourseDetail />} />
					<Route path="principal-welcome" element={<PrincipalWelcome mobileNav={mobileNav}/>} />
				</Route>
				<Route path="*" element={<NoPage />} />
			</Routes>
			<Footnote mobileNav={mobileNav} />
		</Router>
	);
}

export default App;
