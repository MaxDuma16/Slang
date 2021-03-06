import React, { useState } from 'react';
import c from './Paginator.module.css';

type PropsType = {
  totalItemsCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  portionSize?: number
}

const Pagination: React.FC<PropsType> = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
  // Pages Count
  const pagesCount = Math.ceil( totalItemsCount / pageSize );
  const pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState<number>(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={c.paginationWrapper}>
      { portionNumber > 1 &&
        <button className={c.btnPortion} onClick={() => {setPortionNumber(portionNumber - 1)}}>prev</button>}
      {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map(p => {
        return <span key={p} className={currentPage === p ? c.selectedPageActive : c.selectedPage}
        onClick={(e) => {onPageChanged(p)}}
        >{p}</span>
      })}
      { portionCount > portionNumber &&
        <button className={c.btnPortion} onClick={() => {setPortionNumber(portionNumber + 1)}}>next</button>}
    </div>
  )
};
export default Pagination;