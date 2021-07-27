import styled from "styled-components/native";

export const ContainerStyled = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;
export const SigninTextStyled = styled.Text`
  color: ${(props) => props.theme.topBarColor};
  font-size: 35px;
`;
export const TextInputStyled = styled.TextInput`
  align-self: stretch;
  text-align: center;
  height: 30px;
  margin: 10px 50px 10px 50px;
  color: ${(props) => props.theme.topBarColor};
  border-bottom-color: ${(props) => props.theme.topBarColor};
  border-bottom-width: 2px;
`;
export const SigninButtonStyled = styled.TouchableOpacity`
  padding: 10px;
`;
export const SigninButtonTextStyled = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: ${(props) => props.theme.mainColor};
`;

export const AuthOther = styled.Text`
  color: ${(props) => props.theme.red};
`;
