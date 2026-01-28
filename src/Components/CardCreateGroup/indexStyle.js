import styled from "styled-components";
export const Container = styled.div`
    width: 300px;
    margin: 0 auto;

`;
export const Form = styled.form`
  width: 250px;
  margin: 0 auto;
  padding: 25px 30px;
  background-color: var(--color-primary-light);
  box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  
  
`;

export const FormHeader = styled.div`
    display: flex;
    justify-content: space-between; 
    padding: 0 16px;
    align-items: center;
    margin-bottom: 20px;

    p {
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--color-text-light);
  }
`;

export const IconFormHeader = styled.span`
  background-color: white;
  padding: 6px 8px;
  border-radius: 100%;
`;

export const CenterButton = styled.div`
    display:flex;
    justify-content: center;
`;
