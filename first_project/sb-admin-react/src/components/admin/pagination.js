import React, { useState, useEffect } from "react";

const Pagination = ({
  pageChangeHandler,
  totalRows,
  rowsPerPage,
  currentPage,
}) => {
  // Calculating max number of pages
  const noOfPages = Math.ceil(totalRows / rowsPerPage);

  // Creating an array with length equal to no.of pages
  const pagesArr = [...new Array(noOfPages)];
  
  // State variable to hold the current page. This value is
  // passed to the callback provided by the parent
  // const [currentPage, setCurrentPage] = useState(1);

  // Navigation arrows enable/disable state
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoNext, setCanGoNext] = useState(true);

  // These variables give the first and last record/row number
  // with respect to the current page
  const [pageFirstRecord, setPageFirstRecord] = useState(1);
  const [pageLastRecord, setPageLastRecord] = useState(rowsPerPage);

  // Onclick handlers for the butons
  const onNextPage = () => pageChangeHandler(currentPage + 1);
  const onPrevPage = () => pageChangeHandler(currentPage - 1);
  const onPageSelect = (pageNo) => pageChangeHandler(pageNo);

  // Disable previous and next buttons in the first and last page
  // respectively
  useEffect(() => {
    if (noOfPages === currentPage) {
      setCanGoNext(false);
    } else {
      setCanGoNext(true);
    }
    if (currentPage === 1) {
      setCanGoBack(false);
    } else {
      setCanGoBack(true);
    }
  }, [noOfPages, currentPage]);

  // To set the starting index of the page
  useEffect(() => {
    const skipFactor = (currentPage - 1) * rowsPerPage;
    // Some APIs require skip for paginaiton. If needed use that instead
    // pageChangeHandler(skipFactor);
    // pageChangeHandler(currentPage)
    setPageFirstRecord(skipFactor + 1);
  }, [currentPage]);

  // To set the last index of the page
  useEffect(() => {
    const count = pageFirstRecord + rowsPerPage;
    setPageLastRecord(count > totalRows ? totalRows : count - 1);
  }, [pageFirstRecord, rowsPerPage, totalRows]);

  return (
    <>
      {noOfPages > 1 ? (
        <div className="row mb-3">
          <div className="col-md-2">
            Showing {pageFirstRecord} to {pageLastRecord} of {totalRows} entries
          </div>
          <div className="col-md-10">
            <nav className="float-end">
              <ul className="pagination">
                {canGoBack ? (
                  <li className="page-item">
                    <a className="page-link" href="#" onClick={onPrevPage}>Previous</a>
                  </li>
                ) : (
                  <li className="page-item disabled">
                    <span className="page-link">Previous</span>
                  </li>
                )}

                {pagesArr.map((num, index) => (
                  (index + 1 === currentPage) ? (
                    <li className="page-item active" key={index} aria-current="page">
                      <span className="page-link">{index + 1}</span>
                    </li>
                  ) : (
                    <li className="page-item" key={index}>
                      <a className="page-link" href="#" onClick={() => onPageSelect(index + 1)}>{index + 1}</a>
                    </li>
                  )
                ))}

                {canGoNext ? (
                  <li className="page-item">
                    <a className="page-link" href="#" onClick={onNextPage}>Next</a>
                  </li>
                ) : (
                  <li className="page-item disabled">
                    <span className="page-link">Next</span>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Pagination;
