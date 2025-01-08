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
          dcPrice: "\u20A9 35,100",
          coupon: "10%할인쿠폰적용가",
          soldout: "SOLD OUT"
        },
     ]
     const size = ['S', 'M', 'L', 'XL'];
     const information = [
      {
        name: 'DETAILS',
        content: 'Classic fit shirt in brushed cotton flannel.\n\n\nFeatures a patch pocket,\nfront button closure and topstitching along the seams.\nMidnear stock flag label stitched at the side.\n\n- Longsleeve\n- Collared neckline\n- Buttoned front closure and cuffs\n- Single patch pocket\n- Back yoke\n- Curved hem\n- Classic fit\n- Unisex\n- Material: 100% cotton\n- Imported'
      },
      {
        name: 'SIZE GUIDE',
        content: 'S- 어깨 48 기장 70 소매 64 가슴55\nM- 어깨 48 기장 70 소매 64 가슴55\nL- 어깨 48 기장 70 소매 64 가슴55\nXL- 어깨 48 기장 70 소매 64 가슴55'
      },
      {
        name: 'SHIPPING & RETURNS',
        content: '00택배 (1588-3223)\n\n구매하신 제품은 수령하신 날로부터 7일 이내에 접수해 주셔야 합니다.\n자세히 보기.'
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
      <div className='prod-detail'>
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