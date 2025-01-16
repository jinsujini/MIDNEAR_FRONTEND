import React, {useState} from 'react'
import frontImg from '../../assets/img/product/prod1.png'

const OrderList = () => {
    
  const [cartItems, setCartItems] = useState([]); 
  const [total, setTotal] = useState(0); //{total.toLocaleString('ko-KR')}
    const cartList = [
        { 
          id: 1,
          frontImg: frontImg,
          name: "CUTE SWEATER",
          price: 39000,
          dcPrice: 35100,
          color: "BLACK",
          size: "M",
          count: 2
        },
        { 
          id: 2,
          frontImg: frontImg,
          name: "LEATHER JACKET",
          price: 140000,
          dcPrice: 35100,
          color: "BROWN",
          size: "S",
          count: 1
        },
    ]

  const decreaseNum = (id) => {
    setCartItems((prev) =>
    prev.map((item) => 
    item.id === id && item.count > 1 ? {...item, count : item.count - 1} : item
  ))
  }
  const increaseNum = (id) => {
    setCartItems((prev) => 
    prev.map((item) =>
    item.id === id ? {...item, count: item.count + 1 } : item
  ))
  }

  return (
    <div className='order_content'>
      <div className='title'>주문 내용</div>
      <div className='s_title'>상품</div>
      <div className='prodList'>
        {cartList.map((item,index)=>(
          <div className='prod' key={index}>
            <img src={item.frontImg} className='thumbnail'/>
            <div className='info'>
              <div className='top'>
                <p className='name'>{item.name}</p>
                <p className='price'>&#xffe6; {item.price.toLocaleString('ko-KR')}</p>
                {/**
                <p className='dc-price'>&#xffe6; {item.dcPrice}</p>
                */}
              </div>
              <div className='bottom'>
                <p>{item.color}<span className='slash'>/</span>{item.size}</p>
                <div className='quantity'>
                <button className='minus' onClick={()=>decreaseNum(item.id)}>-</button>
                <p className='cal'>{item.count}</p>
                <button className='plus' onClick={()=>increaseNum(item.id)}>+</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='total'>
        <p className='text'>상품 합계</p>
        <p>&#xffe6;</p>
      </div>
      <div className='fee'>
        <p className='text'>배송비</p>
        <p>&#xffe6; 0</p>
      </div>
      <div className='total-fee'>
        <p className='text'>총 합계(수량:)</p>
        <p>&#xffe6;</p>
      </div>
    </div>
  )
}

export default OrderList