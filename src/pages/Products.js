import React, { useState } from "react";

import "../asset/style/product-page.scss";
import { Link } from "react-router-dom";
import ModalComponent from "../components/ModalComponent";
import AddGoods from "../components/AddGoods";
import ProductTable from "../components/ProductTable";
import AddService from "../components/AddService";
import AddCombo from "../components/AddCombo";
import FilterProduct from "../components/FilterProduct";
const Products = () => {
  const dataProduct = [
    {
      productName: "Spririt Blossom Yone",
      productCode: "SP000025",
      barcode: 8934626012203,
      productCategory: "Thực phẩm ăn liền",
      productType: "Hàng hóa",
      brand: "mlemmlem",
      stockLimit: "0 > 10",
      salePrice: "10,000",
      costPrice: "8,000",
      weight: "10g",
      location: "Việt Nam",
      description: "Sản phẩm này đẹp quá",
      orderNote: "Hàng dễ vỡ",
      supplier: "CVT",
    },
    {
      productName: "Spririt Blossom Yone",
      productCode: "SP000023",
      barcode: 8934626012203,
      productCategory: "Thực phẩm ăn liền",
      productType: "Hàng hóa",
      brand: "mlemmlem",
      stockLimit: "0 > 10",
      salePrice: "10,000",
      costPrice: "8,000",
      weight: "10g",
      location: "Việt Nam",
      description: "Sản phẩm này đẹp quá",
      orderNote: "Hàng dễ vỡ",
      supplier: "CVT",
    },
  ];
  const filterStatus = [
    { id: "goods", label: "Hàng hóa" },
    { id: "service", label: "Dịch vụ" },
    { id: "combo", label: "Combo - gói" },
  ];

  const filterStock = [
    { id: "all", label: "Tất cả" },
    { id: "low", label: "Dưới định mức tồn" },
    { id: "in-stock", label: "Còn hàng trong kho" },
    { id: "out-stock", label: "Hết hàng trong kho" },
  ];

  const [isToggle, setIsToggle] = useState({
    status: true,
    category: true,
  });
  const [expandedRows, setExpandedRows] = useState([]);
  const [isModel, setIsModal] = useState(null);
  const [isTab, setTab] = useState("inforProduct");
  const handleModel = (modal) => {
    setIsModal(
      modal === "goods"
        ? { content: <AddGoods /> }
        : modal === "service"
        ? { content: <AddService /> }
        : modal === "combo"
        ? { content: <AddCombo /> }
        : null
    );
    console.log(modal);
  };
  const handleToggle = (key) => {
    setIsToggle((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  const handleRowClick = (productCode, event) => {
    if (event.target.type === "checkbox") {
      event.stopPropagation();
      return;
    }

    setExpandedRows((prev) =>
      prev.includes(productCode)
        ? prev.filter((code) => code !== productCode)
        : [...prev, productCode]
    );
  };
  const handleSelectTab = (productCOde, tab) => {
    setTab((prevTab) => ({
      ...prevTab,
      [productCOde]: tab,
    }));
  };
  const getActiveTab = (productCode) => isTab[productCode] || "inforProduct";
  return (
    <div className="product-view">
      <div className="section-left">
        <h2>Hàng hóa</h2>
        <FilterProduct
          handleToggle={handleToggle}
          filterStatus={filterStatus}
          filterStock={filterStock}
          isToggle={isToggle}
        />
      </div>
      <div className="section-right">
        <div className="box-top">
          <div className="filter-search">
            <input
              type="text"
              name=""
              id=""
              placeholder="Theo mã, theo tên"
              className="input-search"
            />
          </div>
          <div className="filter-products">
            <div className="btn-filter">
              <span className="filter-title btn btn-success">
                <i className="fa-solid fa-plus"></i> <span>Thêm mới</span>
                <i className="fas fa-caret-down"></i>
              </span>
              <ul className="filter-dropdown">
                <li onClick={() => handleModel("goods")}>
                  <Link>
                    <i className="fa-solid fa-plus"></i>
                    <span>Thêm hàng hóa</span>
                  </Link>
                </li>
                <li onClick={() => handleModel("service")}>
                  <Link>
                    <i className="fa-solid fa-plus"></i>
                    <span>Thêm dịch vụ</span>
                  </Link>
                </li>
                <li onClick={() => handleModel("combo")}>
                  <Link>
                    <i className="fa-solid fa-plus"></i>
                    <span>Thêm Combo + đóng gói</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="btn-filter" onClick={() => handleModel("import")}>
              <span className="btn btn-success">
                <i className="fas fa-file-import"></i>
                <span>Nhập file</span>
              </span>
            </div>
            <div className="btn-filter" onClick={() => handleModel("export")}>
              <span className="btn btn-success">
                <i className="fas fa-file-export"></i>
                <span>Xuất file</span>
              </span>
            </div>
            <div className="btn-filter">
              <span className="btn btn-success">
                <i className="fas fa-bars"></i>
                <i className="fas fa-caret-down"></i>
              </span>
            </div>
          </div>
        </div>
        <ProductTable
          products={dataProduct}
          expandedRows={expandedRows}
          handleRowClick={handleRowClick}
          handleSelectTab={handleSelectTab}
          getActiveTab={getActiveTab}
        ></ProductTable>
      </div>

      <ModalComponent isOpen={isModel} onClose={() => setIsModal(null)}>
        {isModel?.content}
        <div className="btn-modal">
          <button className="save-modal">
            <i className="fa-solid fa-floppy-disk"></i>Lưu
          </button>
          <button className="save-add-modal">
            <i className="fa-solid fa-floppy-disk"></i>Lưu & thêm mới
          </button>
          <button className="save-copy-modal">
            <i className="fa-solid fa-floppy-disk"></i>Lưu & sao chép
          </button>
          <button className="skip-modal">
            <i className="fa-solid fa-ban"></i>Bỏ qua
          </button>
        </div>
      </ModalComponent>
    </div>
  );
};

export default Products;
