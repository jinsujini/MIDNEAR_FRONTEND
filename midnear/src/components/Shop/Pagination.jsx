import React, { useState } from 'react'
import next from '../../../assets/img/product/next.svg'
import prev from '../../../assets/img/product/prev.svg'


const Pagination = ({total, limit, page, setPage}) => {
    const pageNum = Math.ceil(total/limit); // 전체 페이지 개수

  return (
    <div className='pagination'>
      {/* 이전 버튼 */}
      <button onClick={() => setPage(page - 1)} disabled={page === 1} className='prev'>
        <img src={prev} />
      </button>
      
      {/* 페이지 번호 표시 */}
      {Array(pageNum)
        .fill()
        .map((_, i) => (
          <div
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? "page" : undefined}
             className='pageNum'
          > 
            <div>{i + 1}</div>
          </div>
        ))}
      
      {/* 다음 버튼 */}
      <button onClick={() => setPage(page + 1)} disabled={page === pageNum} className='next'>          
        < img src={next}/>
      </button>
    </div>
  )
}

export default Pagination