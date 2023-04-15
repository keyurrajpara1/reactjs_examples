import React, { useMemo } from "react";
import { useTable } from "react-table";

const AppTable = ({ columns, data, isLoading, manualPagination = false }) => {
  const columnData = useMemo(() => columns, [columns]);
  const rowData = useMemo(() => data, [data]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns: columnData,
    data: rowData,
    manualPagination,
  });
  return (
    <>
      {isLoading ? (
        'Loading...'
      ) : (
        <>
          <table className="table table-bordered table-hover" {...getTableProps()}>
            <thead>
              {
                headerGroups.map((headerGroup) => {
                  return <tr {...headerGroup.getHeaderGroupProps()}>
                    {
                      headerGroup.headers.map((column) => {
                        return <th {...column.getHeaderProps()}>
                          {column.render('Header')}
                        </th>
                      })
                    }
                  </tr>
                })
              }
            </thead>
            <tbody {...getTableBodyProps()}>
              {
                rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {
                        row.cells.map((cell) => {
                          return <td {...cell.getCellProps()}>
                            {cell.render('Cell')}
                          </td>
                        })
                      }
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
          {manualPagination && (
            <div>
              {/* YOUR CLIENT SIDE PAGINATION COMPONENT BUILT USING REACT-TABLE UTILITY FUNCTIONS */}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default AppTable;
