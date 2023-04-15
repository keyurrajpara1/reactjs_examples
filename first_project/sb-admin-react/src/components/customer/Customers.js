import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getData, columns, formatRowData } from "./data";
import Table from "./table";
import Pagination from "./pagination";
// import Pagination from "../../components/pagination";

const Customers = () => {
  const [pageData, setPageData] = useState({
    rowData: [],
    isLoading: false,
    totalPages: 0,
    totalDataCount: 0,
  });
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setPageData((prevState) => ({
      ...prevState,
      rowData: [],
      isLoading: true,
    }));
    getData(currentPage).then((info) => {
      const { totalPages, totalDataCount, dataTable, pageNumber } = info;
      let ab = formatRowData(dataTable);
      console.log(ab);
      setPageData({
        isLoading: false,
        rowData: formatRowData(dataTable),
        totalPages,
        totalDataCount,
      });
    });
  }, [currentPage]);
  return (
    <>
      <div className="container-fluid px-4">
        <h1 className="mt-4">Customers</h1>
        <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item">
              <NavLink to="/">
                  Dashboard
              </NavLink>
            </li>
            <li className="breadcrumb-item active">Customers</li>
        </ol>
        <div className="card mb-4">
            <div className="card-header">
                <i className="fas fa-table me-1"></i>
                React table server side example
            </div>
            <div className="card-body">
              <Table
                columns={columns}
                data={pageData.rowData}
                isLoading={pageData.isLoading}
              />
              <Pagination
                totalRows={pageData.totalDataCount}
                pageChangeHandler={setCurrentPage}
                rowsPerPage={2}
                currentPage={currentPage}
              />
            </div>
        </div>
      </div>
    </>
  );
};

export default Customers;
