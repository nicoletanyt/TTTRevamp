import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './homepage/Homepage';
import NoPage from './homepage/NoPage';
import About from './about-us/About';
import Navbar from './homepage/Navbar';
import Courses from './courses/Courses';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Homepage />} />
          <Route path="courses" element={<Courses />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
