/*
    This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import type * as AUTH_ from "./types/auth.ts";
import type * as REQUEST_BODY_ from "./types/request-config.ts";
import type * as RESPONSE_BODY_ from "./types/response-config.ts";
import type * as HTTP_MODEL_ from "./types/http-config.ts";

export type {
    /**
     * Interfaces de autenticação no sistema SIGOR/SINIR
     * @module
     * @version 1.15.0 - SIGOR ago/24
     */
    AUTH_ as auth,
    /**
     * Interfaces para controle de requisições REST
     * @module
     * @version 1.15.0 - SIGOR ago/24
     */
    HTTP_MODEL_ as httpModel,
    /**
     * Interfaces específicas dos corpos de requisição da API
     * @module
     * @version 1.15.0 - SIGOR ago/24
     */
    REQUEST_BODY_ as requestConfig,
    /**
     * Interfaces específicas do "objetoResposta" da API
     * @module
     * @version 1.15.0 - SIGOR ago/24
     */
    RESPONSE_BODY_ as responseConfig,
};
