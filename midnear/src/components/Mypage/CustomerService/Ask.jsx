import React, { useRef } from 'react'
import MyPageModal from '../MyPageModal'

const Ask = () => {

  return (
    <div className='container'>
        <div className='field_container'>
            <MyPageModal />
            <div className='field_container_content'>
                <div className="inquiry-form">
                    <h1>고객지원/1:1문의</h1>
                    <form>
                        <label htmlFor="title">제목</label>
                        <input type="text" id="title" name="title" placeholder="제목을 입력하세요" />

                        <label htmlFor="content">문의내용</label>
                        <textarea id="content" name="content" placeholder="문의 내용을 입력하세요"></textarea>

                        <div className="checkbox-container">
                        <input type="checkbox" id="private" name="private" defaultChecked />
                        <label htmlFor="private">비공개로 작성</label>
                        </div>

                        <button type="submit">글쓰기</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ask