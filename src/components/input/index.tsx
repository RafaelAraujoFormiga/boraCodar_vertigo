import { InputStyle, Error, HideShow, Navigate } from "./style"
import { UseFormRegister, FieldError } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Show from "../../assets/show.svg"
import Hide from "../../assets/hide.svg"

interface IProps {
    id?: string;
    placeHolder?: string;
    error?: FieldError;
    type?: string;
    label?: string;
    register: any;
}

const Input = ({
    placeHolder,
    error,
    type,
    label,
    id,
    register
}: IProps) => {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    return (
        <InputStyle>
            <label>
                {label}
                {id === "password" ?
                    <Navigate onClick={() => navigate("")}>
                        Esqueceu a senha?
                    </Navigate> :
                    null
                }
            </label>
            <input
                type={show ? "text" : type}
                placeholder={placeHolder}
                id={id}
                {...register(id)}
            />
            {id === "password" ?
                <HideShow
                    src={show ? Show : Hide}
                    alt=""
                    onClick={() => setShow(!show)}
                /> : null
            }
            <Error>{error?.message}</Error>
        </InputStyle>
    )
}

export default Input