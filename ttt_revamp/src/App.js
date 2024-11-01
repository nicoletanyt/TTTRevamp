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

export const domain = "TTTRevamp"

function App() {
  return (
		<Router>
			<Routes>
				<Route path="/" element={<Navbar />}>
					<Route index element={<Homepage />} />
					<Route path="courses" element={<Courses />} />
					<Route path="about" element={<About />} />
					<Route path="courses/:courseId" element={<CourseDetail />} />
					<Route path="principal-welcome" element={<PrincipalWelcome />} />
				</Route>
				<Route path="*" element={<NoPage />} />
			</Routes>
			<Footnote />
		</Router>
	);
}

export default App;
