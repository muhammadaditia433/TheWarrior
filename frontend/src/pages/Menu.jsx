import { useState, useEffect } from "react";
import axios from "axios";

import UserNavbar from "../components/UserNavbar";
import MenuCard from "../components/MenuCard";
import FloatingCart from "../components/FloatingCart";

function Menu() {
  const [menuData, setMenuData] = useState([]);
  const [search, setSearch] = useState("");
  const [kategori, setKategori] = useState("Semua");

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/menu");

      console.log("DATA API:", res.data);

      setMenuData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log("menuData =", menuData);

  const filteredMenu = menuData.filter((item) => {
    const cocokKategori =
      kategori === "Semua" || item.kategori === kategori;

    const cocokSearch = item.nama
      .toLowerCase()
      .includes(search.toLowerCase());

    return cocokKategori && cocokSearch;
  });

  const categories = [
    "Semua",
    "Coffee",
    "Non Coffee",
    "Dessert",
    "Snack",
  ];

  return (
    <>
      <UserNavbar />

      <div
        className="container-fluid px-lg-5 py-5"
        style={{
          backgroundColor: "#fbf8f5",
          minHeight: "100vh",
          paddingTop: "110px",
        }}
      >
        <div className="text-center mb-5">
          <h1 className="fw-bold">Katalog Menu KOPIJAK</h1>

          <p className="text-muted">
            Pilih menu favoritmu.
          </p>
        </div>

        {/* Search */}
        <div className="row justify-content-center mb-4">
          <div className="col-lg-5">
            <input
              className="form-control"
              placeholder="Cari menu..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Filter */}
        <div className="d-flex justify-content-center gap-2 mb-5 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn ${
                kategori === cat
                  ? "btn-warning text-white"
                  : "btn-outline-secondary"
              }`}
              onClick={() => setKategori(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu */}
        <div className="row g-4">
          {filteredMenu.map((item) => (
            <div
              key={item.id}
              className="col-xl-3 col-lg-4 col-md-6"
            >
              <MenuCard menu={item} />
            </div>
          ))}
        </div>
      </div>

      <FloatingCart />
    </>
  );
}

export default Menu;