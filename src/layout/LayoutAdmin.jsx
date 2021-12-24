import React from "react";
import ContentWrapper from "./content/ContentWrapper";
import HeaderComponent from "./header/HeaderComponent";
import SidebarComponent from "./sidebar/SidebarComponent";

export default function LayoutAdminTheme(props) {
  return (
    <div className="min-h-screen w-full h-full flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white ">
      <HeaderComponent></HeaderComponent>
      <SidebarComponent></SidebarComponent>
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">{props.children}</div>
    </div>
  );
}
