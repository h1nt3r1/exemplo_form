import { useEffect, useState } from "react"

type tUser = {
    id: number,
    name: string,
    login: string,
    password: string
}

export function UserList() {

    const [data, setData] = useState<tUser[]>()
    const [newName, setNewName] = useState<string>()
    const [newLogin, setNewLogin] = useState<string>()
    const [newPassword, setNewPassword] = useState<string>()

    useEffect(() => {

        async function fetchUsers() {
            const response = await fetch(`http://localhost:3000/user`);
            const newData = await response.json();
            setData(newData)
        }

        fetchUsers()
    }, [handleSubmit])

    async function handleSubmit() {
        const response = await fetch(`http://localhost:3000/user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: newName,
                login: newLogin,
                password: newPassword
            }),
        });
    }

    return (
        <>
            <div className="flex flex-col w-screen h-screen">
                <div className="flex bg-slate-200 h-12 justify-between items-center p-2">
                    <div className="">
                        USER LIST
                    </div>
                    <div>
                        Login
                    </div>
                </div>
                <div className="flex flex-col h-48 w-56 my-12 gap-4">
                    <div className="flex flex-col">
                        <label>Name</label>
                        <input
                            name='name'
                            type="text"
                            className="bg-slate-200"
                            onChange={(event) => setNewName(event.currentTarget.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label>Login</label>
                        <input
                            name='login'
                            type="text"
                            className="bg-slate-200"
                            onChange={(event) => setNewLogin(event.currentTarget.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label>Password</label>
                        <input
                            name='password'
                            type="password"
                            className="bg-slate-200"
                            onChange={(event) => setNewPassword(event.currentTarget.value)}
                        />
                    </div>
                    <button onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
                <div className="h-full">
                    <table className="w-full">
                        <thead>
                            <tr className="font-bold">
                                <th>
                                    #
                                </th>
                                <th>
                                    Name
                                </th>
                                <th>
                                    Login
                                </th>
                                <th>
                                    Password
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((user) =>
                                    <tr key={user.id} className="font-thin">
                                        <th>
                                            {user.id}
                                        </th>
                                        <th>
                                            {user.name}
                                        </th>
                                        <th>
                                            {user.login}
                                        </th>
                                        <th>
                                            {user.password}
                                        </th>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}