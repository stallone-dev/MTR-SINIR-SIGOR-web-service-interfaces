/**
 * Lista de end-points da API para incorportação na requisição REST
 * @module
 * @version 1.15.0 - ago/24
 */
export enum API_ROUTE {
    GERAR_TOKEN = "gettoken",
    GERAR_MTR = "salvarManifestoLote",
    GERAR_CDF = "emiteCDF",
    GERAR_MTR_COMPLEMENTAR = "salvarManifestoComplementar",

    CANCELAR_MTR = "cancelarManifesto",
    CANCELAR_LOTE_MTR = "cancelarManifestoLote",

    LISTAR_CLASSES_RESIDUOS = "retornaListaClasse",
    LISTAR_UNIDADES_MEDIDA = "retornaListaUnidade",
    LISTAR_TRATAMENTOS = "retornaListaTratamento",
    LISTAR_ESTADOS_FISICOS = "retornaListaEstadoFisico",
    LISTAR_ACONDICONAMENTOS = "retornaListaAcondicionamento",
    LISTAR_RESIDUOS_IBAMA = "retornaListaResiduo",

    DOWNLOAD_MTR = "downloadManifesto",
    DOWNLOAD_CDF = "downloadCertificado",

    CONSULTAR_MTR = "retornaManifesto",
    CONSULTAR_MTR_POR_SEU_CODIGO = "retornaManifestoSeuCodigo",
    CONSULTAR_CLASSES_POR_COD_IBAMA = "retornaListaClassePorResiduo",
    CONSULTAR_ACONDICIONAMENTOS_POR_ESTADO_FISICO =
        "retornaListaAcondicionamentoPorEstadoFisico",

    RECEBER_LOTE_DE_MTRS = "receberManifestoLote",

    SOLICITAR_ALTERACAO_RECEBIMENTO_MTR = "alteraRecebimento",
    ACEITAR_ALTERACAO_RECEBIMENTO_MTR = "aceiteAlteracaoRecebimento",
}
