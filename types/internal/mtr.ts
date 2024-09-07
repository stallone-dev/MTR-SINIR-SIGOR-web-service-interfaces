/*
    This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import type {
    acondicionamento,
    classe,
    codigoONU,
    estadoFisico,
    tratamento,
    unidadeDeMedida,
} from "./residuos.ts";

export type {
    consultalistaDeResiduos,
    controlelistaDeResiduos,
    recebimentoListaDeResiduos,
};

/**
 * Inteface da listagem de resíduos específica para CONSULTA DE MTR
 */
interface consultalistaDeResiduos {
    residuo: {
        resCodigo: number;
        resCodigoIbama: string;
        resDescricao: string;
    };
    unidade: Required<unidadeDeMedida>;
    tratamento: Required<tratamento>;
    tipoEstado: Required<estadoFisico>;
    tipoAcondicionamento: Required<acondicionamento>;
    classe: Pick<classe, "claCodigo" | "claDescricao">;
    marQuantidade: number;
    marQuantidadeRecebida: number | null;
    marDensidade: number | null;
    marJustificativa: string | null;
    marObservacao: string | null;
    marNumeroONU: number | null;
    marClasseRisco: string | null;
    marNomeEmbarque: string | null;
    grupoEmbalagem: Pick<codigoONU, "greCodigo" | "greDescricao">;
    descricaoInterna: string | null;
    marCodigoInterno: number | null;
}

/**
 * Interface da listagem de resíduos específica para RECEBIMENTO DO MTR
 */
interface recebimentoListaDeResiduos {
    resCodigoIbama: string;
    resCodigoIbamaNovo?: string;
    marQuantidade: number;
    marQuantidadeRecebida: number;
    traCodigo: number;
    traCodigoNovo?: number;
    uniCodigo: number;
    marJustificativa: string;
    tieCodigo: number;
    tiaCodigo: number;
    claCodigo: number;
    marDensidade?: number;
    marNumeroONU?: string;
    marClasseRisco?: string;
    marNomeEmbarque?: string;
    greCodigo?: 1 | 2 | 3 | 4;
}

interface controlelistaDeResiduos {
    restResponseValido: boolean;
    restResponseMensagem: string;
    codigoGerado: string | null;
    manCodigo: string | null;
    resCodigoIbama: string;
    resCodigoIbamaNovo: string | null;
    marQuantidade: number;
    marQuantidadeRecebida: number | null;
    uniCodigo: number;
    tieCodigo: number;
    claCodigo: number;
    tiaCodigo: number;
    traCodigo: number;
    traCodigoNovo: number | null;
    marNumeroONU: string | null;
    marClasseRisco: string | null;
    marNomeEmbarque: string | null;
    greCodigo: string | number | null;
    marCodigoInterno: string | null;
    marDescricaoInterna: string | null;
    observacoes: string | null;
    marGrupoEmbalagem: string | null;
    marJustificativa: string | null;
    marDensidade: number | null;
}
