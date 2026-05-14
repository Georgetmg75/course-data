import axios from 'axios';

// Set API_BASE_URL to http://localhost:5000 when using JSON Server.
// Leave as an empty string to load static data from public/courses.json.
const API_BASE_URL = '';
const COURSES_FILE_URL = '/courses.json';
const COURSES_API_URL = `${API_BASE_URL}/courses`;
const isStaticJson = !API_BASE_URL;

export const fetchCourses = async (params = {}) => {
  try {
    if (isStaticJson) {
      const response = await axios.get(COURSES_FILE_URL);
      return response.data;
    }

    const response = await axios.get(COURSES_API_URL, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
};

export const fetchCourseById = async (id) => {
  try {
    if (isStaticJson) {
      const response = await axios.get(COURSES_FILE_URL);
      const course = response.data.find((courseItem) => String(courseItem.id) === String(id));

      if (!course) {
        throw new Error(`Course not found: ${id}`);
      }

      return course;
    }

    const response = await axios.get(`${COURSES_API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching course by ID:', error);
    throw error;
  }
};