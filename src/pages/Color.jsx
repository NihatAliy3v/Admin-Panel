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

const Color = () => {
  // Color
  const [colorName, setColorName] = useState("");
  const [colorHexCode, setColorHexCode] = useState("");
  const [colorData, setColorData] = useState([]);
  const [colorId, setColorId] = useState(0);
  useEffect(() => {
    getColors();
  }, []);
  const getColors = async () => {
    await axios
      .get("https://localhost:44317/api/Colors/getall")
      .then((res) => setColorData(res.data.data));
  };

  const colorSubmit = async (e) => {
    e.preventDefault();
    const body = {
      colorName,
      colorHexCode,
    };
    await axios.post("https://localhost:44317/api/Colors/add", body);
    getColors();
    console.log(colorData);
  };
  // Delete Color
  const colorDelete = async (colorId) => {
    await axios
      .delete(`https://localhost:44317/api/Colors/delete/${colorId}`)
      .then((res) => setColorData(res.data.data));
    getColors();
    console.log(colorData);
  };

  return (
    <main className="color">
      <section className="wrapper">
        <SideBar />
        <div className="color-main">
          <HeadTitle pageName="Color" />

          <section className="main-wrapper">
            <div className="add-new">
              <div className="card">
                <h2 className="card-title">Add New Color</h2>
                <form className="form" onSubmit={(e) => colorSubmit(e)}>
                  <Input
                    type="text"
                    name="colorName"
                    value={colorName}
                    onChange={(e) => setColorName(e.target.value)}
                    id="colorName"
                    placeholder="Name"
                  />
                  <Input
                    type="text"
                    name="colorHexCode"
                    value={colorHexCode}
                    onChange={(e) => setColorHexCode(e.target.value)}
                    id="colorHexCode"
                    placeholder="Hex Code"
                  />
                  <button className="btn-primary">Submit</button>
                </form>
              </div>
            </div>
            <Table data={colorData} handleDelete={colorDelete} color={true} />
          </section>
        </div>
      </section>
    </main>
  );
};

export default Color;
