import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    background-color: var(--color-primary-light);
    box-shadow: 4px 4px 15px var(--color-title-light);
    border-radius: 8px;
    margin-bottom: 12px;
    figure{
        width: 100%;
        height: 125px;
        img{
            width: 100%;
            height: 100%;
        }
    }

    article{
        padding: 12px;
        a{
            text-decoration: none;
            font-size: 0.75rem;
            color: var(--bg-button);
        }
    }

    @media screen and (min-width: 768px){
        width: 320px;
        figure{
            width: 100%;
            height: 200px;
        }

        article{
            height: 136px;
            display: flex;
            justify-content: center;
            align-items: center;
            a{
               font-size: 1.1rem;
               line-height: 1.9rem;
            }
        }
    }
`