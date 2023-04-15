import React from "react";
const GlobalFilter = ({ pageIndex, gotoPage, pageOptions, pageSize, setPageSize, filter, setFilter }) => {
  return (
    <>
      <div className="row mb-3">
        <div className="col-md-10">
        </div>
        <div className="col-md-2 d-flex align-items-center justify-content-end">
          <div>Page{' '}</div>
          <input
            className="form-control mx-2"
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          /> <div>of {pageOptions.length}</div>
        </div>
      </div>
      <div className="row mb-3 d-flex align-items-center">
        <div className="col-md-2">
          <div className="d-flex align-items-center">
            <select style={{width: "30%"}} className="form-control"
              value={pageSize}
              onChange={e => {
                setPageSize(Number(e.target.value))
              }}
            >
              {[10, 25, 50, 100].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
            <div className="mx-2">entries per page</div>
          </div>
        </div>
        <div className="col-md-8">
        </div>
        <div className="col-md-2">
          <span>
            <input className="form-control" placeholder="Search" value={filter || ''} onChange={(e) => setFilter(e.target.value)} />
          </span>
        </div>
      </div>
    </>
  );
}
export default GlobalFilter;