import { CDF_ } from "./internal/cdf.ts";
import { MTR_ } from "./internal/mtr.ts";
import { RESIDUOS_ } from "./internal/residuos.ts";
import { AUTH_ } from "./internal/auth.ts";

/**
 * Tipagem dos módulos internos da API
 */
export namespace INTERNAL_ {
    export import auth = AUTH_;
    export import residuo = RESIDUOS_;
    export import CDF = CDF_;
    export import MTR = MTR_;
}
