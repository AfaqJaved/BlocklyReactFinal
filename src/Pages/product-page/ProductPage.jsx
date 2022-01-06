import React from "react";
import LayoutAdminTheme from "../../layout/LayoutAdmin";
import Products from "../../assets/images/robot2.png";
import Edit from "../../assets/images/edit2.png";
import Delete from "../../assets/images/delete.png";
import AddProductDialog from "./AddProductDialog/AddProductDialog";
import axiosInstance from "../../axios";
import { CONSTANTS } from "../../utils/constants";
import { SHOW_TOAST_SUCESS, SHOW_TOAST_WARN } from "../../utils/utils";

export default function ProductPage() {
  const [openAddDialog, setOpenAddDialog] = React.useState(false);
  const [productData, setProductData] = React.useState([]);
  const addToolbox = () => {
    setOpenAddDialog(true);
  };

  const editProduct = (data) => {};

  const deleteProduct = (data) => {
    console.log(data);
    axiosInstance
      .get(CONSTANTS.API.PRODUCT.DELETE + data.id)
      .then((res) => {
        if (res.data.message === "sucess") {
          SHOW_TOAST_SUCESS(res.data.message);
          getAllProducts();
        } else {
          SHOW_TOAST_WARN(res.data.message + "   : " + res.data.data.detail);
        }
      })
      .catch((res) => {
        console.log(res);
      });
  };

  const getAllProducts = () => {
    axiosInstance
      .get(CONSTANTS.API.PRODUCT.FIND_ALL)
      .then((res) => {
        setProductData(res.data.data);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  React.useEffect(() => {
    getAllProducts();
  }, []);

  const closeAddToolBoxDialog = () => {
    setOpenAddDialog(false);
    getAllProducts();
  };

  return (
    <LayoutAdminTheme>
      <div className="w-full h-full ">
        <AddProductDialog
          open={openAddDialog}
          closeDialog={closeAddToolBoxDialog}
        ></AddProductDialog>
        <div className=" border-b-2">
          <div className="flex justify-start items-center p-5 ">
            <img className="w-12 h-12" src={Products} alt="" />
            <h1 className="ml-2 text-3xl text-black font-Roboto mt-2  ">
              Products
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
                  <th className="py-3 px-6 text-left">Product Name</th>
                  <th className="py-3 px-6 text-left">Features</th>
                  <th className="py-3 px-6 text-center">Description</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {productData.map((obj) => {
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
                              src={obj.str_productImage}
                              alt=""
                            />
                          </div>
                          <span className="font-medium">
                            {obj.str_productName}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <div className="mr-2"></div>
                          <span>{obj.str_product_features}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex items-center justify-center">
                          {obj.str_productDescription}
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex item-center justify-center">
                          <img
                            onClick={() => deleteProduct(obj)}
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
