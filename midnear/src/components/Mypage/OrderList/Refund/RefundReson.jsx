import React, { useState } from 'react'
import MyPageModal from '../../MyPageModal';

const RefundReson = () => {

    const [selectedOption, setSelectedOption] = useState('');
    const [phoneCodeInput, setPhoneCodeInput] = useState(false);
    const [emailCodeInput, setEmailCodeInput] = useState(false);

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
        setPhoneCodeInput(false);
        setEmailCodeInput(false);
    };
  return (
    <div className='container'>
        <div className='field_container'>
        <MyPageModal/>
        <div className='load_bar'>
            <span>[1] 상품 확인</span>
            <div className='load_bar_line_selected' />
            <span>[2] 사유 선택</span>
            <div className='load_bar_line' />
            <p>[3]확인 신청</p>
        </div>

        <div className='mypage_title'>환불 신청 사유</div>

        <div className='order_num'>
            <div className='order_title'>어떤 문제가 있나요?</div>
        </div>

        <div className='reson_section'>
            <div className="radio-group">
                <label className="radio-label">
                <input
                    type="radio"
                    name="findMethod"
                    onChange={handleOptionChange}
                />
                <span className="radio-text">단순 변심</span>
                </label>

                <span className="radio-text">배송 문제</span>

                <label className="radio-label">
                <input
                    type="radio"
                    name="findMethod"
                    onChange={handleOptionChange}
                />
                <span className="radio-text_small">다른 상품이 배송됨</span>
                </label>

                <label className="radio-label">
                <input
                    type="radio"
                    name="findMethod"
                    onChange={handleOptionChange}
                />
                <span className="radio-text_small">배송된 장소에 박스가 분실됨</span>
                </label>

                <label className="radio-label">
                <input
                    type="radio"
                    name="findMethod"
                    onChange={handleOptionChange}
                />
                <span className="radio-text_small">다른 주소로 배송됨</span>
                </label>

                <span className="radio-text">상품 문제</span>

                <label className="radio-label">
                <input
                    type="radio"
                    name="findMethod"
                    onChange={handleOptionChange}
                />
                <span className="radio-text_small">상품의 구성품/부속품이 들어있지 않음</span>
                </label>

                <label className="radio-label">
                <input
                    type="radio"
                    name="findMethod"
                    onChange={handleOptionChange}
                />
                <span className="radio-text_small">상품이 설명과 다름</span>
                </label>

                <label className="radio-label">
                <input
                    type="radio"
                    name="findMethod"
                    onChange={handleOptionChange}
                />
                <span className="radio-text_small">상품이 파손되어 배송됨</span>
                </label>

                <label className="radio-label">
                <input
                    type="radio"
                    name="findMethod"
                    onChange={handleOptionChange}
                />
                <span className="radio-text_small">상품 결함/기능에 이상이 있음</span>
                </label>
            </div>
        </div>

        <textarea
            placeholder="상세 내용 작성"
        />

    
        <div className='button_section'>
            <button className='previous_level_min'>이전 단계</button>
            <button className='next_level_min'>다음 단계</button>
        </div>


    </div>
    </div>
  )
}

export default RefundReson;
