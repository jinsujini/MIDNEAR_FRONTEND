import React from 'react'

const Pagination = ({total, limit, page, setPage}) => {
    const pageNum = Math.ceil(total/limit); // 전체 페이지 개수

  return (
    <div className='pagination'>
      {/* 이전 버튼 */}
      <button onClick={() => setPage(page - 1)} disabled={page === 1} className='prev'>
      </button>
      
      {/* 페이지 번호 표시 */}
      {Array(pageNum)
        .fill()
        .map((_, i) => (
          <button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? "page" : undefined}
          >
            {i + 1}
          </button>
        ))}
      
      {/* 다음 버튼 */}
      <button onClick={() => setPage(page + 1)} disabled={page === pageNum} className='next'>
      </button>
    </div>
  )
}

export default Pagination