// Hooks
import React, { useEffect, useState } from "react";
// Axios
import axios from "axios";
// Components
import { HeadTitle } from "../components/HeadTitle";
import { SideBar } from "../components/Sidebar";
import { Table } from "../components/Table";
import { Input } from "../components/Input";
import { BsUpload } from "react-icons/bs";

const Product = () => {
  const Swal = require("sweetalert2");

  // Product
  const [productName, setProductName] = useState("");
  const [productCode, setProductCode] = useState(0);
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState(0);
  const [unistInStock, setUnistInStock] = useState(0);
  const [description, setDescription] = useState("");
  const [productData, setProductData] = useState([]);
  const [productId, setProductId] = useState(0);
  // imageProduct
  const [imageProduct, setImageProduct] = useState([]);
  const [imageProductData, setImageProductData] = useState([]);

  // catalog
  const [dataCatalog, setDataCatalog] = useState([]);
  const [catalogId, setCatalogId] = useState(0);
  // category
  const [dataCategory, setDataCategory] = useState([]);
  const [categoryId, setCategoryId] = useState(0);

  // subcategory
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [subCategoryId, setSubCategoryId] = useState(0);

  // color
  const [colorData, setColorData] = useState([]);
  const [colorId, setColorId] = useState(0);

  // material
  const [materialData, setMaterialData] = useState([]);
  const [materialId, setMaterialId] = useState(0);

  // withoutImage
  const [withoutImageProductData, setWithoutImageProductData] = useState([]);

  useEffect(() => {
    getCatalogs();
    getCategories();
    getSubCategories();
    getColors();
    getMaterials();
    getProducts();
    getImageProducts();
    getWithoutImageProducts();
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

  const getSubCategories = async () => {
    await axios
      .get("https://localhost:44317/api/SubCategories/getall")
      .then((res) => setSubCategoryData(res.data.data));
  };
  const getColors = async () => {
    await axios
      .get("https://localhost:44317/api/Colors/getall")
      .then((res) => setColorData(res.data.data));
  };
  const getMaterials = async () => {
    await axios
      .get("https://localhost:44317/api/Materials/getall")
      .then((res) => setMaterialData(res.data.data));
  };
  const getProducts = async () => {
    await axios
      .get("https://localhost:44317/api/Products/getAll")
      .then((res) => setProductData(res.data.data));
  };
  const getImageProducts = async () => {
    await axios
      .get("https://localhost:44317/api/ProductImages/getAll")
      .then((res) => setImageProductData(res.data.data));
  };
  const getWithoutImageProducts = async () => {
    await axios
      .get("https://localhost:44317/api/Products/getAllWithoutImages")
      .then((res) => setWithoutImageProductData(res.data.data));
  };

  // add Product
  const productSubmit = async (e) => {
    e.preventDefault();
    const body = {
      catalogId,
      categoryId,
      subCategoryId,
      materialId,
      colorId,
      productName,
      productCode,
      price,
      size,
      unistInStock,
      description,
    };
    await axios.post("https://localhost:44317/api/Products/add", body);
    getProducts();
    getWithoutImageProducts();
    console.log(productData);
  };
  // Delete Product
  const productDelete = async (productId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        axios
          .delete(`https://localhost:44317/api/Products/delete/${productId}`)
          .then((res) => setProductData(res.data.data));
        getProducts();
      }
    });
  };

  // add ProductImage
  const productImageSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("productId", productId);
    formData.append("file", imageProduct[0]);

    await axios.post("https://localhost:44317/api/ProductImages/add", formData);
    getImageProducts();
    getProducts();
    console.log(productData);
  };
  const filteredCategory = dataCategory?.filter(
    (item) => Number(item.catalogId) === Number(catalogId)
  );
  const filteredSubCategory = subCategoryData?.filter(
    (item) => Number(item.categoryId) === Number(categoryId)
  );

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
                    <Input
                      type="text"
                      name="productName"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      id="productName"
                      placeholder="Name"
                    />
                    <Input
                      type="text"
                      name="productCode"
                      value={productCode}
                      onChange={(e) => setProductCode(e.target.value)}
                      id="productCode"
                      placeholder="Code"
                    />
                    <Input
                      type="number"
                      name="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      id="price"
                      placeholder="Price"
                    />
                    <Input
                      type="text"
                      name="size"
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                      id="size"
                      placeholder="Size"
                    />
                    <Input
                      type="number"
                      name="unistInStock"
                      value={unistInStock}
                      onChange={(e) => setUnistInStock(e.target.value)}
                      id="unistInStock"
                      placeholder="Unist"
                    />
                    <Input
                      type="text"
                      name="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      id="description"
                      placeholder="Description"
                    />
                    <select
                      value={catalogId}
                      onChange={(e) => setCatalogId(e.target.value)}
                    >
                      <option hidden>Catalog</option>
                      {dataCatalog?.map((item, index) => (
                        <option key={index} value={item?.catalogId}>
                          {item?.catalogName}
                        </option>
                      ))}
                    </select>

                    <select
                      value={categoryId}
                      onChange={(e) => setCategoryId(e.target.value)}
                    >
                      <option hidden>Category</option>
                      {filteredCategory?.map((item, index) => (
                        <option key={index} value={item?.categoryId}>
                          {item?.categoryName}
                        </option>
                      ))}
                    </select>
                    <select
                      value={subCategoryId}
                      onChange={(e) => setSubCategoryId(e.target.value)}
                    >
                      <option hidden>Sub Category</option>
                      {filteredSubCategory?.map((item, index) => (
                        <option key={index} value={item?.subCategoryId}>
                          {item?.subCategoryName}
                        </option>
                      ))}
                    </select>
                    <select
                      value={colorId}
                      onChange={(e) => setColorId(e.target.value)}
                    >
                      <option hidden>Color</option>
                      {colorData?.map((item, index) => (
                        <option key={index} value={item?.colorId}>
                          {item?.colorName}
                        </option>
                      ))}
                    </select>
                    <select
                      value={materialId}
                      onChange={(e) => setMaterialId(e.target.value)}
                    >
                      <option hidden>Material</option>
                      {materialData?.map((item, index) => (
                        <option key={index} value={item?.materialId}>
                          {item?.materialName}
                        </option>
                      ))}
                    </select>

                    <button className="btn-primary">Submit</button>
                  </form>
                </div>
              </div>
              <div className="upload-container">
                <label htmlFor="productImage" className="upload-label">
                  <BsUpload />
                  <Input
                    type="file"
                    name="productImage"
                    onChange={(e) => setImageProduct(e.target.files)}
                    id="productImage"
                  />
                </label>

                <select
                  value={productId}
                  onChange={(e) => setProductId(e.target.value)}
                >
                  {withoutImageProductData?.map((item, index) => (
                    <option key={index} value={item?.productId}>
                      {item?.productName}
                    </option>
                  ))}
                </select>

                <button
                  className="btn-primary"
                  onClick={(e) => productImageSubmit(e)}
                >
                  Product add
                </button>
              </div>
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
