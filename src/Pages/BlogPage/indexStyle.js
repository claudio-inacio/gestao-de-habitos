import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

`

export const Article = styled.div`
    width: 320px;
    margin: 32px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        font-size: 1.5rem;
        text-align: center;
        font-weight: 600;
    }

    img{
        width: 256px;
        margin: 26px;
    }

    article {
        p{
            font-size: 0.85rem;
            margin-bottom: 16px;
            font-weight: 200;
            line-height: 1.2rem;
        }
    }
    
    @media screen and (min-width: 768px){
        width: 654px;
        
        article {
            p{
                font-size: 1rem;
            }
        }
    }
`