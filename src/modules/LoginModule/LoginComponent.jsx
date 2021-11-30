import React, { Component } from "react";
import BlockLogo from "../../assets/images/blocks_logo.png";
import { withRouter } from "react-router";
import axiosInstance from "../../axios";
import { DECODEJWT, SHOW_TOAST_WARN } from "../../utils/utils";
import { setToken, setAuth, setEmail, setFirstName, setLastName, setUserId } from "../../features/auth/authSlice";
import { connect, useDispatch } from "react-redux";
import { compose } from "redux";
import { CONSTANTS } from "../../utils/constants";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  componentDidMount = () => {};

  onLogin = (e) => {
    e.preventDefault();
    if (this.state.email === "" || this.state.password === "") {
      SHOW_TOAST_WARN("Please Enter Email and Password");
    } else {
      console.log(this.state.password);
      axiosInstance
        .post(CONSTANTS.API.LOGIN, { email: this.state.email, password: this.state.password })
        .then((res) => {
          console.log(res.data);
          console.log(DECODEJWT(res.data.data.token));
          let { userId, first_name, last_name, email } = DECODEJWT(res.data.data.token);
          this.props.dispatch(setAuth(true));
          this.props.dispatch(setFirstName(first_name));
          this.props.dispatch(setLastName(last_name));
          this.props.dispatch(setEmail(email));
          this.props.dispatch(setUserId(userId));
          this.props.dispatch(setToken(res.data.data.token));

          console.log(this.state.email);
          this.props.history.push(CONSTANTS.ROUTING.BLOCKY_PAGE);
        })
        .catch((res) => {
          console.log(res);
        });
    }
  };

  onMulitLogin = (e) => {
    e.preventDefault();
    if (this.state.email === "" || this.state.password === "") {
      SHOW_TOAST_WARN("Please Enter Email and Password");
    } else {
      console.log(this.state.password);
      axiosInstance
        .post("/api/login", { email: this.state.email, password: this.state.password })
        .then((res) => {
          console.log(res.data);
          console.log(DECODEJWT(res.data.data.token));
          let { userId, first_name, last_name, email } = DECODEJWT(res.data.data.token);
          this.props.dispatch(setAuth(true));
          this.props.dispatch(setFirstName(first_name));
          this.props.dispatch(setLastName(last_name));
          this.props.dispatch(setEmail(email));
          this.props.dispatch(setUserId(userId));
          this.props.dispatch(setToken(res.data.data.token));
          console.log(this.state.email);
          this.props.history.push(CONSTANTS.ROUTING.DEVICES_PAGE);
        })
        .catch((res) => {
          console.log(res);
        });
    }
  };

  render() {
    return (
      <div className="font-san">
        <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-login_back bg-no-repeat bg-cover bg-center">
          <div className="relative sm:max-w-sm w-full shadow-2xl">
            <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
            <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>

            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
              <div className="flex justify-center items-start">
                <img className="w-16 h-18" src={BlockLogo} alt="" />
              </div>
              <label for="" className="block text-2xl  text-gray-700 text-center font-semibold">
                Blockly update Docker file
              </label>
              <form method="#" action="#" className="mt-10">
                <div>
                  <input
                    onChange={(event) => this.setState({ email: event.target.value })}
                    type="email"
                    placeholder="Email"
                    className="mt-1 p-3 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  ></input>
                </div>

                <div className="mt-7">
                  <input
                    onChange={(event) => this.setState({ password: event.target.value })}
                    type="password"
                    placeholder="Password"
                    className="mt-1 block w-full p-3 border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  ></input>
                </div>

                <div className="mt-7 flex">
                  <label for="remember_me" className="inline-flex items-center w-full cursor-pointer">
                    <input
                      id="remember_me"
                      type="checkbox"
                      className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      name="remember"
                    ></input>
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>

                  <div className="w-full text-right">
                    <a className="underline text-sm text-gray-600 hover:text-gray-900" href="#">
                      Forgot Password
                    </a>
                  </div>
                </div>

                <div className="mt-7 flex justify-center items-center gap-2">
                  <button
                    onClick={(event) => this.onLogin(event)}
                    className="bg-blue-500 w-1/2 py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-1000 ease-in  transform hover:-translate-x hover:scale-105"
                  >
                    Login Single Mode
                  </button>
                  <button
                    onClick={(event) => this.onMulitLogin(event)}
                    className="bg-red-500 w-1/2 py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                  >
                    Login Mulitple Mode
                  </button>
                </div>

                <div className="flex mt-7 items-center text-center">
                  <hr className="border-gray-300 border-1 w-full rounded-md"></hr>
                  <label className="block font-medium text-sm text-gray-600 w-full">End</label>
                  <hr className="border-gray-300 border-1 w-full rounded-md"></hr>
                </div>

                <div className="flex mt-7 justify-center w-full">
                  <button
                    onClick={() => {
                      this.props.history.push(CONSTANTS.ROUTING.REGISTER_PAGE);
                    }}
                    className=" w-full bg-purple-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                  >
                    Sign up
                  </button>
                </div>

                <div className="mt-7">
                  <div className="flex justify-center items-center">
                    <label className="mr-2">binarybitz</label>
                    <a href="#" className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                      @allrightsreserved2021
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    authenticated: state.auth.authenticated,
  };
};

export default compose(withRouter, connect(mapStateToProps))(LoginComponent);
