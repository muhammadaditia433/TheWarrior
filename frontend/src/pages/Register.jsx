import RegisterForm from "../components/RegisterForm";
import bg from "../assets/bg.jpg";

function Register() {
    return (
        <div
            style={{
                minHeight: "100vh",
                background: `linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.65)), url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="d-flex align-items-center"
        >
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-6 text-white">

                        <h5 style={{ color: "#DA9F5B" }}>
                            BERGABUNG BERSAMA
                        </h5>

                        <h1
                            className="fw-bold"
                            style={{
                                fontSize: "70px",
                                color: "#ffffff",
                                textShadow: "0 5px 15px rgba(0,0,0,.6)",
                                letterSpacing: "2px",
                            }}
                        >
                            KOPIJAK
                        </h1>

                        <p className="mt-4">
                            Buat akun untuk melakukan pemesanan,
                            checkout, dan reservasi secara online.
                        </p>

                    </div>

                    <div className="col-lg-6 d-flex justify-content-center">

                        <RegisterForm />

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Register;