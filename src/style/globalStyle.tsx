import { createGlobalStyle } from "styled-components"

export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        height: 100vh;
        display: grid;
        place-items: center;
    }

    :root {
        --purple: #7C3AED;
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
    }
`