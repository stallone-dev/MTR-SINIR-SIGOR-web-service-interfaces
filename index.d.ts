import { END_POINT_ } from "./end-points.ts";
import { AUTH_ } from "./types/auth.d.ts";
import { REQUEST_BODY_ } from "./types/request-body.d.ts";
import { RESPONSE_BODY_ } from "./types/response-body.d.ts";
import { HTTP_MODEL_ } from "./types/http-request.d.ts";

/**
 * Interfaces para estruturação e análise da API WebService para controle de MTRs do SINIR/SIGOR
 *
 * @See Referência para construção destas interfaces: {@link https://cetesb.sp.gov.br/sigor-mtr/web-service/}
 * @version SINIR - 1.0.6
 *
 * @module
 */
export namespace MtrWebService {
    export import auth = AUTH_;
    export import requestBody = REQUEST_BODY_;
    export import responseBody = RESPONSE_BODY_;
    export import httpModel = HTTP_MODEL_;
    export import END_POINT = END_POINT_;
}
