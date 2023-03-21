import styled from "styled-components"

export const Form = styled.form`
    &{
        display: flex;
        flex-direction: column;
        gap: 32px;
        width: 384px;
        min-height: 483px;
        gap: 40px;
    }
    h2{
        font-size: 36px;
        color: var(--gray-900);
    }
    p{
        font-size: 16px;
        color: var(--gray-600);
    }
`
export const HeaderWrapper = styled.header`
    &{
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
`

export const FormWrapper = styled.div`
    &{
        display: flex;
        flex-direction: column;
        gap: 3.2rem;
    }
`

export const InputWrapper = styled.div`
    &{
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
    }
`

export const Navigate = styled.span`
    font-weight: bold;
    font-size: 1.6rem;
    color: var(--purple);
    cursor: pointer;
`