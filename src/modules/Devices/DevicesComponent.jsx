import { connect } from "react-redux";
import React, { Component } from "react";
import Scan from "../../assets/images/scan.png";
import Blocks_logo from "../../assets/images/blocks_logo.png";
import Logout from "../../assets/images/logout.png";
import Add_logo from "../../assets/images/add.png";
import { setToken, setAuth, setEmail, setFirstName, setLastName, setUserId } from "../../features/auth/authSlice";
import { changeStatus, setDevice, setServer, setService, setchar } from "../../features/ble/bleSlice";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { BLE } from "../../utils/bleConstants";
import axiosInstance from "../../axios";
import client from "../../mqtt";
import { TOPICS } from "../../utils/topicUtils";
import DeleteIcon from "../../assets/images/delete.png";
import Offline from "../../assets/images/no-wifi.png";
import Online from "../../assets/images/wifi.png";
import { SHOW_TOAST_SUCESS } from "../../utils/utils";
import { CONSTANTS } from "./../../utils/constants";
import { addDevice, changeDeviceStatus } from "../../features/devices/deviceSlice";

class DevicesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceName: "",
      ssid: "",
      password: "",
      addBtnStatus: true,
    };
  }

  onMqttCallBack = (topic, message) => {
    let newDevices = [];
    console.log(topic + "   " + message);
    for (let x = 0; x < this.props.devices.length; x++) {
      let currentDevice = this.props.devices[x];
      if (topic === "/topic/" + currentDevice.str_deviceName + "/status") {
        // currentDevice.str_status = true;
        this.props.dispatch(changeDeviceStatus(currentDevice.str_deviceName));
      }
    }
  };

  onDeleteDevice = (item) => {
    TOPICS.unSubscribeDeviceStatus(client, item.str_deviceName);
    axiosInstance
      .get(CONSTANTS.API.DELETE_DEVICE + item.id)
      .then((res) => {
        let code = res.data.data.affected;
        if (code == 1) {
          SHOW_TOAST_SUCESS("Sucessfully Deleted!!!");
          this.getAllDevices();
        }
      })
      .catch((res) => {
        console.log(res);
      });
  };

  componentDidMount = () => {
    this.getAllDevices();
  };

  getAllDevices = () => {
    axiosInstance
      .get(CONSTANTS.API.GET_ALL_DEVICES)
      .then((res) => {
        let data = res.data.data;
        this.props.dispatch(addDevice(data));
        this.setState({
          addBtnStatus: true,
        });
        // Subscribe topics for status
        this.props.devices.forEach((device) => {
          TOPICS.subscribeDeviceStatus(client, device.str_deviceName);
        });
        // Listening for message
        client.on("message", this.onMqttCallBack);
        console.log(this.props.devices);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  onDisconnected = () => {
    console.log("Device disconnected!!!");
    this.props.dispatch(changeStatus(BLE.BLE_DISCONNECTED));
  };

  startCodingBtnClick = () => {
    this.props.history.push(CONSTANTS.ROUTING.BLOCKLY_WIFI_PAGE);
  };

  bleStart = async () => {
    const device = await BLE.getDevice();
    device.addEventListener("gattserverdisconnected", this.onDisconnected);
    const server = await BLE.connectGattServer(device);
    const service = await BLE.getServices(server);
    const char = await BLE.getChar(service);

    if (device != undefined) {
      this.props.dispatch(setDevice(device));
      this.props.dispatch(setServer(server));
      this.props.dispatch(setService(service));
      this.props.dispatch(setchar(char));
      this.props.dispatch(changeStatus(BLE.BLE_CONNECTED));
      console.log(await BLE.getSsidPassword());
      let { ssid, pass, deviceId } = JSON.parse(await BLE.getSsidPassword());
      console.log(ssid);
      console.log(pass);
      this.setState({
        ssid: ssid,
        password: pass,
        deviceName: deviceId,
        addBtnStatus: false,
      });
    }
  };

  logout = () => {
    this.props.dispatch(setAuth(false));
    this.props.dispatch(setFirstName(""));
    this.props.dispatch(setLastName(""));
    this.props.dispatch(setEmail(""));
    this.props.dispatch(setUserId(""));
    this.props.dispatch(setToken(""));
    this.props.history.push("login");
  };

  addDevice = (obj) => {
    axiosInstance
      .post(CONSTANTS.API.SAVE_DEVICE, {
        userId: this.state.userId,
        devices: [
          {
            ssid: obj.ssid,
            pass: obj.pass,
            deviceId: obj.deviceId,
          },
        ],
      })
      .then((res) => {
        SHOW_TOAST_SUCESS("Device Added Sucessfully!!");
        this.getAllDevices();
      })
      .catch((res) => {
        console.log(res);
      });
  };

  sendBle = async () => {
    let obj = {
      ssid: this.state.ssid,
      pass: this.state.password,
      deviceId: this.state.deviceName,
    };
    await BLE.writeBle(JSON.stringify(obj), this.props.char);
    this.addDevice(obj);
    this.setState({
      ssid: "",
      password: "",
      deviceName: "",
    });
  };
  render() {
    return (
      <div>
        <section className="py-1 h-screen w-screen bg-login_back bg-center bg-no-repeat">
          <div className="flex justify-end gap-2 items-center p-5">
            <img onClick={this.logout} src={Logout} className="w-18 h-16 bg-gray-100 rounded-full cursor-pointer p-2"></img>
          </div>
          {!this.props.modalState && (
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
              <div className="relative flex flex-col min-w-0 break-words bg-pink-300 w-full mb-6 shadow-lg rounded-3xl ">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                  <div className="flex flex-wrap items-center ">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                      <img src={Blocks_logo} className="w-12 h-14 float-left mr-2"></img>
                      <h3 className="text-2xl font-light text-blueGray-700 mt-2 ">Smarty List</h3>
                    </div>
                    <div>
                      <input
                        value={this.state.deviceName}
                        onChange={(event) => this.setState({ deviceName: event.target.value })}
                        placeholder={"Smarty Name"}
                        className="text-gray-700 bg-gray-200 shadow-xl  font-sans font-light   p-2 ml-2 rounded-full"
                        type="text"
                      />
                    </div>
                    <div>
                      <input
                        value={this.state.ssid}
                        onChange={(event) => this.setState({ ssid: event.target.value })}
                        placeholder={"Wifi SSid"}
                        className="text-gray-700 bg-gray-200 shadow-xl font-sans font-light   p-2 ml-2 rounded-full"
                        type="text"
                      />
                    </div>
                    <div>
                      <input
                        value={this.state.password}
                        onChange={(event) => this.setState({ password: event.target.value })}
                        placeholder={"Password"}
                        className="text-gray-700 bg-gray-200 shadow-xl  font-sans font-light  p-2 ml-2 rounded-full"
                        type="text"
                      />
                    </div>

                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                      <button
                        hidden={false}
                        disabled={this.state.addBtnStatus}
                        onClick={() => {
                          this.sendBle();
                        }}
                        className="bg-gray-300 text-white active:bg-indigo-600  font-light uppercase p-2 hover:bg-indigo-600 rounded-2xl outline-none text-2xl focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        <img src={Add_logo} className="w-12 h-12"></img>
                      </button>
                      <button
                        onClick={() => this.bleStart()}
                        className={
                          " active:bg-indigo-600  font-light uppercase p-2 rounded-2xl outline-none text-2xl focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 " +
                          (this.props.bleState === BLE.BLE_CONNECTED ? "bg-blue-600 text-white " : "  bg-gray-300 text-white")
                        }
                        type="button"
                      >
                        <img src={Scan} className="w-12 h-12"></img>
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
                        <th className=" flex justify-center items-center px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Actions
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {/* <tr>{this.state.devices}</tr> */}
                      {this.props.devices.map((item, i) => (
                        <tr key={i}>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xl whitespace-nowrap p-4 text-left text-blueGray-700 ">{item.str_deviceName}</td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xl whitespace-nowrap p-4 text-left text-blueGray-700 ">{item.str_ssid}</td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xl whitespace-nowrap p-4 text-left text-blueGray-700 ">{item.str_pass}</td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xl whitespace-nowrap p-4 text-left text-blueGray-700 ">
                            <img className=" ml-1 w-12 h-12 flex justify-center items-center flex-col" src={item.str_status === true ? Online : Offline} alt="" />
                            <h1>{item.str_status === true ? "Online" : "Offline"}</h1>
                          </td>
                          <td className=" flex justify-center items-center gap-2 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xl whitespace-nowrap p-4 text-left text-blueGray-700 ">
                            <button onClick={() => this.onDeleteDevice(item)} className="flex justify-center gap-2 items-center px-6 py-2 rounded-2xl  text-xl shadow-xl bg-red-500 text-white">
                              <img src={DeleteIcon} className="w-8 h-8"></img>Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          <footer className="relative pt-8 pb-6 mt-16">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                  <div className="text-sm text-blueGray-500 font-semibold py-1">
                    <button onClick={this.startCodingBtnClick} className="p-8 shadow-2xl text-3xl hover:bg-purple-900 hover:shadow-sm text-white bg-purple-700 rounded-full ">
                      Start Coding
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    modalState: state.modal.status,
    bleState: state.ble.status,
    char: state.ble.char,
    userId: state.auth.userId,
    devices: state.devices.devices,
  };
};

export default compose(withRouter, connect(mapStateToProps))(DevicesComponent);
