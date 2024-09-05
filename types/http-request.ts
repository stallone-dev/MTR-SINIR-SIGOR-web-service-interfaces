export type { request, response };

/**
 * Interface geral das respostas retorandas pela API
 */
interface response {
    mensagem: string;
    erro: string | number | boolean;
    objetoResposta: unknown | unknown[];
}

/**
 * Interface geral de requisição para a API
 */
interface request {
    method: "POST" | "GET";
    headers: {
        "Content-Type": "application/json";
        Authorization: string;
    };
    body: string;
}
