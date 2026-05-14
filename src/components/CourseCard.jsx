import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/course/${course.id}`);
  };

  return (
    <div
      className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
      onClick={handleClick}
    >
      <h3 className="text-lg font-semibold mb-2">{course.name}</h3>
      <p className="text-gray-600 mb-1">Duration: {course.duration}</p>
      <p className="text-gray-600 mb-1">Category: {course.category}</p>
      <p className="text-gray-600 mb-2">Instructor: {course.instructor}</p>
      <div className="flex items-center">
        <span className="text-yellow-500 mr-1">★</span>
        <span>{course.rating}</span>
      </div>
    </div>
  );
};

export default CourseCard;