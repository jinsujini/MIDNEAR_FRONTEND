import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Close from '../../assets/img/product/close.svg'
import frontImg from '../../assets/img/product/prod1.png'

const ShoppingCart = () => {
 // const [quantity, setQuantity] = useState(1);
 // const [total, setTotal] = useState
  const navigate = useNavigate();

  const cartList = [
    { 
      id: 1,
      frontImg: frontImg,
      name: "CUTE SWEATER",
      price: "\u20A9 39,900",
      dcPrice: "\u20A9 35,100",
      coupon: "10%할인쿠폰적용가",
      color: "BLACK",
      size: "M",
      count: 2
    },
    { 
      id: 2,
      frontImg: frontImg,
      name: "LEATHER JACKET",
      price: "\u20A9 140,000",
      dcPrice: "\u20A9 35,100",
      coupon: "10%할인쿠폰적용가",
      color: "BROWN",
      size: "S",
      count: 1
    },
    { 
      id: 3,
      frontImg: frontImg,
      name: "CUTE SWEATER",
      price: "\u20A9 39,900",
      dcPrice: "\u20A9 35,100",
      coupon: "10%할인쿠폰적용가",
      color: "BLACK",
      size: "M",
      count: 2
    },
    { 
      id: 4,
      frontImg: frontImg,
      name: "CUTE SWEATER",
      price: "\u20A9 39,900",
      dcPrice: "\u20A9 35,100",
      coupon: "10%할인쿠폰적용가",
      color: "BLACK",
      size: "M",
      count: 2
    },
    { 
      id: 5,
      frontImg: frontImg,
      name: "CUTE SWEATER",
      price: "\u20A9 39,900",
      dcPrice: "\u20A9 35,100",
      coupon: "10%할인쿠폰적용가",
      color: "BLACK",
      size: "M",
      count: 2
    },
  ]
  /*
  const totalPrice = () => {
    return sumTotal.reduce((total, item)=>{
      const price = parseInt(item.price.replace(/\D/g, ""), 10);
      return total + price *item.count;
    }, 0);
  }
  const increaseNum = (num) => {
    setQuantity((prev)=>prev+num);
    setTotal((prev)=>prev + item.price * num);
  }
  const decreaseNum = (num) => {
    setQuantity((prev) => prev - num);
    setTotal((prev) => prev - item.price * num);
  }
*/
  return (
    <div className='ShoppingCart'>
        <div className='cart_content'>
            <div className='cart'>
                <div className='cart_nav'>
                    <img src={Close} className='close' onClick={()=>navigate(-1)}/>

                    <div className="sc2">
                        <p className="SEARCH">SEARCH</p>
                        <p className="LOGIN">LOGIN</p>
                        <p className="ACCOUNT">ACCOUNT</p>
                        <p className="BAG">
                        BAG <span>(1)</span>
                        </p>
                    </div>
                </div>
                <div className='prodList'>
                  {cartList.map((item,index)=>(
                    <div className='prod' key={index}>
                      <img src={item.frontImg} className='thumbnail'/>
                      <div className='info'>
                        <div className='top'>
                          <p className='name'>{item.name}</p>
                          <p className='price'>{item.price}</p>
                          {/** 
                          <div className='discount'>
                            <p className='dc-price'>{item.dcPrice}</p>
                            <p className='coupon'>{item.coupon}</p>
                          </div>
                          */}
                        </div>
                        <div className='bottom'>
                          <p>{item.color}<span className='slash'>/</span>{item.size}</p>
                          <button className='minus'>-</button><span className='cal'>{item.count}</span><button className='plus'>+</button>
                        </div>
                      </div>
                      <label className='checkbox'>
                          <input
                          type="checkbox" 
                          />
                        </label>
                    </div>
                  ))}
                </div>
                <div className='total'>
                  <div className='total-price'>
                    <p>총 상품 금액</p>
                    <p className='sum-price'>140,000</p>
                  </div>
                  <Link to="/order/member"><div className='box'>선택한 상품만 결제</div></Link>
                  <Link to="/order/member"><div className='box'>전체 결제</div></Link>
                  {/**
                   * <Link to="/order/non-member"><div className='box'>선택한 상품만 결제</div></Link>
                  <Link to="/order/non-member"><div className='box'>전체 결제</div></Link>
                   */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShoppingCart