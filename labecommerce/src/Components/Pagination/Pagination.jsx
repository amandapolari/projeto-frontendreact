import React from 'react';
import {
    PaginationButton,
    PaginationContainer,
    PaginationItem,
    PaginationList,
} from './PaginationStyle';

const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handlePageClick = (number) => {
        paginate(number);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <PaginationContainer>
            <PaginationList>
                {pageNumbers.map((number) => (
                    <PaginationItem key={number}>
                        <PaginationButton
                            isActive={currentPage === number}
                            onClick={() => handlePageClick(number)}
                        >
                            {number}
                        </PaginationButton>
                    </PaginationItem>
                ))}
            </PaginationList>
        </PaginationContainer>
    );
};

export default Pagination;
