-- CreateTable
CREATE TABLE "Empreendimento" (
    "cod_empreendimento" TEXT NOT NULL PRIMARY KEY,
    "cod_anterior" TEXT,
    "data_cadastro" DATETIME NOT NULL,
    "nome_proprietario" TEXT NOT NULL,
    "cpf_cnpj_proprietario" TEXT NOT NULL,
    "emp_nm_empreendimento" TEXT NOT NULL,
    "endereco_empreendimento" TEXT NOT NULL,
    "ponto_referencia" TEXT,
    "observacao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Usuario" (
    "emp_nu_cpfcnpj" TEXT NOT NULL PRIMARY KEY,
    "cod_empreendimento" TEXT NOT NULL,
    "emp_nm_usuario" TEXT NOT NULL,
    "emp_apel_usuario" TEXT NOT NULL,
    "relacao_usuario_proprietario" TEXT NOT NULL,
    "tipo_acordo_com_proprietario" TEXT NOT NULL,
    "emp_ds_logradouro" TEXT NOT NULL,
    "emp_ds_bairro" TEXT NOT NULL,
    "emp_nu_logradouro" TEXT NOT NULL,
    "emp_nm_municipio" TEXT NOT NULL,
    "emp_sg_uf" TEXT NOT NULL,
    "emp_ds_emailresponsavel" TEXT NOT NULL,
    "emp_nu_ddd" TEXT NOT NULL,
    "emp_nu_telefone" TEXT NOT NULL,
    "emp_ds_complementoendereco" TEXT NOT NULL,
    "emp_nu_caixapostal" TEXT NOT NULL,
    "emp_nu_cependereco" TEXT NOT NULL,
    "regularizado" TEXT NOT NULL,
    "outras_informacoes" TEXT NOT NULL,
    CONSTRAINT "Usuario_cod_empreendimento_fkey" FOREIGN KEY ("cod_empreendimento") REFERENCES "Empreendimento" ("cod_empreendimento") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Interferencia" (
    "cod_interferencia" TEXT NOT NULL PRIMARY KEY,
    "cod_empreendimento" TEXT NOT NULL,
    "int_nm_interferencia" TEXT NOT NULL,
    "int_nm_corpohidrico" TEXT NOT NULL,
    "int_tch_ds" TEXT NOT NULL,
    "int_tdm_ds" TEXT NOT NULL,
    "int_tin_ds" TEXT NOT NULL,
    "int_tsi_ds" TEXT NOT NULL,
    "int_tsu_ds" TEXT NOT NULL,
    "ing_nm_municipio" TEXT NOT NULL,
    "ing_sg_ufmunicipio" TEXT NOT NULL,
    "int_nm_margem" TEXT NOT NULL,
    "fin_tfn_ds" TEXT NOT NULL,
    "fin_secundaria" TEXT NOT NULL,
    "fin_terciaria" TEXT NOT NULL,
    "cte_tca_ds_1" TEXT NOT NULL,
    "cte_tca_ds_2" TEXT NOT NULL,
    "cte_nu_cabecas_1" TEXT NOT NULL,
    "cte_nu_cabecas_2" TEXT NOT NULL,
    "cte_tsc_ds_1" TEXT NOT NULL,
    "cte_tsc_ds_2" TEXT NOT NULL,
    "ttc_tcu_ds" TEXT NOT NULL,
    "fes_nu_areatotaltanque" TEXT NOT NULL,
    "fes_nu_profundidademediatanque" TEXT NOT NULL,
    "numero_tanques" TEXT NOT NULL,
    "nu_pessoas" TEXT NOT NULL,
    "int_nu_bombas" TEXT NOT NULL,
    "emp_nu_barreiros" TEXT NOT NULL,
    "fonte_energia" TEXT NOT NULL,
    "unidade_consumidora" TEXT NOT NULL,
    "nome_inscrito" TEXT NOT NULL,
    "observacao_finalidade" TEXT NOT NULL,
    "int_cd_regla" TEXT NOT NULL,
    "int_nu_cnarh" TEXT NOT NULL,
    CONSTRAINT "Interferencia_cod_empreendimento_fkey" FOREIGN KEY ("cod_empreendimento") REFERENCES "Empreendimento" ("cod_empreendimento") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Empreendimento_cod_empreendimento_key" ON "Empreendimento"("cod_empreendimento");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_emp_nu_cpfcnpj_key" ON "Usuario"("emp_nu_cpfcnpj");

-- CreateIndex
CREATE UNIQUE INDEX "Interferencia_cod_interferencia_key" ON "Interferencia"("cod_interferencia");
