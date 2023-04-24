import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addType, searched } from "../../features/jobs/jobsSlice";

const HomeHeader = () => {
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searched(search));
  };

  const handleChangeType = (type) => {
    dispatch(addType(type));
  };
  return (
    <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
      <h1 className="lws-section-title">All Available Jobs</h1>
      <form onSubmit={handleSearch}>
        <div className="flex gap-4">
          <div className="search-field group flex-1">
            <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
            <input
              type="text"
              placeholder="Search Job"
              className="search-input"
              id="lws-searchJob"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <select
            id="lws-sort"
            name="sort"
            autoComplete="sort"
            className="flex-1"
            value={sorting}
            onChange={(e) => setSorting(e.target.value)}
            onClick={() => handleChangeType(sorting)}
          >
            <option>Default</option>
            <option>Salary (Low to High)</option>
            <option>Salary (High to Low)</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default HomeHeader;
