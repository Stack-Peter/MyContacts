import FromGroup from "../FormGroup";
import { Form, ButtonContainer } from "./styles";

import Input from "../Input";
import Select from "../Select";
import Button from "../Button";

export default function ContactForm({ buttonLabel }) {
  return (
    <Form>
      <FromGroup>
        <Input placeholder="Nome" />
      </FromGroup>

      <FromGroup>
        <Input placeholder="E-mail" />
      </FromGroup>

      <FromGroup>
        <Input placeholder="Telefone" />
      </FromGroup>

      <FromGroup>
        <Select>
          <option value="instagram">Instagram</option>
          <option value="facebook">Facebook</option>
        </Select>
      </FromGroup>

      <ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}
