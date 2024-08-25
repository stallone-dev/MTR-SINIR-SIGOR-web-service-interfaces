/**
 * Especificações do Certificado de Destinação Final (CDF)
 */
export namespace CDF_ {
    export interface emissao {
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
}
