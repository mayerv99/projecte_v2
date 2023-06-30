import { useRef, useContext, useState } from "react";

import { FormWrapper, InputsWrapper } from "../styled";

import CloseButton from "../../CloseButton";

import { baseContext } from "../../../Context/BaseContext";

import { Form } from "@unform/web";
import * as Yup from "yup";

import Input from "../Input";
import Select from "../Select";

import * as options from "./selects";

import { createInterference } from "../../../Services/interference";

function InterferencesForm() {
  const formRef = useRef(null);

  const { setSelectedForm, selectedEnterprise, fetchInterferences } =
    useContext(baseContext);

  const schema = Yup.object().shape({
    cod_interferencia: Yup.string().required("Campo obrigatório"),
    int_nm_interferencia: Yup.string().required("Campo obrigatório"),
    int_nm_corpohidrico: Yup.string().required("Campo obrigatório"),
    ing_nm_municipio: Yup.string().required("Campo obrigatório"),
    ing_sg_ufmunicipio: Yup.string().required("Campo obrigatório"),
    observacao: Yup.string(),
  });

  const handleFormSubmit = async (data) => {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});

      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed
      const selectsData = {
        int_tch_ds: type?.value,
        int_tdm_ds: domain?.value,
        int_tin_ds: typeInt?.valuet,
        int_tsi_ds: situation?.value,
        int_tsu_ds: subType?.value,
        int_nm_margem: margin?.value,
        fin_tfn_ds: fin?.value,
        fin_secundaria: finSec?.value,
        fin_terciaria: finThird?.value,
        cte_tca_ds_1: animal?.value,
        cte_tca_ds_2: animal_two?.value,
        cte_tsc_ds_1: creation?.value,
        cte_tsc_ds_2: creation_two?.value,
        ttc_tcu_ds: aqua?.value,
        fonte_energia: source?.value,
      };
      await createInterference({
        cod_empreendimento: selectedEnterprise,
        ...data,
        ...selectsData,
      });
      fetchInterferences();
      setSelectedForm(0);
      // setSelectedForm(0);
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        console.log(validationErrors);
        formRef.current.setErrors(validationErrors);
      }
    }
  };

  const [type, setType] = useState();
  const [domain, setDomain] = useState();
  const [typeInt, setTypeInt] = useState();
  const [situation, setSituation] = useState();
  const [subType, setSubType] = useState();
  const [margin, setMargin] = useState();
  const [fin, setFin] = useState();
  const [finSec, setFinSec] = useState();
  const [finThird, setFinThird] = useState();
  const [animal, setAnimal] = useState();
  const [animal_two, setAnimal_two] = useState();

  const [creation, setCreation] = useState();
  const [creation_two, setCreation_two] = useState();

  const [aqua, setAqua] = useState();
  const [source, setSource] = useState();

  const goals = [
    fin && fin.value && fin.value,
    finSec && finSec.value && finSec.value,
    finThird && finThird.value && finThird.value,
  ];

  const showAnimalCreation = goals.includes("Criação Animal");

  const showAqua =
    goals.includes("Aquicultura em Tanque Escavado") ||
    goals.includes("Aquicultura em Tanque Rede");

  const showHuman = goals.includes(
    "Reservatório/Barramento/Regularização de Vazões para Usos Múltiplos Consumo Humano"
  );

  return (
    <FormWrapper>
      <CloseButton />
      <Form
        initialData={{
          cod_interferencia: `I${selectedEnterprise.replace("C", "")}`,
        }}
        ref={formRef}
        onSubmit={handleFormSubmit}
      >
        <Input
          name="cod_interferencia"
          label="Código da Interferência"
          placeholder="Digite o código"
          width="20%"
        />

        <Input
          name="int_nm_interferencia"
          label="Nome da Interferência"
          placeholder="Digite o nome"
          width="79%"
        />
        <Input
          name="int_nm_corpohidrico"
          label="Nome do Corpo Hídrico"
          placeholder="Digite o nome"
          width="69%"
        />
        <Select
          name="int_tch_ds"
          label="Tipo Corpo Hídrico"
          placeholder="Digite a descrição"
          options={options.tipoCorpohidricoOptions}
          value={type}
          setValue={(e) => setType(e)}
          width="29%"
        />
        <Select
          name="int_tdm_ds"
          label="Dominio"
          placeholder="Digite a descrição"
          options={options.dominioOptions}
          value={domain}
          setValue={(e) => setDomain(e)}
          width="24%"
        />
        <Select
          name="int_tin_ds"
          label="Tipo da interferência"
          placeholder="Digite a descrição"
          options={options.tipoInterferenciaOptions}
          value={typeInt}
          setValue={(e) => setTypeInt(e)}
          width="24%"
        />
        <Select
          name="int_tsi_ds"
          label="Situação interferência"
          placeholder="Digite a descrição"
          options={options.situacaoInterferenciaOptions}
          value={situation}
          setValue={(e) => setSituation(e)}
          width="24%"
        />
        <Select
          name="int_tsu_ds"
          label="Subtipo"
          placeholder="Digite a descrição"
          options={options.subtipoInterferenciaOptions}
          value={subType}
          setValue={(e) => setSubType(e)}
          width="24%"
        />
        <Input
          name="ing_nm_municipio"
          label="Nome do Município"
          placeholder="Digite o nome"
          width="79%"
        />
        <Input
          name="ing_sg_ufmunicipio"
          label="UF do Município"
          placeholder="Digite a UF"
          width="20%"
        />
        <Select
          name="int_nm_margem"
          label="Nome da Margem"
          placeholder="Digite o nome"
          options={options.margemOptions}
          value={margin}
          setValue={(e) => setMargin(e)}
        />
        {/* Finalidades */}
        <Select
          name="fin_tfn_ds"
          label="Finalidade Principal"
          placeholder="Digite a descrição"
          options={options.finalidadeOptions}
          value={fin}
          setValue={(e) => setFin(e)}
          width="32%"
        />
        <Select
          name="fin_secundaria"
          label="Finalidade Secundária"
          placeholder="Digite o valor"
          options={options.finalidadeOptions}
          value={finSec}
          setValue={(e) => setFinSec(e)}
          width="32%"
        />
        <Select
          name="fin_terciaria"
          label="Finalidade Terciária"
          placeholder="Digite o valor"
          options={options.finalidadeOptions}
          value={finThird}
          setValue={(e) => setFinThird(e)}
          width="32%"
        />
        {/* Animal Creation */}
        {showAnimalCreation && (
          <InputsWrapper>
            <h2>Criação animal</h2>
            <div>
              <Select
                name="cte_tca_ds_1"
                label="Espécie criação animal 1"
                placeholder="Digite a descrição"
                options={options.criacaoAnimalOptions}
                value={animal}
                setValue={(e) => setAnimal(e)}
                width="30%"
              />
              <Input
                name="cte_nu_cabecas_1"
                label="Número de Cabeças 1"
                placeholder="Digite o número"
                width="30%"
              />
              <Select
                name="cte_tsc_ds_1"
                label="Sistema criação 1"
                placeholder="Digite a descrição"
                options={options.sistemaCriacaoOptions}
                value={creation}
                serValue={(e) => setCreation(e)}
                width="30%"
              />
            </div>

            <div>
              <Select
                name="cte_tca_ds_2"
                label="Espécie criação animal 2"
                placeholder="Digite a descrição"
                options={options.criacaoAnimalOptions}
                value={animal_two}
                setValue={(e) => setAnimal_two(e)}
                width="30%"
              />
              <Input
                name="cte_nu_cabecas_2"
                label="Número de Cabeças 2"
                placeholder="Digite o número"
                width="30%"
              />

              <Select
                name="cte_tsc_ds_2"
                label="Sistema criação 2"
                placeholder="Digite a descrição"
                options={options.sistemaCriacaoOptions}
                value={creation_two}
                setValue={(e) => setCreation_two(e)}
                width="30%"
              />
            </div>
          </InputsWrapper>
        )}
        {/* Aquaculture */}
        {showAqua && (
          <InputsWrapper>
            <h2>Aquicultura</h2>
            <Select
              name="ttc_tcu_ds"
              label="Cultivo Aquacultura"
              placeholder="Digite a descrição"
              options={options.cultivoAquiculturaOptions}
              value={aqua}
              setValue={(e) => setAqua(e)}
            />
            <Input
              name="fes_nu_areatotaltanque"
              label="Área Total do Tanque"
              placeholder="Digite a área"
            />
            <Input
              name="fes_nu_profundidademediatanque"
              label="Profundidade Média do Tanque"
              placeholder="Digite a profundidade"
            />

            <Input
              name="numero_tanques"
              label="Número de Tanques"
              placeholder="Digite o número"
            />
          </InputsWrapper>
        )}
        {showHuman && (
          <InputsWrapper>
            <h2>Consumo humano</h2>
            <div>
              <Input
                name="nu_pessoas"
                label="Número de Pessoas"
                placeholder="Digite o número"
              />
            </div>
          </InputsWrapper>
        )}
        <Input
          name="int_nu_bombas"
          label="Número de Bombas"
          placeholder="Digite o número"
        />
        <Input
          name="emp_nu_barreiros"
          label="Número de Barreiros"
          placeholder="Digite o número"
        />
        <Select
          name="fonte_energia"
          label="Fonte de Energia"
          placeholder="Digite a fonte"
          options={options.fonteEnergiaOptions}
          value={source}
          setValue={setSource}
        />
        <Input
          name="unidade_consumidora"
          label="Unidade Consumidora"
          placeholder="Digite a unidade"
        />
        <Input
          name="nome_inscrito"
          label="Nome Inscrito"
          placeholder="Digite o nome"
        />
        <Input
          name="observacao_finalidade"
          label="Observação Finalidade"
          placeholder="Digite a observação"
        />
        <Input
          name="int_cd_regla"
          label="Código Regla"
          placeholder="Digite o código"
        />
        <Input
          name="int_nu_cnarh"
          label="Número CNARH"
          placeholder="Digite o número"
        />
        <Input
          name="observacao"
          label="Observação"
          placeholder="Digite a observação"
        />

        <button type="submit">Enviar</button>
      </Form>
    </FormWrapper>
  );
}

export default InterferencesForm;
