import styled from 'styled-components'

export const Container=styled.div`
    background-image: linear-gradient(to right,#fa7257,#fc63a7);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Header=styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: #fddddb;

`
export const MiniContainer=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
  @media screen and (max-width:576px){
     flex-direction: column;
    
  }
`

export const ButtonContainer=styled.div`
   display: flex;
   flex-direction: column;
   margin: 10px;
`
export const Button = styled.button`
    color: #dd1264;
    font-size: 15px;
    font-weight: 500;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    border: 1px solid #000000;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
`

export const Para = styled.p`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 60px;
   background-color: #fddddb;
   font-size: 20px;
   font-weight: bold;
   border-radius: 10px;
`