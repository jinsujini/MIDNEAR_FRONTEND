import React from 'react'
import { useParams } from 'react-router-dom'
import SortMenu from './SortMenu'
import ProdList from './ProdList'
import frontImg from '../../assets/img/product/prod1.png'
import backImg from '../../assets/img/product/prod2.png'

const AllShop = () => {
  const {category, subCategory} = useParams();
  const title = `${category?.toUpperCase()} ${subCategory ? `- ${subCategory.toUpperCase()}` : ''}`
  // api 연동하면 db 값 받아서 배열에 저장
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
    { 
      id: 2,
      frontImg: frontImg,
      backImg: backImg,
      name: "CUTE SWEATER",
      price: "\u20A9 39,900",
      dcPrice: "\u20A9 35,100",
      coupon: "10%할인쿠폰적용가",
      soldout: "SOLD OUT"
    },
    { 
      id: 3,
      frontImg: frontImg,
      backImg: backImg,
      name: "CUTE SWEATER",
      price: "\u20A9 39,900",
      dcPrice: "\u20A9 35,100",
      coupon: "10%할인쿠폰적용가",
      soldout: "SOLD OUT"
    },
    
    { 
      id: 4,
      frontImg: frontImg,
      backImg: backImg,
      name: "CUTE SWEATER",
      price: "\u20A9 39,900"
    },
    { 
      id: 5,
      frontImg: frontImg,
      backImg: backImg,
      name: "CUTE SWEATER",
      price: "\u20A9 39,900"
    },
    { 
      id: 6,
      frontImg: frontImg,
      backImg: backImg,
      name: "CUTE SWEATER",
      price: "\u20A9 39,900"
    },
  ]

  return (
    <div className='container'>
    <div className='all-shop'>
      
      <div className='top-el'>
        <div className='title'>{title}</div>
        <div className='sort'>
          <SortMenu />
        </div>
      </div>
      
      <div>
        <ProdList productList={dummyList}/>
      </div>
    </div>
    </div>
  )
}

export default AllShop