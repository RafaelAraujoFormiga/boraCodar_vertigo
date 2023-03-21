import { Form, InputWrapper, HeaderWrapper, FormWrapper, Navigate } from "./style"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import Input from "../input"
import Button from "../button"
import { useNavigate } from "react-router-dom"

const FormLogin = () => {

    interface IUser {
        email: string;
        password: string;
    }

    const formLogin = yup.object().shape(
        {
            email: yup.string().
                email("Digite um email válido").
                required("Email obrigatório"),
            password: yup.string().required("Senha obrigatória")
        }
    )
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IUser>({ resolver: yupResolver(formLogin) })

    const navigate = useNavigate()

    return (
        <Form onSubmit={handleSubmit(e => console.log(e))}>
            <HeaderWrapper>
                <h2>Acesse a plataforma</h2>
                <p>
                    Faça login ou registre-se para começar a construir seus
                    projetos ainda hoje.
                </p>
            </HeaderWrapper>
            <FormWrapper>
                <InputWrapper>
                    <Input
                        label="E-mail"
                        type="email"
                        placeHolder="Digite seu email"
                        id="email"
                        register={register}
                        error={errors?.email}
                    />
                    <Input
                        label="Senha"
                        type="password"
                        placeHolder="Digite sua senha"
                        id="password"
                        register={register}
                        error={errors?.password}
                    />
                </InputWrapper>
                <Button text="Entrar" />
                <p>
                    Ainda não tem uma conta?
                    <Navigate onClick={() => navigate("/register", { replace: true })}>
                        Inscreva-se
                    </Navigate>
                </p>
            </FormWrapper>
        </Form >
    )
}

export default FormLogin