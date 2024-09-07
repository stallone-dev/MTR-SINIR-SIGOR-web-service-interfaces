/*
    This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import type * as MtrWSType from "./api-types.ts";
import { API_ROUTE } from "./api-routes.ts";
import { API_BASE_URL } from "./api-url.ts";

export {
    /**
     * Lista de URLs de produção da API WebService do SINIR/SIGOR para controle de MTRs
     * @See Referência para construção destas interfaces: {@link https://cetesb.sp.gov.br/sigor-mtr/web-service/}
     * @version SIGOR - 1.15.0 - SIGOR ago/24
     */
    API_BASE_URL as MtrWSBaseURL,
    /**
     * Lista de rotas REST disponveis na API WebService do SINIR/SIGOR para controle de MTRs
     * @See Referência para construção destas interfaces: {@link https://cetesb.sp.gov.br/sigor-mtr/web-service/}
     * @version SIGOR - 1.15.0 - SIGOR ago/24
     */
    API_ROUTE as MtrWSRoute,
    /**
     * Interfaces para estruturação e análise da API WebService para controle de MTRs do SINIR/SIGOR
     *
     * @See Referência para construção destas interfaces: {@link https://cetesb.sp.gov.br/sigor-mtr/web-service/}
     * @version SIGOR - 1.15.0 - SIGOR ago/24
     */
    type MtrWSType,
};
