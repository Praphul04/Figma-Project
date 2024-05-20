import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  width: 487px;
  height: 1406px;
  position: absolute;
  top: 1073px;
  left: 1322px;
  gap: 0px;
  border-radius: 0px 30px 30px 0px;
  opacity: 0px;
  background: rgba(242, 242, 242, 0.62);
  box-shadow: 0px 4px 4px 0px #00000040;
  padding: 1rem;
  margin: 1rem;
  margin-top: -962px;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem; /* Add some space between form elements */
  }

  button {
    padding: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    margin: 1rem;

    button {
      font-size: 0.875rem;
      padding: 0.5rem;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  width: 120.24px;
  height: 38.51px;
  font-family: Inter, sans-serif;
  font-size: 12.67px;
  font-weight: 700;
  line-height: 15.33px;
  text-align: left;
  background: ${props => props.bgColor || '#FFFFFF'};
  color: ${props => props.color || '#000000'};
  border: none;
  cursor: pointer;
`;

const Label = styled.label`
  font-family: Inter, sans-serif;
  font-size: 12.67px;
  font-weight: 700;
  line-height: 15.33px;
  text-align: left;
  color: #444444;
`;

const Input = styled.input`
  width: 426.17px;
  height: 39.13px;
  padding: 0.5rem;
  border-radius: 8.54px 0px 0px 0px;
  border: 1px solid #DADADA;
  background: #FFFFFF;
  font-family: Inter, sans-serif;
  font-size: 12.67px;
  line-height: 15.33px;
  margin-top: 0.5rem;
`;

const SelectContainer = styled.div`
  width: 44px;
  height: 21px;
  position: absolute;
  top: 90px;
  left: 1292px;
  gap: 0px;
  opacity: 0px;
  font-family: Inter;
  font-size: 17.49px;
  font-weight: 700;
  line-height: 21.16px;
  text-align: left;
  background: white;
  margin-left: 46px;
  margin-top: -17px;
`;

const SelectIndicator = styled.span`
  width: 44px;
  height: 21px;
  font-family: Inter;
  font-size: 17.49px;
  font-weight: 700;
  line-height: 21.16px;
  text-align: left;
  background: #d7d6e1;
  
 
`;

const StepIndicator = styled.div`
  width: 120.24px;
  height: 38.51px;
  position: absolute;
  top: 1395px;
  left: 238px;
  font-family: Inter, sans-serif;
  font-size: 12.67px;
  font-weight: 700;
  line-height: 15.33px;
  text-align: left;
  background: #444444;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;


const Form = () => (
  <>
    <SelectContainer>
      Delhi <SelectIndicator>&#9660;</SelectIndicator>
    </SelectContainer>
    <FormContainer>
      <ButtonContainer>
        <Button bgColor="#FFFFFF" color="#000000">Domestic</Button>
        <Button bgColor="#808080" color="#FFFFFF">International</Button>
      </ButtonContainer>
      <h2>Book Your Service Now</h2>
      <form>
        <Label htmlFor="pickup">Pick up location:</Label>
        <Input type="text" id="pickup" name="pickup" />

        <Label htmlFor="dropoff">Drop off location:</Label>
        <Input type="text" id="dropoff" name="dropoff" />

        <Label htmlFor="phone">Phone Number:</Label>
        <Input type="tel" id="phone" name="phone" />

        <Label htmlFor="date">Shipping Date:</Label>
        <Input type="date" id="date" name="date" />
        
        <button type="submit">Get Estimate</button>
      </form>
      <StepIndicator>Step 1/4</StepIndicator>
    </FormContainer>
  </>
);

export default Form;
