import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSingleJob, removeJob } from "../../features/jobs/jobsSlice";

const SingleJob = ({ job }) => {
  const { title, type, salary, deadline, _id } = job;

  const dispatch = useDispatch();

  const handleGetSinglejob = (id) => {
    dispatch(fetchSingleJob(id));
  };

  const handleDeleteJob = () => {
    dispatch(removeJob(_id));
  };
  return (
    <div className="lws-single-job">
      <div className="flex-1 min-w-0">
        <h2 className="lws-title">{title}</h2>
        <div className="job-footers">
          <div className="lws-type">
            {/* <!-- Fulltime - #FF8A00,  --><!-- Internship - #FF5757,  --><!-- Remote - #56E5C4,  --> */}
            <i
              className={`fa-solid fa-stop ${
                type === "Internship"
                  ? "!text-[#FF5757]"
                  : type === "Full Time"
                  ? "!text-[#FF8A00]"
                  : "!text-[#56E5C4]"
              } text-lg mr-1.5`}
            ></i>
            {type}
          </div>
          <div className="lws-salary">
            <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
            BDT {salary}
          </div>
          <div className="lws-deadline">
            <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
            Closing on {new Date(deadline).toLocaleString()}
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="hidden sm:block">
          <Link to={`/edit-job`}>
            <button
              onClick={() => handleGetSinglejob(_id)}
              type="button"
              className="lws-edit btn btn-primary"
            >
              <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
              Edit
            </button>
          </Link>
        </span>

        <span className="sm:ml-3">
          <button
            type="button"
            onClick={handleDeleteJob}
            className="lws-delete btn btn-danger "
          >
            <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
            Delete
          </button>
        </span>
      </div>
    </div>
  );
};

export default SingleJob;
