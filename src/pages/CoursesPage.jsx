import { useState, useEffect } from 'react';
import Filters from '../components/Filters.jsx';
import CourseCard from '../components/CourseCard.jsx';
import Loader from '../components/Loader.jsx';
import InfiniteScroll from '../components/InfiniteScroll.jsx';
import { fetchCourses } from '../api/courses.jsx';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCourses, setVisibleCourses] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const data = await fetchCourses();
        setCourses(data);
        setFilteredCourses(data);
        setVisibleCourses(data.slice(0, 6)); // Load first 6
        setHasMore(data.length > 6);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadCourses();
  }, []);

  const handleFilterChange = ({ category, instructor, search }) => {
    let filtered = courses;
    if (category) {
      filtered = filtered.filter(course => course.category === category);
    }
    if (instructor) {
      filtered = filtered.filter(course => course.instructor === instructor);
    }
    if (search) {
      filtered = filtered.filter(course =>
        course.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilteredCourses(filtered);
    setVisibleCourses(filtered.slice(0, 6));
    setHasMore(filtered.length > 6);
  };

  const fetchMore = async () => {
    const nextBatch = filteredCourses.slice(visibleCourses.length, visibleCourses.length + 6);
    setVisibleCourses(prev => [...prev, ...nextBatch]);
    setHasMore(visibleCourses.length + nextBatch.length < filteredCourses.length);
  };

  if (loading) return <Loader />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Courses</h1>
      <Filters onFilterChange={handleFilterChange} />
      <InfiniteScroll fetchMore={fetchMore} hasMore={hasMore}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default CoursesPage;