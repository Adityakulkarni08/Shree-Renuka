import React from "react";
import { useSearch } from "../../context/search";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assests/shree-renuka-new-logo.png";
import { useAuth } from "../../context/auth";
import { useCart } from "../../context/cart";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import { Badge } from "antd";
import Cart from "../../assests/cart4.svg";
import { Icon, Button, Input } from "semantic-ui-react";
import "../../assests/styles/SearchInput.css";

const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="row align-items-center">
      <div className="banner">
        <h2 className="banner-text">Shree Renuka Engineering Company</h2>
        <div className="banner-subtext">
          <p>For order placement, kindly reach out to us via email at shreerenuka.glb@gmail.com or by phone at +91 73539 18133.</p>
        </div>
      </div>
      <div className="col-auto">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="logo"></img>
        </Link>
      </div>
      <div className="col">
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search for Wires, cables, motors and more ..."
            aria-label="Search"
            value={values.keyword}
            onChange={(e) => setValues({ ...values, keyword: e.target.value })}
          />
        </form>
      </div>

      {!auth?.user ? (
        <>
          <div className="col-auto">
            <div className="nav-item">
              <NavLink to="/login" className="nav-link">
                Sign In
              </NavLink>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="col-auto">
            <div className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                style={{ border: "none" }}
              >
                {auth?.user?.name}
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    to={`/dashboard/${
                      auth?.user?.role === 1 ? "admin" : "user"
                    }`}
                    className="dropdown-item"
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={handleLogout}
                    to="/login"
                    className="dropdown-item"
                  >
                    Logout
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}

      <div className="col-auto cart-icon">
        <div className="nav-item" style={{ marginRight: "20px" }}>
          <Badge count={cart?.length} showZero>
            <NavLink to="/cart" className="nav-link">
              <img src={Cart}></img>
            </NavLink>
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
