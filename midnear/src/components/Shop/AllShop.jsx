import React from 'react'
import SortMenu from './SortMenu'
import ProdList from './ProdList'
import frontImg from '../../assets/img/product/prod1.png'
import backImg from '../../assets/img/product/prod2.png'

const AllShop = () => {
  // api 연동하면 db 값 받아서 배열에 저장
  const dummyList = [
    { 
      id: 1,
      frontImg: frontImg,
      backImg: backImg,
      name: "CUTE SWEATER",
      price: "\u20A9 39,900"
    },
    { 
      id: 2,
      frontImg: frontImg,
      backImg: backImg,
      name: "CUTE SWEATER",
      price: "\u20A9 39,900"
    },
    { 
      id: 3,
      frontImg: frontImg,
      backImg: backImg,
      name: "CUTE SWEATER",
      price: "\u20A9 39,900"
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
    }
  ]

  return (
    <div className='container'>
      {/** 상위 요소-제목, 정렬메뉴 */}
      <div className='top-el'>
        <div className='title'>ALL SHOP</div>
        <div className='sort'>
          <SortMenu />
        </div>
      </div>
      {/** 상품 리스트 보여주기 */}
      <div>
        <ProdList productList={dummyList}/>
      </div>
    </div>
  )
}

export default AllShop