import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../services/authService";

function LoginForm() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleLogin = async () => {

        const result = await login({

            email,

            password

        });

        if (!result.success) {

            alert(result.message);

            return;

        }

        localStorage.setItem(

            "token",

            result.token

        );

        localStorage.setItem(

            "user",

            JSON.stringify(result.user)

        );

        if (result.user.role === "admin") {

            navigate("/admin/dashboard");

        }

        else {

            navigate("/dashboard");

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

            <h2 className="fw-bold text-center mb-2">

                Login

            </h2>

            <p className="text-center text-secondary mb-4">

                Selamat datang kembali

            </p>

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

            <div className="mb-4">

                <label>Password</label>

                <input

                    type="password"

                    className="form-control"

                    placeholder="Masukkan password"

                    value={password}

                    onChange={(e)=>setPassword(e.target.value)}

                />

            </div>

            <button

                className="btn btn-warning w-100"

                onClick={handleLogin}

            >

                Login

            </button>

            <p className="text-center mt-3">

                Belum punya akun?

                <Link

                    to="/register"

                    className="ms-2"

                >

                    Daftar

                </Link>

            </p>

        </div>

    );

}

export default LoginForm;