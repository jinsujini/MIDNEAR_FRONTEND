import React, { useState } from "react";
import ImageUpload from "./ImageUpload";

const ColorDetail = ({ name }) => {
    const [sizelist, setSizelist] = useState([]);
    const [newSize, setNewSize] = useState("");
    const [newQuantity, setNewQuantity] = useState("");

    const [images, setImages] = useState([]);


    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const newImages = files.map((file) => URL.createObjectURL(file));
        setImages((prevImages) => [...prevImages, ...newImages]);
    };

    const handleRemoveImage = (index) => {
        setImages(images.filter((_, i) => i !== index));
    };

    const handleAddSize = () => {
        if (newSize.trim() === "" || newQuantity.trim() === "") {
            alert("사이즈와 수량을 모두 입력해주세요!");
            return;
        }
        setSizelist([...sizelist, { size: newSize.trim(), quantity: newQuantity.trim() }]);
        setNewSize("");
        setNewQuantity("");
    };

    const handleRemoveSize = (index) => {
        setSizelist(sizelist.filter((_, i) => i !== index));
    };

    return (
        <div className="color_detail container">
            <div className="color_name">{name}</div>
            <div className="title">사이즈 및 수량</div>
            <div className="add_size">
                <div className="size_list">
                    {sizelist.map((item, index) => (
                        <div className="size" key={index}>
                            <div className="minus" onClick={() => handleRemoveSize(index)}>
                                -
                            </div>
                            <p>
                                <p>{item.size}</p>
                                <p>{item.quantity}개</p>
                            </p>

                        </div>
                    ))}
                </div>
                <div className="plus_size">
                    <input
                        type="text"
                        placeholder="사이즈"
                        value={newSize}
                        onChange={(e) => setNewSize(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="수량"
                        value={newQuantity}
                        onChange={(e) => setNewQuantity(e.target.value)}
                    />
                    <button onClick={handleAddSize}>추가</button>
                </div>
            </div>
            <div className="title">상품 이미지</div>
            <div className="images">
                <ImageUpload />
            </div>
        </div>
    );
};

export default ColorDetail;
