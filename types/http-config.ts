/*
    This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import { auth } from "../api-types.ts";

export type { request, response };

/**
 * Interface geral das respostas retorandas pela API
 * Interface geral da resposta retornada pelos end-points da API
 *
 * @example Requisição genérica
 * ```ts
 * const options:HTTP_.request = {
 *  method: "POST"
 *  headers: {
 *      "Content-Type": "application/json";
 *      Authorization: "";
 *  };
 *  body: REQUEST_DATA;
 * }
 * const request:HTTP_.response = await(await fetch(URL, options).json())
 * ==> {
 *      "mensagem": null,
 *      "objetoResposta": {...},
 *      "erro": false
 *     }
 * ```
 *
 * @example Requisicao do token de acesso
 * ```ts
 * const login:AUTH_.credentials = {
 *      cpfCnpj: "1234567890",
 *      senha: "MY_PASS",
 *      unidade: "12346"
 * }
 *
 * const options:HTTP_.request {
 *  method: "POST"
 *  headers: {
 *      "Content-Type": "application/json";
 *      Authorization: "";
 *  };
 *  body: null;
 * }
 *
 * const request:HTTP_.response = await(await fetch(URL, options).json())
 * const token = request.objetoResposta
 * ==> `Bearer ABCDE123456`
 * ```
 */
interface response {
    mensagem: string | null;
    erro: string | number | boolean;
    objetoResposta: unknown | unknown[];
}

/**
 * Interface geral de requisição para a API
 *
 * @example Requisição genérica
 * ```ts
 * const options:HTTP_.request = {
 *  method: "POST"
 *  headers: {
 *      "Content-Type": "application/json";
 *      Authorization: "";
 *  };
 *  body: REQUEST_DATA;
 * }
 * const request:HTTP_.response = await(await fetch(URL, options).json())
 * ==> {
 *      "mensagem": null,
 *      "objetoResposta": {...},
 *      "erro": false
 *     }
 * ```
 */
interface request {
    method: "POST" | "GET";
    headers: {
        "Content-Type": "application/json";
        Authorization: auth.token | "";
    };
    body: string | null;
}
