import { END_POINT_ } from "./types/end-points.d";
import { AUTH_ } from "./types/authentitcation.d";
import { REQUEST_BODY_ } from "./types/request-body.d";
import { RESPONSE_BODY_ } from "./types/response-body.d";
import { HTTP_MODEL_ } from "./types/http-request.d";

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
