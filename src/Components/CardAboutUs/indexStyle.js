import styled from "styled-components";


export const CardSecundary = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;

`;
export const CardThird = styled.div`
 @media (max-width: 740px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
 }
`

export const Container = styled.div`
 margin-top: 25px;
 width: 340px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 color: var(--color-text-light) ;
 background-color: var(--color-primary-light);
 
 h1{
    text-align: center;
 }

 h3{
  text-align: center;
 }
 h4{
  text-align: center;
  margin: 10px;
 }
 p{
  text-align: justify;
 }
 
`;

export const Picture = styled.img`
  background-color: green;
  width: 50px;
  height: 50px;
  background-size: cover;
  display: block;
  border-radius: 50%;
  
  align-items: center;
  margin: 10px;
`;
export const Card = styled.div`
   width: 80%;
   background-color: #ECECEC;
`;

export const CircleBlue = styled.div`
  background-color: #1361F9;
  width: 40px;
  height: 40px;
  display: block;
  border-radius: 50%;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const CircleBlack = styled.div`
  background-color: #24292F;
  width: 40px;
  height: 40px;
  display: block;
  border-radius: 50%;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const CirclePink = styled.div`
  background-color: #E54B73;
  width: 40px;
  height: 40px;
  display: block;
  border-radius: 50%;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerCircles = styled.div`
   display: flex;
   width: 80%;
   justify-content: flex-end ;
`;
