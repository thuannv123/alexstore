import React from "react";

const FilterProduct = ({
  filterStock,
  filterStatus,
  handleToggle,
  isToggle,
}) => {
  return (
    <div className="filter-product">
      <div
        className={`box status ${isToggle.status === false ? "active" : ""}`}
      >
        <span className="title" onClick={() => handleToggle("status")}>
          Loại hàng
        </span>
        {isToggle.status && (
          <div className="box-check">
            {filterStatus.map((item) => (
              <div className="item-check" key={item.id}>
                <label htmlFor={item.id}>
                  <input type="checkbox" id={item.id} />
                  {item.label}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
      <div
        className={`box category ${
          isToggle.category === false ? "active" : ""
        }`}
      >
        <span className="title" onClick={() => handleToggle("category")}>
          Tồn kho
        </span>
        {isToggle.category && (
          <div className="box-check">
            {filterStock.map((item) => (
              <div className="item-check" key={item.id}>
                <label htmlFor={item.id}>
                  <input type="checkbox" name="" id={item.id} />
                  {item.label}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterProduct;
