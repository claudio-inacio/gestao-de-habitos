import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 62px;

    > div{
        width: 344px;
        margin: 32px auto;
        display: flex;
        flex-direction: column;

        @media screen and (min-width: 768px){
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 700px;
    }
    }
`