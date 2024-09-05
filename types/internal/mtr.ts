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
interface listaDeResiduos {
    residuo: {
        resCodigo: number;
        resCodigoIbama: string;
        resDescricao: string;
    };

    unidade: RESIDUOS_.unidadeDeMedida;
    tratamento: RESIDUOS_.tratamento;
    tipoEstado: RESIDUOS_.estadoFisico;
    tipoAcondicionamento: RESIDUOS_.acondicionamento;
    classe: RESIDUOS_.classe;
    marQuantidade: number;
    marQuantidadeRecebida: number | null;
    marDensidade: number | null;
    marJustificativa: string | null;
    marObservacao: string | null;
    marNumeroONU: number | null;
    marClasseRisco: string | null;
    marNomeEmbarque: string | null;
    grupoEmbalagem: 1 | 2 | 3 | 4;
    marDescricaoInterna: string | null;
    marCodigoInterno: number | null;
}
