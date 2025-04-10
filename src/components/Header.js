import React, { useState } from "react";
import imglogo from "../asset/img/logo.png";
import ship from "../asset/img/ship.png";
import cash from "../asset/img/cash.png";
import theme from "../asset/img/theme.png";
import support from "../asset/img/support.png";
import chatbb from "../asset/img/chat-bubble.png";
import account from "../asset/img/account.png";
import user from "../asset/img/user.png";
import file from "../asset/img/file.png";
import signout from "../asset/img/sign-out.png";
import overview from "../asset/img/overview.png";
import goods from "../asset/img/goods.png";
import transaction from "../asset/img/transaction.png";
import partner from "../asset/img/partner.png";
import staff from "../asset/img/staff.png";
import fund from "../asset/img/fund.png";
import report from "../asset/img/report.png";
import onlinesale from "../asset/img/online-sale.png";
import hamberger from "../asset/img/stack.png";
import close from "../asset/img/close.png";
import "../asset/style/header.scss";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isActive, setActive] = useState(false);
  const handlMenu = () => {
    setActive(!isActive);
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    console.log("đăng xuất thành công");

    navigate("/signin");
  };
  return (
    <div className={`main-header ${!isActive ? "" : "overlay"}`}>
      <div className="container">
        <button className="hamberger" onClick={handlMenu}>
          {!isActive ? (
            <img src={hamberger} alt="" className="btn-img" />
          ) : (
            <img src={close} alt="" className="btn-img" />
          )}
        </button>
        <div className="sub-container">
          <img src={imglogo} alt="" className="logo" />
          <div className="service">
            <div className="item-sv">
              <img src={ship} alt="" />
              <a href="/">Giao hàng</a>
            </div>
            <div className="item-sv">
              <img src={cash} alt="" />
              <a href="/">Thanh toán</a>
            </div>
            <div className="item-sv theme dropdown">
              <div className="item-drop">
                <img src={theme} alt="" />
                <span>Chủ đề</span>
              </div>
              <ul className="dropdown-list">
                <span className="color blue"></span>
                <span className="color red"></span>
                <span className="color green"></span>
              </ul>
            </div>
            <div className="item-sv">
              <img src={support} alt="" />
              <a href="/">Hỗ trợ</a>
            </div>
            <div className="item-sv">
              <img src={chatbb} alt="" />
              <a href="/">Góp ý</a>
            </div>
            <div className="item-sv user dropdown">
              <div className="item-drop">
                <span>ALex</span>
                <img src={account} alt="" />
              </div>
              <ul className="dropdown-list">
                <li>
                  <img src={user} alt="" />
                  <a href="/">Tài khoản</a>
                </li>
                <li>
                  <img src={file} alt="" />
                  <a href="/">Hồ sơ gian hàng</a>
                </li>
                <li>
                  <img src={signout} alt="" />
                  <span onClick={handleLogout}>Đăng xuất</span>
                  {/* <a href="/">Đăng xuất</a> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button className="btn-user"></button>
      </div>
      <div className={`container-nav ${!isActive ? "" : "active"}`}>
        <div className="navigation">
          <div className="nav-bar sub-container">
            <div className="nav service ">
              <div className="item-nav item-sv">
                <img src={overview} alt="" />
                <Link to="/">Tổng quan</Link>
              </div>
              <div className="item-sv item-nav dropdown">
                <div className="item-drop">
                  <img src={goods} alt="" />
                  <span>Hàng hóa</span>
                </div>
                <ul className="dropdown-list">
                  <li>
                    <img src={cash} alt="" />

                    <Link to="/dashboard/Products">Danh mục</Link>
                  </li>
                  <li>
                    <img src={cash} alt="" />
                    <a href="/">Thiết lập giá</a>
                  </li>
                  <li>
                    <img src={cash} alt="" />
                    <a href="/">Kiểm kho</a>
                  </li>
                </ul>
              </div>
              <div className="item-sv item-nav dropdown">
                <div className="item-drop">
                  <img src={transaction} alt="" />
                  <span>Giao dịch</span>
                </div>
                <ul className="dropdown-list">
                  <li>
                    <img src={cash} alt="" />
                    <a href="/">Đặt hàng</a>
                  </li>
                  <li>
                    <img src={cash} alt="" />
                    <a href="/">Hóa đơn</a>
                  </li>
                  <li>
                    <img src={cash} alt="" />
                    <a href="/">Vận đơn</a>
                  </li>
                  <li>
                    <img src={cash} alt="" />
                    <a href="/">Trả hàng</a>
                  </li>
                  <li>
                    <img src={cash} alt="" />
                    <a href="/">Nhập hàng</a>
                  </li>
                  <li>
                    <img src={cash} alt="" />
                    <a href="/">Trả hàng nhập</a>
                  </li>
                  <li>
                    <img src={cash} alt="" />
                    <a href="/">Xuất hủy</a>
                  </li>
                </ul>
              </div>
              <div className="item-sv item-nav dropdown">
                <div className="item-drop">
                  <img src={partner} alt="" />
                  <span>Đối tác</span>
                </div>
                <ul className="dropdown-list">
                  <li>
                    <img src={cash} alt="" />
                    <a href="/">Khách hàng</a>
                  </li>
                  <li>
                    <img src={cash} alt="" />
                    <a href="/">Nhà cung cấp</a>
                  </li>
                  <li>
                    <img src={cash} alt="" />
                    <a href="/">Đối tác giao hàng</a>
                  </li>
                </ul>
              </div>
              <div className="item-sv item-nav dropdown">
                <div className="item-drop">
                  <img src={staff} alt="" />
                  <span>Nhân viên</span>
                </div>
                <ul className="dropdown-list">
                  <li>
                    <img src={cash} alt="" />
                    <a href="/">Nhân viên</a>
                  </li>
                  <li>
                    <img src={cash} alt="" />
                    <a href="/">Lịch làm việc</a>
                  </li>
                  <li>
                    <img src={cash} alt="" />
                    <a href="/">Chấm công</a>
                  </li>
                  <li>
                    <img src={cash} alt="" />
                    <a href="/">Bảng tính lương</a>
                  </li>
                  <li>
                    <img src={cash} alt="" />
                    <a href="/">Thiết lập hoa hồng</a>
                  </li>
                  <li>
                    <img src={cash} alt="" />
                    <a href="/">Thiết lập nhân viên</a>
                  </li>
                </ul>
              </div>
              <div className="item-nav item-sv">
                <img src={fund} alt="" />
                <a href="/">Sổ quỹ</a>
              </div>
              <div className="item-sv item-nav dropdown">
                <div className="item-drop">
                  <img src={report} alt="" />
                  <span>Báo cáo </span>
                </div>
                <ul className="dropdown-list">
                  <li>
                    <img src={cash} alt="" />
                    <a href="/">Cuối ngày</a>
                  </li>
                  <li>
                    <img src={cash} alt="" />
                    <a href="/">Bán hàng</a>
                  </li>
                  <li>
                    <img src={cash} alt="" />
                    <a href="/">Hàng hóa</a>
                  </li>
                  <li>
                    <img src={cash} alt="" />
                    <a href="/">Khác hàng</a>
                  </li>
                  <li>
                    <img src={cash} alt="" />
                    <a href="/">Nhà cung cấp</a>
                  </li>
                  <li>
                    <img src={cash} alt="" />
                    <a href="/">Nhân viên </a>
                  </li>
                  <li>
                    <img src={cash} alt="" />
                    <a href="/">Kênh bán hàng </a>
                  </li>
                  <li>
                    <img src={cash} alt="" />
                    <a href="/">Tài chính</a>
                  </li>
                </ul>
              </div>
              <div className="item-sv item-nav dropdown">
                <div className="item-drop">
                  <img src={onlinesale} alt="" />
                  <span>Bán Online</span>
                </div>
                <ul className="dropdown-list">
                  <li>
                    <img src={cash} alt="" />
                    <a href="/">Bán Online</a>
                  </li>
                  <li>
                    <img src={cash} alt="" />
                    <a href="/">Website bán hàng</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
