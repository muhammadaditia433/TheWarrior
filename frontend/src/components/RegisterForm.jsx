import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "../services/authService";

function RegisterForm() {

    const navigate = useNavigate();

    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = async () => {

        if (password !== confirmPassword) {

            alert("Konfirmasi password tidak sama");

            return;

        }

        const result = await register({

            nama,

            email,

            password

        });

        alert(result.message);

        if (result.success) {

            navigate("/login");

        }

    };

    return (

        <div
            className="card shadow-lg border-0 p-5"
            style={{
                width: "430px",
                borderRadius: "20px"
            }}
        >

            <h2 className="fw-bold text-center">

                Register

            </h2>

            <p className="text-center text-secondary mb-4">

                Buat akun KOPIJAK

            </p>

            <div className="mb-3">

                <label>Nama Lengkap</label>

                <input

                    type="text"

                    className="form-control"

                    placeholder="Masukkan nama"

                    value={nama}

                    onChange={(e)=>setNama(e.target.value)}

                />

            </div>

            <div className="mb-3">

                <label>Email</label>

                <input

                    type="email"

                    className="form-control"

                    placeholder="Masukkan email"

                    value={email}

                    onChange={(e)=>setEmail(e.target.value)}

                />

            </div>

            <div className="mb-3">

                <label>Password</label>

                <input

                    type="password"

                    className="form-control"

                    placeholder="Masukkan password"

                    value={password}

                    onChange={(e)=>setPassword(e.target.value)}

                />

            </div>

            <div className="mb-4">

                <label>Konfirmasi Password</label>

                <input

                    type="password"

                    className="form-control"

                    placeholder="Konfirmasi password"

                    value={confirmPassword}

                    onChange={(e)=>setConfirmPassword(e.target.value)}

                />

            </div>

            <button

                className="btn btn-warning w-100"

                onClick={handleRegister}

            >

                Daftar

            </button>

            <p className="text-center mt-3">

                Sudah punya akun?

                <Link

                    to="/login"

                    className="ms-2"

                >

                    Login

                </Link>

            </p>

        </div>

    );

}

export default RegisterForm;