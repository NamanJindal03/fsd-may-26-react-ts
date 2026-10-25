import { Outlet, Navigate } from "react-router-dom"

//Authcontext -> logged in ya logged out -> mock ->

export default function LoginCheck() {
    const isLoggedIn = false //currently mocked but eventually will come from context

    return isLoggedIn ? <Outlet /> : <Navigate to="login"/>
}
