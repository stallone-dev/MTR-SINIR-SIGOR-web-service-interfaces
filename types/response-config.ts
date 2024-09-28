/*
    This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import type * as MTR_ from "./internal/mtr.ts";
import type * as RESIDUO_ from "./internal/residuos.ts";
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
    listarAcondicionamentos,
    listarClassesResiduos,
    listarEstadosFisicos,
    listarResiduos,
    listarTratamentos,
    listarUnidadesMedida,
    receberLoteMTR,
    retornaMTRsPorSeuCodigo,
    solicitarAlteracaoRecebimentoMTR,
};

/** Token de acesso para utilização nas APIs */
type gerarAuthToken = AUTH_.token;
/** Buffer de bytes contendo o PDF do MTR */
type downloadMTR = ReadableStream<Uint8Array>;
/** Buffer de bytes contendo o PDF do CDF */
type downloadCDF = ReadableStream<Uint8Array>;
/** Confirmação do resultado do pedido de cancelamento */
type cancelarMTR = string;
/** Confirmação do resultado do pedido de cancelamento @SIGOR_ONLY */
type cancelarLoteMTR = string[];

/**
 * Interface de retorno de MTRs pelo "seuCodigo"
 * @SIGOR_ONLY
 */
interface retornaMTRsPorSeuCodigo extends consultarMTR {}

/**
 * Listagem dos resíduos conforme classificação IBAMA
 */
interface listarResiduos extends Required<RESIDUO_.codigoIbama[]> {}

/**
 * Listagem das unidades de medida aceitas pelo WebService
 */
interface listarUnidadesMedida extends Required<RESIDUO_.unidadeDeMedida[]> {}

/**
 * Listagem dos estados físicos aceitos pelo WebService
 */
interface listarEstadosFisicos extends Required<RESIDUO_.estadoFisico[]> {}

/**
 * Listagem dos acondicionamentos aceitos pelo WebService
 */
interface listarAcondicionamentos
    extends Required<RESIDUO_.acondicionamento[]> {}

/**
 * Listagem das classes de resíduos conforme classificação IBAMA
 */
interface listarClassesResiduos
    extends Omit<RESIDUO_.classe[], "claCodigoNovo"> {}

/**
 * Listagem dos tratamentos de resíduos aceitos pelo WebService
 */
interface listarTratamentos
    extends Omit<RESIDUO_.tratamento[], "traCodigoNovo"> {}

/**
 * Listagem das classes válidas para o resíduo específico
 */
interface consultarClassesParaCodIBAMA
    extends Required<RESIDUO_.codigoIbama[]> {}

/**
 * Listagem dos acondicionamentos permitidos por estado físico
 */
interface consultarAcondicionamentosParaEstadoFisico
    extends Required<RESIDUO_.acondicionamento[]> {}

/**
 * Resultado da geração de manifesto complementar
 * @SISGR_ONLY
 */
interface gerarMTRComplementar {
    restResponseValido: boolean;
    restResponseMensagem: null | string;
    manifestoComplementar: string;
    transportador: {
        restResponseValido: boolean;
        restResponseMensagem: null | string;
        cpfCnpj: string;
        unidade: number;
    };
    nomeMotorista: string;
    placaVeiculo: string;
    observacoes: string;
    listaManifesto: {
        restResponseValido: boolean;
        restResponseMensagem: null | string;
        manNumero: string;
    }[];
}

/**
 * Interface do retorno obtido ao consultar uma MTR
 */
interface consultarMTR {
    manNumero: string;
    manData: number;
    manResponsavel: string;
    manDataExpedicao: number | null;
    manNomeMotorista: string;
    manPlacaVeiculo: string;
    manObservacao: string;
    manJustificativaCancelamento: string;
    estado: {
        estCodigo: number;
        estAbreviacao: string;
    };
    parceiroGerador: {
        parCodigo: number;
        parDescricao: string;
        parCnpj: string;
    };
    parceiroTransportador: {
        parCodigo: number;
        parDescricao: string;
        parCnpj: string;
    };
    parceiroDestinador: {
        parCodigo: number;
        parDescricao: string;
        parCnpj: string;
    };
    parceiroArmazenadorTemporario: {
        parCodigo: number | null;
        parDescricao: string;
        parCnpj: string | null;
    };
    situacaoManifesto: {
        simCodigo: number;
        simDescricao: string;
        simOrdem: number;
        simDataRecebimento?: string; // Específico SINIR
    };
    manNumeroEstadual: string | null;
    listaManifestoResiduo: MTR_.consultalistaDeResiduos[];

