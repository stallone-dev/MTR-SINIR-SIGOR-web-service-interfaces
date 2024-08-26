/**
 * Tipagem dos módulos de autenticação da API
 *
 * @module
 */
export namespace AUTH_ {
    /**
     * Interface do token de acesso
     */
    export type token = `Bearer ${string}`;

    /**
     * Interface de requisição do token de acesso
     */
    export interface request {
        cpfCnpj: string;
        senha: string;
        unidade: string;
    }
}
