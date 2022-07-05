import { useState } from "react";
import FromGroup from "../FormGroup";

import isEmailValid from "../../utils/isEmailValid";

import { Form, ButtonContainer } from "./styles";

import Input from "../Input";
import Select from "../Select";
import Button from "../Button";

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState([]);

  function handleNameChange({ target }) {
    setName(target.value);

    if (!target.value) {
      setErrors((prevState) => [
        ...prevState,
        { field: "name", message: "Nome é obrigatório" },
      ]);
    } else {
      setErrors((prevState) =>
        prevState.filter((error) => error.field !== "name")
      );
    }
  }

  function handleEmailChange({ target }) {
    setEmail(target.value);

    if (target.value && !isEmailValid(target.value)) {
      const errorAlreadyExists = errors.find(
        (error) => error.field === "email"
      );

      if (errorAlreadyExists) {
        return;
      }

      setErrors((prevState) => [
        ...prevState,
        { field: "email", message: "E-mail inválido" },
      ]);
    } else {
      setErrors((prevState) =>
        prevState.filter((error) => error.field !== "email")
      );
    }
  }

  function getErrorByFieldName(fieldName) {
    return errors.find((error) => error.field === fieldName)?.message;
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log({ name, email, phone, category });
  }

  console.log(errors);
  return (
    <Form onSubmit={handleSubmit}>
      <FromGroup error={getErrorByFieldName("name")}>
        <Input
          error={getErrorByFieldName("name")}
          placeholder="Nome"
          value={name}
          onChange={handleNameChange}
        />
      </FromGroup>

      <FromGroup error="O formato do e-mail é inválido">
        <Input
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
        />
      </FromGroup>

      <FromGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </FromGroup>

      <FromGroup>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Categoria</option>
          <option value="instagram">Instagram</option>
          <option value="facebook">Facebook</option>
        </Select>
      </FromGroup>

      <ButtonContainer>
        <Button type="submit">{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}
