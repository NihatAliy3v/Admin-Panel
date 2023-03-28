//Axios
import axios from "axios";
// Hooks
import { useEffect, useState } from "react";
// Components
import { SideBar } from "../components/Sidebar";
// Icons

import { HeadTitle } from "../components/HeadTitle";
import { Table } from "../components/Table";
import { Input } from "../components/Input";

const Material = () => {
  // Material
  const [materialName, setMaterialName] = useState("");
  const [materialData, setMaterialData] = useState([]);
  const [materialId, setMaterialId] = useState(0);
  useEffect(() => {
    getMaterials();
  }, []);
  const getMaterials = async () => {
    await axios
      .get("https://localhost:44317/api/Materials/getall")
      .then((res) => setMaterialData(res.data.data));
  };

  // add Material
  const materialSubmit = async (e) => {
    e.preventDefault();
    const body = {
      materialName,
    };
    await axios.post("https://localhost:44317/api/Materials/add", body);
    getMaterials();
    console.log(materialData);
  };
  // Delete Material
  const materialDelete = async (materialId) => {
    await axios
      .delete(`https://localhost:44317/api/Materials/delete/${materialId}`)
      .then((res) => setMaterialData(res.data.data));
    getMaterials();
    console.log(materialData);
  };

  return (
    <main className="material">
      <section className="wrapper">
        <SideBar />
        <div className="material-main">
          <HeadTitle pageName="Material" />

          <section className="main-wrapper">
            <div className="add-new">
              <div className="card">
                <h2 className="card-title">Add New Material</h2>
                <form className="form" onSubmit={(e) => materialSubmit(e)}>
                  <Input
                    type="text"
                    name="materialName"
                    value={materialName}
                    onChange={(e) => setMaterialName(e.target.value)}
                    id="materialName"
                    placeholder="Name"
                  />
                  <button className="btn-primary">Submit</button>
                </form>
              </div>
            </div>
            <Table
              data={materialData}
              handleDelete={materialDelete}
              material={true}
            />
          </section>
        </div>
      </section>
    </main>
  );
};

export default Material;
