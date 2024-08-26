/**
 * Modelos-base das requisições e respostas HTTP da API
 */
export namespace HTTP_MODEL_ {
    /**
     * Interface geral das respostas retorandas pela API
     */
    export interface response {
        mensagem: string;
        erro: string | number | boolean;
        objetoResposta: any | any[];
    }

    /**
     * Interface geral de requisição para a API
     */
    export interface request {
        method: "POST" | "GET";
        headers: {
            "Content-Type": "application/json";
            Authorization?: string;
        };
        body: string | null;
    }
}
