import React from "react";

const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <>
      <div className="row mb-3">
        <div className="col-md-10">
          
        </div>
        <div className="col-md-2">
          <span>
            Search:
            <input className="form-control" value={filter || ''} onChange={(e) => setFilter(e.target.value)} />
          </span>
        </div>
      </div>
    </>
  );
}
export default GlobalFilter;