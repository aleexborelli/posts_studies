import React, { ChangeEvent, useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { store } from 'react-notifications-component';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Background, Form, FormActions } from './styles';
import IForm from '../../interfaces/form';
import api from '../../services/api';

const SignUp: React.FC = () => {
  const history = useHistory();
  const [model, setModel] = useState<IForm>({
    name: '',
    email: '',
    password: '',
  });

  const updateModel = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setModel({
        ...model,
        [e.target.name]: e.target.value,
      });
    },
    [model],
  );

  const onSubmit = useCallback(
    async (e: ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        await api.post('/users', model);
        store.addNotification({
          title: 'Sucesso!',
          message: 'Usuário cadastrado com sucesso!',
          type: 'success',
          insert: 'top',
          container: 'top-right',
          animationIn: ['animate__animated', 'animate__fadeIn'],
          animationOut: ['animate__animated', 'animate__fadeOut'],
          dismiss: {
            duration: 2000,
          },
        });
        history.push('/signin');
      } catch (err) {
        store.addNotification({
          title: 'Erro!',
          message: 'Falha ao cadastrar usuário!',
          type: 'danger',
          insert: 'top',
          container: 'top-right',
          animationIn: ['animate__animated', 'animate__fadeIn'],
          animationOut: ['animate__animated', 'animate__fadeOut'],
          dismiss: {
            duration: 2000,
          },
        });
      }
    },
    [model, history],
  );

  return (
    <Container>
      <Background />
      <Content>
        <Form onSubmit={onSubmit}>
          <h1>Cadastro</h1>
          <Input
            icon={FaUser}
            placeholder="Nome"
            type="text"
            name="name"
            value={model.name}
            onChange={updateModel}
          />
          <Input
            icon={FaEnvelope}
            placeholder="E-mail"
            type="email"
            name="email"
            value={model.email}
            onChange={updateModel}
          />
          <Input
            icon={FaLock}
            placeholder="Senha"
            isPassword
            type="password"
            name="password"
            value={model.password}
            onChange={updateModel}
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
