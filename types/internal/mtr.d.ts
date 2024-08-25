import type { RESIDUOS_ } from "./residuos.d";

/**
 * Especificações do Manifesto de Transporte de Residuos (MTR)
 */
export namespace MTR_ {
    /**
     * Dados básicos para identificação do MTR
     */
    export interface identificacao {
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
    export interface listaDeResiduos
        extends RESIDUOS_.acondicionamento,
            RESIDUOS_.classe,
            RESIDUOS_.codigoIbama,
            RESIDUOS_.estadoFisico,
            RESIDUOS_.codigoONU,
            RESIDUOS_.quantidade,
            RESIDUOS_.tratamento,
            RESIDUOS_.unidadeDeMedida {}
}
