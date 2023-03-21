import { ButtonStyle } from "./style"

interface IProps {
    text?: string;
}

const Button = ({ text }: IProps) => {
    return (
        <ButtonStyle>
            {text}
        </ButtonStyle>
    )
}

export default Button