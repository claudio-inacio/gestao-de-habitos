import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        font-size: 1.5rem;
        font-weight: 600;
        text-align: center;
        width: 330px;
    }

    > div{
        width: 100%;
        margin-top: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;

        @media screen and (min-width: 1024px){
            margin-top: 32px;
            flex-direction: row;
            justify-content: space-around;
        }

    }
`