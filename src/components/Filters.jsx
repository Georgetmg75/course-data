import { useState } from 'react';

const Filters = ({ onFilterChange }) => {
  const [category, setCategory] = useState('');
  const [instructor, setInstructor] = useState('');
  const [search, setSearch] = useState('');

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    onFilterChange({ category: e.target.value, instructor, search });
  };

  const handleInstructorChange = (e) => {
    setInstructor(e.target.value);
    onFilterChange({ category, instructor: e.target.value, search });
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    onFilterChange({ category, instructor, search: e.target.value });
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <input
        type="text"
        placeholder="Search courses..."
        value={search}
        onChange={handleSearchChange}
        className="flex-1 p-2 border border-gray-300 rounded"
      />
      <select
        value={category}
        onChange={handleCategoryChange}
        className="p-2 bg-black text-yellow-300 border border-gray-700 rounded"
      >
        <option value="">All Categories</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Programming">Programming</option>
        <option value="Data Science">Data Science</option>
        <option value="AI/ML">AI/ML</option>
        <option value="Design">Design</option>
      </select>
      <select
        value={instructor}
        onChange={handleInstructorChange}
        className="p-2 bg-black text-yellow-300 border border-gray-700 rounded"
      >
        <option value="">All Instructors</option>
        <option value="Sarah Johnson">Sarah Johnson</option>
        <option value="Mike Chen">Mike Chen</option>
        <option value="Emily Watson">Emily Watson</option>
        <option value="John Smith">John Smith</option>
        <option value="Lisa Brown">Lisa Brown</option>
      </select>
    </div>
  );
};

export default Filters;