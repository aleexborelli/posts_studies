/* eslint-disable no-alert */
/* eslint-disable no-console */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Background, Form, FormActions } from './styles';

const SignIn: React.FC = () => {
  const onSubmit = () => {
    alert('teste');
  };

  return (
    <Container>
      <Content>
        <Form onSubmit={onSubmit}>
          <h1>Login</h1>
          <Input
            icon={FaEnvelope}
            placeholder="E-mail"
            type="email"
            name="email"
          />
          <Input
            icon={FaLock}
            placeholder="Senha"
            isPassword
            type="password"
            name="password"
          />
          <Button type="submit">Entrar</Button>
          <FormActions>
            <Link to="/signup">Faça seu cadastro</Link>
          </FormActions>
        </Form>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
