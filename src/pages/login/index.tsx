import FormLogin from "../../components/formLogin"
import { MainStyle } from "./style"
import Logo from "../../assets/logo.svg"

const Login = () => {
    return (
        <MainStyle>
            <div className="Container">
                <header className="HeaderWrapper">
                    <img className="Logo" src={Logo} alt="logo" />
                </header>
                <FormLogin />
            </div>
            <div className="ContainerImg"></div>
        </MainStyle>
    )
}

export default Login