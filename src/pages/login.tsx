import { useEffect, useState } from "react"
import { useAuth } from "../main"

type tUser = {
    id: number,
    name: string,
    login: string,
    password: string
}

export default function Login() {

    const {logado, setLogado} = useAuth()
    
    useEffect(() => {
        if (logado) {
          //cookie
        }
      }, [logado]); 

    const [data, setData] = useState<tUser[]>()
    const [Name, setNewName] = useState<string>()
    const [Login, setNewLogin] = useState<string>()
    const [Password, setNewPassword] = useState<string>()

    const [ULogin, setULogin] = useState<string>()
    const [UPassword, setUPassword] = useState<string>()

    useEffect(() => {

        async function fetchUsers() {
            const response = await fetch(`http://localhost:3000/user`);
            const newData = await response.json();
            setData(newData)
        }

        fetchUsers()
    }, [handleSubmit])

    async function handleSubmit() {
        const response = await fetch(`http://localhost:3000/user`);
        const newData = await response.json();
        setData(newData)

        
        if (data != null){
            for (let x = 0; x <= data.length; x++) {
                if ((data[x].login == ULogin) && (data[x].password == UPassword)) {
                    console.log("Login sucedido!");

                    console.log("newData login: " + data[x].login + " | data login: " + ULogin);
                    console.log("newData password: " + data[x].password + " | data password: " + UPassword);
                    
                    setLogado(true);
                    return;
                }
            }
        }

    }

    return (
        <>
            <div>
                <h2>Login</h2>
                    <label id="username">Usuário:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        onChange={(event) => setULogin(event.currentTarget.value)}
                    />
                    <label id="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={(event) => setUPassword(event.currentTarget.value)}
                    />
                    <button onClick={handleSubmit}>
                        Submit
                    </button>
                
                    <div className="h-full">
                    <table className="w-full">
                        <thead>
                            <tr className="font-bold">
                                <th>
                                    #
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