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
            {(catalog || product) && <th>Catalog </th>}
            {(category || subCategory) && <th>Category id</th>}
            {(category || product) && <th>Category </th>}
            {subCategory && <th>Sub Category id</th>}
            {(subCategory || product) && <th>Sub Category </th>}
            {color && <th>Color Id</th>}
            {(color || product) && <th>Color </th>}
            {material && <th>Material Id</th>}
            {(material || product) && <th>Material </th>}
            {product && <th>Product</th>}

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            return (
              <tr key={index}>
                {(category || catalog) && <td>{item?.catalogId}</td>}
                {(catalog || product) && <td>{item?.catalogName}</td>}
                {(category || subCategory) && <td>{item?.categoryId}</td>}
                {(category || product) && <td>{item?.categoryName}</td>}
                {subCategory && <td>{item?.subCategoryId}</td>}
                {(subCategory || product) && <td>{item?.subCategoryName}</td>}
                {color && <td>{item?.colorId}</td>}
                {(color || product) && <td>{item?.colorName}</td>}
                {material && <td>{item?.materialId}</td>}
                {(material || product) && <td>{item?.materialName}</td>}
                {product && <td>{item?.productName}</td>}

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
                  {product && (
                    <button
                      className="delete-btn btn"
                      onClick={(e) => handleDelete(item?.productId)}
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
