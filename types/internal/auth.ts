/**
 * Inteface para controle de autenticação da API
 */
export namespace AUTH_ {
    /**
     * Interface do token de acesso
     */
    export type tokenDeAcesso = `Bearer ${string}`;

    /**
     * Interface de requisição do token de acesso
     */
    export interface requisicaoToken {
        cpfCnpj: string;
        senha: string;
        unidade: string;
    }
}
