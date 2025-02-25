import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import SortMenu from '../Shop/SortMenu'
import search from '../../assets/img/magazine/search.svg'
import frontImg from '../../assets/img/product/prod1.png'
import backImg from '../../assets/img/product/prod2.png'

const MagazineList = () => {
  const [isClickBtn, setClickBtn] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dummyList = [
    { 
      id: 1,
      title: '가을에 그는 짜장면이 먹고 싶다.',
      date: '2025. 02. 17',
      image1: frontImg,
      image2: backImg,
      image3: frontImg,
      content: '어느새 길어진 그림자를 따라서 땅거미 진 어둠 속을 그대와 걷고 있네요 손을 마주 잡고 그 언제까지라도 함께 있는 것만으로 눈물이 나는 걸요. 바람이 차가워 지는 만큼 겨울은 가까워 오네요 조금씩 이거리 그 위로 그대를 보내야 했던 계절이 오네요. 지금 올해의 첫 눈꽃을 바라보며 함께 있는 이 순간에 내 모든걸 당신께 주고 싶어 이런 가슴에 그댈 안아요 약하기만 한 내가 아니에요. 이렇게 그댈 사랑하는데 그저 내 맘이 이럴 뿐인거죠  그대 곁이라면 또 어떤 일이라도 할 수 있을 것만 같아 그런 기분이 드네요. 오늘이 지나고 또 언제까지라도 우리 사랑 영원하길 기도하고 있어요. \n바람이 나의 창을 흔들고 어두운 밤마저 깨우면 그대 아픈 기억마저도 내가 다 지워줄게요. 환한 그 미소로 끝없이 내리는 새하얀 눈꽃들로 우리 걷던 이 거리가 어느새 변한 것도 모르는 체 환한 빛으로 물들어 가요. 누군가를 위해 난 살아갔나요 무엇이든 다 해주고 싶은 이런게 사랑인줄 배웠어요  혹시 그대 있는 곳 어딘지 알았다면 겨울 밤 별이 돼. 그대를 비췄을 텐데 웃던 날도 눈물에 젖었던 슬픈 밤에도 언제나 그 언제나 곁에 있을게요. 지금 올해의 첫 눈꽃을 바라보며 함께 있는 이 순간에 내 모든걸 당신께 주고 싶어 이런 가슴에 그댈 안아요 울지 말아요 나를 바라봐요. 그저 그대의 곁에서 함께 있고 싶은 맘뿐이라고 다신 그댈 놓지 않을 테요. \n어느새 길어진 그림자를 따라서 땅거미 진 어둠 속을 그대와 걷고 있네요 손을 마주 잡고 그 언제까지라도 함께 있는 것만으로 눈물이 나는 걸요. 바람이 차가워 지는 만큼 겨울은 가까워 오네요 조금씩 이거리 그 위로 그대를 보내야 했던 계절이 오네요. 지금 올해의 첫 눈꽃을 바라보며 함께 있는 이 순간에 내 모든걸 당신께 주고 싶어 이런 가슴에 그댈 안아요 약하기만 한 내가 아니에요. 이렇게 그댈 사랑하는데 그저 내 맘이 이럴 뿐인거죠  그대 곁이라면 또 어떤 일이라도 할 수 있을 것만 같아 그런 기분이 드네요. 오늘이 지나고 또 언제까지라도 우리 사랑 영원하길 기도하고 있어요. 지금 올해의 첫 눈꽃을 바라보며 함께 있는 이 순간에 내 모든걸 당신께 주고 싶어 이런 가슴에 그댈 안아요 울지 말아요 나를 바라봐요. 그저 그대의 곁에서 함께 있고 싶은 맘뿐이라고 다신 그댈 놓지 않을 테요. 누군가를 위해 난 살아갔나요. \n바람이 나의 창을 흔들고 어두운 밤마저 깨우면 그대 아픈 기억마저도 내가 다 지워줄게요. 환한 그 미소로 끝없이 내리는 새하얀 눈꽃들로 우리 걷던 이 거리가 어느새 변한 것도 모르는 체 환한 빛으로 물들어 가요. 누군가를 위해 난 살아갔나요 무엇이든 다 해주고 싶은 이런게 사랑인줄 배웠어요  혹시 그대 있는 곳 어딘지 알았다면 겨울 밤 별이 돼. 그대를 비췄을 텐데 웃던 날도 눈물에 젖었던 슬픈 밤에도 언제나 그 언제나 곁에 있을게요. 지금 올해의 첫 눈꽃을 바라보며 함께 있는 이 순간에 내 모든걸 당신께 주고 싶어 이런 가슴에 그댈 안아요 울지 말아요 나를 바라봐요. 그저 그대의 곁에서 함께 있고 싶은 맘뿐이라고 다신 그댈 놓지 않을 테요.'
    },
    { 
      id: 2,
      title: '가을에 그는 짜장면이 먹고 싶다.',
      date: '2025. 02. 16',
      image1: frontImg,
      image2: backImg,
      image3: frontImg,
      content:''
    },
    { 
      id: 3,
      title: '가을에 그는 짜장면이 먹고 싶다.',
      date: '2025. 02. 15',
      image1: frontImg,
      image2: backImg,
      image3: frontImg,
      content:''
    },
    
    { 
      id: 4,
      title: '가을에 그는 짜장면이 먹고 싶다.',
      date: '2025. 02. 14',
      image1: frontImg,
      image2: backImg,
      image3: frontImg,
      content:''
    },
    { 
      id: 5,
      title: '가을에 그는 짜장면이 먹고 싶다.',
      date: '2025. 02. 13',
      image1: frontImg,
      image2: backImg,
      image3: frontImg,
      content:''
    },
    { 
      id: 6,
      title: '가을에 그는 짜장면이 먹고 싶다.',
      date: '2025. 02. 12',
      image1: frontImg,
      image2: backImg,
      image3: frontImg,
      content: ''
    },{ 
      id: 7,
      title: '가을에 그는 짜장면이 먹고 싶다.',
      date: '2025. 02. 11',
      image1: frontImg,
      image2: backImg,
      image3: frontImg,
      content: '어느새 길어진 그림자를 따라서 땅거미 진 어둠 속을 그대와 걷고 있네요 손을 마주 잡고 그 언제까지라도 함께 있는 것만으로 눈물이 나는 걸요. 바람이 차가워 지는 만큼 겨울은 가까워 오네요 조금씩 이거리 그 위로 그대를 보내야 했던 계절이 오네요. 지금 올해의 첫 눈꽃을 바라보며 함께 있는 이 순간에 내 모든걸 당신께 주고 싶어 이런 가슴에 그댈 안아요 약하기만 한 내가 아니에요. 이렇게 그댈 사랑하는데 그저 내 맘이 이럴 뿐인거죠  그대 곁이라면 또 어떤 일이라도 할 수 있을 것만 같아 그런 기분이 드네요. 오늘이 지나고 또 언제까지라도 우리 사랑 영원하길 기도하고 있어요. \n바람이 나의 창을 흔들고 어두운 밤마저 깨우면 그대 아픈 기억마저도 내가 다 지워줄게요. 환한 그 미소로 끝없이 내리는 새하얀 눈꽃들로 우리 걷던 이 거리가 어느새 변한 것도 모르는 체 환한 빛으로 물들어 가요. 누군가를 위해 난 살아갔나요 무엇이든 다 해주고 싶은 이런게 사랑인줄 배웠어요  혹시 그대 있는 곳 어딘지 알았다면 겨울 밤 별이 돼. 그대를 비췄을 텐데 웃던 날도 눈물에 젖었던 슬픈 밤에도 언제나 그 언제나 곁에 있을게요. 지금 올해의 첫 눈꽃을 바라보며 함께 있는 이 순간에 내 모든걸 당신께 주고 싶어 이런 가슴에 그댈 안아요 울지 말아요 나를 바라봐요. 그저 그대의 곁에서 함께 있고 싶은 맘뿐이라고 다신 그댈 놓지 않을 테요. \n어느새 길어진 그림자를 따라서 땅거미 진 어둠 속을 그대와 걷고 있네요 손을 마주 잡고 그 언제까지라도 함께 있는 것만으로 눈물이 나는 걸요. 바람이 차가워 지는 만큼 겨울은 가까워 오네요 조금씩 이거리 그 위로 그대를 보내야 했던 계절이 오네요. 지금 올해의 첫 눈꽃을 바라보며 함께 있는 이 순간에 내 모든걸 당신께 주고 싶어 이런 가슴에 그댈 안아요 약하기만 한 내가 아니에요. 이렇게 그댈 사랑하는데 그저 내 맘이 이럴 뿐인거죠  그대 곁이라면 또 어떤 일이라도 할 수 있을 것만 같아 그런 기분이 드네요. 오늘이 지나고 또 언제까지라도 우리 사랑 영원하길 기도하고 있어요. 지금 올해의 첫 눈꽃을 바라보며 함께 있는 이 순간에 내 모든걸 당신께 주고 싶어 이런 가슴에 그댈 안아요 울지 말아요 나를 바라봐요. 그저 그대의 곁에서 함께 있고 싶은 맘뿐이라고 다신 그댈 놓지 않을 테요. 누군가를 위해 난 살아갔나요. \n바람이 나의 창을 흔들고 어두운 밤마저 깨우면 그대 아픈 기억마저도 내가 다 지워줄게요. 환한 그 미소로 끝없이 내리는 새하얀 눈꽃들로 우리 걷던 이 거리가 어느새 변한 것도 모르는 체 환한 빛으로 물들어 가요. 누군가를 위해 난 살아갔나요 무엇이든 다 해주고 싶은 이런게 사랑인줄 배웠어요  혹시 그대 있는 곳 어딘지 알았다면 겨울 밤 별이 돼. 그대를 비췄을 텐데 웃던 날도 눈물에 젖었던 슬픈 밤에도 언제나 그 언제나 곁에 있을게요. 지금 올해의 첫 눈꽃을 바라보며 함께 있는 이 순간에 내 모든걸 당신께 주고 싶어 이런 가슴에 그댈 안아요 울지 말아요 나를 바라봐요. 그저 그대의 곁에서 함께 있고 싶은 맘뿐이라고 다신 그댈 놓지 않을 테요.'
    },
    { 
      id: 8,
      title: '가을에 그는 짜장면이 먹고 싶다.',
      date: '2025. 02. 10',
      image1: frontImg,
      image2: backImg,
      image3: frontImg,
      content:''
    },
    { 
      id: 9,
      title: '가을에 그는 짜장면이 먹고 싶다.',
      date: '2025. 02. 9',
      image1: frontImg,
      image2: backImg,
      image3: frontImg,
      content:''
    },
  ]
  const topList = dummyList.filter((_, index) => index % 2 === 0);
  const bottomList = dummyList.filter((_, index) => index % 2 !== 0);
  const clickSearchBtn = ()=>{
    setClickBtn(!isClickBtn);
  };
  
  useEffect(()=>{
      const checkMax =() => {
        setIsMobile(window.innerWidth <= 500);
      };
      checkMax();
      window.addEventListener("resize", checkMax);
      return () => window.removeEventListener("resize", checkMax);
    },[]);
  
  return (
    <div className='Magazine'>
      <div className='container'>

        <div className='top'>
          <div className='title'>MAGAZINE</div>
          <div className='left-el'>
          <div className={`sort  ${isClickBtn ? 'click' : ''}`}>
            <SortMenu />
          </div>
          
          {!isMobile && (
              <div className='search-bar'>
                <input type='text' />
                <img src={search} className='search-btn' />
              </div>
            )}
            {isMobile && (
                <div className={`search-bar ${isClickBtn ? 'click' : ''}`}>
                <input type='text' />
                <img src={search} className='search-btn' onClick={clickSearchBtn}/>
              </div>
            )}
        </div>
        </div>

        <div className='bottom'>
          <div className='magazine-list'>
            {[topList, bottomList].map((list, index) => (
              <div key={index} className={`list-section ${index === 0 ? 'top-list' : 'bottom-list'}`}>
                {list.map((item) => (
                  <Link to="/others/magazine/detail" key={item.id}>
                    <div className="magazine">
                      <img src={item.image1} alt={item.title} className="thumbnail" />
                      <div className="magazine-info">
                        <p className="date">{item.date}</p>
                        <p className="title">{item.title}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MagazineList