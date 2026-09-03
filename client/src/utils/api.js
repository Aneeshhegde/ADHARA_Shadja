import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

// Course APIs
export const getCourses = () => axios.get(`${API_BASE}/courses`);
export const getCourseById = (id) => axios.get(`${API_BASE}/courses/${id}`);
export const createCourse = (data) => axios.post(`${API_BASE}/courses`, data);
export const updateCourse = (id, data) => axios.put(`${API_BASE}/courses/${id}`, data);
export const deleteCourse = (id) => axios.delete(`${API_BASE}/courses/${id}`);

// Student APIs
export const registerStudent = (data) => axios.post(`${API_BASE}/students/register`, data);
export const getStudents = () => axios.get(`${API_BASE}/students`);
export const getStudentById = (id) => axios.get(`${API_BASE}/students/${id}`);
export const updateStudent = (id, data) => axios.put(`${API_BASE}/students/${id}`, data);
export const deleteStudent = (id) => axios.delete(`${API_BASE}/students/${id}`);

// Contact APIs
export const sendContactMessage = (data) => axios.post(`${API_BASE}/contact`, data);
export const getContacts = () => axios.get(`${API_BASE}/contact`);
export const updateContactStatus = (id, status) => axios.put(`${API_BASE}/contact/${id}`, { status });

// Review APIs
export const createReview = (data) => axios.post(`${API_BASE}/reviews`, data);
export const getReviews = () => axios.get(`${API_BASE}/reviews`);
export const getReviewById = (id) => axios.get(`${API_BASE}/reviews/${id}`);
export const deleteReview = (id) => axios.delete(`${API_BASE}/reviews/${id}`);

// Payment APIs
export const createPaymentOrder = (data) => axios.post(`${API_BASE}/payment/create-order`, data);
export const verifyPayment = (data) => axios.post(`${API_BASE}/payment/verify`, data);

export default {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
  registerStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
  sendContactMessage,
  getContacts,
  updateContactStatus,
  createReview,
  getReviews,
  getReviewById,
  deleteReview,
  createPaymentOrder,
  verifyPayment
};
