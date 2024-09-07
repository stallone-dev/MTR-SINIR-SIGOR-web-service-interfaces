/*
    This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

/**
 * Lista de end-points da API para incorportação na requisição REST
 * @module
 * @version 1.15.0 - SIGOR - ago/24
 */
export enum API_ROUTE {
    GERAR_TOKEN = "gettoken",
    GERAR_MTR = "salvarManifestoLote",
    GERAR_CDF = "emiteCDF",
    /** @SIGOR_ONLY */
    GERAR_MTR_COMPLEMENTAR = "salvarManifestoComplementar",

    CANCELAR_MTR = "cancelarManifesto",
    /** @SIGOR_ONLY */
    CANCELAR_LOTE_MTR = "cancelarManifestoLote",

    LISTAR_CLASSES_RESIDUOS = "retornaListaClasse",
    LISTAR_UNIDADES_MEDIDA = "retornaListaUnidade",
    LISTAR_TRATAMENTOS = "retornaListaTratamento",
    LISTAR_ESTADOS_FISICOS = "retornaListaEstadoFisico",
    LISTAR_ACONDICIONAMENTOS = "retornaListaAcondicionamento",
    LISTAR_RESIDUOS = "retornaListaResiduo",

    DOWNLOAD_MTR = "downloadManifesto",
    DOWNLOAD_CDF = "downloadCertificado",

    CONSULTAR_MTR = "retornaManifesto",
    /** @SIGOR_ONLY */
    CONSULTAR_MTR_POR_SEU_CODIGO = "retornaManifestoSeuCodigo",
    CONSULTAR_CLASSES_PARA_COD_IBAMA = "retornaListaClassePorResiduo",
    CONSULTAR_ACONDICIONAMENTOS_PARA_ESTADO_FISICO =
        "retornaListaAcondicionamentoPorEstadoFisico",

    RECEBER_LOTE_DE_MTRS = "receberManifestoLote",

    SOLICITAR_ALTERACAO_RECEBIMENTO_MTR = "alteraRecebimento",
    ACEITAR_ALTERACAO_RECEBIMENTO_MTR = "aceiteAlteracaoRecebimento",
}
