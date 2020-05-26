import React from 'react';

import { FiChevronRight } from 'react-icons/fi';
import logoExplorer from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoExplorer} alt="Logo Explorer" />
      <Title>Explore repositórios do Github.</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/61798805?s=460&u=e3c897fa042ae6b54fa8b262b6f146d8174cb9eb&v=4"
            alt="Danilo Bandeira"
          />
          <div>
            <strong>danilobandeira/repository</strong>
            <p>description</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/61798805?s=460&u=e3c897fa042ae6b54fa8b262b6f146d8174cb9eb&v=4"
            alt="Danilo Bandeira"
          />
          <div>
            <strong>danilobandeira/repository</strong>
            <p>description</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/61798805?s=460&u=e3c897fa042ae6b54fa8b262b6f146d8174cb9eb&v=4"
            alt="Danilo Bandeira"
          />
          <div>
            <strong>danilobandeira/repository</strong>
            <p>description</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
