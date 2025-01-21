import React, {useState, useEffect} from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom';
import PrivacyModal from './PrivacyModal'
import StepHeader from '../StepHeader';
import check from '../../../assets/img/cart/check.svg'

const EditAdd = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { address } = location.state || {};     
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);    
    const [formData, setFormData] = useState({
        name: '',
        destination: '',
        isDefault: '',
        number: '',
        firstAdd: '',
        secondAdd: '',
        postNum: '',
        memo: '',
    });
    const [isChecked, setIsChecked] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);    
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        if (address) {
          setFormData({
            name: address.name,
            destination: address.destination,
            isDefault: address.isDefault,
            number: address.number,
            firstAdd: address.firstAdd,
            secondAdd: address.secondAdd,
            postNum: address.postNum,
          });
        }
    }, [address]);
      
    useEffect(() => {
        const areFieldsFilled = formData.name.trim() !== '' && formData.number.trim() !== '';
        const isPrivacyChecked = isChecked.includes(2);
        setIsButtonEnabled(areFieldsFilled && isPrivacyChecked);
    }, [ formData.name, formData.number, isChecked]);

    const checkItemHandler = (id, isChecked) => {
        setIsChecked((prev) =>
            isChecked ? [...prev, id] : prev.filter((itemId) => itemId !== id)
          );
      };
    
      const isCheckItem = (e, id) => {
        const { checked } = e.target;
        checkItemHandler(id, checked);
      };

  return (
    <div className='address'>
    <StepHeader />
    <div className='container'>
        <div className='find'>
            <div className='title'>배송 정보 변경</div>
            <div className='select_content'>
                <div className='activate_box'>
                    배송지 선택
                </div>
                <div className='unactivate_box'>
                    신규입력
                </div>
                <div className='empty'></div>
            </div>

                <div className='bottom'>
                <input  type='text' name='name' className='min_text' placeholder='수취인명*'
                value={formData.name} onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                />
                <input type='text' name='phone' className='min_text' placeholder='수취인 번호*'  
                value={formData.number} onChange={(e) => setFormData((prev) => ({ ...prev, number: e.target.value }))}
                />
                <input 
                type='text' name='destination' className='min_text' placeholder='배송지명'  
                value={formData.destination} onChange={(e) => setFormData((prev) => ({ ...prev, destination: e.target.value }))}
                />
                <div className='post_code'>
                    <input 
                        type='text' name='postNum' className='text'  placeholder='*우편번호' 
                        value={formData.postNum} onChange={(e) => setFormData((prev) => ({ ...prev, postNum: e.target.value }))} 
                        disabled
                    />
                    <div className='search'>우편번호 검색</div>
                </div>
                <input 
                type='text' name='firstAdd' className='min_text' placeholder='*주소' 
                value={formData.firstAdd} onChange={(e) => setFormData((prev) => ({ ...prev, firstAdd: e.target.value }))} 
                disabled
                />
                <input 
                type='text' name='secondAdd' className='min_text' placeholder='상세주소 입력' 
                value={formData.secondAdd}  onChange={(e) => setFormData((prev) => ({ ...prev, secondAdd: e.target.value }))}
                />
                <input 
                type='text' name='memo' className='min_text' placeholder='배송 메모를 입력해 주세요.'  
                 onChange={(e) => setFormData((prev) => ({ ...prev, memo: e.target.value }))}
                />
                </div>
                
                <div className='check'>
                    <label className='checkbox'>
                        <input type='checkbox' name='checkbox' className='default' 
                        id={1}
                        checked={isChecked.includes(1)}
                        onChange={(e) => isCheckItem(e, 1)}
                        />
                        {isChecked.includes(1) && ( 
                            <img src={check} alt='check' className='checkImg'/>
                        )}
                    </label>
                    <p>기본 배송지로 설정</p>
                </div>
                <div className='check'>
                    <label className='checkbox'>
                        <input type='checkbox' name='checkbox' className='agree' 
                        id={2}
                        checked={isChecked.includes(2)}
                        onChange={(e) => isCheckItem(e, 2)} 
                        />
                        {isChecked.includes(2)  && ( 
                            <img src={check} alt='check' className='checkImg'/>
                        )}
                    </label>
                    <p className='privacy' onClick={openModal}>[필수] 개인정보 수집 및 이용 동의</p>
                    <PrivacyModal isOpen={isModalOpen} closeModal={closeModal} setIsChecked={setIsChecked} isChecked={isChecked} />
                </div>
                <Link to='/order/delivery/select-address'>
                <button 
                    className={`btn ${isButtonEnabled ? 'enabled' : 'disabled'}`}
                    disabled={!isButtonEnabled}
                >저장</button>
                </Link>
           
        </div>
        
    </div>
    </div>
  )
}

export default EditAdd