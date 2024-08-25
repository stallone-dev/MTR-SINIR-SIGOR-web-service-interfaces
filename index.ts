import { INTERNAL_ } from "./types/internal.ts";
import { REQUEST_ } from "./types/request.ts";

/**
 * Interfaces para estruturação e análise da API WebService para controle de MTRs do SINIR/SIGOR
 *
 * @See Referência para construção destas interfaces: {@link https://cetesb.sp.gov.br/sigor-mtr/web-service/}
 * @version SINIR - 1.0.6
 *
 * @module
 */
export namespace MtrWebService {
    export import interno = INTERNAL_;
    export import request = REQUEST_;
}
