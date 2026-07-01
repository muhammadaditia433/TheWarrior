import { useEffect, useState } from "react";
import axios from "axios";
import AdminNavbar from "../components/AdminNavbar";

function ManageOrders() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        fetchOrders();

    }, []);

    const fetchOrders = async () => {

        try {

            const res = await axios.get(
                "http://localhost:5000/api/orders"
            );

            setOrders(res.data);

        }

        catch (err) {

            console.log(err);

        }

    };

    const handleUpdate = async (

        id,
        currentStatus

    ) => {

        let newStatus = "";

        if (

            currentStatus === "Menunggu" ||
            currentStatus === "Menunggu Pembayaran"

        ) {

            newStatus = "Diproses";

        }

        else if (

            currentStatus === "Diproses"

        ) {

            newStatus = "Selesai";

        }

        else {

            return;

        }

        try {

            await axios.put(

                `http://localhost:5000/api/orders/status/${id}`,

                {
                    status: newStatus
                }

            );

            fetchOrders();

        }

        catch (err) {

            console.log(err);

        }

    };

    return (

        <>

            <AdminNavbar />

            <div className="container py-5">

                <h2 className="mb-4">

                    Kelola Pesanan

                </h2>

                <table className="table table-bordered table-hover">

                    <thead className="table-dark">

                        <tr>

                            <th>No</th>
                            <th>Nama</th>
                            <th>Metode</th>
                            <th>Status</th>
                            <th>Tanggal</th>
                            <th>Aksi</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            orders.map((item, index) => (

                                <tr key={item.id}>

                                    <td>{index + 1}</td>

                                    <td>{item.nama}</td>

                                    <td>{item.metode}</td>

                                    <td>

                                        <span
                                            className={
                                                item.status === "Selesai"
                                                    ? "badge bg-success"
                                                    : item.status === "Diproses"
                                                        ? "badge bg-primary"
                                                        : "badge bg-warning text-dark"
                                            }
                                        >

                                            {item.status}

                                        </span>

                                    </td>

                                    <td>

                                        {new Date(
                                            item.tanggal
                                        ).toLocaleString("id-ID")}

                                    </td>

                                    <td>

                                        {

                                            item.status !== "Selesai" && (

                                                <button

                                                    className="btn btn-primary btn-sm"

                                                    onClick={() =>
                                                        handleUpdate(
                                                            item.id,
                                                            item.status
                                                        )
                                                    }

                                                >

                                                    Update Status

                                                </button>

                                            )

                                        }

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

        </>

    );

}

export default ManageOrders;