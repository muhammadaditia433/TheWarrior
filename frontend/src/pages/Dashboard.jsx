import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserNavbar from "../components/UserNavbar";
import HeroDashboard from "../components/HeroDashboard";
import coffee from "../assets/icons/coffee.png";
import noncoffee from "../assets/icons/noncoffee.png";
import dessert from "../assets/icons/dessert.png";
import snack from "../assets/icons/snack.png";

function Dashboard() {
    const navigate = useNavigate();

    const coffeeSlides = [
        "/menu/americano.png",
        "/menu/espresso.png",
        "/menu/latte.png",
        "/menu/cappuccino.png"
    ];

    const nonCoffeeSlides = [
        "/menu/matcha.png",
        "/menu/chocolate.png",
        "/menu/vanilla.png"
    ];

    const dessertSlides = [
        "/menu/cheesecake.png",
        "/menu/brownies.png",
        "/menu/tiramisu.png"
    ];

    const snackSlides = [
        "/menu/croissant.png",
        "/menu/frenchfries.png",
        "/menu/chickenwings.png",
        "/menu/Toast.png"
    ];

    const [coffeeHover, setCoffeeHover] = useState(false);
    const [nonCoffeeHover, setNonCoffeeHover] = useState(false);
    const [dessertHover, setDessertHover] = useState(false);
    const [snackHover, setSnackHover] = useState(false);

    const [coffeeIndex, setCoffeeIndex] = useState(0);
    const [nonCoffeeIndex, setNonCoffeeIndex] = useState(0);
    const [dessertIndex, setDessertIndex] = useState(0);
    const [snackIndex, setSnackIndex] = useState(0);

    // Kumpulan Timer Otomatis Hover
    useEffect(() => {
        let interval;
        if (coffeeHover) {
            interval = setInterval(() => {
                setCoffeeIndex(prev => (prev + 1) % coffeeSlides.length);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [coffeeHover]);

    useEffect(() => {
        let interval;
        if (nonCoffeeHover) {
            interval = setInterval(() => {
                setNonCoffeeIndex(prev => (prev + 1) % nonCoffeeSlides.length);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [nonCoffeeHover]);

    useEffect(() => {
        let interval;
        if (dessertHover) {
            interval = setInterval(() => {
                setDessertIndex(prev => (prev + 1) % dessertSlides.length);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [dessertHover]);

    useEffect(() => {
        let interval;
        if (snackHover) {
            interval = setInterval(() => {
                setSnackIndex(prev => (prev + 1) % snackSlides.length);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [snackHover]);

    // Memecah String Classname Bootstrap agar tidak memicu error parser panjang di Vite
    const cardClass = "card h-100 border-0 p-4 bg-white text-center cursor-pointer shadow-sm d-flex flex-column align-items-center justify-content-center";
    const imgBoxClass = "d-flex align-items-center justify-content-center mb-3";
    const textClass = "fw-bold text-dark m-0 d-flex align-items-center gap-1";

    // Style Objek untuk manipulasi ukuran gambar dinamis
    const getImgStyle = (isHovered) => ({
        width: isHovered ? "120px" : "80px",
        height: isHovered ? "120px" : "80px",
        objectFit: "contain",
        transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
    });

    const cardStyle = {
        borderRadius: "24px",
        transition: "all 0.4s ease",
        minHeight: "220px"
    };

    return (
        <div className="bg-light min-vh-100" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <UserNavbar />
            <HeroDashboard />

            <section className="py-5" style={{ background: "#FFFBF2" }}>
                <div className="container py-4">

                    <div className="text-center mb-5">
                        <h5 className="fw-bold mb-1" style={{ color: "#DA9F5B", letterSpacing: "3px", fontSize: "13px" }}>
                            EXPLORE KATEGORI
                        </h5>
                        <h2 className="fw-extrabold text-dark fs-2">Pilih Menu Favoritmu</h2>
                        <div className="mx-auto my-2" style={{ width: "40px", height: "3px", background: "#DA9F5B", borderRadius: "10px" }}></div>
                    </div>

                    <div className="row g-4 justify-content-center">
                        
                        {/* Kategori 1: Coffee */}
                        <div className="col-xl-3 col-md-6 col-sm-6">
                            <div 
                                className={cardClass}
                                style={cardStyle}
                                onClick={() => navigate("/menu")}
                                onMouseEnter={() => setCoffeeHover(true)}
                                onMouseLeave={() => { setCoffeeHover(false); setCoffeeIndex(0); }}
                            >
                                <div className={imgBoxClass} style={{ height: "130px", width: "100%" }}>
                                    <img
                                        src={coffeeHover ? coffeeSlides[coffeeIndex] : coffee}
                                        alt="Coffee"
                                        style={getImgStyle(coffeeHover)}
                                    />
                                </div>
                                <h5 className={textClass}>
                                    Coffee {coffeeHover && <span className="text-muted fs-6">↗</span>}
                                </h5>
                            </div>
                        </div>

                        {/* Kategori 2: Non Coffee */}
                        <div className="col-xl-3 col-md-6 col-sm-6">
                            <div 
                                className={cardClass}
                                style={cardStyle}
                                onClick={() => navigate("/menu")}
                                onMouseEnter={() => setNonCoffeeHover(true)}
                                onMouseLeave={() => { setNonCoffeeHover(false); setNonCoffeeIndex(0); }}
                            >
                                <div className={imgBoxClass} style={{ height: "130px", width: "100%" }}>
                                    <img
                                        src={nonCoffeeHover ? nonCoffeeSlides[nonCoffeeIndex] : noncoffee}
                                        alt="Non Coffee"
                                        style={getImgStyle(nonCoffeeHover)}
                                    />
                                </div>
                                <h5 className={textClass}>
                                    Non Coffee {nonCoffeeHover && <span className="text-muted fs-6">↗</span>}
                                </h5>
                            </div>
                        </div>

                        {/* Kategori 3: Dessert */}
                        <div className="col-xl-3 col-md-6 col-sm-6">
                            <div 
                                className={cardClass}
                                style={cardStyle}
                                onClick={() => navigate("/menu")}
                                onMouseEnter={() => setDessertHover(true)}
                                maponMouseLeave={() => { setDessertHover(false); setDessertIndex(0); }}
                            >
                                <div className={imgBoxClass} style={{ height: "130px", width: "100%" }}>
                                    <img
                                        src={dessertHover ? dessertSlides[dessertIndex] : dessert}
                                        alt="Dessert"
                                        style={getImgStyle(dessertHover)}
                                    />
                                </div>
                                <h5 className={textClass}>
                                    Dessert {dessertHover && <span className="text-muted fs-6">↗</span>}
                                </h5>
                            </div>
                        </div>

                        {/* Kategori 4: Snack */}
                        <div className="col-xl-3 col-md-6 col-sm-6">
                            <div 
                                className={cardClass}
                                style={cardStyle}
                                onClick={() => navigate("/menu")}
                                onMouseEnter={() => setSnackHover(true)}
                                onMouseLeave={() => { setSnackHover(false); setSnackIndex(0); }}
                            >
                                <div className={imgBoxClass} style={{ height: "130px", width: "100%" }}>
                                    <img
                                        src={snackHover ? snackSlides[snackIndex] : snack}
                                        alt="Snack"
                                        style={getImgStyle(snackHover)}
                                    />
                                </div>
                                <h5 className={textClass}>
                                    Snack {snackHover && <span className="text-muted fs-6">↗</span>}
                                </h5>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Dashboard;
