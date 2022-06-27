import { Container, Footer, Overlay } from "./styles";

import Button from "../Button";

export default function Modal({ danger }) {
  return (
    <Overlay>
      <Container danger={danger}>
        <h1>Título do Modal</h1>
        <p>Corpo do modal</p>

        <Footer>
          <button type="button" className="cancel-butt on">
            Cancelar
          </button>
          <Button danger={danger} type="button">
            Deletar
          </Button>
        </Footer>
      </Container>
    </Overlay>
  );
}
