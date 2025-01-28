import React, { useState } from "react";

const ImageUpload = () => {
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);


  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };


  const handleCheckboxChange = (index) => {
    setSelectedImages((prevSelected) => {
      if (prevSelected.includes(index)) {
        return prevSelected.filter((id) => id !== index);
      } else {
        return [...prevSelected, index];
      }
    });
  };


  const handleRemoveSelectedImages = () => {
    setImages(images.filter((_, index) => !selectedImages.includes(index)));
    setSelectedImages([]); 
  };


  const handleSelectAll = () => {
    const allIndexes = images.map((_, index) => index);
    setSelectedImages(allIndexes);
  };


  const handleDeselectAll = () => {
    setSelectedImages([]);
  };

  return (
    <div className="image-uploader">
      <div className="upload-section">
        <label htmlFor="file-upload" className="upload-button">
          <span>첨부파일</span>
        </label>
        <input
          type="file"
          id="file-upload"
          accept="image/*"
          multiple
          onChange={handleImageChange}
        />
      </div>
      <div className="image-preview">
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <input
              type="checkbox"
              checked={selectedImages.includes(index)}
              onChange={() => handleCheckboxChange(index)}
              className="checkbox"
            />
            <img
              src={image}
              alt={`preview-${index}`}
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
      <div className="btns">
        <button onClick={handleSelectAll}>전체 선택</button>
        <button onClick={handleDeselectAll}>선택 취소</button>
        <button onClick={handleRemoveSelectedImages}>삭제</button>
      </div>
    </div>
  );
};

export default ImageUpload;
