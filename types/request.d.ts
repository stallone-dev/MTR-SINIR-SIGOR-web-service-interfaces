declare namespace MtrWebService {
    /**
     * Moldes de requisição HTTP para API
     */
    export namespace requisicao {
        /**
         * Interface geral das respostas retorandas pela API
         */
        interface respostaAPI<contexto> {
            mensagem: string;
            erro: string | number | boolean;
            objetoResposta: contexto | contexto[];
        }

        /**
         * Interface geral de requisição à API
         */
        interface requisicaoAPI<contexto> {
            url: interno.apiRestUrl;
            method: "POST" | "GET";
            headers: {
                "Content-Type": "application/json";
                "Authorization"?: interno.tokenDeAcesso;
            };
            body: contexto | null;
        }
    }
}
