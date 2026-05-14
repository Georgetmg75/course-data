import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from '../components/Loader.jsx';
import { fetchCourseById } from '../api/courses.jsx';

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCourse = async () => {
      try {
        const data = await fetchCourseById(id);
        setCourse(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadCourse();
  }, [id]);

  if (loading) return <Loader />;

  if (!course) return <div className="container mx-auto p-4">Course not found</div>;

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={() => navigate('/')}
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Back to Courses
      </button>
      <h1 className="text-3xl font-bold mb-4">{course.name}</h1>
      <p className="text-lg mb-2">Duration: {course.duration}</p>
      <p className="text-lg mb-2">Category: {course.category}</p>
      <p className="text-lg mb-2">Instructor: {course.instructor}</p>
      <p className="text-lg mb-2">Rating: {course.rating} ★</p>
      <p className="text-gray-700">Detailed information about the course would go here.</p>
    </div>
  );
};

export default CourseDetail;