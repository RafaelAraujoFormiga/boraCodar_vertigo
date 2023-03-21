import styled from "styled-components"

export const ButtonStyle = styled.button`
    &{
        width: 38.4rem;
        height: 5.8rem; 
        background: var(--purple);
        border: none;
        color: #FFFFFF;
        font-weight: bold;
        cursor: pointer;
        font-size: 1.6rem;
        border-radius: 0.4rem;
    }
    &:hover{
        background: var(--purple-100);
    }
`