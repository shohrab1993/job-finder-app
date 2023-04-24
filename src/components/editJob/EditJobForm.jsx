import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeJobs } from "../../features/jobs/jobsSlice";
import { jobTitle, jobType } from "../localData/localData";

const EditJobForm = () => {
  const { job, isLoading } = useSelector((state) => state.job) || {};
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState("");
  const [deadline, setDeadline] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // date formateing
  const dateFormating = () => {
    const date = new Date(job.deadline);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formatedDate = `${year}-${month}-${day}`;
    setDeadline(formatedDate);
  };

  useEffect(() => {
    const { _id, title, type, salary, deadline } = job || {};
    if (_id) {
      setTitle(title);
      setType(type);
      setSalary(salary);
      dateFormating();
    }
  }, [job]);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      changeJobs({
        id: job._id,
        data: {
          title,
          type,
          salary,
          deadline,
        },
      })
    );
    navigate("/");
  };

  return (
    <div className="lg:pl-[14rem] mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <h1 className="mb-10 text-center lws-section-title">Edit Job</h1>

        <div className="max-w-3xl mx-auto">
          {!isLoading && (
            <form className="space-y-6" onSubmit={handleUpdate}>
              <div className="fieldContainer">
                <label className="text-sm font-medium text-slate-300">
                  Job Title
                </label>
                <select
                  id="lws-JobTitle"
                  name="lwsJobTitle"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                >
                  <option value="" hidden>
                    Select Job
                  </option>

                  {jobTitle.map((val, i) => (
                    <option key={i}>{val.optionValue}</option>
                  ))}
                </select>
              </div>

              <div className="fieldContainer">
                <label>Job Type</label>
                <select
                  id="lws-JobType"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  name="lwsJobType"
                  required
                >
                  <option value="" hidden>
                    Select Job Type
                  </option>
                  {jobType.map((val, i) => (
                    <option key={i}>{val.type}</option>
                  ))}
                </select>
              </div>

              <div className="fieldContainer">
                <label>Salary</label>
                <div className="flex border rounded-md shadow-sm border-slate-600">
                  <span className="input-tag">BDT</span>
                  <input
                    type="number"
                    name="lwsJobSalary"
                    id="lws-JobSalary"
                    required
                    className="!rounded-l-none !border-0"
                    placeholder="20,00,000"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                  />
                </div>
              </div>

              <div className="fieldContainer">
                <label>Deadline</label>
                <input
                  type="date"
                  name="lwsJobDeadline"
                  id="lws-JobDeadline"
                  required
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                />
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  id="lws-submit"
                  className="cursor-pointer btn btn-primary w-fit"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </main>
    </div>
  );
};

export default EditJobForm;
