import React, { useState } from "react";
import "../../asset/style/auther.scss";
import img from "../../asset/img/bg.jpg";
import logo from "../../asset/img/logo.png";
import { login, getUser } from "../../service/AutherInfo";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const { token } = await login(email, password);
      localStorage.setItem("token", token);
      alert("haha");
      const userData = await getUser();
      setUser(userData.data);
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="auther-page">
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="signup">
        <div className="left-form">
          <img src={logo} className="logo" alt="" />
          <div className="des-header-form">
            <h1>Đăng nhập bằng tài khoản của bạn</h1>
            <span>
              Chào mừng bạn đến với <strong>Alex Store</strong>
            </span>
          </div>

          <form action="" onSubmit={handleSignIn} className="form">
            <label htmlFor="">Email:</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />
            <label htmlFor="">Mật khẩu:</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
            <div className="remember">
              <div className="check-box">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Ghi nhớ</label>
              </div>
              <div className="forgot">
                <span>Quên mật khẩu</span>
              </div>
            </div>
            <button type="submit" className="btn-submit">
              <span>Đăng nhập</span>
            </button>
          </form>
          {user && (
            <div>
              <h3>
                Welcome, {user.first_name} {user.last_name}!
              </h3>
              <img src={user.avatar} alt="User Avatar" />
            </div>
          )}
          <span className="text-signin">
            Bạn chưa có tài khoản? <a href="/signup">Đăng ký ngay</a>
          </span>
        </div>
        <div className="right-form">
          <img src={img} alt="" width="100%" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
