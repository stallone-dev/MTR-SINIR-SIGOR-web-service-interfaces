import type * as RESIDUOS_ from "./residuos.ts";

export type { identificacao, listaDeResiduos };

/**
 * Dados básicos para identificação do MTR
 */
interface identificacao {
    tipoManifesto?: 1;
    manNumero?: string;
    nomeMotorista?: string;
    placaVeiculo?: string;
    observacoes?: string;
    listaManifestoResiduos: listaDeResiduos[];
}

/**
 * Inteface para listagem dos resíduos contidos no MTR
 */
interface listaDeResiduos
    extends
        RESIDUOS_.acondicionamento,
        RESIDUOS_.classe,
        RESIDUOS_.codigoIbama,
        RESIDUOS_.estadoFisico,
        RESIDUOS_.codigoONU,
        RESIDUOS_.quantidade,
        RESIDUOS_.tratamento,
        RESIDUOS_.unidadeDeMedida {}
