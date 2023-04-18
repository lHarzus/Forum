import React from "react";

const Pagination = ({ array, currentPage, perPage, setPage }) => {
  const nrPages = Math.ceil(array.length / perPage);
  if (nrPages <= 6) {
    return (
      <div className="pagination">
        <i
          className={
            currentPage === 1
              ? "bi bi-arrow-left-circle disabled"
              : "bi bi-arrow-left-circle"
          }
          onClick={() => {
            if (currentPage !== 1) setPage(currentPage - 1);
          }}></i>
        {Array.from({ length: nrPages }, (_, i) => i + 1).map(i => (
          <span
            className={i === currentPage ? "page page-selected " : "page"}
            key={i}
            onClick={() => setPage(i)}>
            {i}{" "}
          </span>
        ))}

        <i
          className={
            currentPage === nrPages
              ? "bi bi-arrow-right-circle disabled"
              : "bi bi-arrow-right-circle"
          }
          onClick={() => {
            if (currentPage < nrPages) setPage(currentPage + 1);
          }}></i>
      </div>
    );
  } else if (currentPage === nrPages || currentPage + 1 === nrPages) {
    return (
      <div className="pagination">
        <i
          className={
            currentPage === 1
              ? "bi bi-arrow-left-circle disabled"
              : "bi bi-arrow-left-circle"
          }
          onClick={() => {
            if (currentPage !== 1) setPage(currentPage - 1);
          }}></i>
        <span
          className={1 === currentPage ? "page page-selected " : "page"}
          onClick={() => setPage(1)}>
          1{" "}
        </span>
        <span
          className={2 === currentPage ? "page page-selected " : "page"}
          onClick={() => setPage(2)}>
          2{" "}
        </span>
        <span
          className={3 === currentPage ? "page page-selected " : "page"}
          onClick={() => setPage(3)}>
          3{" "}
        </span>
        <span className="page">...</span>
        <span
          className={
            nrPages - 2 === currentPage ? "page page-selected " : "page"
          }
          onClick={() => setPage(nrPages - 2)}>
          {nrPages - 2}{" "}
        </span>
        <span
          className={
            nrPages - 1 === currentPage ? "page page-selected " : "page"
          }
          onClick={() => setPage(nrPages - 1)}>
          {nrPages - 1}{" "}
        </span>
        <span
          className={nrPages === currentPage ? "page page-selected " : "page"}
          onClick={() => setPage(nrPages)}>
          {nrPages}{" "}
        </span>

        <i
          className={
            currentPage === nrPages
              ? "bi bi-arrow-right-circle disabled"
              : "bi bi-arrow-right-circle"
          }
          onClick={() => {
            if (currentPage < nrPages) setPage(currentPage + 1);
          }}></i>
      </div>
    );
  } else if (currentPage === 1 || currentPage === 2) {
    return (
      <div className="pagination">
        <i
          className={
            currentPage === 1
              ? "bi bi-arrow-left-circle disabled"
              : "bi bi-arrow-left-circle"
          }
          onClick={() => {
            if (currentPage !== 1) setPage(currentPage - 1);
          }}></i>
        <span
          className={1 === currentPage ? "page page-selected " : "page"}
          onClick={() => setPage(1)}>
          1{" "}
        </span>
        <span
          className={2 === currentPage ? "page page-selected " : "page"}
          onClick={() => setPage(2)}>
          2{" "}
        </span>
        <span
          className={3 === currentPage ? "page page-selected " : "page"}
          onClick={() => setPage(3)}>
          3{" "}
        </span>
        <span className="page">...</span>
        <span
          className={
            nrPages - 2 === currentPage ? "page page-selected " : "page"
          }
          onClick={() => setPage(nrPages - 2)}>
          {nrPages - 2}{" "}
        </span>
        <span
          className={
            nrPages - 1 === currentPage ? "page page-selected " : "page"
          }
          onClick={() => setPage(nrPages - 1)}>
          {nrPages - 1}{" "}
        </span>
        <span
          className={nrPages === currentPage ? "page page-selected " : "page"}
          onClick={() => setPage(nrPages)}>
          {nrPages}{" "}
        </span>

        <i
          className={
            currentPage === nrPages
              ? "bi bi-arrow-right-circle disabled"
              : "bi bi-arrow-right-circle"
          }
          onClick={() => {
            if (currentPage < nrPages) setPage(currentPage + 1);
          }}></i>
      </div>
    );
  } else if (currentPage === 3) {
    return (
      <div className="pagination">
        <i
          className={
            currentPage === 1
              ? "bi bi-arrow-left-circle disabled"
              : "bi bi-arrow-left-circle"
          }
          onClick={() => {
            if (currentPage !== 1) setPage(currentPage - 1);
          }}></i>
        <span
          className={1 === currentPage ? "page page-selected " : "page"}
          onClick={() => setPage(1)}>
          1{" "}
        </span>
        <span
          className={2 === currentPage ? "page page-selected " : "page"}
          onClick={() => setPage(2)}>
          2{" "}
        </span>
        <span
          className={3 === currentPage ? "page page-selected " : "page"}
          onClick={() => setPage(3)}>
          3{" "}
        </span>
        <span
          className={4 === currentPage ? "page page-selected " : "page"}
          onClick={() => setPage(4)}>
          4{" "}
        </span>
        <span className="page">...</span>
        <span
          className={nrPages === currentPage ? "page page-selected " : "page"}
          onClick={() => setPage(nrPages)}>
          {nrPages}{" "}
        </span>
        <i
          className={
            currentPage === nrPages
              ? "bi bi-arrow-right-circle disabled"
              : "bi bi-arrow-right-circle"
          }
          onClick={() => {
            if (currentPage < nrPages) setPage(currentPage + 1);
          }}></i>
      </div>
    );
  } else {
    return (
      <div className="pagination">
        <i
          className={
            currentPage === 1
              ? "bi bi-arrow-left-circle disabled"
              : "bi bi-arrow-left-circle"
          }
          onClick={() => {
            if (currentPage !== 1) setPage(currentPage - 1);
          }}></i>
        <span
          className={1 === currentPage ? "page page-selected " : "page"}
          onClick={() => setPage(1)}>
          1{" "}
        </span>

        <span className="page">...</span>

        <span
          className={
            currentPage - 1 === currentPage ? "page page-selected " : "page"
          }
          onClick={() => setPage(currentPage - 1)}>
          {currentPage - 1}{" "}
        </span>
        <span
          className={
            currentPage === currentPage ? "page page-selected " : "page"
          }
          onClick={() => setPage(currentPage - 1)}>
          {currentPage}{" "}
        </span>
        <span
          className={
            currentPage + 1 === currentPage ? "page page-selected " : "page"
          }
          onClick={() => setPage(currentPage + 1)}>
          {currentPage + 1}{" "}
        </span>
        <span className="page">...</span>
        <span
          className={nrPages === currentPage ? "page page-selected " : "page"}
          onClick={() => setPage(nrPages)}>
          {nrPages}{" "}
        </span>

        <i
          className={
            currentPage === nrPages
              ? "bi bi-arrow-right-circle disabled"
              : "bi bi-arrow-right-circle"
          }
          onClick={() => {
            if (currentPage < nrPages) setPage(currentPage + 1);
          }}></i>
      </div>
    );
  }
};

export default Pagination;
