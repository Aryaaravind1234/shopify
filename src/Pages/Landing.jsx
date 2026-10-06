import React, { useEffect, useState } from 'react'

import Header from '../Components/Header'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

import { fetchProducts } from '../Redux/Slices/ProductSlice'
import { useDispatch, useSelector } from 'react-redux'

import Spinner from 'react-bootstrap/Spinner'
import Pagination from '../Components/Pagination'

function Landing() {

    const { loading, allProducts, error } = useSelector(
        state => state.product
    )

    console.log(loading, allProducts, error)

    const [currentPage, setCurrentPage] = useState(1)

    const cardPerPage = 6

    const endingIndex = currentPage * cardPerPage
    const startingIndex = endingIndex - cardPerPage

    const currentProducts = allProducts?.slice(
        startingIndex,
        endingIndex
    )

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    useEffect(() => {
        if (
            allProducts?.length > 0 &&
            startingIndex >= allProducts.length
        ) {
            setCurrentPage(1)
        }
    }, [allProducts, startingIndex])

    return (
        <>
            <Header insideLanding={true} />

            {loading ? (
                <div className="text-center my-5 fs-1">
                    <Spinner animation="border" variant="warning" />
                </div>
            ) : (
                <div className="container my-5">

                    <div className="row">

                        {currentProducts?.length > 0 ? (
                            currentProducts.map(pro => (
                                <div
                                    className="col-lg-4 mt-3"
                                    key={pro.id}
                                >
                                    <Card
                                        className="p-2 shadow rounded"
                                        style={{ width: '18rem' }}
                                    >

                                        <Card.Img
                                            variant="top"
                                            src={pro.thumbnail}
                                            style={{ height: '250px' }}
                                        />

                                        <Card.Body>

                                            <Card.Title className="text-center">
                                                {pro.title.slice(0, 15)}...
                                            </Card.Title>

                                            <div className="text-center">

                                                <Link
                                                    to={`/product/${pro.id}/view`}
                                                    className="fw-bold text-decoration-none"
                                                >
                                                    View More...
                                                </Link>

                                            </div>

                                        </Card.Body>

                                    </Card>
                                </div>
                            ))
                        ) : (
                            <p className="text-center fw-bold fs-2">
                                No Products Found!!
                            </p>
                        )}

                    </div>

                    <div className="text-center my-5">

                        <Pagination
                            totalProducts={allProducts?.length || 0}
                            productPerPage={cardPerPage}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />

                    </div>

                </div>
            )}

        </>
    )
}

export default Landing