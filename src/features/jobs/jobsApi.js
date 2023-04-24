import axios from "../../utils/axios";

const getAllJobs = async (type) => {
  let queryStr;
  if (type === "Internship" || type === "Full Time" || type === "Remote") {
    queryStr = `/jobs?type=${type}`;
  } else if (type === "Salary (Low to High)") {
    queryStr = `/jobs?sorts=salary`;
  } else if (type === "Salary (High to Low)") {
    queryStr = `/jobs?sorts=-salary`;
  } else if (type === "/") {
    queryStr = "/jobs";
  } else {
    queryStr = "/jobs";
  }

  const response = await axios.get(queryStr);
  return response.data;
};

export const getSinglejob = async (id) => {
  const response = await axios.get(`/jobs/${id}`);
  return response.data;
};

export const postJob = async (data) => {
  const response = await axios.post("/jobs", data);
  return response.data;
};

export const updateJob = async (id, data) => {
  const response = await axios.patch(`/jobs/${id}`, data);
  return response.data;
};

export const deleteJob = async (id) => {
  const response = await axios.delete(`/jobs/${id}`);
  return response.data;
};
export default getAllJobs;
