import React from "react";
import Cubes from "../../assets/images/cubes.png";
import Toolbox from "../../assets/images/toolbox.png";
import Category from "../../assets/images/options.png";
import LayoutAdminTheme from "../../layout/LayoutAdmin";
import Delete from "../../assets/images/delete.png";
import axiosInstance from "../../axios";
import { CONSTANTS } from "../../utils/constants";
import AddBlockDialog from "./AddBlockDialog/AddBlockDialog";
import { SHOW_TOAST_SUCESS } from "../../utils/utils";

export default function BlocksPage() {
  const [openAddDialog, setOpenAddDialog] = React.useState(false);
  const [blocks, setblocks] = React.useState([]);

  const addBlock = () => {
    setOpenAddDialog(true);
  };

  const editBlock = (data) => {};

  const deleteBlock = (data) => {
    axiosInstance
      .get(CONSTANTS.API.BLOCK.DELETE + data.id)
      .then((res) => {
        SHOW_TOAST_SUCESS("BLOCK DELETED SUCESSFULLY !!");
        getAllBlocks();
      })
      .catch((res) => {
        console.log(res);
      });
  };

  const getAllBlocks = () => {
    axiosInstance
      .get(CONSTANTS.API.BLOCK.FIND_ALL)
      .then((res) => {
        setblocks(res.data.data);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  React.useEffect(() => {
    getAllBlocks();
  }, []);

  const closeAddToolBoxDialog = () => {
    setOpenAddDialog(false);
    getAllBlocks();
  };
  return (
    <LayoutAdminTheme>
      <div className="w-full h-full ">
        <AddBlockDialog
          open={openAddDialog}
          closeDialog={closeAddToolBoxDialog}
        ></AddBlockDialog>
        <div className=" border-b-2">
          <div className="flex justify-start items-center p-5 ">
            <img className="w-12 h-12" src={Cubes} alt="" />
            <h1 className="ml-2 text-3xl text-black font-Roboto mt-2  ">
              Blocks
            </h1>
            <button
              onClick={addBlock}
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
                  <th className="py-3 px-6 text-left">Block Name</th>
                  <th className="py-3 px-6 text-left">ToolBox Name</th>
                  <th className="py-3 px-6 text-left">Category</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {blocks.map((obj) => {
                  return (
                    <tr
                      key={obj.id}
                      className={
                        "border-b border-gray-200  " +
                        (obj.toolboxCategory.str_name === "Smarty"
                          ? "bg-red-400 text-white text-xl "
                          : "")
                      }
                    >
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="mr-2">
                            <img className="w-12 h-12" src={Cubes} alt="" />
                          </div>
                          <span className="font-medium">
                            {obj.str_block_name}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="mr-2">
                            <img className="w-12 h-12" src={Toolbox} alt="" />
                          </div>
                          <span className="font-medium">
                            {obj.toolboxCategory.toolbox.str_name}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <div className="mr-2">
                            <img className="w-12 h-12" src={Category} alt="" />
                          </div>
                          <span>{obj.toolboxCategory.str_name}</span>
                        </div>
                      </td>

                      <td className="py-3 px-6 text-center">
                        <div className="flex item-center justify-center">
                          <img
                            onClick={() => deleteBlock(obj)}
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
