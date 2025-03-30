import React, { useState } from "react";

import "../asset/style/product-page.scss";
import { Link } from "react-router-dom";
import ModalComponent from "../components/ModalComponent";
import AddGoods from "../components/AddGoods";
import img from "../../src/asset/img/zed.png";
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
  const handleModel = (modal) => {
    setIsModal(
      modal === "goods"
        ? { content: <AddGoods /> }
        : modal === "service"
        ? { content: "service" }
        : modal === "combo"
        ? { content: "combo" }
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
  const handleRowClick = (productCode) => {
    setExpandedRows((prev) =>
      prev.includes(productCode)
        ? prev.filter((code) => code !== productCode)
        : [...prev, productCode]
    );
  };
  return (
    <div className="product-view">
      <div className="section-left">
        <h2>Hàng hóa</h2>
        <div className="filter-product">
          <div
            className={`box status ${
              isToggle.status === false ? "active" : ""
            }`}
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
              <span className="filter-title">
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
              <span>
                <i className="fas fa-file-import"></i>
                <span>Nhập file</span>
              </span>
            </div>
            <div className="btn-filter" onClick={() => handleModel("export")}>
              <span>
                <i className="fas fa-file-export"></i>
                <span>Xuất file</span>
              </span>
            </div>
            <div className="btn-filter">
              <span>
                <i className="fas fa-bars"></i>
                <i className="fas fa-caret-down"></i>
              </span>
            </div>
          </div>
        </div>
        <table className="table-product">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
                <input type="checkbox" />
              </th>
              <th>
                <span>Mã hàng</span>
              </th>
              <th>
                <span>Ten hàng</span>
              </th>
              <th>
                <span>Giá bán</span>
              </th>
              <th>
                <span>Giá vốn</span>
              </th>
              <th>
                <span>Thương hiệu</span>
              </th>
              <th>
                <span>Tồn kho</span>
              </th>
              <th>
                <span>Khách đặt</span>
              </th>
              <th>
                <span>Thời gian tạo</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {dataProduct.map((item) => (
              <React.Fragment key={item.productCode}>
                <tr
                  className="products"
                  onClick={() => handleRowClick(item.productCode)}
                >
                  <td>
                    <input type="checkbox" name="" id="" />
                    <input type="checkbox" />
                  </td>
                  <td className="img-td">
                    <img src={img} alt="" width={50} height={30} />
                    <span>SP00025</span>
                  </td>
                  <td>Bộ Lego City town square</td>
                  <td>3,199,000 </td>
                  <td>3,080,000</td>
                  <td>Alex Store </td>
                  <td>184</td>
                  <td>0</td>
                  <td>20/03/2025 8:30</td>
                </tr>
                {expandedRows.includes(item.productCode) && (
                  <tr className="product-detail-infor">
                    <td colSpan="11">
                      <div className="more-infor-product">
                        <div className="tab-status-product">
                          <span>Thông tin</span>
                          <span>Thẻ kho</span>
                          <span>Tồn kho</span>
                        </div>
                        <div className="product-detail">
                          <div className="name-product">{item.productName}</div>
                          <div className="status-product">
                            <span>Bán trực tiếp</span>
                            <span>Không tích điểm</span>
                          </div>
                          <div className="box-flex-product row">
                            <div className="img-product col-lg-4 col-sm-6 d-flex justify-content-between">
                              <img src={img} alt="" className="col-9" />
                              <div className="thumbnail-img col-2">
                                <img
                                  src={img}
                                  alt=""
                                  width="100%"
                                  className=""
                                />
                              </div>
                            </div>
                            <div className="infor-left col-lg-4 col-sm-6  ">
                              <div className="form-group">
                                <label htmlFor="">Mã hàng</label>
                                <strong className="">{item.productCode}</strong>
                              </div>
                              <div className="form-group">
                                <label htmlFor="">Mã vạch</label>
                                <span className="">{item.barcode}</span>
                              </div>
                              <div className="form-group">
                                <label htmlFor="">Loại hàng</label>
                                <span className="">{item.productType}</span>
                              </div>
                              <div className="form-group">
                                <label htmlFor="">Thương hiệu</label>
                                <span className="">{item.brand}</span>
                              </div>
                              <div className="form-group">
                                <label htmlFor="">Định mức tồn</label>
                                <span className="">{item.stockLimit}</span>
                              </div>
                              <div className="form-group">
                                <label htmlFor="">Giá bán</label>
                                <span className="">{item.salePrice}</span>
                              </div>
                              <div className="form-group">
                                <label htmlFor="">Giá vốn</label>
                                <span className="">{item.costPrice}</span>
                              </div>
                              <div className="form-group">
                                <label htmlFor="">Trọng lượng</label>
                                <span className="">{item.weight}</span>
                              </div>
                              <div className="form-group">
                                <label htmlFor="">Vị trí</label>
                                <span className="">{item.location}</span>
                              </div>
                            </div>
                            <div className="infor-right col-lg-4 col-sm-6 ">
                              <div className="form-group">
                                <label htmlFor="">Mô tả</label>
                                <div className="form-control-static">
                                  {item.description}
                                </div>
                              </div>
                              <div className="form-group">
                                <label htmlFor="">Mô tả</label>
                                <div className="form-control-static">
                                  {item.orderNote}
                                </div>
                              </div>
                              <div className="form-group">
                                <label htmlFor="">Mô tả</label>
                                <div className="">{item.supplier}</div>
                              </div>
                            </div>
                          </div>
                          <div className="group-btn">
                            <Link className="btn btn-success">
                              <i className="fa fa-check-square"></i>
                              Cập nhật
                            </Link>
                            <Link className="btn btn-secondary">
                              <i className="fa fa-barcode"></i>
                              In tem mã
                            </Link>
                            <Link className="btn btn-success">
                              <i className="far fa-clone"></i> Sao chép
                            </Link>
                            <Link className="btn btn-danger">
                              <i className="fa fa-lock"></i> Ngừng kinh doanh
                            </Link>
                            <Link className="btn btn-danger">
                              <i className="far fa-trash-alt"></i> Xóa
                            </Link>
                            <Link className="btn btn-primary">
                              <i className="far fa-plus"></i> Thêm hàng hóa cùng
                              loại
                            </Link>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
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
