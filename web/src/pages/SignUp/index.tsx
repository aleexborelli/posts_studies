import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Background, Form, FormActions } from './styles';

const SignUp: React.FC = () => {
  const history = useHistory();

  function onSubmit() {
    console.log('enviou');
  }

  return (
    <Container>
      <Content>
        <Form onSubmit={onSubmit}>
          <h1>Cadastro</h1>
          <Input icon={FaUser} placeholder="Nome" type="text" name="name" />
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
          <Button type="submit">Cadastrar</Button>
          <FormActions>
            <Link to="/signin">Já tenho conta</Link>
            <Link to="/signin">Voltar</Link>
          </FormActions>
        </Form>
      </Content>
    </Container>
  );
};

export default SignUp;
