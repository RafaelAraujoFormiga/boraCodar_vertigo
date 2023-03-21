import styled from "styled-components"


export const MainStyle = styled.main`
    &{
        display: flex;
        justify-content: center;
        background: var(--gray-50);
    }
    .HeaderWrapper{
        width: 100%;
        height: 7rem;
    }
    .Logo{
        width: 15.95rem;
        height: 5.4rem;
        background: var(--gray-50);
        border-radius: 0.4rem;
    }
    .Container{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5rem;
        width: 50%;
        min-height: 100vh;
        padding: 0.5rem 2rem;
    }
    .ContainerImg{
        background: url("src/assets/rectangle.svg") no-repeat center/cover;
        width: 50%;
        min-height: 100vh;
        z-index: 0;
    }
    @media(max-width: 900px){
       .Container{
            z-index: 999;
            width: 100%;
            background-image: linear-gradient(180deg,rgba(0,0,0,0.29) 0%, #000000 100%),
            url("src/assets/rectangle.svg");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
       }
       .ContainerImg{
           display: none;
       }
    }
`