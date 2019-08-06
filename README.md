
![](images/zeus.gif)


[![npm](https://img.shields.io/npm/v/graphql-zeus.svg?style=flat-square)](https://www.npmjs.com/package/graphql-zeus) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/) [![npm downloads](https://img.shields.io/npm/dt/graphql-zeus.svg?style=flat-square)](https://www.npmjs.com/package/graphql-zeus)

GraphQL Zeus creates autocomplete client library for `Javascript` or `Typescript` which provides autocompletion for strongly typed queries.

Supported Languages:
- Javascript
  - Browser
  - NodeJS
  - React Native
- Typescript
  - Browser
  - NodeJS
  - React Native

## How it works

Given the following schema [Olympus Cards](https://app.graphqleditor.com/aexol/olympus)

![](images/autocomplete-greek.gif)

[Play with it!](https://www.typescriptlang.org/play/?esModuleInterop=true#code/KYDwDg9gTgLgBAYwgOwM7wIIBssBUCeYwqAClBGKgFxwBKwSUAJgDzpQCWyA5gDQCGyfAD44AXjgBvAFABIAIoBXYFHxUZs2Qn7MAQvgCSTdXM3bmRk5s0xCwKgCIAyjE48HvU5p1R+agGb8WKjAntayPn70AI6KHFDAxoHBoV6yCbHxiVTJIV4AvqaFsvlhAMI6xhoRMDD8CADWVmaVBgAizTZ2ji5u3B5pkWquymHWQzFxCUlBIWOaGVPZI8AFRXKlck5ECBxBTg0cONRwDsDIigC2A7IAsop1MBwozfxMTBXMneZVabZEjgQCX4MGAnyYN3GUF8AVmqXCE2AmWmOTh83SSKWxhWa00xU2WmBoPBzSYxCBHDATxe1Vk-3szlcXH68yGqJSrOhUUxWRmHK8i15VBxeLGZQAFkcmAlkJ16Y4DMgYJCIlzYfyoTDJkLcvCFjyUbqimMMLV6k1afKHIrlZyYey5l5Ecjsrr5oKUSKSmM2sB-OcQnLutalSq2W6nWrtYa0QKDcsoMpjaZUIdjkGAc4dnssAcjsEw2rhYm9aqtfG+Y7rB6E0nRaZkPxLvZLcHeszC-aI5ruS7K6Wa9iS+sStJCtJQJBYIgUOg6MAYIooMgCEQTvRGKx2MyBEJRBINEoVGpqj99JYHODIdL+AB3EmXyqQrAcdDg6iP5gODblSrNU11I0CqhmKkpYNK5zAbapi+v6aAMjakIgoBTSfhCYw-AYlz8NwDJOAAzAA8gARgAVgw0GaGSqAUlSzyyoyfSQhwxjWm0kKNs2PRMu4YypvmH7bAwOZ5sc37elsRFkRRzTEYojQLtxTFjA0wBqIxHZjAk3D0UpHY-nI9yPLp1RvB8f5oeJhTjpO0DwPScBHqo4hSHIZ6GMYAAUYDkJQ6haK0TAAPxUNuPD5AAlOIojgmEAD0ABUCVwG0vi3nA-CIJULDEVAogJXFcg3vef6xXIiXJS+c7YFgcDvhlABu-BHMRWD8DleVwAVchVTA75UOCADaAC6Y7SNIFV1ZUcCKCETBwFwWXMHA3BNsAHX5YVtnTg54IuRok24OKwAZWajRwJAt4qBtXWFbIAHmlQFyXMRKjxUlcAsEwHANcIAASEDpdhQiIGBEHIHAMDHStCTAA0K0QPN4pvCwcXfb9t1yBKUoyiFz2vVA73JUdJ1knBIQXYD125ZtciwQG9j4295UfQ950QFDKhLUwqBwCgkPQ3UrUnbwcAJIuy68-V-D+KCUCnShN3dTUKFUN5vnUJIsiTWzqnzT8cU-AtPNK3dmFtCFYXcCNkXRVNzAjWEmHYbhIUESR5EIDARMpeSnB0fzED+Bl3Om0VfuUtSspW2ELGhTxfAs8T0OcSdQchz8YeyKn8d9GE-HHG72b7GmwQjWNE2s7evMEXAABiRwnd1232XYcDu9JXv7XIckKTAuc7nIqlqDHcjabpVsV+cVzt8Xual7zGi4H9ACqABybQAKK0C5DjL+vW+0DctAYAYa+7yfZ83HXBi0Jvu833f342eAdmQ23RkgvR3fax9Zn2-NGAEAAG8yYCCfgxF+AhCzmZEk6sKCawCl8IEwAQRgkqLbMQMVKhT1fjtNuKC0F7QPEnX2NF-ZRz5sHTKmcaaY1kNRWiUcB48B9l9H6-1AZwGBvgUGONzgCxOtwWG8NuCIzgMjVgaMOH0OxuBXGT0rgEx9iTBW5pKZXSgFnXWiiXrM1-snUmfoGYaOpp1ZW9N4K6OUXIAuwQi7CRLgJR2pDVGpyoRnbKdDlY50ni-Kc8AEBtVQLzAA4r4MA4p5AABlN7QmgHAUAoJkA8zgHE8g8sZBwGyTONAIwvbQG8ooVqHAEBi2IJAKxcBwn8EiTE+gqBKkhCilknJ2TUCKCIFATyDgHARQANzSDadkpAaAIBYGAAAOhUBkzyCRGmzmAAMoZOTChtKAe2HgnkWkrLaeLJcEMHA1LqdE+cCz4JpPiVABwgy2lrLgOOcaDk66KGQAgFgJBEkgGSakwQ+BHZ0H3HATykzQU6G4CcEgUUsF0EGQ5DAQgXlvJcki95fzRZ-OEIM6QDkDCoFXOtW4otcCiwAFqi2iUC3AXyfm81uHAIKcBSVwBoNEuFbc8UewoiwElTKKVArxQSlgG5oBbgTnAAAPnAJm8spWoHwC9cZotXkNGQIDCGUrXlky4IkUQmqUl+h1UwYlZL+XsqIHAPFThtBtS0by8lcBKUuUFXYNg4qpXEQgOM1BGrpVKLenAe1Zqnlt2wHsfFrrcBUrgAAMlctkgA+gmoI4aQrzk3G6vOgasVjmxS3d+Fqw1QMSPQCWK5I37g0INT5i1h7p1wMNKguBq2jXyLG9NorM07irTWiGdbg4NqbS2scwgQ2FqgBCoVdcaXnFSQi-AqKgXTqSbO3mqKWBcH9PLEgGK9wMrgJ8mgyBgANRUOak6hF-BCqjS5alK6Um8wwGqDdyAt2Av3TvGguBz313iOgJ93ArjnBgCwZd3zV1wHnYulyl6hUAYjUQUDwgc3SC4HLQICATrHKidEhpTSTqtLAXUNNIrmBdtYRlPctzElXNQGmp9MIWCtOyc2EJOF7BwCttR-IOb-Fvwci4NBPKgWtOrQtPtal63DTTc2kgw0Z0PuBQxvwL6320D1TNA1-gjURV2fu5T+AWBFrmqWg5QrBOgmFch0dbSv0toU3OxFryEB6cZcZktC4zOuos+tUzy5r0tus3pmgnLO4gdk8NUW7mmB+fLYhnzPLAvCGJYFwZ+RsUOQaeM09AA1IIyhhO3oc4+59m6ubqZWYypwwAJle3otVkDFXslfuK5BpzbzKuWtQNaoIOgWB6eybF69yWBtwEGg3KA-6J1AaVMJyLo3xt-pgABmb4XkvtxqxRerC4WCwddUNityHRptJsyyrrXKvY8tFtV2rUcGvCeJa1rVhrj3zUZc97Tr2zsrBQ-mgTm26soHuzeiQoXPYgZWSSlZxmhV6eYzksTtbJMDukzQLLWBcv5fWhFnNdyVkjeyXe8DimPtGv3aTr7NAcQoYcth+pnnlzXRB4G1rBnVPldEFVgHd2dvqbOzdrbQOdtRoy23QiXSv4oFwBAOn0TCsSE8hAGgsvYtM+ENC0QZAICXFfOtaLB34uPGx9Z0XFr0enowGADgDcausGZ0T2lkHSuvo551sH3LaDXaN1Z0WTWzsO4g1B5zbvUAXZA3txDBvjfrYSxH3zDO4vR-W1GlZIXQ9hau+3b3UbiU09DVbm34Fpey-l8CpXZzsvADy1gArUaNcHvIDr6B5vgCW+txwW3wm88Wv9DABA4pxdR15hIeDQr6Tp17-3lD4182jLnD121Lf5YK5or1qANAY5wCajXjjfz6+tNQLeDgffxTAtX7anZbTtAUwAOSbO4Dfqgo39nLjgAAAwcAAEkkNv5Q+QHBv7UYjLFpwA342iP7P4J7v7f6-7AD5CAF6bX4nQ351xYAQAggQHDLlJlrQE-5Y7wFAFZS366BeoTKCCYHDIv4Qxv4wH4EIFX4gFgFtAUF7JQEf60E77-70E5JIGgHTyXAsE5JUG4GwEEGIGMHn46CCHZLCE0F4GcHcHZJkz8CKBYD9yQE4G6jca5oz54KBKzjwAEqkAaxL4uSeStKwGeDZL0hWHSprS2HDy2GtQQCNAGaoBjg0AWFY40B-LUbyicYJzUY5wBF9DUbDxppcYrLOGuFqh0Y0CereqCBpYRQb7iowqtITLwDzKV5MDV7KAuQ1RGFa6UCDT0jDSDSpzDTUYcDByeTDyX5CHEA5F5EnQSDZEY6JAtGDTDxVErL3Jz6txEAt7zRtFNEdG5FY6TL0jUYDELSoAGbxGkE+ouTtGnoTE76TJDDVG1GvgGaxpxoACE0RDQbhDRMhbBg0HBSYWBky2EYAnknkDUPhQg9eRRJhYxp63SkgW+3hW+osNhdhzYosjhcAxxbhVOJYDyEUumNxpEEAXAnkN+vAN+EU+Qw03B-RBh5SqAaBaxC+OgLk+JUAS+nk9IwxossByy2SNRwKBx8yuJiQRJZxuSc4qxiQBKBROAbxCCpRdgwxvRbSNJpJdg6cbJTAHJYgkpoBEAYWKJ8awysx4KqAAA0mpMPnAGHpMsPKgHMh8eyXYFSZQWwZIN-kqaqfgO4VgdkpMtpmoSoA8fwA0PXrAYNI6fJgcVKRTokDCVabcbUp5KNm0p5I6fXnIY6fkFQN-tyZQCSd8bATQC6W6f8d0AWsAOSYCbvvDJFPAYGXAKiWIXjqwTgUSSSYUXYMYTyWSXqUwJFj8TvlFFAiEcyNoecTgfSRAHiTajoGltirMbsWqKipQgrismADoMBqkX0C4tkvwM8f8qNPvisrMYNLAagKLFAPJhIPwDMViYNNhFwOacCWpKLKClqWqRuRdGOUqNuXknAMPC0eqZqdqY8VjqgMsiskKQcdqZMhMjwFDMya2QcreWpPed+ecNwFDHAKIAAAy5mMpv6eTf53kvm5ltJ+n3EoXDKPEa4YVYFyENQRlRnlnFGoCxk4VWnxl1nKCoDLnzZWl0U5L+F7nIAHlkVYHBGOGsXDLDwJmcXZLZlv5kU+n0VwCTJwkIlIkomRTf7yyMquD8CfEhDS7VZwxuHeSXnexixRQ0A34345l0UQnyUqCKUQDKUnGxFqUygaVQCGl8XjQjI7lVmoCV5QDmnnlfmNIviYZ1FqmgW-mn4AC0cAAAjKLEFYaZkZRcANLi3i5FHtRUxa5d0WpAKXAP4Akp5LMfDOnNqcybAdFXqbFQnkYcuVjvlU5R0eUQ0CleOPZTeeCqtvfuIHpkhTvqgL5eBaftBaNnBQhZIC1VRRhWhQGcJdklhdFJxXhQRZINGSRXqV8bxZFQmS+TRbYSNQxSmXlRAC3qtWtRmVTnyXNSxbtTktxVvpxfxRhUJb6WJcgIiciaiRFNJfunJQpVFSZcACpeZaOZZWuVpaAbpQJVgQZa9UpR9WZTCDqd9cBr9dRsIfVc2EqPfj2eNLMWycqTlmYU0E2RRk8aCUsYIJKtjdwITd8YNCABOcyI2njYkb6lbFCeNdYSKcHA1OIFKTfgkWQcgDfvuvDPtUQOnCzZKRIDfjKeDtzXBYhfkCaZIKLRRNLrgLDFhfkPAWdnIQ0PkDAWIdILMbLV7PLbDGYeXqTeTUTVTRzcsXKuKpFBTTwAze-tLY+WqYrhFENXUaGdJXqejXUaLBAN0cNKiW-i7TdYiaAfmQgdrViS9UZW9aZW4WYVDUqDbdbLWfwGmnvknXbK0h+fwFFMITpdscCo7RacGS7T+R1azRIFBcyXnTfi2XABFcRGjgwJ2pvpivtOlu+bUQZpMv2TCCXdXVAb3X4IOfRJ5INCeQnTACnYaW2jVhTPDkKePtQhXdKbKf+RqWFqecXTna7U6ZnbmUKfDELaAUmimlAnKfDlgUXTqfwH7S7XcQ6S+FAuaQuWtYqU-aHhLkPi5LfVVa6R-a5YQXRe-eGuLioJLsgGvGtDBpvU+WfZ-eA0PhFINFBSlcJSA1AmA74EORlB-VgxA9RfA-g1HFA82Gg-RcRINBNaaXg1-fRKQ3AafR-UmjQ+GuaRGXAKw5g3QygAw3pSNeeVHZNjHWDapePaCpPRirQ4g-Q2tCndI9g-RDZVaZFEA6sokikPKXRZQ1VS5EI8ZbHeZeI5MpI7eSnXfWo7ZVgao3prPZo5fdgYBfnbY30SssIbrTAPrR9Z5MRMsh3RHTeXJFKE5Lwgrv4a3SRs3WRuipRiINhdYb4CDe9Z9RDWPWURii7QkGAG1F5XFAADoOBj0AB6kgRTvARTeTyAFTDgw0CUEUBTasg0JTZTFTVTBTtTEUcUfAoBn+QVkZAATCib2VibEMeGUAYYmF3GE9pSE9zVKjfp-FHHM6AU4MUuQpHPRHKTCork3RmjE5iu7ZIDAFMRANElTFABUCENshrZIEE+BCE6ST7QHcMzef4KoVgBKM1MgOM3kpM-AArhQEPjQJPgPgHGgPXqSTM8oKoMswsw8BA7C6s8ROs2C1s6IDsx2tE0ILunE3bbUtbguP3ormC6uXAKM6oD8+wPJDAKSRFM7W+bMSEHDHXNAO5uqRi3vvvdSbUUvXzCvSLbKfsXzMyZlWqTA+DlvTqRAMo4fT5WXRBSwMFevVQYQfctkl+WlVAJvPUOKA8XvekaNrMbAS5L7VVWo4fT3QaiAJeoiUw+GkmnKR6RIP5WFVowqTuRQDIygFI+Gm5ZMh5cfra8mswwmkM7mb7fA+eQ420oNJ64oygFTbAbmR3XRWSJkWnH7Wo3Y-PQfV3WqD3fMWqM+fWevW0rATadANq0S0yw0Cy1AGy8o3chozm8JYvUzZFfyx4xfWRTW3W2y8W8oI28Mmq8O6NiOzY7Zf4wE3OPi3XIS6fgCyS8C-O4PvRKS+S2oETa-TkhFSCyPSgIQRFRu41RIBu4ewuKlSuySyayS4NEFfJhKlKpICmwxc5NG5eyfvuxDKMS6IiWqmSP5SC2G029oCfsCjMtAKWwLOQOlMeulOkoUg4CQGQRTFwOgEELVDfv+8AIB-O9zUAjNBTAAF7ACzTibSqIzACkS8znANTxAoAI3KjKMjtCkguruzi3ELjijiIxpxpsckucdQziLH036hKby4DdtYGuC8LvvZLHtpHlK-s34btWwon+sJw1H4CeQbtDttqgf97gdXJQfWHigwfSrADwdXI9JODa5cfMgIzHpwC3jkC23KfQsWkJzc2vghzfXwDpzYfUeJLIB0cueMd9JZsaGAV7vOZRyeRyGAtrsoPDT5BBQbtiDf7yd9DwGiz8dIO5lTHHS3W6nnKBixP17zL4aiVOW3UNm8xa5N7rQq4VKLLq75ecxFcVeLLK4RI4Z4aLLbt0VCmdfwTTK0bGcMWmdcJwfVI9cxIIfdLDfNKWOrIYW9ussf3EDFeVdEY53LcAWv6LdTI7fLcTsrdFlRfztftxff4JezhJfZduvZKepMCbsABSTghEa86nfQmn5hZL7nNAmX9nkUO1LGXHiM2lJAhETgEnoPEiqCZIk2nhuZN+PzySMA-lBKj+oBtS2TpSEDcU1HKAN+Y7cPJ5uXa7tjV11p7XDxh3s55XzXI3RPNXGUdXjeuuLATXJXwArXNxtPW3XXM3tSvXTPzSXLVpQ3YvUyEHk243UMZn03su83gv8EQ7VjVpa39bG3Oph3kyO36vjjB30v+v4CWbM91G40078Anzi0CuJ5t3aAy7J+7H4Lds5hKyITNADx5enLWCembzOAtv3zEz1LxLSDiJszdL0rBX5ww1mF9PZXdsh3bPWeQmITp22S0JqfxD9Exes3cuGfngizukwKHLLxdt2SgfHzyMXAlL+SNLjvr5iJJfxP0fLttPo2qvpXfvogKfjZCWrfyAmfeZtXGpPDK4MuBfLAQ-o6NjsxbeZhDvS7H7-ervr57vrSXvj33M54xgZfSuvfo21fwf9ffz4fa7dLN+UfHvwDlQe-NAEAY7HfhXdP0vVAvf2JlX7kRg2fjZbehecUlPxF4xIWAITQaDfh-5MAb8w0EbMVBJAH8P+Fff3lgRP618Q+vzMPk3yv439328Av8HzGf6x8Ou7-T-nr3wHMA-+j6AvB3iLzACTkYA9zhAIoHQDYBngXqP1EQFH9UB7zU-qHy9gX9ZwOA9ziiVv5WkOBlQE4E-2sYv84+3fewGQJN4SDmAr5MfgANoFACS84Am-MoJ5gwDTsmwIfsjywKwICBPvJAfgHibDI0BXzM-lgJJZX8h+og99qYK+CECZBxAt-jzwsGM8eemxd4OCCoGQYaBtufPiALlxD8IBrg1gQYLHDLJZipKUjuqS34A8y8VAJrmWmugZ968G7OwQIOv4iD2+xfeFswjSEZCDk10WfjkPc55CaWcLYyG32do6FZilzf5vKW347NP+wCAft7iL7SAjBaQroan0H4lD6Ic-QZKjVeQ-15UyKbZBL1mL94vmLkYPj0nFC1A-IcUOKIEFUhQBJkwiEXtEAmTfQgEuwpAJcDij8BQA4yOKOMgVRgBZoXTHrocPC52UckmwwNM5EWE8B7OITOAAcXnDNg9E8sAjrNBOhlBcAtAaJHFDKC3A2gcAAANTtwSAGAMoPfE1YZQHgLhbXNkwXAnR+k-lXTIuSxLfFdBJwdDo0FFgsCj0FnPaG2k3K3hmogSdAZMgebw5SRxg4ZMERWBw9nY7GDkVgV7iqR+4kMEsHD02B3IdqVInfjohFGjBbGthU7npneHIc-ATnY-KfhT7odpwznY-MyCfxtJ3hcHcEAcUmQrIjRlQE0brCJFjIJk35CANwE8jkiGgosc0ZQORqJgau2KaQEAA)


## License

MIT

## How to use 

Main usage of graphql zeus should be as a CLI.

### As a CLI

#### Installation

Install globally

```sh
$ npm i -g graphql-zeus
```

Of course you can install locally to a project and then use as a npm command or with `npx`

#### Usage with Javascript

```sh
$ zeus schema.graphql ./
```
It will also generate corresponding out.d.ts file so you can have autocompletion,

#### Usage with TypeScript
```sh
$ zeus schema.graphql ./  --ts 
```

#### Usage with NodeJS
```sh
$ zeus schema.graphql ./  --node 
```

#### Usage with React Native

Same as browser

```sh
$ zeus schema.graphql ./ 
```
#### Load from URL

```sh
$ zeus https://faker.graphqleditor.com/aexol/olympus/graphql ./generated
```

With Authorization header

```sh
$ zeus https://faker.graphqleditor.com/aexol/olympus/graphql ./generated --header=Authorization:dsadasdASsad
```

### Use generated client example

```sh
$ zeus https://faker.graphqleditor.com/aexol/olympus/graphql ./generated
```

```js
import { Api } from "./generated/graphql-zeus"
```

#### Perform query with Chain

```js
import { Chain } from './graphql-zeus';
const createCards = async () => {
  const chain = Chain('https://faker.graphqleditor.com/aexol/olympus/graphql');
  const listCardsAndDraw = await chain.Query({
    cardById: [
      {
        cardId: 'sdsd'
      },
      {
        description: true
      }
    ],
    listCards: {
      name: true,
      skills: true,
      attack: [
        { cardID: ['s', 'sd'] },
        {
          name: true
        }
      ]
    },
    drawCard: {
      name: true,
      skills: true,
      Attack: true
    }
  });
};
createCards();
// Result of a query
// {
//     "drawCard": {
//         "Attack": 83920,
//         "name": "Raphaelle",
//         "skills": [
//             "RAIN",
//             "THUNDER",
//         ]
//     },
//     "cardById": {
//         "description": "Customer"
//     },
//     "listCards": [
//         {
//             "name": "Lon",
//             "skills": [
//                 "THUNDER"
//             ],
//             "attack": [
//                 {
//                     "name": "Christop"
//                 },
//                 {
//                     "name": "Theodore"
//                 },
//                 {
//                     "name": "Marcelle"
//                 }
//             ]
//         },
//         {
//             "name": "Etha",
//             "skills": null,
//             "attack": [
               
//                 {
//                     "name": "Naomie"
//                 }
//             ]
//         },
//         {
//             "attack": [
//                 {
//                     "name": "Kyle"
//                 },
//             ],
//             "name": "Arlene",
//             "skills": [
//                 "FIRE",
//             ]
//         }
//     ]
// }
```

#### Perform query with aliases

```js
const aliasedQueryExecute = await chain.Query({
    listCards: {
      __alias: {
        atak: {
          attack: [
            { cardID: ["1"] },
            {
              name: true,
              description: true,
            },
          ],
        },
      },
    },
  });
// RESULT
// {
//     "listCards": [
//         {
//             "atak": {
//                 "attack": [
//                     {
//                         "name": "Zelma",
//                         "description": "Central"
//                     }
//                 ]
//             }
//         }
//     ]
// }
```
So you can access properties type-safe like this

```js
aliasedQueryExecute.listCards.map(c=>c.atak.attack)
```

#### Single query with Api 

Use single query with Api to get response casted.

```js
import { Api } from './graphql-zeus';
const createCards = async () => {
  const api = Api('https://faker.graphqleditor.com/aexol/olympus/graphql');
  const drawedCard = await api.Query.drawCard({
    Attack: true,
    name: true
  });
};
createCards();
// Result of a query
// {
//     "Attack": 83098,
//     "name": "Jeanne"
// }
```

#### Gql string
Use Zeus to generate gql string

```js
import { Zeus } from './graphql-zeus';
const createCards = async () => {
  const stringGql = Zeus.Query({
    listCards: {
      name: true,
      skills: true,
      Attack: true
    }
  });
  // query{listCards{name skills Attack}}
};
createCards();

```

To run the example navigate to: `./example` and run
```sh
$ npm i
```

then run 

```
$ npm run start
```

Use `Api` for single queries mutations and `Chain` for query chaining

#### Javascript TypeCasting
You can cast your response from fetch/apollo/other-lib  to correct type even if you are using Javascript:

```js
import { Cast } from './graphql-zeus';
const myQuery = Cast.Query(myLib("somegraphqlendpoint"))
```

#### Typescript SelectionSet

In typescript you can make type-safe selection sets to reuse them across queries

```ts
import { SelectionSet,Chain,Card } from './graphql-zeus';
const chain = Chain('https://faker.graphqleditor.com/aexol/olympus/graphql');
const cardSelectionSet: SelectionSet<Card> = {
  name: true,
  description: true,
  Attack: true,
  skills: true,
  Defense: true,
  cardImage: {
    key: true,
    bucket: true,
  },
};
const queryWithSelectionSet = await chain.Query({
  drawCard: cardSelectionSet,
  listCards: cardSelectionSet,
});
```

### Spec

Promise of type query data object is returned.

```
PROMISE_RETURNING_OBJECT = Chain.[OPERATION_NAME]({
    ...FUNCTION_FIELD_PARAMS
})(
    ...QUERY_OBJECT
).then ( RESPONSE_OBJECT => RESPONSE_OBJECT[OPERATION_FIELD] )
```

Simple function params object

```
FUNCTION_FIELD_PARAMS = {
  KEY: VALUE
}
```

Query object 

```
QUERY_OBJECT = {
    ...RETURN_PARAMS
}
```

Return params is an object containg RETURN_KEY - true if it is a `scalar`, RETURN_PARAMS if `type` otherwise it is a function where you pass Fiel params and type return params.


```
RETURN_PARAMS = {
    RETURN_KEY: true,
    RETURN_KEY: {
        ...RETURN_PARAMS
    },
    RETURN_FUNCTION_KEY:[
        {
            ...FUNCTION_FIELD_PARAMS
        },
        {
            ...RETURN_PARAMS
        }
    ]
}
```

#### Use Alias Spec

```
RETURN_PARAMS = {
  __alias: RETURN_PARAMS
}
```

Access aliased operation type-safe
```
PROMISE_RETURNING_OBJECT[ALIAS_STRING][OPERATION_NAME]
```

### Use In your Project to generate code 

This will be rarely used, but here you are!

```js
import { Parser,TreeToTS } from 'graphql-zeus';

const schemaFileContents = `
type Query{
    hello: String!
}
schema{
    query: Query
}
`

const typeScriptDefinition = TreeToTS.resolveTree(Parser.parse(schemaFileContents));

const jsDefinition = TreeToTS.javascript(Parser.parse(schemaFileContents));
```

### Use in your project to dynamically fetch schema

This is useful when you need some schema fetched from your GraphQL endpoint

```js
import { Utils } from 'graphql-zeus';

Utils.getFromUrl("https://faker.graphqleditor.com/aexol/olympus/graphql").then(schemaContent => {
  // Use schema content here
})

```

## Support 

[Join our GraphQL Editor Channel](https://join.slack.com/t/graphqleditor/shared_invite/enQtNDkwOTgyOTM5OTc1LWI4YjU3N2U5NGVkNzQ2NzY5MGUxMTJiNjFlZDM1Zjc2OWRmNTI0NDM3OWUxYTk4Yjk3MzZlY2QwOWUzZmM2NDI)

## Contribute

For a complete guide to contributing to GraphQL Editor, see the [Contribution Guide](CONTRIBUTING.md).

1.  Fork this repo
2.  Create your feature branch: git checkout -b feature-name
3.  Commit your changes: git commit -am 'Add some feature'
4.  Push to the branch: git push origin my-new-feature
5.  Submit a pull request

### Parsing

Simplier approach to GraphQL parsing. Using graphql-js library and parsing AST to simplier types.