import { Routes, Route } from 'react-router-dom';
import CoursesPage from '../pages/CoursesPage.jsx';
import CourseDetail from '../pages/CourseDetail.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CoursesPage />} />
      <Route path="/course/:id" element={<CourseDetail />} />
      <Route path="/about" element={<div className="container mx-auto p-4"><h1>About Us</h1><p>This is a course data app.</p></div>} />
    </Routes>
  );
};

export default AppRoutes;