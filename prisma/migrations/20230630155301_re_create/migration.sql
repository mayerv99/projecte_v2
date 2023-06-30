/*
  Warnings:

  - Added the required column `observacao` to the `Interferencia` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Usuario" (
    "emp_nu_cpfcnpj" TEXT NOT NULL PRIMARY KEY,
    "cod_empreendimento" TEXT NOT NULL,
    "emp_nm_usuario" TEXT,
    "emp_apel_usuario" TEXT,
    "relacao_usuario_proprietario" TEXT,
    "tipo_acordo_com_proprietario" TEXT,
    "emp_ds_logradouro" TEXT,
    "emp_ds_bairro" TEXT,
    "emp_nu_logradouro" TEXT,
    "emp_nm_municipio" TEXT,
    "emp_sg_uf" TEXT,
    "emp_ds_emailresponsavel" TEXT,
    "emp_nu_ddd" TEXT,
    "emp_nu_telefone" TEXT,
    "emp_ds_complementoendereco" TEXT,
    "emp_nu_caixapostal" TEXT,
    "emp_nu_cependereco" TEXT,
    "regularizado" TEXT,
    "outras_informacoes" TEXT,
    CONSTRAINT "Usuario_cod_empreendimento_fkey" FOREIGN KEY ("cod_empreendimento") REFERENCES "Empreendimento" ("cod_empreendimento") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Usuario" ("cod_empreendimento", "emp_apel_usuario", "emp_ds_bairro", "emp_ds_complementoendereco", "emp_ds_emailresponsavel", "emp_ds_logradouro", "emp_nm_municipio", "emp_nm_usuario", "emp_nu_caixapostal", "emp_nu_cependereco", "emp_nu_cpfcnpj", "emp_nu_ddd", "emp_nu_logradouro", "emp_nu_telefone", "emp_sg_uf", "outras_informacoes", "regularizado", "relacao_usuario_proprietario", "tipo_acordo_com_proprietario") SELECT "cod_empreendimento", "emp_apel_usuario", "emp_ds_bairro", "emp_ds_complementoendereco", "emp_ds_emailresponsavel", "emp_ds_logradouro", "emp_nm_municipio", "emp_nm_usuario", "emp_nu_caixapostal", "emp_nu_cependereco", "emp_nu_cpfcnpj", "emp_nu_ddd", "emp_nu_logradouro", "emp_nu_telefone", "emp_sg_uf", "outras_informacoes", "regularizado", "relacao_usuario_proprietario", "tipo_acordo_com_proprietario" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_emp_nu_cpfcnpj_key" ON "Usuario"("emp_nu_cpfcnpj");
CREATE TABLE "new_Empreendimento" (
    "cod_empreendimento" TEXT NOT NULL PRIMARY KEY,
    "cod_anterior" TEXT,
    "data_cadastro" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nome_proprietario" TEXT,
    "cpf_cnpj_proprietario" TEXT,
    "emp_nm_empreendimento" TEXT,
    "endereco_empreendimento" TEXT,
    "ponto_referencia" TEXT,
    "observacao" TEXT
);
INSERT INTO "new_Empreendimento" ("cod_anterior", "cod_empreendimento", "cpf_cnpj_proprietario", "data_cadastro", "emp_nm_empreendimento", "endereco_empreendimento", "nome_proprietario", "observacao", "ponto_referencia") SELECT "cod_anterior", "cod_empreendimento", "cpf_cnpj_proprietario", "data_cadastro", "emp_nm_empreendimento", "endereco_empreendimento", "nome_proprietario", "observacao", "ponto_referencia" FROM "Empreendimento";
DROP TABLE "Empreendimento";
ALTER TABLE "new_Empreendimento" RENAME TO "Empreendimento";
CREATE UNIQUE INDEX "Empreendimento_cod_empreendimento_key" ON "Empreendimento"("cod_empreendimento");
CREATE TABLE "new_Interferencia" (
    "cod_interferencia" TEXT NOT NULL PRIMARY KEY,
    "cod_empreendimento" TEXT NOT NULL,
    "int_nm_interferencia" TEXT,
    "int_nm_corpohidrico" TEXT,
    "int_tch_ds" TEXT,
    "int_tdm_ds" TEXT,
    "int_tin_ds" TEXT,
    "int_tsi_ds" TEXT,
    "int_tsu_ds" TEXT,
    "ing_nm_municipio" TEXT,
    "ing_sg_ufmunicipio" TEXT,
    "int_nm_margem" TEXT,
    "fin_tfn_ds" TEXT,
    "fin_secundaria" TEXT,
    "fin_terciaria" TEXT,
    "cte_tca_ds_1" TEXT,
    "cte_tca_ds_2" TEXT,
    "cte_nu_cabecas_1" TEXT,
    "cte_nu_cabecas_2" TEXT,
    "cte_tsc_ds_1" TEXT,
    "cte_tsc_ds_2" TEXT,
    "ttc_tcu_ds" TEXT,
    "fes_nu_areatotaltanque" TEXT,
    "fes_nu_profundidademediatanque" TEXT,
    "numero_tanques" TEXT,
    "nu_pessoas" TEXT,
    "int_nu_bombas" TEXT,
    "emp_nu_barreiros" TEXT,
    "fonte_energia" TEXT,
    "unidade_consumidora" TEXT,
    "nome_inscrito" TEXT,
    "observacao_finalidade" TEXT,
    "int_cd_regla" TEXT,
    "int_nu_cnarh" TEXT,
    "observacao" TEXT NOT NULL,
    CONSTRAINT "Interferencia_cod_empreendimento_fkey" FOREIGN KEY ("cod_empreendimento") REFERENCES "Empreendimento" ("cod_empreendimento") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Interferencia" ("cod_empreendimento", "cod_interferencia", "cte_nu_cabecas_1", "cte_nu_cabecas_2", "cte_tca_ds_1", "cte_tca_ds_2", "cte_tsc_ds_1", "cte_tsc_ds_2", "emp_nu_barreiros", "fes_nu_areatotaltanque", "fes_nu_profundidademediatanque", "fin_secundaria", "fin_terciaria", "fin_tfn_ds", "fonte_energia", "ing_nm_municipio", "ing_sg_ufmunicipio", "int_cd_regla", "int_nm_corpohidrico", "int_nm_interferencia", "int_nm_margem", "int_nu_bombas", "int_nu_cnarh", "int_tch_ds", "int_tdm_ds", "int_tin_ds", "int_tsi_ds", "int_tsu_ds", "nome_inscrito", "nu_pessoas", "numero_tanques", "observacao_finalidade", "ttc_tcu_ds", "unidade_consumidora") SELECT "cod_empreendimento", "cod_interferencia", "cte_nu_cabecas_1", "cte_nu_cabecas_2", "cte_tca_ds_1", "cte_tca_ds_2", "cte_tsc_ds_1", "cte_tsc_ds_2", "emp_nu_barreiros", "fes_nu_areatotaltanque", "fes_nu_profundidademediatanque", "fin_secundaria", "fin_terciaria", "fin_tfn_ds", "fonte_energia", "ing_nm_municipio", "ing_sg_ufmunicipio", "int_cd_regla", "int_nm_corpohidrico", "int_nm_interferencia", "int_nm_margem", "int_nu_bombas", "int_nu_cnarh", "int_tch_ds", "int_tdm_ds", "int_tin_ds", "int_tsi_ds", "int_tsu_ds", "nome_inscrito", "nu_pessoas", "numero_tanques", "observacao_finalidade", "ttc_tcu_ds", "unidade_consumidora" FROM "Interferencia";
DROP TABLE "Interferencia";
ALTER TABLE "new_Interferencia" RENAME TO "Interferencia";
CREATE UNIQUE INDEX "Interferencia_cod_interferencia_key" ON "Interferencia"("cod_interferencia");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
