import { ReactElement, useState } from "react"
import { useAuth } from "./main"

export function RequireAuth({ children }: { children: ReactElement }) {

    const {logado, setLogado} = useAuth()

    return (
        <>
            {logado ? children : 'Não logado'}
        </>
    )
}