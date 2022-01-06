import React from "react";
import LayoutAdminTheme from "../../layout/LayoutAdmin";
import Toolbox from "../../assets/images/toolbox.png";
import BlocksLogo from "../../assets/images/blocks_logo.png";
import OptionsLogo from "../../assets/images/options.png";
import axiosInstance from "../../axios";
import { CONSTANTS } from "../../utils/constants";
import Delete from "../../assets/images/delete.png";
import Edit from "../../assets/images/edit.png";
import { SHOW_TOAST_SUCESS, SHOW_TOAST_WARN } from "../../utils/utils";
import AddCategoryDialog from "./AddCategoryDialog/AddCategoryDialog";

export default function ToolboxCategoriesPage() {
  const [openAddCategoryDialog, setopenAddCategoryDialog] =
    React.useState(false);
  const [categories, setCategories] = React.useState([]);
  const addCategory = () => {
    setopenAddCategoryDialog(true);
  };

  const deleteToolbox = (data) => {
    console.log("called delete");
    console.log(data.id);
    axiosInstance
      .get(CONSTANTS.API.TOOLBOX_CATEGORIES.DELETE + data.id)
      .then((res) => {
        if (res.data.message === "sucess") {
          SHOW_TOAST_SUCESS(res.data.message);
          getAllCategories();
        } else {
          SHOW_TOAST_WARN(res.data.message + "   : " + res.data.data.detail);
        }
      })
      .catch((res) => {
        console.log(res);
      });
  };

  const editToolbox = () => {};

  const getAllCategories = () => {
    axiosInstance
      .get(CONSTANTS.API.TOOLBOX_CATEGORIES.FIND_ALL)
      .then((res) => {
        setCategories(res.data.data);
        // setToolboxes(res.data.data);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  React.useEffect(() => {
    getAllCategories();
  }, []);

  const closeAddCategoryDialog = () => {
    getAllCategories();
    setopenAddCategoryDialog(false);
  };
  return (
    <LayoutAdminTheme>
      <div className="w-full h-full ">
        <AddCategoryDialog
          open={openAddCategoryDialog}
          closeDialog={closeAddCategoryDialog}
        ></AddCategoryDialog>
        <div className=" border-b-2">
          <div className="flex justify-start items-center p-5 ">
            <img className="w-12 h-12" src={OptionsLogo} alt="" />
            <h1 className="ml-2 text-3xl text-black font-Roboto mt-2  ">
              Categories
            </h1>
            <button
              onClick={addCategory}
              className="text-2xl ml-auto bg-purple-500 px-6 py-2 text-white shadow-sm rounded-lg"
            >
              Add
            </button>
          </div>
        </div>
        <div className=" flex justify-start ml-12  items-center mt-2">
          <div className="w-4/5">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Category Name</th>
                  <th className="py-3 px-6 text-left">Toolbox</th>
                  <th className="py-3 px-6 text-left">Kind</th>
                  <th className="py-3 px-6 text-center">Container</th>
                  <th className="py-3 px-6 text-center">Row</th>
                  <th className="py-3 px-6 text-center">Label</th>
                  <th className="py-3 px-6 text-center">Icon</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {categories.map((obj) => {
                  return (
                    <tr
                      key={obj.id}
                      className="border-b border-gray-200 hover:bg-gray-100"
                    >
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="mr-2">
                            <img className="w-6 h-6" src={OptionsLogo} alt="" />
                          </div>
                          <span className="text-xl">{obj.str_name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="mr-2">
                            <img className="w-6 h-6" src={Toolbox} alt="" />
                          </div>
                          <span className="text-xl">
                            {obj.toolbox.str_name}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <span>{obj.str_kind}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <span>{obj.json_cssConfig.container}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <span>{obj.json_cssConfig.label}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <span>{obj.json_cssConfig.row}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <span>{obj.json_cssConfig.icon}</span>
                        </div>
                      </td>

                      <td className="py-3 px-6 text-center">
                        <div className="flex item-center justify-center">
                          {/* <img
                            onClick={() => editToolbox(obj)}
                            src={Edit}
                            className=" cursor-pointer w-12 h-12 ml-2 "
                            alt=""
                          /> */}
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
