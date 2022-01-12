import React from "react";
import LayoutAdminTheme from "../../layout/LayoutAdmin";
import Products from "../../assets/images/robot2.png";
import Edit from "../../assets/images/edit2.png";
import Delete from "../../assets/images/delete.png";
import Eye from "../../assets/images/eye.png";
import axiosInstance from "../../axios";
import { CONSTANTS } from "../../utils/constants";
import { SHOW_TOAST_SUCESS, SHOW_TOAST_WARN } from "../../utils/utils";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ShowSampleDialog from "./show-sample-dialog/ShowSampleDialog";

export default function BlocklySampleHome() {
  const [samplesData, setSamplesData] = React.useState([]);
  const [showSample, setShowSample] = React.useState(null);
  const [openShowDialog, setopenShowDialog] = React.useState(false);
  const history = useHistory();
  const deleteSample = (obj) => {
    axiosInstance
      .get(CONSTANTS.API.BLOCKLY_SAMPLES.DELETE + obj.id)
      .then((res) => {
        SHOW_TOAST_SUCESS("Sucessfully Deleted !!");
        getAllSamples();
      })
      .catch((res) => {
        console.log(res);
      });
  };
  const getAllSamples = () => {
    axiosInstance
      .get(CONSTANTS.API.BLOCKLY_SAMPLES.FIND_ALL)
      .then((res) => {
        console.log(res.data.data);
        setSamplesData(res.data.data);
      })
      .catch((res) => {
        console.log(res);
      });
  };
  React.useEffect(() => {
    getAllSamples();
  }, []);

  const handleShowClose = () => {
    setopenShowDialog(false);
  };
  return (
    <LayoutAdminTheme>
      <div className="w-full h-full ">
        <ShowSampleDialog
          open={openShowDialog}
          closeDialog={handleShowClose}
          data={showSample}
        ></ShowSampleDialog>
        <div className=" border-b-2">
          <div className="flex justify-start items-center p-5 ">
            <img className="w-12 h-12" src={Products} alt="" />
            <h1 className="ml-2 text-3xl text-black font-Roboto mt-2  ">
              Samples Programs
            </h1>
            <button
              onClick={() =>
                history.push(CONSTANTS.ROUTING.BLOCKY_SAMPLES_PAGE_ADD)
              }
              className="text-2xl ml-auto bg-purple-500 px-6 py-2 text-white shadow-sm rounded-lg"
            >
              Add
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center mt-2">
          <div className="w-4/5">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Sample Name</th>
                  <th className="py-3 px-6 text-left">Product</th>
                  <th className="py-3 px-6 text-center">Mode</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {samplesData.map((obj) => {
                  return (
                    <tr
                      key={obj.id}
                      className="border-b border-gray-200 hover:bg-gray-100"
                    >
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="font-medium">{obj.str_name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <div className="mr-2"></div>
                          <span>{obj.product.str_productName}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <div className="mr-2"></div>
                          <span>{obj.str_mode}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex item-center justify-center">
                          <img
                            onClick={() => {
                              setShowSample(obj);
                              setopenShowDialog(!openShowDialog);
                            }}
                            src={Eye}
                            className=" cursor-pointer w-12 h-12 ml-2 "
                            alt=""
                          />
                          <img
                            onClick={() => deleteSample(obj)}
                            src={Delete}
                            className=" cursor-pointer w-12 h-12 ml-2 "
                            alt=""
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </LayoutAdminTheme>
  );
}
