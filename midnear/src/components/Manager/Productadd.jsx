import React, { useState } from 'react';
import '../../assets/sass/manager/_productadd.scss';

const ProductAdd = () => {
  const [category1, setCategory1] = useState('');
  const [category2, setCategory2] = useState('');
  const [category3, setCategory3] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [description, setDescription] = useState('');
  const [sizeGuide, setSizeGuide] = useState('');
  const [colorFields, setColorFields] = useState([""]);
  const [images, setImages] = useState([]); // 각 색상에 맞는 이미지 배열 추가

  const categories1 = ['카테고리1', '카테고리2', '카테고리3'];
  const categories2 = ['옵션1', '옵션2', '옵션3'];
  const categories3 = ['세부옵션1', '세부옵션2', '세부옵션3'];

  // 색상 입력 필드 추가
  const handleAddColorField = () => {
    setColorFields([...colorFields, ""]);
  };

  // 색상 입력값 처리
  const handleColorChange = (e, index) => {
    const updatedFields = [...colorFields];
    updatedFields[index] = e.target.value;
    setColorFields(updatedFields);
  };

  // 색상에 맞는 이미지 처리
  const handleImageChange = (e, index) => {
    const updatedImages = [...images];
    updatedImages[index] = URL.createObjectURL(e.target.files[0]); // 해당 색상에 맞는 이미지 저장
    setImages(updatedImages);
  };

  // 색상 입력 필드 삭제
  const handleRemoveColorField = (index) => {
    const updatedFields = [...colorFields];
    updatedFields.splice(index, 1); // 선택된 인덱스의 항목만 삭제
    setColorFields(updatedFields);

    const updatedImages = [...images];
    updatedImages.splice(index, 1); // 색상 삭제 시 해당 이미지도 삭제
    setImages(updatedImages);
  };

  // 등록 처리
  const handleRegister = () => {
    console.log('카테고리1:', category1);
    console.log('카테고리2:', category2);
    console.log('카테고리3:', category3);
    console.log('상품명:', productName);
    console.log('상품 가격:', productPrice);
    console.log('상세 설명:', description);
    console.log('사이즈 가이드:', sizeGuide);
    console.log('색상:', colorFields);
    console.log('상품 이미지:', images);
  };

  return (
    <div className="product-add-container">

      {/* 카테고리 섹션 */}
      <div className="pa-section pa-section-category">
        <div className="pa-content">
          <h3>카테고리</h3>
          <div className="pa-input-group">
            <select
              value={category1}
              onChange={(e) => setCategory1(e.target.value)}
            >
              <option value="">카테고리1 선택</option>
              {categories1.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <select
              value={category2}
              onChange={(e) => setCategory2(e.target.value)}
            >
              <option value="">카테고리2 선택</option>
              {categories2.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <select
              value={category3}
              onChange={(e) => setCategory3(e.target.value)}
            >
              <option value="">카테고리3 선택</option>
              {categories3.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* 상품명 섹션 */}
      <div className="pa-section pa-section-name">
        <div className="pa-content">
          <h3>상품명</h3>
          <div className="pa-input-group">
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="상품명을 입력하세요"
            />
            <button>입력</button>
          </div>
        </div>
      </div>

      <div className='priceanddescription'>
        {/* 상품가격 섹션 */}
        <div className="pa-section pa-section-price">
          <div className="pa-content">
            <h3>상품 가격</h3>
            <div className="pa-input-group">
              <input
                type="text"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                placeholder="상품 가격을 입력하세요"
              />
              <button>입력</button>
            </div>
          </div>
        </div>

        {/* 상세설명 섹션 */}
        <div className="pa-section pa-section-description">
          <div className="pa-content">
            <h3>상세 설명</h3>
            <div className="pa-input-group">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="사이즈 가이드를 입력하세요"
              />
              <button>입력</button>
            </div>
          </div>
        </div>
      </div>

      {/* 사이즈 가이드 섹션 */}
      <div className="pa-section pa-section-size-guide">
        <div className="pa-content">
          <h3>사이즈 가이드</h3>
          <div className="pa-input-group">
            <textarea
              value={sizeGuide}
              onChange={(e) => setSizeGuide(e.target.value)}
              placeholder="사이즈 가이드를 입력하세요"
            />
            <button>입력</button>
          </div>
        </div>
      </div>

      {/* 색상 섹션 */}
      <div className="pa-section pa-section-color">
        <div className="pa-content">
          <h3>색상</h3>
          <div className="pa-input-group">
            <button className="pa-add-btn" onClick={handleAddColorField}>
              +
            </button>
            {colorFields.map((colorField, index) => (
              <div key={index} className="color-field">
                <input
                  type="text"
                  className="color-input"
                  value={colorField}
                  placeholder="색상을 입력하세요"
                  onChange={(e) => handleColorChange(e, index)}
                />
                <button
                  className="pa-remove-btn"
                  onClick={() => handleRemoveColorField(index)}
                >
                  -
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 색상별 이미지 업로드 섹션 */}
      <div className="pa-section pa-section-image">
        {colorFields.map((colorField, index) => (
          <div key={index} className="pa-content image-upload-section">
            <h3>{colorField} 색상에 맞는 이미지</h3>
            <div className="pa-input-group">
              <input
                type="file"
                onChange={(e) => handleImageChange(e, index)}
              />
              <button>이미지 추가</button>
            </div>
            {images[index] && (
              <div className="image-preview">
                <img
                  src={images[index]}
                  alt={`미리보기 - ${colorField}`}
                  className="image-thumbnail"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 등록 버튼 */}
      <div style={{ textAlign: 'center', marginTop: '24px' }}>
        <button
          onClick={handleRegister}
          className="pa-register-btn"
          disabled={!productName || !productPrice || !category1 || !category2 || !category3 || !description || !sizeGuide || colorFields.some(c => !c) || images.length !== colorFields.length}
        >
          등록
        </button>
      </div>
    </div>
  );
};

export default ProductAdd;