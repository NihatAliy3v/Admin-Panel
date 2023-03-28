// Hooks
import React, { useEffect, useState } from "react";
// Axios
import axios from "axios";
// Components
import { HeadTitle } from "../components/HeadTitle";
import { SideBar } from "../components/Sidebar";
import { Table } from "../components/Table";
import { Input } from "../components/Input";

const SubCategory = () => {
  // Category
  const [subCategoryName, setSubCategoryName] = useState("");
  const [dataSubCategory, setDataSubCategory] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [dataCategory, setDataCategory] = useState([]);
  useEffect(() => {
    getSubCategories();
    getCategories();
  }, []);

  const getSubCategories = async () => {
    axios
      .get("https://localhost:44317/api/SubCategories/getall")
      .then((res) => setDataSubCategory(res.data.data));
  };
  const getCategories = async () => {
    axios
      .get("https://localhost:44317/api/Categories/getall")
      .then((res) => setDataCategory(res.data.data));
  };

  // add Category
  const subCategorySubmit = async (e) => {
    e.preventDefault();
    const body = {
      categoryId,
      subCategoryName,
    };
    await axios.post("https://localhost:44317/api/SubCategories/add", body);
    getSubCategories();
    console.log(dataSubCategory);
  };
  // Delete Category
  const subCategoryDelete = async (categoryId) => {
    await axios
      .delete(`https://localhost:44317/api/SubCategories/delete/${categoryId}`)
      .then((res) => setDataSubCategory(res.data.data));
    getSubCategories();
  };
  return (
    <main className="sub-category">
      <section className="wrapper">
        <SideBar />
        <div className="sub-category-main">
          <HeadTitle pageName="Sub Category" />
          <section className="main-wrapper">
            <div className="add-new">
              <div className="card">
                <h2 className="card-title">Add New Sub Category</h2>
                <form className="form" onSubmit={(e) => subCategorySubmit(e)}>
                  <Input
                    type="text"
                    name="subCategoryName"
                    value={subCategoryName}
                    onChange={(e) => setSubCategoryName(e.target.value)}
                    id="subCategoryName"
                    placeholder="Name"
                  />
                  <select
                    className="select"
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                  >
                    {dataCategory?.map((item, index) => (
                      <option
                        key={index}
                        onChange={(e) => setCategoryId(item?.catalogId)}
                        value={item?.categoryId}
                      >
                        {item?.categoryName}
                      </option>
                    ))}
                  </select>
                  <button className="btn-primary">Submit</button>
                </form>
              </div>
            </div>
            <Table
              data={dataSubCategory}
              handleDelete={subCategoryDelete}
              subCategory={true}
            />
          </section>
        </div>
      </section>
    </main>
  );
};

export default SubCategory;
