import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllJobs } from "../../features/jobs/jobsSlice";
import Loader from "../ui/Loader";
import SingleJob from "./SingleJob";

const Joblist = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, jobs, type, search } = useSelector(
    (state) => state.job
  );

  useEffect(() => {
    dispatch(fetchAllJobs(type));
  }, [type]);

  const serchByTitle = (job) => {
    if (search.length > 0) {
      return search.includes(job.title);
    } else {
      return job;
    }
  };

  // decide what to render
  let content;
  if (isLoading) content = <Loader />;
  if (!isLoading && isError) content = <div>there is some error!!!</div>;
  if (!isLoading && !isError && jobs.length === 0)
    content = <div>jobs not found !!!</div>;
  if (!isLoading && !isError && jobs?.length > 0) {
    content = jobs
      .filter((job) => serchByTitle(job))
      .map((job) => <SingleJob key={job._id} job={job} />);
  }

  return <div className="jobs-list">{content}</div>;
};

export default Joblist;
