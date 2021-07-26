import styled from "styled-components/native";

export const CheckOut = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.topBarColor};
  margin-top: 30px;
`;

export const CheckoutText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;
