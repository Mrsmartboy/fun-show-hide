import { useState } from 'react'
import {Container,Header,MiniContainer,ButtonContainer,Button,Para} from './styled'

const ShowHide=()=>{
  const [isHide,setIsHide]=useState({firstName:false,lastName:false})

  const onClickFirstName=()=>{
    setIsHide(prevState=>({...prevState,firstName:!prevState.firstName}))
  }

  const onClickLastName=()=>{
    setIsHide(prevState=>({...prevState,lastName:!prevState.lastName}))
  }
    return(
        <Container>
            <Header>Show/Hide</Header>
            <MiniContainer>
                <ButtonContainer>
                    <Button onClick={onClickFirstName}>Show/Hide FirstName</Button>
                    {isHide.firstName&& <Para>Joe</Para>}
                    
                </ButtonContainer>
                <ButtonContainer>
                    <Button onClick={onClickLastName}>Show/Hide LastName</Button>
                    {isHide.lastName&& <Para>Jonas</Para>}
                </ButtonContainer>
            </MiniContainer>
        </Container>
    )

}

export default ShowHide