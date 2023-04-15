import GlobalFilter from "./GlobalFilter";
import { useTable, useGlobalFilter, usePagination } from 'react-table'
function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    state, setGlobalFilter,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { globalFilter, pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useGlobalFilter,
    usePagination
  )

  // Render the UI for your table
  return (
    <>
      <GlobalFilter pageIndex={pageIndex} gotoPage={gotoPage} pageOptions={pageOptions} pageSize={pageSize} setPageSize={setPageSize} filter={globalFilter} setFilter={setGlobalFilter} />
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
            page.map((row) => {
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
    </>
  )
}

export default Table;
