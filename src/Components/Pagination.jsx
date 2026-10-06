import React from 'react'

function Pagination({
    totalProducts,
    productPerPage,
    currentPage,
    setCurrentPage
}) {

    let pages = []

    for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
        pages.push(i)
    }

    return (
        <div id="parent">

            {/* Previous */}
            <button
                onClick={() => setCurrentPage(currentPage - 1)}
                className="btn mx-3 border shadow rounded px-4 py-2"
                disabled={currentPage === 1}
            >
                <i className="fa-solid fa-backward"></i>
            </button>

            {/* Page Numbers */}
            {pages.map(page => (
                <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`btn mx-3 border shadow rounded px-4 py-2 ${
                        page === currentPage ? 'btn-dark' : 'btn-light'
                    }`}
                >
                    {page}
                </button>
            ))}

            {/* Next */}
            <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="btn mx-3 border shadow rounded px-4 py-2"
                disabled={currentPage === pages.length}
            >
                <i className="fa-solid fa-forward"></i>
            </button>

        </div>
    )
}

export default Pagination