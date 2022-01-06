import React from "react";
import LayoutAdminTheme from "../../layout/LayoutAdmin";
import Toolbox from "../../assets/images/toolbox.png";
import BlocksLogo from "../../assets/images/blocks_logo.png";
import AddToolBoxDialog from "./addDialog/AddToolBoxDialog";
import axiosInstance from "../../axios";
import { CONSTANTS } from "../../utils/constants";
import Delete from "../../assets/images/delete.png";
import Edit from "../../assets/images/edit.png";
import { SHOW_TOAST_SUCESS, SHOW_TOAST_WARN } from "../../utils/utils";

export default function BlocklyToolBoxPage() {
  const [openAddDialog, setOpenAddDialog] = React.useState(false);
  const [toolboxes, setToolboxes] = React.useState([]);
  const addToolbox = () => {
    setOpenAddDialog(true);
  };

  const deleteToolbox = (data) => {
    axiosInstance
      .get(CONSTANTS.API.TOOLBOX.DELETE + data.id)
      .then((res) => {
        console.log(res.data);
        if (res.data.message === "sucess") {
          SHOW_TOAST_SUCESS(res.data.message);
          getAllToolbox();
        } else {
          SHOW_TOAST_WARN(res.data.message + "   : " + res.data.data.detail);
        }
      })
      .catch((res) => {
        console.log(res);
      });
  };

  const editToolbox = () => {};

  const getAllToolbox = () => {
    axiosInstance
      .get(CONSTANTS.API.TOOLBOX.FIND_ALL)
      .then((res) => {
        setToolboxes(res.data.data);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  React.useEffect(() => {
    getAllToolbox();
  }, []);

  const closeAddToolBoxDialog = () => {
    getAllToolbox();
    setOpenAddDialog(false);
  };
  return (
    <LayoutAdminTheme>
      <div className="w-full h-full ">
        <AddToolBoxDialog
          open={openAddDialog}
          closeDialog={closeAddToolBoxDialog}
        ></AddToolBoxDialog>
        <div className=" border-b-2">
          <div className="flex justify-start items-center p-5 ">
            <img className="w-12 h-12" src={Toolbox} alt="" />
            <h1 className="ml-2 text-3xl text-black font-Roboto mt-2  ">
              ToolBox
            </h1>
            <button
              onClick={addToolbox}
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
                  <th className="py-3 px-6 text-left">Toolbox Name</th>
                  <th className="py-3 px-6 text-left">Mode</th>
                  <th className="py-3 px-6 text-center">Product</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {toolboxes.map((obj) => {
                  return (
                    <tr
                      key={obj.id}
                      className="border-b border-gray-200 hover:bg-gray-100"
                    >
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="mr-2">
                            <img
                              className="w-12 h-12"
                              src={BlocksLogo}
                              alt=""
                            />
                          </div>
                          <span className="font-medium">{obj.str_name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <span>{obj.str_mode}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex items-center justify-center">
                          {obj.product.str_productName}
                        </div>
                      </td>

                      <td className="py-3 px-6 text-center">
                        <div className="flex item-center justify-center">
                          <img
                            onClick={() => editToolbox(obj)}
                            src={Edit}
                            className=" cursor-pointer w-12 h-12 ml-2 "
                            alt=""
                          />
                          <img
                            onClick={() => deleteToolbox(obj)}
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
