export type { request, token };

/**
 * Interface do token de acesso
 */
type token = `Bearer ${string}`;

/**
 * Interface de requisição do token de acesso
 */
interface request {
    cpfCnpj: string;
    senha: string;
    unidade: string;
}
