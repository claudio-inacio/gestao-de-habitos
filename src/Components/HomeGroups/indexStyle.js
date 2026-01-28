import styled from "styled-components";

export const Container = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;

    h2{
        font-weight: 500;
        width: 340px;
        margin: 12px auto;
        text-align: center;

        @media screen and (min-width: 768px){
            width: 700px;
            text-align: start;
        }
    }
`

export const List = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 768px){
        flex-direction: row;
        width: 768px;
        margin: 16px auto;
        justify-content: space-around;
    }
`