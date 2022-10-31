import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function () {
  return (
    <div>
      <h1>Invoices</h1>
      
        <Outlet></Outlet>
      
    </div>
  );
}
