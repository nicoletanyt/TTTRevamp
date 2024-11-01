import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
		<BrowserRouter>
			<Routes>
				<Route path={"/" + domain + "/"} element={<Navbar />}>
					<Route index element={<Homepage />} />
					<Route path={"/" + domain + "/courses"} element={<Courses />} />
					<Route path={"/" + domain + "/about"} element={<About />} />
					<Route path={"/" + domain + "/principal"} element={<PrincipalWelcome />} />
					<Route
						path={"/" + domain + "/courses/:courseId"}
						element={<CourseDetail />}
					/>
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
			<Footnote/>
		</BrowserRouter>
	);
}

export default App;
