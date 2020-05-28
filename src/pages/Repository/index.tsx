import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logoExplorer from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoExplorer} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/28929274?v=4"
            alt="Danilo"
          />
          <div>
            <strong>Rocketseat/unform</strong>
            <p>Description</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>1324</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>222</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>14</strong>
            <span>Issues Aberta</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="teste">
          <div>
            <strong>Issues</strong>
            <p>Descrição Issues</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
