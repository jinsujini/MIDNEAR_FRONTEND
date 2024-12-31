import React, { useState, useEffect, useRef } from 'react';
import frontImg from '../../assets/img/product/prod1.png'
import backImg from '../../assets/img/product/prod2.png'
import down from '../../assets/img/product/down.svg'
import up from '../../assets/img/product/up.svg'

const ProdDetail = () => {
     const [selectSize, setSelectSize] = useState(null); 
     const [isSelected, setIsSelected] = useState(null);
     const ref = useRef(null);
     const dummyList = [
        { 
          id: 1,
          frontImg: frontImg,
          backImg: backImg,
          name: "CUTE SWEATER",
          price: "\u20A9 39,900",
        },
     ]
     const size = ['S', 'M', 'L', 'XL'];
     const information = [
      {
        name: 'DETAILS',
        content: 'NONE'
      },
      {
        name: 'SIZE GUIDE',
        content: 'NONE'
      },
      {
        name: 'SHIPPING & RETURNS',
        content: 'NONE'
      },
      {
        name: 'STYLED WITH',
        content: 'NONE'
      },
      {
        name: 'REVIEW',
        content: 'NONE'
      }
     ]
     
     const showDetail = (item)=>{
        setIsSelected((prev) => (prev === item.name ? null : item.name));
     }
     useEffect(() => {
             const onClick = (e) => {            
             if(ref.current !== null && !ref.current.contains(e.target)){
                 setIsSelected(null);
             }
             };
             if(isSelected){
                 window.addEventListener("click", onClick);
             }
             return () => {
                 window.removeEventListener("click", onClick);
             };
         }, []);

  return (
    <div className='container'>
      <div className='all-info'>
        <div className='left-img'>
          <img src={dummyList[0].frontImg}/>
          <img src={dummyList[0].backImg}/>
        </div>
        <div className='right-info'>

          <div className='basic'>
            <div>
              <p className='name'>{dummyList[0].name}</p>
              <p className='price'>{dummyList[0].price}</p>
            </div>
            <div className='size'>
              {size.map((item)=>(
                <div className={selectSize === item ? 'bold' : ''} onClick={()=>{setSelectSize(item)}}>{item}</div>
              ))}
            </div>
          </div>

          <div className='color'>BLACK</div>
          <div className='img-list'>
            <img src={dummyList[0].frontImg} />                
            <img src={dummyList[0].backImg} />
          </div>

          <div className='box'>구매하기</div>
          <div className='box'>장바구니 담기</div>

          <div className='detail-box' ref={ref}>
            {information.map((item)=>(
              <div className='detail' >
                <div className='title'>
                <p className={isSelected === item.name ? 'bold' : ''} onClick={()=>showDetail(item)}>{item.name}</p>
                <img src={isSelected === item.name ? up : down} className='down' onClick={()=>showDetail(item)}/>
                </div>
                {isSelected === item.name && (
                  <p className='content'>{item.content}</p>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProdDetail