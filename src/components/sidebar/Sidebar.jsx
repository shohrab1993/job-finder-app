import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addType } from "../../features/jobs/jobsSlice";

const sidebar = () => {
  const dispatch = useDispatch();

  const handleChangeType = (type) => {
    dispatch(addType(type));
  };

  return (
    <div className="sidebar">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link
              to="/"
              onClick={() => handleChangeType("/")}
              className="main-menu menu-active"
              id="lws-alljobs-menu"
            >
              <i className="fa-solid fa-briefcase"></i>
              <span> All Available Jobs</span>
            </Link>
            <ul className="space-y-6 lg:space-y-2 ">
              <li>
                <Link
                  className="sub-menu"
                  onClick={() => handleChangeType("Internship")}
                  to=""
                  id="lws-internship-menu"
                >
                  <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                  Internship
                </Link>
              </li>
              <li>
                <Link
                  className="sub-menu"
                  onClick={() => handleChangeType("Full Time")}
                  to=""
                  id="lws-fulltime-menu"
                >
                  <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                  Full Time
                </Link>
              </li>
              <li>
                <Link
                  className="sub-menu"
                  onClick={() => handleChangeType("Remote")}
                  to=""
                  id="lws-remote-menu"
                >
                  <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
                  Remote
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/add-new-job" className="main-menu" id="lws-addJob-menu">
              <i className="fa-solid fa-file-circle-plus"></i>
              <span>Add NewJob</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default sidebar;
