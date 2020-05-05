import React, { useState, useRef } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const INPUT_EMAIL = 'email';
const INPUT_FIRST_NAME = 'first';
const INPUT_LAST_NAME = 'last';
const INPUT_PASSWORD = 'password';
const INPUT_CONFIRME_PASSWORD = 'confirme';

export default function App() {
  const [emailValue, setEmailValue] = useState('');
  const [emailInputFocus, setEmailInputFocus] = useState(false);
  const [firstNameValue, setFirstNameValue] = useState('');
  const [firstNameInputFocus, setFirstNameInputFocus] = useState(false);
  const [lastNameValue, setLastNameValue] = useState('');
  const [lastNameInputFocus, setLastNameInputFocus] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordInputFocus, setPasswordInputFocus] = useState(false);
  const [confirmePasswordValue, setConfirmePasswordValue] = useState('');
  const [confirmePasswordInputFocus, setConfirmePasswordInputFocus] = useState(
    false
  );

  const scrollRef = useRef();
  const emailInput = useRef();
  const firstNameInput = useRef();
  const lastNameInput = useRef();
  const passwordInput = useRef();
  const confirmePasswordInput = useRef();

  const handleFocusOnInput = {
    [INPUT_EMAIL]: () => {
      setEmailInputFocus(true);
    },
    [INPUT_FIRST_NAME]: () => {
      setFirstNameInputFocus(true);
    },
    [INPUT_LAST_NAME]: () => {
      setLastNameInputFocus(true);
    },
    [INPUT_PASSWORD]: () => {
      setPasswordInputFocus(true);
    },
    [INPUT_CONFIRME_PASSWORD]: () => {
      setConfirmePasswordInputFocus(true);
    },
  };

  const handleSubmit = ref => {
    ref.current.focus();
  };

  return (
    <Container ref={scrollRef} extraScrollHeight={20} >
      <Section>
        <Title>SignUp page!</Title>
        <Label>Email</Label>
        <Input
          ref={emailInput}
          onChangeText={text => setEmailValue(text)}
          value={emailValue}
          placeholder="Digite seu email"
          onFocus={() => handleFocusOnInput[INPUT_EMAIL]()}
          onEndEditing={() => setEmailInputFocus(false)}
          focus={emailInputFocus}
          keyboardType="email-address"
          returnKeyType="next"
          textContentType="emailAddress"
          onSubmitEditing={() => handleSubmit(firstNameInput)}
        />
        <Label>Primeiro nome</Label>
        <Input
          ref={firstNameInput}
          onChangeText={text => setFirstNameValue(text)}
          value={firstNameValue}
          placeholder="Digite seu primeiro nome"
          onFocus={() => handleFocusOnInput[INPUT_FIRST_NAME]()}
          onEndEditing={() => setFirstNameInputFocus(false)}
          focus={firstNameInputFocus}
          returnKeyType="next"
          onSubmitEditing={() => handleSubmit(lastNameInput)}
        />
        <Label>Último nome</Label>
        <Input
          ref={lastNameInput}
          onChangeText={text => setLastNameValue(text)}
          value={lastNameValue}
          placeholder="Digite seu último nome"
          onFocus={() => handleFocusOnInput[INPUT_LAST_NAME]()}
          onEndEditing={() => setLastNameInputFocus(false)}
          focus={lastNameInputFocus}
          returnKeyType="next"
          onSubmitEditing={() => handleSubmit(passwordInput)}
        />
        <Label>Senha</Label>
        <Input
          ref={passwordInput}
          value={passwordValue}
          onChangeText={text => setPasswordValue(text)}
          placeholder="Digite sua senha"
          onFocus={() =>
            handleFocusOnInput[INPUT_PASSWORD]()
          }
          onEndEditing={() => setPasswordInputFocus(false)}
          focus={passwordInputFocus}
          textContentType="password"
          secureTextEntry
          returnKeyType="next"
          onSubmitEditing={() => handleSubmit(confirmePasswordInput)}
        />
        <Label>Repita sua senha</Label>
        <Input
          ref={confirmePasswordInput}
          value={confirmePasswordValue}
          onChangeText={text => setConfirmePasswordValue(text)}
          placeholder="Repita seu senha"
          onFocus={() =>
            handleFocusOnInput[INPUT_CONFIRME_PASSWORD]()
          }
          onEndEditing={() => setConfirmePasswordInputFocus(false)}
          focus={confirmePasswordInputFocus}
          textContentType="password"
          secureTextEntry
        />
      </Section>
    </Container>
  );
}

const Container = styled(KeyboardAwareScrollView)`
  flex: 1;
  background: #712EA2;
`;

const Section = styled.View`
  width: 100%;
  height: 100%;
  margin-bottom: 20%;
`;

const Title = styled.Text`
  font-size: 22px;
  line-height: 26px;
  color: #FFF;
  margin: 10% auto 0;
`;

const Label = styled.Text`
  font-size: 16px;
  line-height: 18px;
  color: #FFF;
  margin: 20% auto 2%;
`;

const Input = styled.TextInput.attrs(props => ({
  placeholderTextColor:  props.focus ? '#FFF' : '#BABABA',
}))`
  width: 80%;
  height: 36px;
  color: #FFF;
  margin: 0 auto;
  padding: 2px 10px 6px;
  border-color: ${props => props.focus ? '#FFF' : '#999'};
  border-width: 2px;
  background:  ${props => props.focus ? '#AAA' : 'transparent'};
`;