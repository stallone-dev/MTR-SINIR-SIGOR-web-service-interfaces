# MTR Sinir/Sigor WebService interfaces

[![jsr.io/@stallone-dev/types-mtr-web-service](https://jsr.io/badges/@stallone-dev/types-mtr-web-service)](https://jsr.io/@stallone-dev/types-mtr-web-service)
[![jsr.io/@stallone-dev/types-mtr-web-service score](https://jsr.io/badges/@stallone-dev/types-mtr-web-service/score)](https://jsr.io/@stallone-dev/types-mtr-web-service)

Conjunto de interface `typescript` para uso do sistema WebService do SINIR/SIGOR para controle de MTRs.

Baseado na versão: `SINIR - 1.0.6 - ago/24`

## Instalação

Este pacote está distribuído exclusivamente através do [JavaScript Registry (JSR)](https://jsr.io/@stallone-dev/types-mtr-web-service/).

Independente do método de instalação, é importante referenciar dentro do projeto `.ts` como um `import`:

```ts
import { MtrWebService } from "@stallone-dev/types-mtr-web-service/";
```

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

## Exemplos

#### Criação de uma rota de consulta de um MTR

```ts
import { MtrWebService } from "@stallone-dev/types-mtr-web-service/";

/** Função para simplificar a extração de dados do MTR */
async function getMtrData(
    mtr: string,
): Promise<MtrWebService.responseBody.consultarMtr> {
    /** Modelagem da requisição HTTP */
    const options: MtrWebService.httpModel.request = {
        headers: { "Content-Type": "application/json" },
        method: "GET",
        body: null,
    };

    /** Preparo da API */
    const API_PATH = `https://API_URL/${MtrWebService.END_POINT.CONSULTAR_MTR}/${mtr}`;
    const request = new Request(API_PATH, options);
    const result = (
        await fetch(request)
    ).json() as unknown as MtrWebService.httpModel.response;

    return result.objetoResposta;
}

// Aplicação
const data = await getMtrData("1234");
// => {...}
```

#### Abstração do processo de autenticação

```ts
import { MtrWebService } from "@stallone-dev/types-mtr-web-service/";

/** Abstração do processo de gerar um novo token de acesso */
class GenerateToken {
    /** Definindo qual end-point da API será utilziado */
    private readonly API_PATH = `https://API_URL/${MtrWebService.END_POINT.GERAR_TOKEN}`;
    private body: MtrWebService.requestBody.gerarToken;

    constructor(auth: MtrWebService.auth.request) {
        this.body = auth;
    }

    /** Abstraindo o processo de gerar o token de acesso */
    public async getToken(): Promise<MtrWebService.responseBody.gerarToken> {
        /** Modelagem da requisição HTTP */
        const options: MtrWebService.httpModel.request = {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify(this.body),
        };

        const request = new Request(this.API_PATH, options);

        /** Tipagem específica do retorno esperado pela API*/
        const result = (
            await fetch(request)
        ).json() as unknown as MtrWebService.httpModel.response;

        /** Espera-se aqui o retorno do token em si */
        return result.objetoResposta;
    }
}

// Aplicação da classe
const login = { cpfCnpj: "123", senha: "pass", unidade: "321" };
const token = await new GenerateToken(login).getToken();
// => "Bearer ABCDE12345"
```
