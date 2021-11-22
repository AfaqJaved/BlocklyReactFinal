import React, { Component } from "react";
import { connect } from "react-redux";
import { changeStatus } from "../../features/modal/modalSlice";
import CancelLogo from "../../assets/images/cancel.png";

class AddDeviceComponent extends Component {
  render() {
    return (
      <div className="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
        <div className="bg-white rounded shadow-lg w-10/12 md:w-1/3">
          <div className="border-b px-4 py-2 flex justify-between items-center">
            <h3 className=" text-2xl font-light">Add Device</h3>
            <button
              className="text-black close-modal"
              onClick={() => {
                this.props.dispatch(changeStatus(false));
              }}
            >
              <img src={CancelLogo} className="w-6 h-6"></img>
            </button>
          </div>
          <div className="grid   w-full h-full place-items-center">
            <div className="w-full p-12 bg-white sm:w-8/12 md:w-full lg:w-full">
              <form className="mt-6">
                <div className="flex justify-between gap-3"></div>
                <label for="email" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                  Current Device Name
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="john.doe@company.com"
                  autocomplete="email"
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
                <label for="password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                  Current Ssid
                </label>
                <input
                  placeholder="ssid"
                  autocomplete="new-password"
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
                <label for="password-confirm" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
                  Current Password
                </label>
                <input
                  placeholder="Current Password"
                  autocomplete="new-password"
                  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
              </form>
            </div>
          </div>
          <div className="flex justify-end items-center w-100 border-t p-3">
            <button
              onClick={() => {
                this.props.dispatch(changeStatus(false));
              }}
              className="bg-red-600 hover:bg-red-700 p-4 rounded text-white mr-1 close-modal"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                this.props.dispatch(changeStatus(false));
              }}
              className="bg-blue-600 hover:bg-blue-700 p-4 rounded text-white"
            >
              Add Device
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    modalState: state.modal.status,
  };
};
export default connect(mapStateToProps)(AddDeviceComponent);
