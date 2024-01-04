import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}>
      <CDBSidebar textColor="#fff" backgroundColor="#2C3539">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <NavLink  to="/admin"
                    className="text-decoration-none"
                    style={{ color: "inherit" }}>
            Admin
          </NavLink>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/admin" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Admin Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/users" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="users">Users</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/orders" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="store">ViewOrders</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/viewproduct" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="list">ADMIN PRODUCT</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/add-product" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="plus">Add Product</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}></CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default SideBar;