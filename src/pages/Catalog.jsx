//Axios
import axios from "axios";
// Hooks
import { useEffect, useState } from "react";
// Components
import { SideBar } from "../components/Sidebar";
import { AddNewForm } from "../components/AddNewForm";
// Icons

import { HeadTitle } from "../components/HeadTitle";
import { Table } from "../components/Table";

const AddCatalog = () => {
  const [catalogName, setCatalogName] = useState("");
  const [dataCatalog, setDataCatalog] = useState([]);
  useEffect(() => {
    getCatalogs();
  }, []);
  const getCatalogs = async () => {
    axios
      .get("https://localhost:44317/api/Catalogs/getall")
      .then((res) => setDataCatalog(res.data.data));
  };
  // add Catalog
  const catalogSubmit = async (e) => {
    e.preventDefault();
    const body = {
      catalogName,
    };
    await axios.post("https://localhost:44317/api/Catalogs/add", body);
    getCatalogs();
  };

  // Delete Catalog
  const catalogDelete = async (catalogId) => {
    await axios
      .delete(`https://localhost:44317/api/Catalogs/delete/${catalogId}`)
      .then((res) => setDataCatalog(res.data.data));
    getCatalogs();
    console.log(dataCatalog);
  };
  return (
    <main className="catalog">
      <section className="wrapper">
        <SideBar />
        <div className="catalog-main">
          <HeadTitle pageName="Catalog" />

          <section className="main-wrapper">
            <AddNewForm
              onSubmit={(e) => catalogSubmit(e)}
              onChange={(e) => setCatalogName(e.target.value)}
              inputValue={catalogName}
              inputName="catalogName"
              inputId="catalogName"
              inputType="text"
              cardTitle="Add New Catalog"
            />
            <Table
              data={dataCatalog}
              handleDelete={catalogDelete}
              catalog={true}
            />
          </section>
        </div>
      </section>
    </main>
  );
};

export default AddCatalog;
