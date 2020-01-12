import React from 'react';

import logo from '../../assets/logo.png';
import CompareList from '../../components/CompareList';

import { Container, Form } from './style';

const Main = () => (
  <Container>
    <img src={logo} alt="Github Compare" />

    <Form>
      <input type="text" placeholder="Usuario/Repositorio" />
      <button type="submit">Ok</button>
    </Form>
    <CompareList />
  </Container>
);

export default Main;
