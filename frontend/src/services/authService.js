const API = "http://localhost:5000/api/auth";

export async function login(data) {

    const res = await fetch(

        `${API}/login`,

        {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(data)

        }

    );

    return await res.json();

}

export async function register(data) {

    const res = await fetch(

        `${API}/register`,

        {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(data)

        }

    );

    return await res.json();

}