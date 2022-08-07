import React from "react";
import logoSrc from "../img/logo.svg";
import Button from "./Button";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <img src={logoSrc} alt="Logo" />
      <RightSection>
        <Link href="#faq">Faq</Link>
        <Link href="#contact">Contact</Link>
        <LinkButton href="#swap">
          <Button content="Swapper !" />
        </LinkButton>
      </RightSection>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    height: 100%;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  @media (max-width: 550px) {
    display: none;
  }
`;

const LinkButton = styled.a`
  text-decoration: none;
`;

const Link = styled.a`
  text-decoration: none;
  color: #22133e;
  &:hover {
    text-decoration: underline;
  }
`;
