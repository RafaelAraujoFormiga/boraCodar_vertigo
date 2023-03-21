import { RegisterContainer } from "./style"
import { useNavigate } from "react-router-dom"

const Register = () => {
    const navigate = useNavigate()

    return (
        <RegisterContainer >
            <p>
                Opa! Ainda estamos trabalhando aqui!
                <span onClick={() => navigate("/", { replace: true })}>
                    Voltar
                </span>
            </p>
        </RegisterContainer >
    )
}

export default Register