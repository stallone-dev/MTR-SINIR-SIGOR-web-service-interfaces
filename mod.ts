import type * as MtrWSType from "./index.ts";
import { API_ROUTE } from "./api-routes.ts";
import { API_BASE_URL } from "./api-url.ts";

export {
    /**
     * Lista de URLs de produção da API WebService do SINIR/SIGOR para controle de MTRs
     * @See Referência para construção destas interfaces: {@link https://cetesb.sp.gov.br/sigor-mtr/web-service/}
     * @version SIGOR - 1.15.0 - ago/24
     */
    API_BASE_URL as MtrWSBaseURL,
    /**
     * Lista de rotas REST disponveis na API WebService do SINIR/SIGOR para controle de MTRs
     * @See Referência para construção destas interfaces: {@link https://cetesb.sp.gov.br/sigor-mtr/web-service/}
     * @version SIGOR - 1.15.0 - ago/24
     */
    API_ROUTE as MtrWSRoute,
    /**
     * Interfaces para estruturação e análise da API WebService para controle de MTRs do SINIR/SIGOR
     *
     * @See Referência para construção destas interfaces: {@link https://cetesb.sp.gov.br/sigor-mtr/web-service/}
     * @version SIGOR - 1.15.0 - ago/24
     */
    type MtrWSType,
};
