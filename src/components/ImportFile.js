import React from "react";

const ImportFile = () => {
  return (
    <div className="row import-file">
      <div className="col-12 col-lg-8 mx-auto">
        <h2>Nhập hàng hóa từ file dữ liệu</h2>
        <div className="field-select">
          <span className="title">Xử lý trùng mã hàng, khác tên hàng?</span>
          <label htmlFor="stop-import">
            <input type="checkbox" name="" id="stop-import" />
            báo lỗi và dừng import
          </label>
          <label htmlFor="change-name">
            <input type="checkbox" name="" id="change-name" />
            thay thế tên hàng cũ thành tên hàng mới
          </label>
        </div>
        <div className="field-select">
          <span className="title">Cập nhật tồn kho?</span>
          <label htmlFor="inventory-yes">
            <input type="checkbox" name="" id="inventory-true" />
            Có
          </label>
          <label htmlFor="inventory-no">
            <input type="checkbox" name="" id="inventory-no" />
            Không
          </label>
        </div>
        <div className="field-select">
          <span className="title">Cập nhật giá vốn?</span>
          <label htmlFor="costPrice+-yes">
            <input type="checkbox" name="" id="costPrice-true" />
            Có
          </label>
          <label htmlFor="costPrice-no">
            <input type="checkbox" name="" id="costPrice-no" />
            Không
          </label>
        </div>
      </div>
    </div>
  );
};

export default ImportFile;
