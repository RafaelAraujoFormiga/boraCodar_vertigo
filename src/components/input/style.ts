import styled from "styled-components"

export const InputStyle = styled.div`
    &{
        height: 8.9rem;
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        position: relative;
    }
    input{
        width: 100%;
        max-width: 38.4rem;
        height: 5.3rem;
        padding: 1.6rem 1.2rem;
        color: var(--gray-700);
        border: 0.1rem solid var(--gray-200);
        border-radius: 0.4rem;
    }
    input:hover,
    input:focus{
        outline: 0.15rem solid var(--purple);    
    }
    label{
        display: flex;
        justify-content: space-between;
        color: var(--gray-900);
        font-weight: bold;
    }
    input,
    label,
    span{
        font-size: 1.4rem;
    }
`

export const Error = styled.span`
    &{
        position: absolute;
        bottom: -0.5rem;
        right: 0;
        color: var(--red);
    }
`

export const HideShow = styled.img`
    width: 2rem;
    height: 2rem;
    position: absolute;
    right: 2rem;
    bottom: 2.6rem;
    cursor: pointer;
`

export const Navigate = styled.span`
    font-weight: bold;
    font-size: 1.4rem;
    color: var(--purple);
    cursor: pointer;
`