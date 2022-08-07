import React from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";

function Faq() {
  const sendOptions = ["Paysafecard"];
  const recieveOptions = ["Paypal", "Bitcoin", "Ethereum"];
  return (
    <Container>
      <Title id="faq">Vous êtes perdu 😊 ?</Title>
      <DropdownContainer>
        <Dropdown
          question="Où acheter des Paysafecard ?"
          answer="Les paysafecards peuvent être achetées avec de l'espèce dans des bureaux de tabac pour la somme de 10€, 20€, 50€ ou bien 100€ 🤘"
        />
        <Dropdown
          question="Pourquoi il y a t-il des frais ?"
          answer="Nous savons que cette commision peut sembler insensé mais nous avons nous même des taxes lors de la validation des Paysafecard 😥
          Notre équipe fait le maximum pour obtenir le taux le plus bas du marché, d’où les 10% 💪"
        />
        <Dropdown
          question="Dans combien de temps je reçois mon argent
          sur mon compte Paypal/Bitcoin/Ethereum ?"
          answer="Nous faisons notre maximum pour vous délivrer votre swap sous 24h ! ⌛"
        />
      </DropdownContainer>
    </Container>
  );
}

export default Faq;

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

const DropdownContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 448px) {
    width: 100%;
  }
`;
