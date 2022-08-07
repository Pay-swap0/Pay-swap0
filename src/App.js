import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Swapper from "./components/Swapper";
import styled from "styled-components";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Container className="App">
      <Main>
        <Header />
        <Landing />
        <Swapper />
        <Faq />
        <Contact />
      </Main>
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 24px;
  max-width: 1232px;
`;
