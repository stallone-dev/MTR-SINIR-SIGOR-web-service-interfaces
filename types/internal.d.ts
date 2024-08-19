declare namespace MtrWebService {
    /**
     * Tipagem dos módulos internos da API
     */
    export namespace interno {
        /**
         * Tipagem da URL base da API
         */
        export type apiRestUrl = string;

        /**
         * Token de autenticação via rota 'gettoken'.
         */
        export type tokenDeAcesso = `Bearer ${string}`;

        /**
         * Inteface para controle de autenticação da API
         */
        export interface auth {
            token?: tokenDeAcesso;
            cpfCnpj?: string;
            senha?: string;
            unidade?: string;
        }

        /**
         * Especificações do resíduo.
         */
        export namespace residuo {
            /**
             * Interface para a quantidade de resíduos
             *
             * @example
             * // Recebimento de resíduo em unidade principal (ton)
             * {
             *  marQuantidade: 3.00
             *  marQUantidadeRecebida: 3.04030
             * }
             * // Recebimento de resíduo em unidade alternativa (L -> ton)
             * {
             *  uniCodigo:20, // ref. m³
             *  marDensidade: 2.0, // 1 m³ = 2 ton
             *  marQuantidade: 20.0, // m³ -> Será convertido para ton durante geração do MTR
             *  // Recebimento
             *  marQuantidadeRecebida: 40.0, // ton
             * }
             */
            interface quantidade {
                marQuantidade: number;
                marQuantidadeRecebida?: number;
                marDensidade?: number;
                marJustificativa?: string;
            }

            /**
             * Interface para classificação dos resíduos conforme ABNT 10004-2004
             */
            interface classe {
                claCodigo: number;
                claDescricao?: string;
                claCodigoNovo?: number;
            }

            /**
             * Interface para unidades de medida dos resíduos
             */
            interface unidadeDeMedida {
                uniCodigo: number;
                uniDescricao?: string;
                uniSigla?: string;
            }

            /**
             * Interface para o tratamento aplicado sobre o resíduo
             */
            interface tratamento {
                traCodigo: number;
                traDescricao?: string;
                traCodigoNovo?: number;
            }

            /**
             * Interface para os estados físicos do resíduo
             */
            interface estadoFisico {
                tieCodigo: number;
                tieDescricao?: string;
            }

            /**
             * Interface para os tipos de acondicionamento do resíduo
             */
            interface acondicionamento {
                tiaCodigo: number;
                tiaDescricao?: string;
            }

            /**
             * Interface para codificação IBAMA dos resíduos, conforme
             *  Lista Brasileira de Resíduos Sólidos
             *  Instrução Normativa nº13 (18/12/12)
             */
            interface codigoIbama {
                resCodigoIbama: string;
                resDescricao?: string;
            }

            /**
             * Interface para codificação ONU dos resíduos PERIGOSOS, conforme
             *  Resolução ANTT nº. 5.947/2021
             */
            interface codigoONU {
                marNumeroONU?: string;
                marClasseRisco?: string;
                marNomeEmbarque?: string;
                greCodigo?: 1 | 2 | 3 | 4;
            }
        }

        /**
         * Especificações do Manifesto de Transporte de Residuos (MTR)
         */
        export namespace MTR {
            /**
             * Dados básicos para identificação do MTR
             */
            interface identificacao {
                tipoManifesto?: 1;
                manNumero?: string;
                nomeMotorista?: string;
                placaVeiculo?: string;
                observacoes?: string;
                listaManifestoResiduos: listaDeResiduos[];
            }

            /**
             * Interface para emissão de MTRs
             */
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

            /**
             * Interface para recebimento do MTR
             */
            interface recebimento extends identificacao {
                manNumero: string;
                dataRecebimento: number;
                nomeResponsavelRecebimento: string;
            }

            /**
             * Interface para o cancelamento do MTR
             */
            interface cancelamento {
                manNumero: string;
                justificativa: string;
            }

            /**
             * Inteface para listagem dos resíduos contidos no MTR
             */
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
