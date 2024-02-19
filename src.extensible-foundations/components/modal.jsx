import { styled } from "styled-components"
import { balanced, typescale } from "../utils"

import closeImg from "../images/close.svg"
import registerImage from "../images/register.svg"
import { PrimaryButton } from "./button"

const Container = styled.div`
  width: 700px;
  height: 400px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
  background-color: ${balanced[100]};
  color: ${balanced[600]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 100px;
  margin-top: auto;
  margin-left: auto;
  left: 0;
  right: 0;
  margin-right: auto;
  margin-left: auto;
  border-radius: 3px;
`

const CloseImgContainer = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
`

const ModalHeader = styled.h3`
  position: relative;
  font-size: ${typescale.header3};
  margin-bottom: 8px;
`

const ModalHelper = styled.p`
  position: relative;
  margin-top: 0px;
  margin-bottom: 18px;
  font-size: ${typescale.paragraph};
`

const Modal = () => {
  return (
    <div
      style={{
        width: "100vh",
        height: "100vh",
        backgroundColor: "white",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <Container>
        <CloseImgContainer>
          <img src={closeImg} alt="close" />
        </CloseImgContainer>
        <img src={registerImage} alt="register" style={{ maxWidth: "250px" }} />
        <ModalHeader>Register</ModalHeader>
        <ModalHelper>Register to get access to all the features</ModalHelper>
        <PrimaryButton onClick={() => alert("clicked!")}>
          Register
        </PrimaryButton>
      </Container>
    </div>
  )
}

export default Modal
