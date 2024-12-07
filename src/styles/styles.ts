import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Inter";
        src: url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&subset=cyrillic&display=swap");
        font-style: normal;
    }

    @font-face {
        font-family: "Playfair Display";
        src: url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&subset=cyrillic&display=swap");
        font-style: normal;
    }

    body,
    html {
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        background: #fff;
        overflow-x: hidden; /* Отключение горизонтального скролла */
        color: #18216d; /* Основной цвет текста */
        width: 100%; /* Полная ширина */
        box-sizing: border-box; /* Учитывать padding и border */
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit; /* Устанавливаем box-sizing для всех элементов */
    }

    /* Headings */
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Playfair Display', serif;
        color: #18216d;
        font-size: 48px;
        line-height: 1.3;
        letter-spacing: 0.01em;
        text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
        margin-bottom: 1rem;

        @media only screen and (max-width: 768px) {
            font-size: 36px;
        }

        @media only screen and (max-width: 414px) {
            font-size: 28px;
        }
    }

    /* Paragraphs */
    p {
        font-family: 'Inter', sans-serif;
        color: #18216d;
        font-size: 18px;
        line-height: 1.6;
        margin-bottom: 1rem;

        @media only screen and (max-width: 768px) {
            font-size: 16px;
        }

        @media only screen and (max-width: 414px) {
            font-size: 14px;
        }
    }

    /* Links */
    a {
        text-decoration: none;
        outline: none;
        color: #18216d;

        :hover {
            color: #0d1b2a;
            text-decoration: underline;
        }
    }

    /* Buttons */
    button {
        background-color: #18216d;
        color: #ffffff;
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 600;
        padding: 0.8rem 1.2rem;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease-in-out;

        &:hover {
            background-color: #0d1b2a;
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
            transform: translateY(-2px);
        }
    }

    /* Inputs and Textareas */
    input,
    textarea {
        font-family: 'Inter', sans-serif;
        border-radius: 4px;
        border: 1px solid #ccc;
        background: #f9f9f9;
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;
        padding: 1rem 1.25rem;
        font-size: 16px;

        :focus-within {
            background: none;
            box-shadow: #2e186a 0px 0px 0px 2px;
        }
    }

    /* Images */
    img,
    .image {
        max-width: 100%;
        height: auto;
        display: block; /* Избежать inline артефактов */
    }

    /* SVG Styling */
    .about-block-image svg {
        text-align: center;
        fill: #18216d;
    }

    /* Drawer Content */
    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }
`;
