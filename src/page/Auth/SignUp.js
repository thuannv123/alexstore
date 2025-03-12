import "../../asset/style/auther.scss";
import img from "../../asset/img/bg.jpg";
import logo from "../../asset/img/logo.png";

const SignUp = () => {
  return (
    <div className="auther-page signin">
      <div className="signup">
        <div className="right-form">
          <img src={img} alt="" width="100%" />
        </div>
        <div className="left-form">
          <img src={logo} className="logo" alt="" />
          <div className="des-header-form">
            <h1>Tạo tài khoản</h1>
            <span>
              Chào mừng bạn đến với <strong>Alex Store</strong>
            </span>
          </div>

          <form action="" className="form">
            <label htmlFor="">Họ và tên:</label>
            <input type="text" placeholder="Họ và tên" />
            <label htmlFor="">Số điện thoại:</label>
            <input type="text" placeholder="Số điện thoại" />
            <label htmlFor="">Email:</label>
            <input type="email" placeholder="Email" />
            <label htmlFor="">Mật khẩu:</label>
            <input type="password" placeholder="Password" />
            <label htmlFor="">Xác nhận mật khẩu:</label>
            <input type="password" placeholder="Password" />
            <div className="remember">
              <div className="check-box">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Xem mật khẩu</label>
              </div>
              <div className="forgot">
                <span></span>
              </div>
            </div>
            <button type="submit" className="btn-submit">
              <span>Đăng ký ngay</span>
            </button>
          </form>
          <span className="text-signin">
            <a href="/singin">Đăng nhập</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
