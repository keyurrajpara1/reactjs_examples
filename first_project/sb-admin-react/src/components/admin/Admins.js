import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { columns } from './columns';
import tableData from "./MOCK_DATA.json";
import Table from "./table";
import Pagination from "./pagination";

function Admins() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      <div className="container-fluid px-4">
        <h1 className="mt-4">Admins</h1>
        <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item">
              <NavLink to="/">
                  Dashboard
              </NavLink>
            </li>
            <li className="breadcrumb-item active">Admins</li>
        </ol>
        <div className="card mb-4">
            <div className="card-header">
                <i className="fas fa-table me-1"></i>
                React table client side example
            </div>
            <div className="card-body">
              <Table columns={columns} data={tableData} />
              <Pagination
                totalRows={tableData.length}
                pageChangeHandler={setCurrentPage}
                rowsPerPage={10}
                currentPage={currentPage}
              />
            </div>
        </div>
      </div>
    </>
  )
}

export default Admins
