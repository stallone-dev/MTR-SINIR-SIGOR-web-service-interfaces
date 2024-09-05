import type * as MTR_ from "./internal/mtr.ts";
import type * as AUTH_ from "./auth.ts";

export type {
    aceitarAlteracaoRecebimento,
    cancelarLoteMtr,
    cancelarMtr,
    consultarAcondicionamentoPorEstadoFisico,
    consultarClassesPorCodIbama,
    consultarMTR,
    downloadCDF,
    downloadMTR,
    gerarCdf,
    gerarLoteMtr,
    gerarToken,
    listarAcondiconamentos,
    listarClassesResiduos,
    listarEstadsoFisicos,
    listarResiduos,
    listarTratamentos,
    listarUnidadesMedida,
    receberLoteMtr,
    retornaManifestoSeuCodigo,
    salvarManifestoComplementar,
    solicitarAlteracaoRecebimento,
};

/**
 * Interface para requisição de um Token de acesso
 */
interface gerarToken extends AUTH_.request {}

/**
 * Interface para requisição de MTRs pelo 'seuCodigo"
 * @SIGOR_ONLY
 */
interface retornaManifestoSeuCodigo {
    suaUnidade: string;
    seuCodigo: string;
}

/**
 * Interface para cancelamento de um MTR
 */
interface cancelarMtr {
    manNumero: string;
    justificativa: string;
}

/**
 * Interface para cancelamento de múltiplos MTRs
 * @SIGOR_ONLY
 */
interface cancelarLoteMtr {
    manNumero: string;
    justificativa: string;
}

/**
 * Interface para solicitação de alteração de um MTR já recebido
 */
interface solicitarAlteracaoRecebimento {
    parCodigoDestinador: string;
    remObservacao: string;
    manifesto: {
        manNumero: Pick<MTR_.identificacao, "manNumero">;
        listaManifestoResiduo: MTR_.listaDeResiduos[];
    };
}

/**
 * Interface para validação de um pedido de alteração de um MTR já recebido
 */
interface aceitarAlteracaoRecebimento {
    parCodigoGerador: string;
    manNumero: Pick<MTR_.identificacao, "manNumero">;
    aaceite: "A" | "R" | "C";
}

/**
 * Interface para geração de novos MTRs
 */
interface gerarLoteMtr extends MTR_.identificacao {
    tipoManifesto: 1;
    dataExpedicao: number;

    transportador: {
        unidade: number;
        cpfCnpj: string;
    };

    destinador: {
        unidade: number;
        cpfCnpj: string;
    };

    armazenadorTemporario?: {
        unidade: number;
        cpfCnpj: string;
    };
}

/**
 * Interface para recebimento de MTRs
 */
interface receberLoteMtr extends MTR_.identificacao {
    manNumero: string;
    dataRecebimento: number;
    nomeResponsavelRecebimento: string;
}

/**
 * Interface para geração de CDFs
 */
interface gerarCdf {
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
 * @SIGOR_ONLY
 */
interface salvarManifestoComplementar extends
    Required<
        Omit<
            MTR_.identificacao,
            "tipoManifesto" | "listaManifestoResiduos"
        >
    > {
    transportador: {
        unidade: number;
        cpfCnpj: string;
    };
    listaManifesto: {
        manNumero: string;
    }[];
}

/*
    As requisiçõesa baixo não necessitam de corpo de requisição, apenas consumir a API entregará o resultado.
    */

type listarClassesResiduos = null;
type listarUnidadesMedida = null;
type listarTratamentos = null;
type listarEstadsoFisicos = null;
type listarAcondiconamentos = null;
type listarResiduos = null;

type consultarClassesPorCodIbama = null;
type consultarAcondicionamentoPorEstadoFisico = null;
type downloadMTR = null;
type downloadCDF = null;
type consultarMTR = null;
