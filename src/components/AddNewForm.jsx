import React from "react";
import { Input } from "./Input";

export const AddNewForm = ({
  onSubmit,
  inputName,
  inputValue,
  onChange,
  inputId,
  inputType,
  cardTitle,
}) => {
  return (
    <div className="add-new">
      <div className="card">
        <h2 className="card-title">{cardTitle}</h2>
        <form className="form" onSubmit={onSubmit}>
          <label htmlFor="name">Name</label>
          <Input
            type={inputType}
            name={inputName}
            value={inputValue}
            onChange={onChange}
            id={inputId}
          />
          <button className="catalog-add">Submit</button>
        </form>
      </div>
    </div>
  );
};
