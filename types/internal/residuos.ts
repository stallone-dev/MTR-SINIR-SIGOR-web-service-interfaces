/**
 * Especificações do resíduo para emissão e recebimento de MTRs
 */
export namespace RESIDUOS_ {
    /**
     * Interface para a quantidade de resíduos
     */
    export interface quantidade {
        marQuantidade: number;
        marQuantidadeRecebida?: number;
        marDensidade?: number;
        marJustificativa?: string;
    }

    /**
     * Interface para classificação dos resíduos conforme ABNT 10004-2004
     */
    export interface classe {
        claCodigo: number;
        claDescricao?: string;
        claCodigoNovo?: number;
    }

    /**
     * Interface para unidades de medida dos resíduos
     */
    export interface unidadeDeMedida {
        uniCodigo: number;
        uniDescricao?: string;
        uniSigla?: string;
    }

    /**
     * Interface para o tratamento aplicado sobre o resíduo
     */
    export interface tratamento {
        traCodigo: number;
        traDescricao?: string;
        traCodigoNovo?: number;
    }

    /**
     * Interface para os estados físicos do resíduo
     */
    export interface estadoFisico {
        tieCodigo: number;
        tieDescricao?: string;
    }

    /**
     * Interface para os tipos de acondicionamento do resíduo
     */
    export interface acondicionamento {
        tiaCodigo: number;
        tiaDescricao?: string;
    }

    /**
     * Interface para codificação IBAMA dos resíduos, conforme
     *  Lista Brasileira de Resíduos Sólidos
     *  Instrução Normativa nº13 (18/12/12)
     */
    export interface codigoIbama {
        resCodigoIbama: string;
        resDescricao?: string;
    }

    /**
     * Interface para codificação ONU dos resíduos PERIGOSOS, conforme
     *  Resolução ANTT nº. 5.947/2021
     */
    export interface codigoONU {
        marNumeroONU?: string;
        marClasseRisco?: string;
        marNomeEmbarque?: string;
        greCodigo?: 1 | 2 | 3 | 4;
    }
}
