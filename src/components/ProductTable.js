import React from "react";
import { Link } from "react-router-dom";
import img from "../../src/asset/img/zed.png";

const ProductTable = ({
  products,
  expandedRows,
  handleRowClick,
  handleSelectTab,
  getActiveTab,
}) => {
  return (
    <div>
      <table className="table-product">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
              <input type="checkbox" />
            </th>
            <th>
              <span>Hình ảnh</span>
            </th>
            <th>
              <span>Mã hàng</span>
            </th>
            <th>
              <span>Tên hàng</span>
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
          {products.map((item) => (
            <React.Fragment key={item.productCode}>
              <tr
                className="products"
                onClick={(e) => handleRowClick(item.productCode, e)}
              >
                <td>
                  <input type="checkbox" name="" id="" />
                  <input type="checkbox" />
                </td>
                <td>
                  <img src={img} alt="" width="70" height="30" />
                </td>
                <td className="img-td">
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
                        <span
                          className={`${
                            getActiveTab(item.productCode) === "inforProduct"
                              ? "active"
                              : ""
                          }`}
                          onClick={() =>
                            handleSelectTab(item.productCode, "inforProduct")
                          }
                        >
                          Thông tin
                        </span>
                        <span
                          className={`${
                            getActiveTab(item.productCode) === "storageTag"
                              ? "active"
                              : ""
                          }`}
                          onClick={() =>
                            handleSelectTab(item.productCode, "storageTag")
                          }
                        >
                          Thẻ kho
                        </span>
                        <span
                          className={`${
                            getActiveTab(item.productCode) === "currentStock"
                              ? "active"
                              : ""
                          }`}
                          onClick={() =>
                            handleSelectTab(item.productCode, "currentStock")
                          }
                        >
                          Tồn kho
                        </span>
                      </div>
                      {getActiveTab(item.productCode) === "inforProduct" ? (
                        <div className="product-detail">
                          <div className="name-product">{item.productName}</div>
                          <div className="status-product">
                            <span>
                              <i className="fa-solid fa-check"></i> Bán trực
                              tiếp
                            </span>
                            <span>
                              <i className="fa-solid fa-xmark"></i> Không tích
                              điểm
                            </span>
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
                                <label htmlFor="">Ghi chú đặt hàng</label>
                                <div className="form-control-static">
                                  {item.orderNote}
                                </div>
                              </div>
                              <div className="form-group">
                                <label htmlFor="">Nhà cung cấp</label>
                                <div className="form-control-static">
                                  {item.supplier}
                                </div>
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
                      ) : getActiveTab(item.productCode) === "storageTag" ? (
                        <div className="product-detail storage">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Chứng từ</th>
                                <th>Thời gian</th>
                                <th>Loại giao dịch</th>
                                <th>Đối tác</th>
                                <th>Giá GD</th>
                                <th>Giá vốn</th>
                                <th>Số lượng</th>
                                <th>Tồn cuối</th>
                              </tr>
                            </thead>
                            <tbody></tbody>
                          </table>
                          <div className="no-data">
                            <div className="content">
                              <i className="fa-solid fa-inbox"></i>
                              Không tìm thấy kết quả
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="product-detail currentStock">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Chi nhánh</th>
                                <th>Tồn kho</th>
                                <th>KH đặt</th>
                                <th>Dự kiến hết hàng</th>
                                <th>Trạng thái</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td></td>
                                <td>0</td>
                                <td>0</td>
                                <td></td>
                                <td></td>
                              </tr>
                              <tr>
                                <td>Chi nhánh trung tâm</td>
                                <td>0</td>
                                <td>0</td>
                                <td>---</td>
                                <td>Đang kinh doanh</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
