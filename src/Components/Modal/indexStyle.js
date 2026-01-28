import styled from "styled-components";

import BgFormModal from "../../svg/bg_form_modal.svg"

export const Container = styled.div`
    width: 300px;
    padding: 26px 12px;
    border-radius: 12px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-image: url(${BgFormModal});
    background-repeat: no-repeat;
    background-size: cover;
    color: var(--color-primary-light);
    > div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: solid 2px var(--color-primary-light);
        padding-bottom: 8px;
    }

    > form{
        margin-top: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        button{
            margin-top: 12px;
        }
    }
`