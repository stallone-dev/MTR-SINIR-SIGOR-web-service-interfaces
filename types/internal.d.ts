import { CDF_ } from "./internal/cdf.d";
import { MTR_ } from "./internal/mtr.d";
import { RESIDUOS_ } from "./internal/residuos.d";
import { AUTH_ } from "./internal/auth.d";

/**
 * Tipagem dos módulos internos da API
 */
export namespace INTERNAL_ {
    export import auth = AUTH_;
    export import residuo = RESIDUOS_;
    export import CDF = CDF_;
    export import MTR = MTR_;
}
