import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 256px;
    max-width: 500px;
    width: 300px;
    margin: 32px auto;

    h2{
        text-align: center;
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--color-title-light);
    }

    p{
        text-align: center;
        font-weight: 200;
        color: var(--color-text-light);
        line-height: 1.5rem;
    }
`

export const BoxButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    svg{
        margin-left: 6px;
    }
    span{
        margin-top: 12px;
        width: 105px;
        font-size: 0.70rem;
        text-align: center;
        color: var(--color-span-light);
    }
`