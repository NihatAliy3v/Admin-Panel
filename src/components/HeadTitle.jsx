import React from "react";
import { VscChevronRight } from "react-icons/vsc";
import { Link } from "react-router-dom";

export const HeadTitle = ({ pageName }) => {
  return (
    <div className="head-title">
      <h1 className="title">{pageName}</h1>
      <div className="breadcrumb">
        <Link to="/" className="prevent-link">
          Home
        </Link>
        <VscChevronRight className="arright-icon" />
        <span className="lastest">{pageName}</span>
      </div>
    </div>
  );
};
