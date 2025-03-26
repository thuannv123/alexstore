import React, { useState } from "react";
import DefaultIMG from "../asset/img/default-product-img.jpg";
const AddGoods = () => {
  const [isActive, setIsActive] = useState("");
  const handleActive = () => {
    setIsActive(!isActive);
  };
  const [isTab, setIsTab] = useState("panel_1");
  const handleTab = (tab) => {
    setIsTab(tab);
  };
  return (
    <div className="form-goods form-add">
      <form action="">
        <h2>Thêm hàng hóa</h2>
        <div className="tab-content">
          <span
            className={`tab-panel ${isTab === "panel_1" ? "active" : ""}`}
            onClick={() => handleTab("panel_1")}
          >
            Thông tin
          </span>
          <span
            className={`tab-panel ${isTab === "panel_2" ? "active" : ""}`}
            onClick={() => handleTab("panel_2")}
          >
            Mô tả chi tiết
          </span>
        </div>
        {isTab === "panel_1" && (
          <div className="box-add">
            <div className="flex-box">
              <div className="add-left">
                <div className="form-group">
                  <label htmlFor="">Mã hàng</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label htmlFor="">Mã vạch</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label htmlFor="">Tên hàng</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label htmlFor="">Nhóm hàng</label>
                  <select name="" id="">
                    <option value="null">Lựa chọn nhóm hàng</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="">Thương hiệu</label>
                  <select name="" id="">
                    <option value="null">Lựa chọn thương hiệu</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="">Vị trí</label>
                  <select name="" id="">
                    <option value="null">Lựa chọn vị trí</option>
                  </select>
                </div>
                <div className="img-add">
                  <img src={DefaultIMG} alt="Ảnh" />
                  <img src={DefaultIMG} alt="Ảnh" />
                  <img src={DefaultIMG} alt="Ảnh" />
                  <img src={DefaultIMG} alt="Ảnh" />
                </div>
              </div>
              <div className="add-right">
                <div className="form-group">
                  <label htmlFor="">Giá vốn</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label htmlFor="">Giá bán</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label htmlFor="">Tồn kho</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label htmlFor="">Trọng lượng</label>
                  <input type="text" />
                </div>

                <div className="form-group">
                  <label htmlFor="">
                    <input type="checkbox" name="" id="" />
                    Bán trực tiếp
                  </label>
                </div>
              </div>
            </div>
            <div className="attribute-toggle">
              <div className="title">Thuộc tính</div>
              <div className="flex-option">
                <div className={`dropp-option ${isActive ? "active" : ""}`}>
                  <div className="option-group" onClick={() => handleActive()}>
                    <span className="option-title">Chọn thuộc tính...</span>
                    <div className="option-attr">
                      <span className="option">option 1</span>
                      <span className="option">option 2</span>
                    </div>
                  </div>
                  <div className="right-option">
                    <input type="text" placeholder="Nhập giá trị và enter" />
                  </div>
                </div>
                <button className="btn-add-attribute">+ Thêm thuộc tính</button>
              </div>
            </div>
            <div className="attribute-toggle">
              <div className="title">Đơn vị tính</div>
              <div className="form-group">
                <label htmlFor="">Đơn vị cơ bản</label>
                <input type="text" />
              </div>
              <button className="btn-add-attribute">+ Thêm đơn vị</button>
            </div>
          </div>
        )}

        {isTab === "panel_2" && (
          <div className="box-infor">
            <div className="panel-infor">
              <div className="norm">
                <div className="form-group">
                  <label htmlFor="">Ít nhất</label>
                  <input type="text" name="" id="" />
                </div>
                <div className="form-group">
                  <label htmlFor="">Ít nhất</label>
                  <input type="text" name="" id="" />
                </div>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default AddGoods;
