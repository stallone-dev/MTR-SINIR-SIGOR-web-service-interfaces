import { INTERNAL_ } from "./internal.d";
import { AUTH_ } from "./auth.d";

/**
 * Interfaces do corpo das requisições feitas para a API
 */
export namespace REQUEST_BODY_ {
    /**
     * Interface para requisição de um Token de acesso
     */
    export interface gerarToken extends AUTH_.request {}

    /**
     * Interface para requisição de MTRs pelo 'seuCodigo"
     * @SIGOR_ONLY
     */
    export interface retornaManifestoSeuCodigo {
        suaUnidade: string;
        seuCodigo: string;
    }

    /**
     * Interface para cancelamento de um MTR
     */
    export interface cancelarMtr {
        manNumero: string;
        justificativa: string;
    }

    /**
     * Interface para cancelamento de múltiplos MTRs
     * @SIGOR_ONLY
     */
    export interface cancelarLoteMtr {
        manNumero: string;
        justificativa: string;
    }

    /**
     * Interface para solicitação de alteração de um MTR já recebido
     */
    export interface solicitarAlteracaoRecebimento {
        parCodigoDestinador: string;
        remObservacao: string;
        manifesto: {
            manNumero: Pick<INTERNAL_.MTR.identificacao, "manNumero">;
            listaManifestoResiduo: INTERNAL_.MTR.listaDeResiduos[];
        };
    }

    /**
     * Interface para validação de um pedido de alteração de um MTR já recebido
     */
    export interface aceitarAlteracaoRecebimento {
        parCodigoGerador: string;
        manNumero: Pick<INTERNAL_.MTR.identificacao, "manNumero">;
        aaceite: "A" | "R" | "C";
    }

    /**
     * Interface para geração de novos MTRs
     */
    export interface gerarLoteMtr extends INTERNAL_.MTR.identificacao {
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
    export interface receberLoteMtr extends INTERNAL_.MTR.identificacao {
        manNumero: string;
        dataRecebimento: number;
        nomeResponsavelRecebimento: string;
    }

    /**
     * Interface para geração de CDFs
     */
    export interface gerarCdf extends INTERNAL_.CDF.emissao {}

    /**
     * Interface para geração de MTRs complementares
     * @SIGOR_ONLY
     */
    export interface salvarManifestoComplementar extends
        Required<
            Omit<
                INTERNAL_.MTR.identificacao,
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

    export type listarClassesResiduos = null;
    export type listarUnidadesMedida = null;
    export type listarTratamentos = null;
    export type listarEstadsoFisicos = null;
    export type listarAcondiconamentos = null;
    export type listarResiduos = null;

    export type consultarClassesPorCodIbama = null;
    export type consultarAcondicionamentoPorEstadoFisico = null;
    export type downloadMTR = null;
    export type downloadCDF = null;
    export type consultarMTR = null;
}
