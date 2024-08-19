declare namespace MtrWebService {
   
    export namespace requisicao {
        /**
         * Modelos de requisição para API
         */
        export namespace corpoRequisicao {
            interface gerarToken extends Omit<interno.auth, "token"> {}

            interface listarClassesResiduos
                extends Pick<interno.auth, "token"> {}
            interface listarUnidadesMedida
                extends Pick<interno.auth, "token"> {}
            interface listarTratamentos extends Pick<interno.auth, "token"> {}
            interface listarEstadosFisicos
                extends Pick<interno.auth, "token"> {}
            interface listarlistarAcondicionamentos
                extends Pick<interno.auth, "token"> {}
            interface listarResiduos extends Pick<interno.auth, "token"> {}

            interface cancelarMtr extends Pick<interno.auth, "token"> {
                body: {
                    manNumero: string;
                    justificativa: string;
                };
            }

            type consultarClassesPorCodIbama =
                `${interno.apiRestUrl}/${interno.END_POINT.CONSULTAR_CLASSES_POR_COD_IBAMA}/${string}`;
            type consultarAcondicionamentoPorEstadoFIsico =
                `${interno.apiRestUrl}/${interno.END_POINT.CONSULTAR_ACONDICIONAMENTOS_POR_ESTADO_FISICO}/${string}`;
            type downloadMtr =
                `${interno.apiRestUrl}/${interno.END_POINT.DOWNLOAD_MTR}/${string}`;
            type downloadCdf =
                `${interno.apiRestUrl}/${interno.END_POINT.DOWNLOAD_CDF}/${string}`;
            type consultarMtr =
                `${interno.apiRestUrl}/${interno.END_POINT.CONSULTAR_MTR}/${string}`;

            interface gerarLoteMtr extends Pick<interno.auth, "token"> {
                body: interno.MTR.emissao[];
            }

            interface receberLoteMtr extends Pick<interno.auth, "token"> {
                body: interno.MTR.recebimento[];
            }

            interface gerarCdf extends Pick<interno.auth, "token"> {
                body: interno.CDF.emissao;
            }

            interface solicitarAlteracaoRecebimento
                extends Pick<interno.auth, "token"> {
                body: {
                    parCodigoDestinador: string;
                    remObservacao: string;
                    manifesto: {
                        manNumero: string;
                        listaManifestoResiduo: interno.MTR.listaDeResiduos[];
                    };
                };
            }

            interface aceitarAlteracaoRecebimento
                extends Pick<interno.auth, "token"> {
                body: {
                    parCodigoGerador: string;
                    manNumero: string;
                    aceite: "A" | "R" | "C";
                };
            }
        }

        /**
         * Modelos de resposta gerados pala API
         */
        export namespace corpoResposta {
            type gerarToken = Pick<interno.auth, "token">;

            interface listarClassesResiduos
                extends Omit<interno.residuo.classe[], "claCodigoNovo"> {}
            interface listarUnidadesMedida
                extends Required<interno.residuo.unidadeDeMedida[]> {}
            interface listarTratamentos
                extends Omit<interno.residuo.tratamento[], "traCodigoNovo"> {}
            interface listarEstadosFisicos
                extends Required<interno.residuo.estadoFisico[]> {}
            interface listarAcondicionamentos
                extends Required<interno.residuo.acondicionamento[]> {}
            interface listarResiduos
                extends Required<interno.residuo.codigoIbama[]> {}

            interface consultarClassesPorCodIbama
                extends Required<interno.residuo.codigoIbama[]> {}
            interface consultarAcondicionamentoPorEstadoFIsico
                extends Required<interno.residuo.acondicionamento[]> {}
            type downloadMtr = ArrayBuffer;
            type downloadCdf = ArrayBuffer;
            type cancelarMtr = string;

            interface consultarMtr {
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
                listaManifestoResiduo: interno.MTR.listaDeResiduos;
                cdfNumero: number | null;
                manNumeroEstadual: string | null;
            }

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
                listaManifestoResiduos: interno.MTR.listaDeResiduos[];
                erroNacional: boolean;
                mensagemErroNacional: string | null;
            }

            interface receberLoteMtr {
                restResponseValido: boolean;
                restResponseMensagem: string;
                manNumero: string;
                nomeMotorista: string;
                placaVeiculo: string;
                dataRecebimento: number;
                nomeResponsavelRecebimento: string;
                observacoes: string;
                listaManifestoResiduo: interno.MTR.listaDeResiduos[];
                erroNacional: boolean;
                mensagemErroNacional: string | null;
            }

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
                    listaManifestoResiduo: interno.MTR.listaDeResiduos[];
                };
            }

            interface aceitarAlteracaoRecebimento {
                restResponseValido: boolean;
                restResponseMensagem: string;
                parCodigoGerador: string;
                manNumero: string;
                aceite: "A" | "R" | "C";
            }
        }
    }
}
