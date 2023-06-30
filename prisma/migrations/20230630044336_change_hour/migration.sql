-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Empreendimento" (
    "cod_empreendimento" TEXT NOT NULL PRIMARY KEY,
    "cod_anterior" TEXT,
    "data_cadastro" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nome_proprietario" TEXT NOT NULL,
    "cpf_cnpj_proprietario" TEXT NOT NULL,
    "emp_nm_empreendimento" TEXT NOT NULL,
    "endereco_empreendimento" TEXT NOT NULL,
    "ponto_referencia" TEXT,
    "observacao" TEXT NOT NULL
);
INSERT INTO "new_Empreendimento" ("cod_anterior", "cod_empreendimento", "cpf_cnpj_proprietario", "data_cadastro", "emp_nm_empreendimento", "endereco_empreendimento", "nome_proprietario", "observacao", "ponto_referencia") SELECT "cod_anterior", "cod_empreendimento", "cpf_cnpj_proprietario", "data_cadastro", "emp_nm_empreendimento", "endereco_empreendimento", "nome_proprietario", "observacao", "ponto_referencia" FROM "Empreendimento";
DROP TABLE "Empreendimento";
ALTER TABLE "new_Empreendimento" RENAME TO "Empreendimento";
CREATE UNIQUE INDEX "Empreendimento_cod_empreendimento_key" ON "Empreendimento"("cod_empreendimento");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
