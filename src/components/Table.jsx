import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { MdModeEditOutline } from "react-icons/md";

export const Table = ({
  data,
  handleDelete,
  catalog,
  category,
  subCategory,
  color,
  material,
  product,
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
            {color && <th>Color Id</th>}
            {color && <th>Color Name</th>}
            {material && <th>Material Id</th>}
            {material && <th>Material Name</th>}
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
                {item?.colorId && <td>{item?.colorId}</td>}
                {item?.colorName && <td>{item?.colorName}</td>}
                {item?.materialId && <td>{item?.materialId}</td>}
                {item?.materialName && <td>{item?.materialName}</td>}

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
                  {color && (
                    <button
                      className="delete-btn btn"
                      onClick={(e) => handleDelete(item?.colorId)}
                    >
                      <BsFillTrashFill className="delete-icon" />
                    </button>
                  )}
                  {material && (
                    <button
                      className="delete-btn btn"
                      onClick={(e) => handleDelete(item?.materialId)}
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
