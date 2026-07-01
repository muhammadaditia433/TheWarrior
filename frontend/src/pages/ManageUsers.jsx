import AdminNavbar from "../components/AdminNavbar";
import axios from "axios";
import { useEffect, useState } from "react";

function ManageUsers() {

    const [users, setUsers] = useState([]);
    const [nama, setNama] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [role, setRole] = useState("user");

    useEffect(() => {

        fetchUsers();

    }, []);

    const fetchUsers = async () => {

        const res = await axios.get(

            "http://localhost:5000/api/auth/users"

        );

        setUsers(res.data);

    };

    const handleDelete = async (id) => {

        if (

            !window.confirm(

                "Hapus user ini?"

            )

        ) return;

        await axios.delete(

            `http://localhost:5000/api/auth/users/${id}`

        );

        fetchUsers();

    };

    const handleTambahUser = async () => {

        try {

            await axios.post(

                "http://localhost:5000/api/auth/create-user",

                {

                    nama,
                    email,
                    password,
                    role

                }

            );

            alert("User berhasil ditambahkan");

            setNama("");
            setEmail("");
            setPassword("");
            setRole("user");

            fetchUsers();

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

                    Kelola User

                </h2>

                <div className="card p-4 shadow mb-4">

                    <h5 className="mb-3">

                        Tambah User

                    </h5>

                    <input
                        className="form-control mb-2"
                        placeholder="Nama"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                    />

                    <input
                        className="form-control mb-2"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        className="form-control mb-2"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <select
                        className="form-select mb-3"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >

                        <option value="user">

                            User

                        </option>

                        <option value="admin">

                            Admin

                        </option>

                    </select>

                    <button
                        className="btn btn-warning"
                        onClick={handleTambahUser}
                    >

                        Tambah User

                    </button>

                </div>

                <table className="table table-bordered">

                    <thead className="table-dark">

                        <tr>

                            <th>No</th>
                            <th>Nama</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Aksi</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            users.map((user, index) => (

                                <tr key={user.id}>

                                    <td>
                                        {index + 1}
                                    </td>

                                    <td>
                                        {user.nama}
                                    </td>

                                    <td>
                                        {user.email}
                                    </td>

                                    <td>

                                        <span
                                            className={
                                                user.role === "admin"
                                                    ?
                                                    "badge bg-danger"
                                                    :
                                                    "badge bg-warning text-dark"
                                            }
                                        >

                                            {user.role}

                                        </span>

                                    </td>

                                    <td>

                                        {

                                            user.role !== "admin" && (

                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() =>
                                                        handleDelete(user.id)
                                                    }
                                                >

                                                    Hapus

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

export default ManageUsers;