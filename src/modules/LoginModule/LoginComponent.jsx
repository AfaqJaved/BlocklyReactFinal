import React, { Component } from "react";
import BlockLogo from "../../assets/images/blocks_logo.png";
import { withRouter } from "react-router";

class LoginComponent extends Component {
  render() {
    return (
      <div className="font-san">
        <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-login_back bg-no-repeat bg-cover bg-center ">
          <div className="relative sm:max-w-sm w-full shadow-2xl">
            <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
            <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>

            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
              <div className="flex justify-center items-start">
                <img className="w-16 h-18" src={BlockLogo} alt="" />
              </div>
              <label for="" className="block text-2xl mt-3 text-gray-700 text-center font-semibold">
                Blockly
              </label>
              <form method="#" action="#" className="mt-10">
                <div>
                  <input type="email" placeholder="Email" className="mt-1 p-3 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"></input>
                </div>

                <div className="mt-7">
                  <input
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
                    onClick={() => {
                      this.props.history.push("blockly");
                    }}
                    className="bg-blue-500 w-1/2 py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                  >
                    Login Single Mode
                  </button>
                  <button
                    onClick={() => {
                      this.props.history.push("devices");
                    }}
                    className="bg-red-500 w-1/2 py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                  >
                    Login Mulitple Mode
                  </button>
                </div>

                <div className="flex mt-7 items-center text-center">
                  <hr className="border-gray-300 border-1 w-full rounded-md"></hr>
                  <label className="block font-medium text-sm text-gray-600 w-full">Accede con</label>
                  <hr className="border-gray-300 border-1 w-full rounded-md"></hr>
                </div>

                <div className="flex mt-7 justify-center w-full">
                  <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    Facebook
                  </button>

                  <button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    Google
                  </button>
                </div>

                <div className="mt-7">
                  <div className="flex justify-center items-center">
                    <label className="mr-2">BinaryBitz</label>
                    <a href="#" className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                      allRightsReserved@2021
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

export default withRouter(LoginComponent);