import FormLogin from "../../components/formLogin"
import { MainStyle } from "./style"

const Login = () => {
    return (
        <MainStyle>
            <div className="Container">
                <header className="HeaderWrapper">
                    <img className="Logo" src="../../assets/logo.svg" alt="logo" />
                </header>
                <FormLogin />
            </div>
            <div className="ContainerImg"></div>
        </MainStyle>
    )
}

export default Login