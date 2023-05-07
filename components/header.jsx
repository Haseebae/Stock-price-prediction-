import React, { useState, useEffect, useContext } from "react";
import { TbArrowBarToLeft } from "react-icons/tb";
import { useRouter } from "next/router";

const Header = (props) => {
  const Router = useRouter();
  function handleClick() {
    Router.push("/");
  }

  return (
    <div className="flex justify-between border shadow-lg px-5 p-4 bg-gray-100">
      <button
        onClick={handleClick}
        className="shadow-lg p-1 bg-slate-200 rounded-lg"
      >
        <TbArrowBarToLeft size={25} />
      </button>
      <b>STOCK PREDICTION </b>
    </div>
  );
};

export default Header;
