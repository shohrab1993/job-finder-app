import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createJob } from "../../features/jobs/jobsSlice";
import { jobTitle, jobType } from "../localData/localData";

const Form = ({ job }) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState("");
  const [deadline, setDeadline] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(
      createJob({
        title,
        type,
        salary,
        deadline,
      })
    );
    navigate("/");
  };

  return (
    <form className="space-y-6" onSubmit={handleCreate}>
      <div className="fieldContainer">
        <label className="text-sm font-medium text-slate-300">Job Title</label>
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
          data-date-format="YYYY MM DD"
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
  );
};

export default Form;
