import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "../asset/style/dashboard.scss";

const dataGio = [
  { name: "Tháng 3", doanhThu: 2000 },
  { name: "Tháng 4", doanhThu: 1000 },
];
const dataNgay = [
  { name: "Tháng 5", doanhThu: 4000 },
  { name: "Tháng 6", doanhThu: 3000 },
];
const dataThu = [
  { name: "Tháng 7", doanhThu: 7000 },
  { name: "Tháng 8", doanhThu: 8000 },
];
const ColumnChart = () => {
  const [isDropp, setDropp] = useState("");
  const [Filter, setFilter] = useState("thang_nay");
  const [Filter2, setFilter2] = useState("thang_nay");
  const [Option, setOption] = useState("doanh_thu_thuan");
  const [DoanthuTab, setDoanhthuTab] = useState("dt_theo_gio");
  const [SoluongTab, setSoluongTab] = useState("sl_theo_gio");
  const handleDropp = (dropname) => {
    setDropp(isDropp === dropname ? "" : dropname);
  };
  const handleSelectFilter = (filter) => {
    setFilter(filter);
    setDropp(false);
  };
  const handleSelectFilter2 = (filter) => {
    setFilter2(filter);
    setDropp(false);
  };
  const handleOption = (option) => {
    setOption(option);
    setDropp(false);
  };
  const handleDoangthuTab = (tab) => {
    console.log(tab);
    setDoanhthuTab(tab);
  };
  const handleSoluongTab = (tab) => {
    console.log(tab);
    setSoluongTab(tab);
  };
  return (
    <div className="main-dashboard">
      <div className="container-dashboard">
        <div className="dashboard-left">
          <div className="total-curency">
            <h2 className="text-lg font-semibold ">Kết quả bán hàng hôm nay</h2>
            <div className="box-bill">
              <span className="usd-icon">$</span>
              <div className="child-bill">
                <span>0 Hóa đơn</span>
                <span className="number">0</span>
                <span>Doanh thu</span>
              </div>
            </div>
            <div className="box-bill return">
              <span className="usd-icon">&#8634;</span>
              <div className="child-bill">
                <span>0 phiếu</span>
                <span className="number">0</span>
                <span>Trả hàng</span>
              </div>
            </div>
            <div className="box-bill down">
              <span className="usd-icon">&darr;</span>
              <div className="child-bill">
                <span className="number">-25,5 %</span>
                <span>So với tháng trước</span>
              </div>
            </div>
          </div>
          <div className="total-chart bg-white rounded-lg shadow-md">
            <div className="box-revenue">
              <div className="revenue">
                <h2>
                  Báo cáo doanh thu{" "}
                  {Filter === "thang_nay"
                    ? "Tháng này"
                    : Filter === "tuan_nay"
                    ? "Tuần này"
                    : "Hôm nay"}
                </h2>
                <div className="total-revenue">
                  <span className="icon-tt">$</span>
                  <span className="numb">12,000,000</span>
                </div>
              </div>
              <div
                className={`filter-revenue ${
                  isDropp === "filter" ? "active" : ""
                }`}
              >
                <div
                  className="main-filter"
                  onClick={() => handleDropp("filter")}
                >
                  {Filter === "thang_nay"
                    ? "Tháng này"
                    : Filter === "tuan_nay"
                    ? "Tuần này"
                    : "Hôm nay"}
                </div>
                <div className="drop-filter">
                  <span onClick={() => handleSelectFilter("hom_nay")}>
                    Hôm nay
                  </span>
                  <span onClick={() => handleSelectFilter("tuan_nay")}>
                    Tuần nay
                  </span>
                  <span onClick={() => handleSelectFilter("thang_nay")}>
                    Tháng này
                  </span>
                </div>
              </div>
            </div>
            <div className="tab-revenue">
              <span
                className={`${DoanthuTab === "dt_theo_gio" ? "active" : ""}`}
                onClick={() => handleDoangthuTab("dt_theo_gio")}
              >
                Theo giờ
              </span>
              <span
                className={`${DoanthuTab === "dt_theo_ngay" ? "active" : ""}`}
                onClick={() => handleDoangthuTab("dt_theo_ngay")}
              >
                Theo ngày
              </span>
              <span
                className={`${DoanthuTab === "dt_theo_thu" ? "active" : ""}`}
                onClick={() => handleDoangthuTab("dt_theo_thu")}
              >
                Theo thứ
              </span>
            </div>
            <ResponsiveContainer width="100%" height={500}>
              <BarChart
                data={
                  DoanthuTab === "dt_theo_gio"
                    ? dataGio
                    : DoanthuTab === "dt_theo_ngay"
                    ? dataNgay
                    : dataThu
                }
                margin={{ top: 10, right: 30, left: 0, bottom: 5, width: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip cursor={{ fill: "transparent" }} />
                <Legend />
                <Bar barSize={40} dataKey="doanhThu" fill="#1565c0" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="total-chart bg-white rounded-lg shadow-md">
            <div className="box-revenue">
              <div className="sell">
                <h2>
                  Top 10 hàng hóa bán chạy
                  <div
                    className={`total-revenue total-sell filter-revenue ${
                      isDropp === "option" ? "active" : ""
                    }`}
                    onClick={() => handleDropp("option")}
                  >
                    <div className="main-filter">
                      {Option === "doanh_thu_thuan"
                        ? "Theo doanh thu thuần"
                        : "Theo số lượng"}
                    </div>
                    <div className="drop-filter">
                      <span onClick={() => handleOption("doanh_thu_thuan")}>
                        Theo doanh thu thuần
                      </span>
                      <span onClick={() => handleOption("theo_so_luong")}>
                        Theo số lượng
                      </span>
                    </div>
                  </div>
                </h2>
              </div>
              <div
                className={`filter-revenue  ${
                  isDropp === "filter2" ? "active" : ""
                }`}
              >
                <div
                  className="main-filter"
                  onClick={() => handleDropp("filter2")}
                >
                  {Filter2 === "thang_nay"
                    ? "Tháng này"
                    : Filter2 === "tuan_nay"
                    ? "Tuần nay"
                    : "Hôm nay"}
                </div>
                <div className="drop-filter">
                  <span onClick={() => handleSelectFilter2("hom_nay")}>
                    Hôm nay
                  </span>
                  <span onClick={() => handleSelectFilter2("tuan_nay")}>
                    Tuần nay
                  </span>
                  <span onClick={() => handleSelectFilter2("thang_nay")}>
                    Tháng này
                  </span>
                </div>
              </div>
            </div>
            <div className="tab-revenue">
              <span
                className={`${SoluongTab === "sl_theo_gio" ? "active" : ""}`}
                onClick={() => handleSoluongTab("sl_theo_gio")}
              >
                Theo giờ
              </span>
              <span
                className={`${SoluongTab === "sl_theo_ngay" ? "active" : ""} `}
                onClick={() => handleSoluongTab("sl_theo_ngay")}
              >
                Theo ngày
              </span>
              <span
                className={`${SoluongTab === "sl_theo_thu" ? "active" : ""}`}
                onClick={() => handleSoluongTab("sl_theo_thu")}
              >
                Theo thứ
              </span>
            </div>
            <ResponsiveContainer width="100%" height={500}>
              <BarChart
                data={
                  SoluongTab === "sl_theo_gio"
                    ? dataGio
                    : SoluongTab === "sl_theo_ngay"
                    ? dataNgay
                    : dataThu
                }
                margin={{ top: 10, right: 30, left: 0, bottom: 5, width: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip cursor={{ fill: "transparent" }} />
                <Legend />
                <Bar barSize={40} dataKey="doanhThu" fill="#1565c0" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="dashboard-right">
          <div className="zalo-arc"></div>
          <div className="history">
            <div className="notifi"></div>
            <div className="action">
              <h2>Các hoạt động gần đây</h2>
              <ul>
                <li>
                  <span className="icon invoice">
                    <i className="fa-solid fa-paste"></i>
                  </span>
                  <a href="/">Thuận - dev</a> vừa <a href="/">bán đơn hàng </a>
                  với giá trị <b>282,000</b>
                  <span className="time"> 5 ngày trước</span>
                </li>
                <li>
                  <span className="icon oder">
                    <i className="fa-solid fa-share-from-square"></i>
                  </span>
                  <a href="/">Thuận - dev</a> vừa <a href="/">bán đơn hàng </a>
                  với giá trị <b>282,000</b>
                  <span className="time"> 5 ngày trước</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColumnChart;