    cdfNumero?: number | null; // Específico SINIR
    dataRecebimentoAT?: string; // Específico SINIR

    manResponsavelRecebimento?: string | null; // Específico SIGOR
    manDataRecebimentoArmazenamentoTemporario?: string | null; // Específico SIGOR
    manDataRecebimentoDestinador?: string | null; // Específico SIGOR
    cdfCodigo?: number | null; // Específico SIGOR
}

/**
 * Resultado da geração de um lote de MTRs
 */
interface gerarLoteMTR {
    restResponseValido: boolean;
    restResponseMensagem: string;
    codigoGerado: number;
    manifestoCodigoEstadual: string | null;
    manifestoNumeroEstadual: string | null;
    manifestoNumeroNacional: string;

    possuiArmazenamentoTemporario: boolean | null;
    armazenadorTemporario: string | null;
    nomeResponsavel: string;
    transportador: {
        restResponseValido: boolean;
        restResponseMensagem: string;
        cpfCnpj: string;
        unidade: string;
    };
    nomeMotorista: string | null;
    placaVeiculo: string | null;
    dataExpedicao: number | null;
    destinador: {
        restResponseValido: boolean;
        restResponseMensagem: string;
        cpfCnpj: string;
        unidade: string;
    };
    gerador: string | null;
    ufOrigemMtr: string | null;
    tipoManifesto: string | null;
    observacoes: string;
    listaManifestoResiduos: MTR_.controlelistaDeResiduos[];
    erroNacional: boolean;
    mensagemErroNacional: string | null;
}

/**
 * Resultado do processo de recebimento da MTR
 */
interface receberLoteMTR {
    restResponseValido: boolean;
    restResponseMensagem: string;
    manNumero: string;
    nomeMotorista: string;
    placaVeiculo: string;
    dataRecebimento: number;
    nomeResponsavelRecebimento: string;
    observacoes: string | null;
    listaManifestoResiduo: MTR_.controlelistaDeResiduos[];
    erroNacional: boolean;
    mensagemErroNacional: string | null;
}

/**
 * Resultado do processo de geração do CDF a partir das MTRs ou gerador indicados
 */
interface gerarCDF {
    restResponseValido: boolean;
    restResponseMensagem: string;
    codigoGerado: string;
    cerDataInicial: number;
    cerDataFinal: number;
    nomeResponsavel: string;
    parceiroDestinador: string;
    cnpjDestinador: string;
    cerObservacao: string | null;
    listaParceiroGerador: {
        restResponseValido: boolean;
        restResponseMensagem: string;
        numeroCDF: number;
        cpfCnpj: string;
        unidade: string;
        listaManifesto: {
            restResponseValido: boolean;
            restResponseMensagem: string;
            manNumero: string;
        }[];
    }[];
}

/**
 * Retorno da solicitação de alteração de recebimento do MTR
 */
interface solicitarAlteracaoRecebimentoMTR {
    restResponseValido: boolean;
    restResponseMensagem: string;
    codigoGerado: string | null;
    parCodigoDestinador: string;
    remObservacao: string;
    manifesto: {
        restResponseValido: boolean;
        restResponseMensagem: string | null;
        codigoGerado: string | null;
        manNumero: string;
        listaManifestoResiduo: MTR_.controlelistaDeResiduos[];
    };
}

/**
 * Retorno da conclusão do pedidod e alteração de recebimento do MTR
 */
interface aceitarAlteracaoRecebimentoMTR {
    restResponseValido: boolean;
    restResponseMensagem: string;
    parCodigoGerador: string;
    manNumero: string;
    aceite: "A" | "R" | "C";
}
