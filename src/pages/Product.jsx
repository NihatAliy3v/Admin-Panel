// Hooks
import React, { useEffect, useState } from "react";
// Axios
import axios from "axios";
// Components
import { HeadTitle } from "../components/HeadTitle";
import { SideBar } from "../components/Sidebar";
import { Table } from "../components/Table";
import { Input } from "../components/Input";

const Product = () => {
  // Product
  const [productName, setProductName] = useState("");
  const [productCode, setProductCode] = useState(0);
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState(0);
  const [unistInStock, setUnistInStock] = useState(0);
  const [description, setDescription] = useState("");
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    await axios
      .get("https://localhost:44317/api/Products/getAll")
      .then((res) => setProductData(res.data.data));
  };

  // add Product
  const productSubmit = async (e) => {
    e.preventDefault();
    const body = {
    //   catalogId,
    //   categoryId,
    //   subCategoryId,
    //   materialId,
    //   colorId,
      productName,
      productCode,
      price,
      size,
      unistInStock,
      description,
    };
    await axios.post("https://localhost:44317/api/Products/add", body);
    getProducts();
    console.log(productData);
  };
  // Delete Product
  const productDelete = async (productId) => {
    await axios
      .delete(`https://localhost:44317/api/Products/delete/${productId}`)
      .then((res) => setProductData(res.data.data));
    getProducts();
    console.log(productData);
  };

  return (
    <main className="product">
      <section className="wrapper">
        <SideBar />
        <div className="product-main">
          <HeadTitle pageName="Product" />
          <section className="main-wrapper">
            <div className="main-left">
              <div className="add-new">
                <div className="card">
                  <h2 className="card-title">Add New Product</h2>
                  <form className="form" onSubmit={(e) => productSubmit(e)}>
                    <label htmlFor="productName">Name</label>
                    <Input
                      type="text"
                      name="productName"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      id="productName"
                    />
                    <button className="add-btn">Submit</button>
                  </form>
                </div>
              </div>
              {/* <select
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
              </select> */}
            </div>
            <Table
              data={productData}
              handleDelete={productDelete}
              product={true}
            />
          </section>
        </div>
      </section>
    </main>
  );
};

export default Product;
