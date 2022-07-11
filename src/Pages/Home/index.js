import {
  Card,
  Container,
  Header,
  ListContainer,
  InputSearchContainer,
} from "./styles";

import { Link } from 'react-router-dom'
import arrow from "../../assets/images/icons/arrow.svg";
import edit from "../../assets/images/icons/edit.svg";
import trash from "../../assets/images/icons/trash.svg";
import Modal from "../../components/Modal";
import Loader from "../../components/Loader";

export default function Home() {
  return (
    <Container>
      {/* <Modal danger /> */}
      {/* <Loader /> */}
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>
      <Header>
        <strong>3 Contatos</strong>
        <Link to="/new">Novo Contato</Link>
      </Header>
      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Pedro Marcos</strong>
              <small>Instagram</small>
            </div>
            <span>pedro@devacademy.com.br</span>
            <span>(41) 99999-9999</span>
          </div>

          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}

fetch('http://localhost:3001/contacts')
  .then((response) => {
    console.log('response', response.json())
  })
  .catch((error) => {
    console.log('erro', error)
  })

// SOP -> Same Origin Policy -> Política de mesma origem
// CORS -> Cross-Origin Resource Sharing -> Compartilhamento de recursos entre origens cruzadas
// Origem: protocolo://domínio:porta

// Saída: http://localhost:3000
// Destino: http://localhost:3001 <- fere o SOP por ter diferença da saída ou vice versa

// Preflight -> Pré-voô
// OPTIONS http://localhost:3001/contacts
