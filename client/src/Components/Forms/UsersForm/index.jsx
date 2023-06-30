import { useRef, useContext, useState } from "react";

import { FormWrapper } from "../styled";

import CloseButton from "../../CloseButton";

import { baseContext } from "../../../Context/BaseContext";

import { Form } from "@unform/web";
import * as Yup from "yup";

import { createUser } from "../../../Services/user";

import Input from "../Input";
import * as options from "./selects";
import Select from "../Select";

function UsersForm() {
  const formRef = useRef(null);

  const { setSelectedForm, selectedEnterprise, fetchUsers } =
    useContext(baseContext);

  const [relation, setRelation] = useState();
  const [auth, setAuth] = useState();

  const schema = Yup.object().shape({
    emp_nu_cpfcnpj: Yup.string().required("Campo obrigatório"),
    emp_nm_usuario: Yup.string().required("Campo obrigatório"),
    emp_ds_logradouro: Yup.string().required("Campo obrigatório"),
    emp_ds_bairro: Yup.string().required("Campo obrigatório"),
    emp_nm_municipio: Yup.string().required("Campo obrigatório"),
    emp_sg_uf: Yup.string().required("Campo obrigatório"),
    emp_ds_emailresponsavel: Yup.string().email("E-mail inválido"),
    emp_nu_cependereco: Yup.string().required("Campo obrigatório"),
    outras_informacoes: Yup.string(),
  });

  const handleSubmit = async (data) => {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});

      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed
      const fullData = {
        cod_empreendimento: selectedEnterprise,
        ...data,
        tipo_acordo_com_proprietario: auth?.value,
        relacao_usuario_proprietario: relation?.value,
      };
      await createUser(fullData);
      await fetchUsers();
      setSelectedForm(0);
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
        console.log(validationErrors);
      }
    }
  };

  return (
    <FormWrapper>
      <CloseButton />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="emp_nu_cpfcnpj"
          label="CPF/CNPJ"
          placeholder="Digite o CPF ou CNPJ"
          width="20%"
        />
        <Input
          name="emp_nm_usuario"
          label="Nome do Usuário"
          placeholder="Digite o nome do usuário"
          width="39%"
        />
        <Input
          name="emp_apel_usuario"
          label="Apelido do Usuário"
          placeholder="Digite o apelido do usuário"
          width="39%"
        />
        <Select
          name="relacao_usuario_proprietario"
          label="Relação com o Proprietário"
          placeholder="Digite a relação com o proprietário"
          // width="49%"
          value={relation}
          setValue={(e) => setRelation(e)}
          options={options.relacaoUsuarioProprietarioOptions}
        />
        {/* <Select
          name="tipo_acordo_com_proprietario"
          label="Tipo de Acordo com o Proprietário"
          placeholder="Digite o tipo de acordo com o proprietário"
          width="49%"
          options={options.tipoAutorizacaoOptions}
          value={auth}
          setValue={(e) => setAuth(e)}
        /> */}
        <Input
          name="emp_ds_logradouro"
          label="Logradouro"
          placeholder="Digite o logradouro"
          width="24%"
        />
        <Input
          name="emp_ds_bairro"
          label="Bairro"
          placeholder="Digite o bairro"
          width="24%"
        />
        <Input
          name="emp_nu_logradouro"
          label="Número"
          placeholder="Digite o número"
          width="10%"
        />
        <Input
          name="emp_nm_municipio"
          label="Município"
          placeholder="Digite o município"
          width="24%"
        />
        <Input
          name="emp_sg_uf"
          label="UF"
          placeholder="Digite a UF"
          width="10%"
        />

        <Input
          name="emp_ds_complementoendereco"
          label="Complemento do Endereço"
          placeholder="Digite o complemento do endereço"
        />
        <Input
          name="emp_nu_caixapostal"
          label="Caixa Postal"
          placeholder="Digite a caixa postal"
        />
        <Input
          name="emp_nu_cependereco"
          label="CEP"
          placeholder="Digite o CEP"
        />
        <Input
          name="emp_ds_emailresponsavel"
          label="E-mail do Responsável"
          placeholder="Digite o e-mail do responsável"
          width="70%"
        />
        <Input
          name="emp_nu_ddd"
          label="DDD"
          placeholder="Digite o DDD"
          width="10%"
        />
        <Input
          name="emp_nu_telefone"
          label="Telefone"
          placeholder="Digite o telefone"
          width="15%"
        />
        {/* <Select
          name="regularizado"
          label="Regularizado"
          placeholder="Digite a informação de regularização"
          options={options.situacaoRegularizacaoOptions}
        /> */}
        <Input
          name="outras_informacoes"
          label="Outras Informações"
          placeholder="Digite outras informações"
        />
        <button type="submit">Enviar</button>
      </Form>
    </FormWrapper>
  );
}

export default UsersForm;
