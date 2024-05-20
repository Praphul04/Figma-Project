import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import ServiceCard from './components/ServiceCard';
import Form from './components/Form';
import TransportationInfo from './components/TransportationInfo';
import AirportSupervision from './components/AirportSupervision';  // Import the new component

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin-top: 144px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;



function App() {
  return (
    <AppContainer>
      <Header />
      <Main>
        <Form />
        <ServiceCard />
        <TransportationInfo />
        <AirportSupervision /> {/* Add the new component here */}
      </Main>
   
    </AppContainer>
  );
}

export default App;
