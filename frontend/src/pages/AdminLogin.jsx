import { Link, useNavigate } from "react-router-dom";
import bg from "../assets/bg.jpg";

function AdminLogin() {

    const navigate = useNavigate();

    return (

        <div
            style={{
                minHeight: "100vh",
                background: `linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(${bg})`,
                backgroundSize: "cover",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >

            <div
                className="card shadow p-5"
                style={{
                    width: "430px",
                    borderRadius: "20px"
                }}
            >

                <h2 className="text-center fw-bold mb-2">

                    Admin Login

                </h2>

                <p className="text-center text-secondary mb-4">

                    KOPIJAK Management

                </p>

                <div className="mb-3">

                    <label>Email</label>

                    <input
                        type="email"
                        className="form-control"
                        placeholder="admin@kopijak.com"
                    />

                </div>

                <div className="mb-4">

                    <label>Password</label>

                    <input
                        type="password"
                        className="form-control"
                        placeholder="********"
                    />

                </div>

                <button
                    className="btn btn-dark w-100"
                    onClick={() => navigate("/admin/dashboard")}
                >

                    Login Admin

                </button>

                <div className="text-center mt-3">

                    <Link to="/">

                        ← Kembali ke Website

                    </Link>

                </div>

            </div>

        </div>

    );

}

export default AdminLogin;