import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <Link href="#faq">Faq</Link>
      <Link href="#contact">Contact</Link>
      <Link href="#swap">Swap</Link>
    </Container>
  );
}

export default Footer;

const Container = styled.footer`
  margin-top: 5rem;
  width: calc(100vw - 17px);
  overflow: hidden;
  display: flex;
  justify-content: center;
  gap: 24px;
  background: #180738;
  font-size: 16px;
  padding: 1rem 0;
  font-weight: bold;
  @media (max-width: 768px) {
    gap: 16px;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
  &:hover {
    text-decoration: underline;
  }
`;
