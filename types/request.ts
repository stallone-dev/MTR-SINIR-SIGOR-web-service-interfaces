import { END_POINT_ } from "./request/end-point.ts";
import { HTTP_MODEL_ } from "./request/http-request.ts";
import { REQUEST_BODY_ } from "./request/request-body.ts";
import { RESPONSE_BODY_ } from "./request/response-body.ts";

/**
 * Centro de interfaces para controle do fluxo de requisições HTTP da API
 */
export namespace REQUEST_ {
    export import END_POINT = END_POINT_;
    export import httpRequestModel = HTTP_MODEL_;
    export import requestBody = REQUEST_BODY_;
    export import responseBody = RESPONSE_BODY_;
}
