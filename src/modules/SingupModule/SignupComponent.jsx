import Blocks_logo from "../../assets/images/blocks_logo.png";
import React, { Component } from "react";
import { withRouter } from "react-router";

class SignupComponent extends Component {
  render() {
    return (
      <div>
        <div className="grid min-h-screen place-items-center bg-login_back bg-center bg-no-repeat">
          <div className="w-11/12 rounded-xl shadow-2xl p-12 bg-gray-100 sm:w-8/12 md:w-1/2 lg:w-5/12">
            <div className="flex flex-col justify-center items-center">
              <img src={Blocks_logo} className="w-14 h-16 float-left mr-2"></img>

              <h1 className="text-2xl font-semibold">Signup Blockly</h1>
            </div>

            <form className="mt-8">
              <div className="flex justify-between gap-3">
                <span className="w-1/2">
                  <label for="firstname" className="block text-xs font-semibold text-gray-600 uppercase">
                    Firstname
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder="John"
                    autocomplete="given-name"
                    className="rounded-full  block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    required
                  />
                </span>
                <span className="w-1/2">
                  <label for="lastname" className="block text-xs font-semibold text-gray-600 uppercase">
                    Lastname
                  </label>
                  <input
                    id="lastname"
                    type="text"
                    name="lastname"
                    placeholder="Doe"
                    autocomplete="family-name"
                    className="rounded-full block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    required
                  />
                </span>
              </div>
              <label for="email" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="john.doe@company.com"
                autocomplete="email"
                className="rounded-full block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
              <label for="password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="********"
                autocomplete="new-password"
                className="rounded-full block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
              <label for="password-confirm" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                Confirm password
              </label>
              <input
                id="password-confirm"
                type="password"
                name="password-confirm"
                placeholder="********"
                autocomplete="new-password"
                className="rounded-full block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
              <div className="w-full flex justify-center items-center">
                <button
                  type="submit"
                  className="w-1/2  py-3 mt-6 font-medium tracking-widest text-white uppercase bg-purple-500 rounded-full shadow-lg focus:outline-none hover:bg-purple-900 hover:shadow-none"
                >
                  Sign up
                </button>
              </div>

              <p
                onClick={() => {
                  this.props.history.push("../");
                }}
                className="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black"
              >
                Already registered?
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupComponent);
