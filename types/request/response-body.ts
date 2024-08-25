import { INTERNAL_ } from "../internal.ts";

/**
 * Interfaces para mapeamento das respostas enviadas pela API
 */
export namespace RESPONSE_BODY_ {
    /** Token de acesso para utilização nas APIs */
    export type gerarToken = INTERNAL_.auth.tokenDeAcesso;
    /** Buffer de bytes contendo o PDF do MTR */
    export type downloadMtr = ArrayBuffer;
    /** Buffer de bytes contendo o PDF do CDF */
    export type downloadCdf = ArrayBuffer;
    /** Confirmação do resultado do pedido de cancelamento */
    export type cancelarMtr = string;

    // Consultas para levantamento das classificaões IBAMA

    /**
     * Listagem dos resíduos conforme classificação IBAMA
     */
    export interface listarResiduos
        extends Required<INTERNAL_.residuo.codigoIbama[]> {}

    /**
     * Listagem das unidades de medida aceitas pelo WebService
     */
    export interface listarUnidadesMedida
        extends Required<INTERNAL_.residuo.unidadeDeMedida[]> {}

    /**
     * Listagem dos estados físicos aceitos pelo WebService
     */
    export interface listarEstadosFisicos
        extends Required<INTERNAL_.residuo.estadoFisico[]> {}

    /**
     * Listagem dos acondicionamentos aceitos pelo WebService
     */
    export interface listarAcondicionamentos
        extends Required<INTERNAL_.residuo.acondicionamento[]> {}

    /**
     * Listagem das classes de resíduos conforme classificação IBAMA
     */
    export interface listarClassesResiduos
        extends Omit<INTERNAL_.residuo.classe[], "claCodigoNovo"> {}

    /**
     * Listagem dos tratamentos de resíduos aceitos pelo WebService
     */
    export interface listarTratamentos
        extends Omit<INTERNAL_.residuo.tratamento[], "traCodigoNovo"> {}

    // Outras consultas para levantamento de classificações IBAMA

    /**
     * Listagem das classes válidas para o resíduo específico
     */
    export interface consultarClassesPorCodIbama
        extends Required<INTERNAL_.residuo.codigoIbama[]> {}

    /**
     * Listagem dos acondicionamentos permitidos por estado físico
     */
    export interface consultarAcondicionamentoPorEstadoFisico
        extends Required<INTERNAL_.residuo.acondicionamento[]> {}

    // Resultados de requisições de comando enviados

    /**
     * Interface do retorno obtido ao consultar uma MTR
     */
    export interface consultarMtr {
        manNumero: string;
        manData: number;
        manResponsavel: string;
        manDataEXpedicao: number;
        manNomeMotorista: string | null;
        manPlacaVeiculo: string | null;
        manObservacao: string | null;
        manJustificativaCancelamento: string | null;
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
            parCodigo: number;
            parDescricao: string;
            parCnpj: string;
        };
        situacaoManifesto: {
            simCodigo: number;
            simDescricao: string;
            simOrdem: number;
        };
        listaManifestoResiduo: INTERNAL_.MTR.listaDeResiduos[];
        cdfNumero: number | null;
        manNumeroEstadual: string | null;
    }

    /**
     * Resultado da geração de um lote de MTRs
     */
    export interface gerarLoteMtr {
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
        listaManifestoResiduos: INTERNAL_.MTR.listaDeResiduos[];
        erroNacional: boolean;
        mensagemErroNacional: string | null;
    }

    /**
     * Resultado do processo de recebimento da MTR
     */
    export interface receberLoteMtr {
        restResponseValido: boolean;
        restResponseMensagem: string;
        manNumero: string;
        nomeMotorista: string;
        placaVeiculo: string;
        dataRecebimento: number;
        nomeResponsavelRecebimento: string;
        observacoes: string;
        listaManifestoResiduo: INTERNAL_.MTR.listaDeResiduos[];
        erroNacional: boolean;
        mensagemErroNacional: string | null;
    }

    /**
     * Resultado do processo de geração do CDF a partir das MTRs ou gerador indicados
     */
    export interface gerarCdf {
        restResponseValido: boolean;
        restResponseMensagem: string;
        codigoGerado: number;
        cerDataInicial: number;
        cerDataFinal: number;
        nomeResponsavel: string;
        parceiroDestinador: string;
        cnpjDestinador: string;
        cerObservacao: string;
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
    export interface solicitarAlteracaoRecebimento {
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
            listaManifestoResiduo: INTERNAL_.MTR.listaDeResiduos[];
        };
    }

    /**
     * Retorno da conclusão do pedidod e alteração de recebimento do MTR
     */
    export interface aceitarAlteracaoRecebimento {
        restResponseValido: boolean;
        restResponseMensagem: string;
        parCodigoGerador: string;
        manNumero: string;
        aceite: "A" | "R" | "C";
    }
}
