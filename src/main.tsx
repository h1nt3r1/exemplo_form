import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes.tsx'
import { create } from 'zustand'

type tAuth = {
  logado: boolean
  setLogado: (estado:boolean) => void
}

export const useAuth = create<tAuth>()((set) => ({
  logado: false,
  setLogado: (valor:boolean) => set(() => ({ logado: valor })),
}))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
