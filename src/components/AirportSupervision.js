import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 760px;
  left: 755px;
  background: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Heading = styled.h1`
  width: 147px;
  height: 24px;
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 17.2px;
  text-align: left;
  color: #292355;
  margin: 0;
  padding-bottom: 1rem;
`;

const Paragraph = styled.p`
  width: 349px;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.36px;
  text-align: left;
  color: #292355;
  margin: 0;
  padding-bottom: 1rem;
  position: relative;
  padding-left: 20px; /* Create space for the dot */

  &:before {
    content: '•'; /* Dot sign */
    position: absolute;
    left: 0;
    color: #292355;
    font-size: 20px;
    line-height: 19.36px;
  }
`;

const AirportSupervision = () => (
  <Container>
    <Heading>Airport Supervision</Heading>
    <Paragraph>
      To handle successful fine art consignment is to have maximum control on the consignment starting from packing, handling, transportation and handover to airlines.
    </Paragraph>
    <Paragraph>
      The key is to go one step more and oversee the handling at airport, witnessing the palletizing / de-palletizing of the consignment.
    </Paragraph>
    <Paragraph>
      Permissions for overseeing the handling at airport can be obtained at the time of filing the documents at Customs (depending on the security situation at each city).
    </Paragraph>
    <Paragraph>
      Professional Art handlers for examination & x-ray handling of crates.
    </Paragraph>
  </Container>
);

export default AirportSupervision;
