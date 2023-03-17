import { useEffect, useState } from "react";
import { Input } from "../components/Input";
import { SideBar } from "../components/Sidebar";
import axios from "axios";
import { Link } from "react-router-dom";
import { VscChevronRight } from "react-icons/vsc";

const AddCatalog = () => {
  const [catalogName, setCatalogName] = useState("");
  const [dataCatalog, setDataCatalog] = useState([]);
  const [catalogId, setCatalogId] = useState(0);
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
          <div className="head-title">
            <h1 className="title">Catalog</h1>
            <div className="breadcrumb">
              <Link to="/" className="prevent-link">
                Home
              </Link>
              <VscChevronRight className="arright-icon" />
              <span className="lastest">Catalog</span>
            </div>
          </div>

          <div className="add-new-catalog">
            <div className="catalog-card">
              <h2 className="card-title">Add New Category</h2>
              <form className="form" onSubmit={(e) => catalogSubmit(e)}>
                <label htmlFor="catalogName">Name</label>
                <Input
                  type="text"
                  name="catalogName"
                  value={catalogName}
                  onChange={(e) => setCatalogName(e.target.value)}
                  id="catalogName"
                />
                <button className="catalog-add">Submit</button>
              </form>
            </div>
          </div>

          {dataCatalog?.map((item, index) => {
            return (
              <div key={index} className="map">
                <p>{item?.catalogName}</p>
                <button
                  className="btn"
                  onClick={() => catalogDelete(item?.catalogId)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default AddCatalog;
