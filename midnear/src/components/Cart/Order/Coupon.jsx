import React, {useState, useEffect, useRef} from 'react'

const Coupon = () => {
    const [isOpen, setIsOpen] = useState(false);
        const [select, setSelect] = useState(null);
        const ref = useRef(null);
        const couponList = [
            {id: 1, name: '고객 감사 깜짝 20% 할인 쿠폰', slae: 20},
            {id: 2, name: '10% 할인 쿠폰', slae: 10},
            {id: 3, name: '30% 할인 쿠폰', slae: 30},
            {id: 4, name: '5% 할인 쿠폰', slae: 5},
            {id: 5, name: '고객 감사 깜짝 20% 할인 쿠폰', slae: 20},
            {id: 6, name: '10% 할인 쿠폰', slae: 10},
            {id: 7, name: '30% 할인 쿠폰', slae: 30},
            {id: 8, name: '5% 할인 쿠폰', slae: 5},
        ];
    
        // 드롭다운 메뉴
        const removeHandler = () => {
            setIsOpen(!isOpen);
        }
        const handleSelect = (value) =>{
            setSelect(value);
            setIsOpen(false);
        }
        useEffect(() => {
            const onClick = (e) => {            
            if(ref.current !== null && !ref.current.contains(e.target)){
                setIsOpen(!isOpen)
            }
            };
            if(isOpen){
                window.addEventListener("click", onClick);
            }
            return () => {
                window.removeEventListener("click", onClick);
            };
        }, [isOpen]);
        
  return (
    <div className='dc-btn' ref={ref}>
        <div className="selected" onClick={removeHandler}>
                <div className='coupon'>{select ? couponList.find(coupon => coupon.id === select)?.name : '할인 쿠폰 적용하기'}</div>
              </div>
        
              {isOpen && (
                <div className="no-selected">
                  {couponList
                    .filter(couponList => couponList.id !== select)
                    .map(couponList => (
                        <div className='coupon'
                        key={couponList.id}
                        onClick={() => handleSelect(couponList.id)}
                      >
                        {couponList.name}
                      </div>
                    ))}</div>
                )}
    </div>
  )
}

export default Coupon