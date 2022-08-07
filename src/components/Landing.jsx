import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";
import landingDesktopSrc from "../img/landing.svg";
import landingMobileSrc from "../img/landing-mobile.svg";

function Landing() {
  const [size, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const resize = () => {
      setSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", () => {
      resize();
    });

    return (_) => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <Container>
      <LeftSection>
        <TitleH1>
          👋 Swapez de <span>Paysafecard à Paypal</span> en 2 minutes chrono !
        </TitleH1>
        <Description>
          Convertissez vos tickets prépayés paysafecard en solde Paypal, Bitcoin, Ethereum dès-maintenant avec seulement
          10% de frais ! Recevez votre paiement sous 24h !
        </Description>
        <LinkButton href="#swap">
          <Button content="Swapper !" />
        </LinkButton>
      </LeftSection>
      <RightSection>
        <img src={size.width < 768 ? landingMobileSrc : landingDesktopSrc} alt="landing" />
      </RightSection>
    </Container>
  );
}

export default Landing;

const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  gap: 1rem;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 5rem;
  }
`;

const LeftSection = styled.div`
  width: calc(50% - 8px);
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100%);
  }
`;

const RightSection = styled.div`
  width: calc(50% - 8px);
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    object-fit: scale-down;
  }
  @media (max-width: 1024px) {
    width: calc(100%);
    img {
      width: 100%;
      object-fit: initial;
    }
  }

  @media (max-width: 375px) {
    img {
      object-fit: scale-down;
    }
  }
`;

const TitleH1 = styled.h1`
  font-size: 56px;
  color: #22133e;
  line-height: 64px;
  margin: 0;
  span {
    color: #6d24ff;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 30px;
  color: #525055;
  margin: 1rem 0 2rem 0;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 1.5rem;
  }
`;

const LinkButton = styled.a`
  text-decoration: none;
`;
