import styled from "styled-components";

export const Container = styled.div`
margin-top: 62px;
    display: flex;
    flex-direction: column;
    align-items: center;

    > div{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 300px;
        margin: auto;

        @media screen and (min-width: 768px){
            justify-content: space-around;
            width: 700px;
        }

        @media screen and (min-width: 1024px){
            width: 1000px;
        }
    }
`