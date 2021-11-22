import { connect } from "react-redux";
import React, { Component } from "react";
import BluetoothLogo from "../../assets/images/bluetooth.png";
import Blocks_logo from "../../assets/images/blocks_logo.png";
import Add_logo from "../../assets/images/add.png";
import AddDeviceComponent from "../AddDeviceModule/AddDeviceComponent";
import { changeStatus } from "../../features/modal/modalSlice";

class DevicesComponent extends Component {
  constructor(props) {
    super(props);
  }
  dummpyData() {
    var rows = [];
    for (var x = 0; x < 4; x++) {
      rows.push(<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xl whitespace-nowrap p-4 text-left text-blueGray-700 ">Robot-1</td>);
    }
    return rows;
  }

  render() {
    return (
      <div>
        <section className="py-1 h-screen w-screen bg-login_back bg-center bg-no-repeat">
          {this.props.modalState && <AddDeviceComponent></AddDeviceComponent>}
          {!this.props.modalState && (
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                      <img src={Blocks_logo} className="w-12 h-14 float-left mr-2"></img>
                      <h3 className="text-2xl font-light text-blueGray-700 mt-2 ">Smarty List</h3>
                    </div>
                    <div>
                      <input
                        placeholder={"Smarty Name"}
                        className="bg-purple-400 shadow-xl placeholder-white font-sans font-light placeholder-opacity-60 text-black p-2 ml-2 rounded-full"
                        type="text"
                      />
                    </div>
                    <div>
                      <input placeholder={"Wifi SSid"} className="bg-purple-400 shadow-xl font-sans font-light placeholder-opacity-60 placeholder-white text-black p-2 ml-2 rounded-full" type="text" />
                    </div>
                    <div>
                      <input placeholder={"Password"} className="bg-purple-400 shadow-xl placeholder-white font-sans font-light placeholder-opacity-60 text-black p-2 ml-2 rounded-full" type="text" />
                    </div>

                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                      <button
                        onClick={() => {
                          this.props.dispatch(changeStatus(true));
                        }}
                        className="bg-gray-300 text-white active:bg-indigo-600  font-light uppercase p-2 hover:bg-indigo-600 rounded-2xl outline-none text-2xl focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        <img src={BluetoothLogo} className="w-12 h-12"></img>
                      </button>
                      <button
                        hidden={true}
                        onClick={() => {
                          this.props.dispatch(changeStatus(true));
                        }}
                        className="bg-gray-300 text-white active:bg-indigo-600  font-light uppercase p-2 hover:bg-indigo-600 rounded-2xl outline-none text-2xl focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        <img src={Add_logo} className="w-12 h-12"></img>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="block w-full overflow-x-auto">
                  <table className="items-center bg-transparent w-full border-collapse ">
                    <thead>
                      <tr>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Device Name
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Wifi Ssid
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Password
                        </th>
                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Status
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>{this.dummpyData()}</tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          {/* <footer className="relative pt-8 pb-6 mt-16">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                  <div className="text-sm text-blueGray-500 font-semibold py-1">
                    Made with{" "}
                    <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank">
                      Notus JS
                    </a>{" "}
                    by{" "}
                    <a href="https://www.creative-tim.com" className="text-blueGray-500 hover:text-blueGray-800" target="_blank">
                      {" "}
                      Creative Tim
                    </a>
                    .
                  </div>
                </div>
              </div>
            </div>
          </footer> */}
        </section>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    modalState: state.modal.status,
  };
};

export default connect(mapStateToProps)(DevicesComponent);
