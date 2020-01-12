import React, { Component } from 'react';
import api from '../../services/api';

import logo from '../../assets/logo.png';
import CompareList from '../../components/CompareList';

import { Container, Form } from './style';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      repositoryInput: '',
      repositories: [],
    };
  }

  handleAddRepository = async e => {
    e.preventDefault();
    const { repositoryInput: reposInput, repositories } = this.state;
    try {
      const response = await api.get(`${reposInput}`);
      this.setState({
        repositoryInput: '',
        repositories: [...repositories, response.data],
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { repositories, repositoryInput } = this.state;
    return (
      <Container>
        <img src={logo} alt="Github Compare" />

        <Form onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="Usuario/Repositorio"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Ok</button>
        </Form>
        <CompareList repositories={repositories} />
      </Container>
    );
  }
}
