import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function MenuCard({ menu }) {
  console.log("MENU =", menu);
  const { addToCart } = useContext(CartContext);

  const [size, setSize] = useState("Regular");
  const [sugar, setSugar] = useState("Normal");
  const [ice, setIce] = useState("Normal Ice");

  const [showModal, setShowModal] = useState(false);

  const handleAddToCartWithVarian = () => {
    const itemKustom = {
      ...menu,
      id: menu.id,
      nama: `${menu.nama} (${size} / ${sugar} / ${ice})`,
    };

    addToCart(itemKustom);
    alert(`✅ ${menu.nama} berhasil ditambahkan ke keranjang!`);
    setShowModal(false);
  };

  return (
    <>
      {/* CARD MENU */}
      <div
        className="card h-100 border-0 shadow-sm"
        style={{
          borderRadius: "24px",
          overflow: "hidden",
        }}
      >
        {/* Gambar */}
        <div
          className="position-relative"
          style={{ height: "200px", overflow: "hidden" }}
        >
          {menu.gambar ? (
            <img
              src={menu.gambar}
              alt={menu.nama}
              className="w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div className="d-flex justify-content-center align-items-center h-100">
              ☕
            </div>
          )}

          <span
            className="badge bg-dark position-absolute top-0 start-0 m-3"
            style={{ borderRadius: "20px" }}
          >
            {menu.kategori}
          </span>
        </div>

        {/* Isi Card */}
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="fw-bold">{menu.nama}</h5>

         <p
  className="text-muted"
  style={{
    fontSize: "13px",
    minHeight: "42px",
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  }}
>
  {String(menu.deskripsi)}
</p>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <div>
              <small className="text-muted">HARGA</small>
              <h5 className="fw-bold mb-0" style={{ color: "#DA9F5B" }}>
                Rp {Number(menu.harga).toLocaleString("id-ID")}
              </h5>
            </div>

            <button
              className="btn btn-warning text-white"
              style={{
                backgroundColor: "#DA9F5B",
                border: "none",
                borderRadius: "20px",
              }}
              onClick={() => setShowModal(true)}
            >
              + Tambah
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            background: "rgba(0,0,0,0.4)",
            zIndex: 2000,
          }}
        >
          <div
            className="card p-4"
            style={{
              width: "400px",
              borderRadius: "20px",
            }}
          >
            <div className="d-flex justify-content-between mb-3">
              <h5>Racik Minuman Anda</h5>

              <button
                className="btn-close"
                onClick={() => setShowModal(false)}
              ></button>
            </div>

            {/* Ukuran */}
            <div className="mb-3">
              <label className="fw-bold mb-2">Ukuran</label>

              <div className="d-flex gap-2">
                {["Regular", "Large"].map((v) => (
                  <button
                    key={v}
                    className={`btn flex-fill ${
                      size === v ? "btn-dark" : "btn-outline-secondary"
                    }`}
                    onClick={() => setSize(v)}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Sugar */}
            <div className="mb-3">
              <label className="fw-bold mb-2">Sugar</label>

              <div className="d-flex gap-2">
                {["Less Sugar", "Normal", "Extra Sugar"].map((v) => (
                  <button
                    key={v}
                    className={`btn flex-fill ${
                      sugar === v ? "btn-dark" : "btn-outline-secondary"
                    }`}
                    onClick={() => setSugar(v)}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Ice */}
            <div className="mb-4">
              <label className="fw-bold mb-2">Ice</label>

              <div className="d-flex gap-2">
                {["No Ice", "Normal Ice", "Extra Ice"].map((v) => (
                  <button
                    key={v}
                    className={`btn flex-fill ${
                      ice === v ? "btn-dark" : "btn-outline-secondary"
                    }`}
                    onClick={() => setIce(v)}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="d-flex gap-2">
              <button
                className="btn btn-secondary flex-fill"
                onClick={() => setShowModal(false)}
              >
                Batal
              </button>

              <button
                className="btn btn-warning text-white flex-fill"
                style={{
                  backgroundColor: "#DA9F5B",
                  border: "none",
                }}
                onClick={handleAddToCartWithVarian}
              >
                Masukkan
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MenuCard;
