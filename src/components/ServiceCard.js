import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 654px;
  height: 572px;
  position: relative;
  border-radius: 5.44px 0px 0px 0px;
  border: 2px solid #000; /* Set the border color and width */
  background-image: url('/transportimage.jpeg'); /* Since the image is in the public folder, you can reference it like this */
  background-size: cover;
  padding: 20px;
  margin-left: -542px;
  margin-top: -145px;
`;

const TitleContainer = styled.div`
  background: rgba(41, 35, 85, 0.6); /* Transparent background */
  color: #fff;
  padding: 20px;
  border-radius: 5.44px 0px 0px 0px;
`;

const MainTitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 43.89px;
  font-weight: 700;
  line-height: 53.12px;
  text-align: left;
  margin: 0;
`;

const SubTitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 24.14px;
  font-weight: 700;
  line-height: 29.22px;
  text-align: left;
  margin: 0;
  background: rgba(100, 100, 100, 0.6); /* Transparent background */
  padding: 10px;
  border-radius: 0 0 5.44px 0px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0 0 0;
`;

const ListItem = styled.li`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  text-align: left;
  margin-bottom: 10px;
  padding: 10px;
  color: #fff;
  font-size: 43.63px;
  line-height: 52.8px;
  background: rgba(41, 35, 85, 0.6); /* Transparent background */
`;

const ServiceCard = () => {
  return (
    <Card>
      <TitleContainer>
        <MainTitle>BOOK YOUR SERVICE NOW</MainTitle>
        <SubTitle>Fine art service</SubTitle>
      </TitleContainer>
      <List>
        <ListItem>ON TIME DELIVERY</ListItem>
        <ListItem>ECONOMICAL PRICE</ListItem>
        <ListItem>ZERO DAMAGE POLICY</ListItem>
      </List>
    </Card>
  );
};

export default ServiceCard;
