import axios from 'axios';

const API_BASE_URL = '';

export const fetchCourses = async (params = {}) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/courses`, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
};

export const fetchCourseById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/courses/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching course by ID:', error);
    throw error;
  }
};