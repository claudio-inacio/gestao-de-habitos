import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 26px auto;
    padding: 0px 16px;
    div{
        margin-bottom: 20px;
        
        h2{
            font-size: 1.2rem;
            font-weight: 600;

        }

        p{
            margin: 12px 0px;
            font-weight: 200;
            font-size: 0.75rem;
            line-height: 1.1rem;
            width: 300px;
        }

        img{
            margin-top: 12px;
            width: 200px;
        }

    }

    @media screen and (min-width: 768px){
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        padding: 32px 62px;
        background-color: var(--color-second-light);

        div{
            width: 300px;
            margin: 0px 92px;
            h2{
                font-size: 1.5rem;
            }
            p{
                width: 300px;
                font-size: 1.2rem;
                line-height: 1.5rem;
            }
        }

        div:nth-child(2){
            img{
                height: 300px;
                width: 300px;
            }
        }
    }
`