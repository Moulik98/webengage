import React, { useState } from "react";
import "../css/Homepage.css";
import bell from "../pictures/bell.png";
import man from "../pictures/man.png";
import logo from "../pictures/logo.png";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  phone: "",
};

const Homepage = () => {
  const [Data, setData] = useState(initialState);
  const [emailErr, setEmailErr] = useState("");
  const [phoneErr, setPhoneErr] = useState("");
  const navigate = useNavigate();
  const { email,phone } = Data;

  const onChange = (e) => {
    setData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const emailReg = /^\S+@\S+\.\S+$/;
  const phoneReg = /^\d{10}$/;

  const onSubmit = (e) => {
    e.preventDefault();

    if (!emailReg.test(email)) {
      setEmailErr("Invalid Email ID");
      return;
    }

    if (!phoneReg.test(phone)) {
      setPhoneErr("Invalid Contact Number");
      return;
    }

    localStorage.setItem("data", JSON.stringify(Data));
    navigate("/thankyou");
  };

  return (
    <div className="flex">
      <div className="image">
        <img className="bell" src={bell} alt="" />
        <img className="man" src={man} alt="" />
      </div>
      <div className="right">
        <img className="logo" src={logo} alt="" />
        <p className="free">Get a FREE</p>
        <p className="con">consultation with an expert</p>
        <form className="input-box" onSubmit={onSubmit}>
          <input
            type="email"
            name="email"
            value={email}
            className="input"
            placeholder="Enter your email"
            onChange={onChange}
          />
          {emailErr && <div>{emailErr}</div>}
          <input
            type="number"
            name="phone"
            value={phone}
            className="input"
            placeholder="Enter your mobile"
            onChange={onChange}
          />
          {phoneErr && <div>{phoneErr}</div>}
          <button className="btn" type="submit">
            TALK TO US
          </button>
        </form>
      </div>
    </div>
  );
};

export default Homepage;