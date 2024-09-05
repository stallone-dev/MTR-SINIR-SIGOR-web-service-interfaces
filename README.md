# MTR Sinir/Sigor WebService interfaces and Tools

[![jsr.io/@stallone-dev/types-mtr-web-service](https://jsr.io/badges/@stallone-dev/types-mtr-web-service)](https://jsr.io/@stallone-dev/types-mtr-web-service)
[![jsr.io/@stallone-dev/types-mtr-web-service score](https://jsr.io/badges/@stallone-dev/types-mtr-web-service/score)](https://jsr.io/@stallone-dev/types-mtr-web-service)

Kit de ferramentas `typescript` para modelagem de requisições da API [MTR WebService do SINIR/SIGOR](https://cetesb.sp.gov.br/sigor-mtr/web-service/).

Baseado na versão: `SIGOR - 1.15.0 - 21/08/24`

Contém:

- Lista de **URLs de produção** da API, compiladas no `MtrWSBaseURL`
- Lista de rotas **REST** da API, compiladas no `MtrWSRoute`
- Conjunto de **interfaces** da API, reunidas no `MtrWSType`, contendo:

|        Categoria         | Interface                |
| :----------------------: | :----------------------- |
|       Autenticação       | `MtrWSType.auth`         |
|     Interfaces HTTP      | `MtrWSType.httpModel`    |
| Interfaces de requisição | `MtrWSType.requestBody`  |
|  Interfaces de resposta  | `MtrWSType.responseBody` |

## Instalação

Este pacote está distribuído exclusivamente através do [JavaScript Registry (JSR)](https://jsr.io/@stallone-dev/types-mtr-web-service/).

#### DenoJS

```bash
deno add @stallone-dev/types-mtr-web-service
```

#### Bun

```bash
bunx jsr add @stallone-dev/types-mtr-web-service
```

#### NodeJS (npm)

```bash
npx jsr add @stallone-dev/types-mtr-web-service
```

#### NodeJS (yarn)

```bash
yarn dlx jsr add @stallone-dev/types-mtr-web-service
```

## Aplicação

Independente do método de instalação, é importante referenciar dentro do projeto `.ts` como um `import`:

```ts
// Importando somente a tipagem
import type { MtrWSType } from "@stallone-dev/types-mtr-web-service/";

// Importando somente as URLs-base da API
import type { MtrWSBaseURL } from "@stallone-dev/types-mtr-web-service/";

// Importando somente a lista de rotas REST
import { MtrWSRoute } from "@stallone-dev/types-mtr-web-service/";

// Importando todos ao mesmo tempo
import {
    MtrWSBaseURL,
    MtrWSRoute,
    type MtrWSType,
} from "@stallone-dev/types-mtr-web-service/";
```

## Exemplos de uso

#### Função para consulta de MTRs

```ts
import {
    MtrWSBaseURL,
    MtrWSRoute,
    type MtrWSType,
} from "@stallone-dev/types-mtr-web-service/";

/** Função para simplificar a coleta de dados do MTR */
async function getMtrData(
    mtr: string,
    AUTH_TOKEN: MtrWSType.auth.token,
    BASE_API_URL: MtrWSBaseURL,
): Promise<MtrWSType.responseBody.consultarMtr> {
    /** Modelagem da URL da API */
    const API_PATH = `${BASE_API_URL}/${MtrWSRoute.CONSULTAR_MTR}/${mtr}`;

    /** Modelagem da requisição HTTP */
    const options: MtrWSType.httpModel.request = {
        headers: {
            "Content-Type": "application/json",
            Authorization: AUTH_TOKEN,
        },
        method: "GET",
        body: null,
    };

    const request = new Request(API_PATH, options);
    const result = (
        await fetch(request)
    ).json() as unknown as MtrWSType.httpModel.response;

    return result.objetoResposta as MtrWSType.responseBody.consultarMtr;
}

// Consumo da função
const data = await getMtrData(
    "12345678910",
    "Bearer MY_TOKEN",
    MtrWSBaseURL.SINIR,
);
// => {...}
```

#### Abstração de uma requisição genérica da API

```ts
import {
    MtrWSBaseURL,
    MtrWSRoute,
    type MtrWSType,
} from "@stallone-dev/types-mtr-web-service/";

interface internalRequest<T_request> {
    method: "POST" | "GET";
    pathString?: string;
    body?: T_request;
    auth?: MtrWSType.auth.token;
}

/** Modelo-base para requisições à API */
abstract class ApiRequest {
    protected API_URL: URL;

    constructor(BASE_URL: MtrWSBaseURL, API_ROUTE: MtrWSRoute) {
        this.API_URL = new URL(`${BASE_URL}/${API_ROUTE}`);
    }

    /**
     * Função genérica para consumo da API WebService SINIR/SIGOR para MTRs
     * @example
     * const result = await this.makeRequest
     * < MtrWSType.requestBody.consultarMTR,
     * MtrWSType.responseBody.consultarMtr >
     * ({ method: "POST", auth: "Bearer MY_TOKEN", pathString: "1234" });
     */
    protected async makeRequest<T_request, T_response>({
        method,
        pathString,
        body,
        auth,
    }: internalRequest<T_request>): Promise<T_response> {
        /** Modelagem da URL específica da API */
        const _URL = new URL(`${this.API_URL}/${pathString ?? ""}`);

        /** Modelagem da requisição HTTP */
        const options: MtrWSType.httpModel.request = {
            headers: {
                "Content-Type": "application/json",
                Authorization: auth ?? "",
            },
            method: method,
            body: JSON.stringify(body ?? ""),
        };

        const request = new Request(_URL, options);

        /** Consumo da API com transformação direta em JSON */
        const result = (await fetch(request))
            .json() as unknown as MtrWSType.httpModel.response;

        /** Verificação dos erros internos da API */
        if (result.erro !== null) {
            throw new Error(String(result.erro));
        }

        /** Retorno somente do resultado da requisição */
        return await result.objetoResposta as T_response;
    }

    /**
     * Abstração do consumo da função 'makeRequest'
     */
    public abstract getResult(): Promise<unknown>;
}
```
