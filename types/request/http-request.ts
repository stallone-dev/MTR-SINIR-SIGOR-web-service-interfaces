import { INTERNAL_ } from "../internal.ts";

/**
 * Modelos-base das requisições e respostas HTTP da API
 */
export namespace HTTP_MODEL_ {
    /**
     * Interface geral das respostas retorandas pela API
     */
    export interface respostaAPI<contexto> {
        mensagem: string;
        erro: string | number | boolean;
        objetoResposta: contexto | contexto[];
    }

    /**
     * Interface geral de requisição para a API
     */
    export interface requisicaoAPI<contexto> {
        method: "POST" | "GET";
        headers: {
            "Content-Type": "application/json";
            Authorization: INTERNAL_.auth.tokenDeAcesso;
        };
        body: contexto;
    }
}
