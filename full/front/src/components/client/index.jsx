import React from "react";
import Header from "../../layouts/header";
import { Outlet } from "react-router-dom";

const Client = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Client;
