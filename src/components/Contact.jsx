import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";
import Textarea from "./Textarea";

function Contact() {
  return (
    <Container>
      <Title id="contact">Contactez nous facilement ✌️ !</Title>
      <Card>
        <CardTitle>Formulaire de contact</CardTitle>
        <Input type="email" placeholder="ex : mail@gmail.com" label="Adresse e-mail" />
        <Textarea label="Message" placeholder="J'aurais une question sur ..." />
        <Button content="Envoyer 😇 !" />
      </Card>
    </Container>
  );
}

export default Contact;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  padding-top: 5rem;
  margin-top: 0;
  font-size: 36px;
  line-height: 64px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 36px;
  }
`;

const Card = styled.div`
  padding: 2rem 1.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: #ffffff;
  border: 1px solid #6d24ff;
  box-shadow: 0px 8px 0px #6d24ff, 0px 48px 32px rgba(168, 168, 168, 0.12);
  border-radius: 24px;
  width: 400px;
  @media (max-width: 448px) {
    width: 100%;
  }
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;
