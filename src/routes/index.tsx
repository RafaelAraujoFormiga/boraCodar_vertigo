import { Routes, Router, Route } from "react-router-dom"
import Login from "../pages/login"
import Register from "../pages/register"

const RouteApllication = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}

export default RouteApllication