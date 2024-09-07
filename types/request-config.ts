/*
    This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import type * as MTR_ from "./internal/mtr.ts";
import type * as AUTH_ from "./auth.ts";

export type {
    aceitarAlteracaoRecebimentoMTR,
    cancelarLoteMTR,
    cancelarMTR,
    consultarAcondicionamentosParaEstadoFisico,
    consultarClassesParaCodIBAMA,
    consultarMTR,
    downloadCDF,
    downloadMTR,
    gerarAuthToken,
    gerarCDF,
    gerarLoteMTR,
    gerarMTRComplementar,
    listarAcondiconamentos,
    listarClassesResiduos,
    listarEstadosFisicos,
    listarResiduos,
    listarTratamentos,
    listarUnidadesMedida,
    receberLoteMTR,
    retornaMTRsPorSeuCodigo,
    solicitarAlteracaoRecebimentoMTR,
};

/**
 * Interface para requisição de um Token de acesso
 * @requires POST
 * @requires BODY
 */
interface gerarAuthToken extends AUTH_.credentials {}

/**
 * Interface para requisição de MTRs pelo 'seuCodigo"
 * @requires POST
 * @requires BODY
 * @SIGOR_ONLY
 */
interface retornaMTRsPorSeuCodigo {
    suaUnidade: string;
    seuCodigo: string;
}

/**
 * Interface para cancelamento de um MTR
 * @requires POST
 * @requires BODY
 */
interface cancelarMTR {
    manNumero: string;
    justificativa: string;
}

/**
 * Interface para cancelamento de múltiplos MTRs
 * @requires POST
 * @requires BODY
 * @SIGOR_ONLY
 */
interface cancelarLoteMTR {
    manNumero: string;
    justificativa: string;
}

/**
 * Interface para solicitação de alteração de um MTR já recebido
 * @requires POST
 * @requires BODY
 */
interface solicitarAlteracaoRecebimentoMTR {
    parCodigoDestinador: string;
    remObservacao: string;
    manifesto: {
        manNumero: string;
        listaManifestoResiduo: {
            marQuantidade: number;
            marQuantidadeRecebida: number;
            resCodigoIbama: string;
            claCodigo: number;
            claCodigoNovo: number;
            traCodigo: number;
            traCodigoNovo: number;
        }[];
    };
}

/**
 * Interface para validação de um pedido de alteração de um MTR já recebido
 * @requires POST
 * @requires BODY
 */
interface aceitarAlteracaoRecebimentoMTR {
    parCodigoGerador: string;
    manNumero: string;
    aceite: "A" | "R" | "C";
}

/**
 * Interface para geração de novos MTRs
 * @requires POST
 * @requires BODY
 */
interface gerarLoteMTR {
    nomeResponsavel: string;
    seuCodigo?: string;
    dataExpedicao?: number;
    nomeMotorista?: string;
    placaVeiculo?: string;
    observacoes?: string;

    transportador: {
        unidade: number;
        cpfCnpj: string;
    };
    destinador: {
        unidade: number;
        cpfCnpj: string;
    };
    armazenadorTemporario: {
        unidade: number | 99999; // Cód. p/falta de armazenador temp.
        cpfCnpj: string | "99999999999999"; // Cod. p/falta de armazenador temp.
    };
    listaManifestoResiduos: Omit<
        MTR_.recebimentoListaDeResiduos,
        "marQuantidadeRecebida" | "marJustificativa"
    >[];
}

/**
 * Interface para recebimento de MTRs
 * @requires POST
 * @requires BODY
 */
interface receberLoteMTR {
    manNumero: string;
    dataRecebimento: number;
    nomeMotorista: string;
    placaVeiculo: string;
    nomeResponsavelRecebimento: string;
    observacoes?: string;
    listaManifestoResiduos: MTR_.recebimentoListaDeResiduos[];
}

/**
 * Interface para geração de CDFs
 * @requires POST
 * @requires BODY
 */
interface gerarCDF {
    cerDataInicial: number;
    cerDataFinal: number;
    cerObservacao?: string;
    parceiroDestinador: number;
    cnpjDestinador: string;
    tipoCertificadoDestinacao: 1;

    nomeResponsavel: string;

    listaManifesto?: { manNumero: string }[];
    listaParceiroGerador?: { unidade: number; cpfCnpj: string }[];
}

/**
 * Interface para geração de MTRs complementares
 * @requires POST
 * @requires BODY
 * @SIGOR_ONLY
 */
interface gerarMTRComplementar {
    nomeMotorista: string;
    placaVeiculo: string;
    observacoes?: string;
    transportador: {
        unidade: number;
        cpfCnpj: string;
    };
    listaManifesto: { manNumero: string }[];
}

/** Lista de classes de resíduos @requires POST */
type listarClassesResiduos = null;

/** Listar unidades de medida @requires POST */
type listarUnidadesMedida = null;

/** Lista de tratamentos @requires POST */
type listarTratamentos = null;

/** Lista de estados físicos @requires POST */
type listarEstadosFisicos = null;

/** Lista de acondicionamentos @requires POST */
type listarAcondiconamentos = null;

/** Lista de resíduos @requires POST */
type listarResiduos = null;

/** Download de MTR @requires POST */
type downloadMTR = null;

/** Download de CDF @requires POST */
type downloadCDF = null;

/** Consultar dados de um determinado MTR
 * @requires GET
 * @requires PATH_STRING
 */
type consultarMTR = string;

/** Lista de classes para determinado resíduo
 * @requires POST
 * @requires PATH_STRING
 */
type consultarClassesParaCodIBAMA = string;

/** Lista de acondicionamentos para determinado estado físico
 * @requires POST
 * @requires PATH_STRING
 */
type consultarAcondicionamentosParaEstadoFisico = string;
