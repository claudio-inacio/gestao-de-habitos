import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 90vh;
    margin-top: 8px;
    @media screen and (min-width: 1024px){
        flex-direction: row;
        justify-content: space-between;
    }
    > div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--color-primary-light);
        padding: 32px;

        @media screen and (min-width: 1024px){
            width: 40%;
        }

        h2{
            font-size: 1.4rem;
        }

        form{
            width: 300px;
            padding: 22px 32px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
        }
    }
`

export const Undraw = styled.section`
    display: none;
    @media screen and (min-width: 1024px){
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;

        img{
            width: 80%;
        }
    }
`