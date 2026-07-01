import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function FloatingCart() {

  const navigate = useNavigate();

  const { cart } = useContext(CartContext);

  const totalItem = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  const totalHarga = cart.reduce(
    (sum, item) => sum + item.qty * item.harga,
    0
  );

  if (cart.length === 0) return null;

  return (

    <div
      onClick={() => navigate("/cart")}
      style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "#2d1b12",
        color: "white",
        width: "90%",
        maxWidth: "700px",
        borderRadius: "15px",
        padding: "15px 25px",
        cursor: "pointer",
        zIndex: 9999,
        boxShadow: "0 5px 15px rgba(0,0,0,.3)",
      }}
    >

      <div className="d-flex justify-content-between align-items-center">

        <div>

          <h5 className="mb-0">
            🛒 {totalItem} Item
          </h5>

          <small>

            Rp {totalHarga.toLocaleString("id-ID")}

          </small>

        </div>

        <button
          className="btn btn-warning fw-bold"
        >
          Lihat Keranjang →
        </button>

      </div>

    </div>

  );

}

export default FloatingCart;