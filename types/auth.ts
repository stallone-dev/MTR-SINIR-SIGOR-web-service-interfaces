/*
    This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

export type { credentials, token };

/**
 * Interface do token de autorização de acesso ao sistema
 *
 * @example Requisição do token de acesso
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
 *  body: login;
 * }
 *
 * const request:HTTP_.response = await(await fetch(URL, options).json())
 * const token = request.objetoResposta
 * ==> `Bearer ABCDE123456`
 * ```
 */
type token = `Bearer ${string}`;

/**
 * Interface das credenciais necessárias para geração de um token de acesso
 *
 * @example Preparo para requisicao do token de acesso
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
 *  body: login;
 * }
 *
 * const request:HTTP_.response = await(await fetch(URL, options).json())
 * const token = request.objetoResposta
 * ==> `Bearer ABCDE123456`
 * ```
 */
interface credentials {
    cpfCnpj: string;
    senha: string;
    unidade: string;
}
