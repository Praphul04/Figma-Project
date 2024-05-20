import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 572px;
  left: 148px;
  background: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-left: 163px;
  margin-top: 190px;
`;

const Heading = styled.h1`
  width: 147px;
  height: 24px;
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 24.2px;
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

const TransportationInfo = () => (
  <Container>
    <Heading>Transportation</Heading>
    <Paragraph>
      Transportation by road should be in fully closed hard walled secured trucks, equipped with a mobile phone and an internal strapping system. A supply of clean PU Foam, bubble wrap and acid free tissue should be carried.
    </Paragraph>
    <Paragraph>
      The cargo area of the truck should be clean and free of any loose objects/particles. Works should be crated for transportation, as per Museum specifications. Crates should be strapped or wedged so that they cannot move about when in transit.
    </Paragraph>
    <Paragraph>
      There should be a minimum of two UAPL staff with the works in transit, at all times, other than when the shipments are on board vessel or on the aircraft or accompanied by a courier designated by the lender/Museum/Art Gallery/Organiser.
    </Paragraph>
    <Paragraph>
      Loading/Unloading of works into the trucks in strong wind or rain is to be avoided, unless required in an emergency.
    </Paragraph>
    <Paragraph>
      To handle successful fine art consignment is to have maximum control on the consignment starting from packing, handling, transportation and handover to airlines.
    </Paragraph>
    <Paragraph>
      The key is to go one step more and oversee the handling at airport, witnessing the palletizing / de-palletizing of the consignment. Permissions for overseeing the handling at airport can be obtained at the time of filing the documents at Customs (depending on the security situation at each city). Professional Art handlers for examination & x-ray handling of crates.
    </Paragraph>
  </Container>
);

export default TransportationInfo;
