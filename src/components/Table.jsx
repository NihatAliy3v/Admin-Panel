import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { MdModeEditOutline } from "react-icons/md";

export const Table = ({
  data,
  handleDelete,
  catalog,
  category,
  subCategory,
}) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {(category || catalog) && <th>Catalog id</th>}
            {catalog && <th>Catalog Name</th>}
            {(category || subCategory) && <th>Category id</th>}
            {category && <th>Category Name</th>}
            {subCategory && <th>Sub Category id</th>}
            {subCategory && <th>Sub Category Name</th>}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            return (
              <tr key={index}>
                {item.catalogId && <td>{item?.catalogId}</td>}
                {item.catalogName && <td>{item?.catalogName}</td>}
                {item.categoryId && <td>{item?.categoryId}</td>}
                {item.categoryName && <td>{item?.categoryName}</td>}
                {item.subCategoryId && <td>{item?.subCategoryId}</td>}
                {item.subCategoryName && <td>{item?.subCategoryName}</td>}

                <td>
                  <button className="edit-btn btn">
                    <MdModeEditOutline className="edit-icon" />
                  </button>
                  {catalog && (
                    <button
                      className="delete-btn btn"
                      onClick={(e) => handleDelete(item?.catalogId)}
                    >
                      <BsFillTrashFill className="delete-icon" />
                    </button>
                  )}
                  {category && (
                    <button
                      className="delete-btn btn"
                      onClick={(e) => handleDelete(item?.categoryId)}
                    >
                      <BsFillTrashFill className="delete-icon" />
                    </button>
                  )}
                  {subCategory && (
                    <button
                      className="delete-btn btn"
                      onClick={(e) => handleDelete(item?.subCategoryId)}
                    >
                      <BsFillTrashFill className="delete-icon" />
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
