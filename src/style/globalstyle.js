import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video ,button{
        margin: 0;
        padding: 0;
        border: 0;
        outline: none;
        
        font-family:'Roboto', sans-serif;;
    }
    
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section,main {
        display: block;
        
    }
    ol, ul {
        list-style: none;
    }

    button{
        cursor: pointer;
    }


    :root{
        --color-primary-light: #F9F9F9;
        --color-second-light: #F2F2F2;
        --color-span-light: #494444; 
        --color-tag-link : #0064C0;
        --color-text-light: #202020;
        --color-title-light: #23242B;
        --bg-color-menu-mobile-light: #23242B;

        --bg-button: #5A5BD5;
        --color-tag-level-easy: #71CB75;
        --color-tag-level-medium: #FACB32;
        --color-tag-level-hard: #E54B73;

        --color-button-enter-group: #E54B73;
        --color-button-exit-group: #71CB75;
    }

`;

export default GlobalStyle;
