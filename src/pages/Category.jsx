// Hooks
import React, { useEffect, useState } from "react";
// Axios
import axios from "axios";
// Components
import { AddNewForm } from "../components/AddNewForm";
import { HeadTitle } from "../components/HeadTitle";
import { SideBar } from "../components/Sidebar";
import { Table } from "../components/Table";
import { MyComponent } from "../components/Select";

const Category = () => {
  // Category
  const [categoryName, setCategoryName] = useState("");
  const [dataCategory, setDataCategory] = useState([]);
  const [catalogId, setCatalogId] = useState(0);
  const [dataCatalog, setDataCatalog] = useState([]);
  useEffect(() => {
    getCategories();
    getCatalogs();
  }, []);
  const getCatalogs = async () => {
    axios
      .get("https://localhost:44317/api/Catalogs/getall")
      .then((res) => setDataCatalog(res.data.data));
  };
  const getCategories = async () => {
    axios
      .get("https://localhost:44317/api/Categories/getall")
      .then((res) => setDataCategory(res.data.data));
  };

  // add Category
  const categorySubmit = async (e) => {
    e.preventDefault();
    const body = {
      catalogId,
      categoryName,
    };
    await axios.post("https://localhost:44317/api/Categories/add", body);
    getCategories();
    console.log(dataCategory);
  };
  // Delete Category
  const categoryDelete = async (categoryId) => {
    await axios
      .delete(`https://localhost:44317/api/Categories/delete/${categoryId}`)
      .then((res) => setDataCategory(res.data.data));
    getCategories();
    console.log(dataCategory);
  };
  return (
    <main className="category">
      <section className="wrapper">
        <SideBar />
        <div className="category-main">
          <HeadTitle pageName="Category" />
          <section className="main-wrapper">
            <div className="main-left">
              <AddNewForm
                onSubmit={(e) => categorySubmit(e)}
                onChange={(e) => setCategoryName(e.target.value)}
                inputValue={categoryName}
                inputName="categoryName"
                inputId="categoryName"
                inputType="text"
                cardTitle="Add New Category"
              />
              <select
                className="select"
                value={catalogId}
                onChange={(e) => setCatalogId(e.target.value)}
              >
                {dataCatalog?.map((item, index) => (
                  <option
                    key={index}
                    onChange={(e) => setCatalogId(item?.catalogId)}
                    value={item?.catalogId}
                  >
                    {item?.catalogName}
                  </option>
                ))}
              </select>
            </div>
            <Table
              data={dataCategory}
              handleDelete={categoryDelete}
              category={true}
            />
          </section>
        </div>
      </section>
    </main>
  );
};

export default Category;
