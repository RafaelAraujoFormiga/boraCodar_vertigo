import { createGlobalStyle } from "styled-components"

export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    :root {
        --red: #ED3A5A;
        --purple: #7C3AED;
        --purple-100: #9F67FF;
        --gray-50: #F8FAFC;
        --gray-100: #F1F5F9;
        --gray-200: #E2E8F0;
        --gray-300: #CBD5E1;
        --gray-400: #94A3B8;
        --gray-500: #64748B;
        --gray-600: #475569;
        --gray-700: #334155;
        --gray-800: #1E293B;
        --gray-900: #0F172A;

        font-family: "Inter", sans-serif;
        font-size: 62.5%;
    }

    @media(max-width: 900px){
    :root {
        --purple-100: #9F67FF
        --gray-600: #FFFFFF;
        --gray-900: #FFFFFF;
    }
`