import { useRef, useContext } from "react";

import { FormWrapper } from "../styled";

import CloseButton from "../../CloseButton";

import { baseContext } from "../../../Context/BaseContext";
import { createEnterprise } from "../../../Services/enterprise";

import { Form } from "@unform/web";
import * as Yup from "yup";

import Input from "../Input";

function EnterpriseForm() {
  const formRef = useRef(null);

  const { setSelectedForm, fetchEnterprises } = useContext(baseContext);

  const schema = Yup.object().shape({
    cod_empreendimento: Yup.string().required("Campo obrigatório"),
    nome_proprietario: Yup.string().required("Campo obrigatório"),
    emp_nm_empreendimento: Yup.string().required("Campo obrigatório"),
    endereco_empreendimento: Yup.string().required("Campo obrigatório"),
    cpf_cnpj_proprietario: Yup.string()
      .required("Campo obrigatório")
      .length(11, "CPF deve conter 11 dígitos"),
  });

  const handleFormSubmit = async (data) => {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});

      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed
      await createEnterprise(data);
      await fetchEnterprises();
      // Tem q ver pq não funciona
      setSelectedForm(0);
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  };

  return (
    <FormWrapper>
      <CloseButton />
      <Form
        initialData={{ cod_empreendimento: "C" }}
        ref={formRef}
        onSubmit={handleFormSubmit}
      >
        <Input
          name="cod_empreendimento"
          label="Código do Empreendimento"
          placeholder="Digite o código do empreendimento"
          width="20%"
        />
        <Input
          name="cod_anterior"
          label="Código Anterior"
          placeholder="Digite o código anterior"
          width="30%"
        />
        <Input
          name="emp_nm_empreendimento"
          label="Nome do Empreendimento"
          placeholder="Digite o nome do empreendimento"
          width="40%"
        />
        <Input
          name="nome_proprietario"
          label="Nome do Proprietário"
          placeholder="Digite o nome do proprietário"
          width="79%"
        />
        <Input
          name="cpf_cnpj_proprietario"
          label="CPF/CNPJ do Proprietário"
          placeholder="Digite o CPF ou CNPJ do proprietário"
          width="20%"
        />
        <Input
          name="endereco_empreendimento"
          label="Endereço do Empreendimento"
          placeholder="Digite o endereço do empreendimento"
        />
        <Input
          name="ponto_referencia"
          label="Ponto de Referência"
          placeholder="Digite o ponto de referência"
        />

        <Input
          name="observacao"
          label="Observação"
          placeholder="Digite alguma observação"
        />

        <button type="submit">Enviar</button>
      </Form>
    </FormWrapper>
  );
}

export default EnterpriseForm;
