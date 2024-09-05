import type * as AUTH_ from "./types/auth.ts";
import type * as REQUEST_BODY_ from "./types/request-body.ts";
import type * as RESPONSE_BODY_ from "./types/response-body.ts";
import type * as HTTP_MODEL_ from "./types/http-request.ts";

export type {
    /**
     * Interfaces de autenticação no sistema SIGOR/SINIR
     * @module
     */
    AUTH_ as auth,
    /**
     * Interfaces para controle de requisições REST
     * @module
     */
    HTTP_MODEL_ as httpModel,
    /**
     * Interfaces específicas dos corpos de requisição da API
     * @module
     * @version 1.15.0 - ago/24
     */
    REQUEST_BODY_ as requestBody,
    /**
     * Interfaces específicas do "objetoResposta" da API
     * @module
     * @version 1.15.0 - ago/24
     */
    RESPONSE_BODY_ as responseBody,
};
