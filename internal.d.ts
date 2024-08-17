declare namespace MtrWebService {
    /**
     * Interfaces de controle dos retornos que a API gera
     */
    export namespace interno {
        /**
         * Token de autenticação via rota 'gettoken'.
         */
        export type tokenDeAcesso = string;

        /**
         * Especificações do resíduo.
         */
        export namespace residuo {
            interface quantidade {
                marQuantidade: string;
                marQuantidadeRecebida?: string;
                marDensidade?: number;
                marJustificativa?: string;
            }

            interface classe {
                claCodigo: number;
                claDescricao: string;
                claCodigoNovo?: number;
            }

            interface unidadeDeMedida {
                uniCodigo: number;
                uniDescricao: string;
                uniSigla: string;
            }

            interface tratamento {
                traCodigo: number;
                traDescricao: string;
                traCodigoNovo?: number;
            }

            interface estadoFisico {
                tieCodigo: number;
                tieDescricao: string;
            }

            interface acondicionamento {
                tiaCodigo: number;
                tiaDescricao: string;
            }

            interface codigoIbama {
                resCodigoIbama: string;
                resDescricao: string;
            }

            interface codigoONU {
                marNumeroONU?: string;
                marClasseRisco?: string;
                marNomeEmbarque?: string;
                greCodigo?: 1 | 2 | 3 | 4;
            }
        }

        /**
         * Especificações da Manifesto de Transporte de Residuos (MTR)
         */
        export namespace MTR {
            interface identificacao {
                tipoManifesto?: 1;
                manNumero?: string;
                nomeMotorista: string;
                placaVeiculo: string;
                observacoes: string;
                listaManifestoResiduos: listaDeResiduos[];
            }

            interface emissao extends identificacao {
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

            interface recebimento extends identificacao {
                manNumero: string;
                dataRecebimento: number;
                nomeResponsavelRecebimento: string;
            }

            interface cancelamento {
                manNumero: string;
                justificativa: string;
            }

            interface listaDeResiduos
                extends
                    residuo.acondicionamento,
                    residuo.classe,
                    residuo.codigoIbama,
                    residuo.estadoFisico,
                    residuo.codigoONU,
                    residuo.quantidade,
                    residuo.tratamento,
                    residuo.unidadeDeMedida {}
        }

        /**
         * Especificações do Certificado de Destinação Final (CDF)
         */
        export namespace CDF {
            interface emissao {
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
    }
}
