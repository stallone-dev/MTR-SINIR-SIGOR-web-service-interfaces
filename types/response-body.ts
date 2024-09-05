import type * as MTR_ from "./internal/mtr.ts";
import type * as RESIDUO_ from "./internal/residuos.ts";
import type * as AUTH_ from "./auth.ts";

export type {
    aceitarAlteracaoRecebimento,
    cancelarLoteMtr,
    cancelarMtr,
    consultarAcondicionamentoPorEstadoFisico,
    consultarClassesPorCodIbama,
    consultarMtr,
    downloadCDF,
    downloadMTR,
    gerarCdf,
    gerarLoteMtr,
    gerarToken,
    listarAcondicionamentos,
    listarClassesResiduos,
    listarEstadosFisicos,
    listarResiduos,
    listarTratamentos,
    listarUnidadesMedida,
    receberLoteMtr,
    retornaManifestoSeuCodigo,
    salvarManifestoComplementar,
    solicitarAlteracaoRecebimento,
};

/** Token de acesso para utilização nas APIs */
type gerarToken = AUTH_.token;
/** Buffer de bytes contendo o PDF do MTR */
type downloadMTR = ArrayBuffer;
/** Buffer de bytes contendo o PDF do CDF */
type downloadCDF = ArrayBuffer;
/** Confirmação do resultado do pedido de cancelamento */
type cancelarMtr = string;
/** Confirmação do resultado do pedido de cancelamento @SIGOR_ONLY */
type cancelarLoteMtr = string[];

/**
 * Interface para requisição de MTRs pelo 'seuCodigo"
 * @SIGOR_ONLY
 */
interface retornaManifestoSeuCodigo extends consultarMtr {}

// Consultas para levantamento das classificaões IBAMA

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

// Outras consultas para levantamento de classificações IBAMA

/**
 * Listagem das classes válidas para o resíduo específico
 */
interface consultarClassesPorCodIbama
    extends Required<RESIDUO_.codigoIbama[]> {}

/**
 * Listagem dos acondicionamentos permitidos por estado físico
 */
interface consultarAcondicionamentoPorEstadoFisico
    extends Required<RESIDUO_.acondicionamento[]> {}

// Resultados de requisições de comando enviados

/**
 * Resultado da geração de manifesto complementar
 * @SISGR_ONLY
 */
interface salvarManifestoComplementar {
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
interface consultarMtr {
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
        parCnpj: string;
    };
    situacaoManifesto: {
        simCodigo: number;
        simDescricao: string;
        simOrdem: number;
        simDataRecebimento: string;
    };
    dataRecebimentoAT: string;
    listaManifestoResiduo: MTR_.listaDeResiduos[];
    cdfNumero: number | null;
    manNumeroEstadual: string;
}

/**
 * Resultado da geração de um lote de MTRs
 */
interface gerarLoteMtr {
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
    listaManifestoResiduos: MTR_.listaDeResiduos[];
    erroNacional: boolean;
    mensagemErroNacional: string | null;
}

/**
 * Resultado do processo de recebimento da MTR
 */
interface receberLoteMtr {
    restResponseValido: boolean;
    restResponseMensagem: string;
    manNumero: string;
    nomeMotorista: string;
    placaVeiculo: string;
    dataRecebimento: number;
    nomeResponsavelRecebimento: string;
    observacoes: string;
    listaManifestoResiduo: MTR_.listaDeResiduos[];
    erroNacional: boolean;
    mensagemErroNacional: string | null;
}

/**
 * Resultado do processo de geração do CDF a partir das MTRs ou gerador indicados
 */
interface gerarCdf {
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
interface solicitarAlteracaoRecebimento {
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
        listaManifestoResiduo: MTR_.listaDeResiduos[];
    };
}

/**
 * Retorno da conclusão do pedidod e alteração de recebimento do MTR
 */
interface aceitarAlteracaoRecebimento {
    restResponseValido: boolean;
    restResponseMensagem: string;
    parCodigoGerador: string;
    manNumero: string;
    aceite: "A" | "R" | "C";
}
