<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## GraphQl 
Request GraphQl
```javascript
query($skip: Int!, $take: Int!) {
  company(skip: $skip, take: $take) {
    id
    cost
    createdAt
    name
    parentId
    children {
      cost,
      createdAt,
      parentId,
      name
    }
  }
}
```
Response Data
```javascript
{
  "data": {
    "company": [
      {
        "id": "uuid-2",
        "cost": 5199,
        "createdAt": "2021-02-25T10:35:32.978Z",
        "name": "Stamm LLC",
        "parentId": "uuid-1",
        "children": [
          {
            "cost": 1340,
            "createdAt": "2021-02-25T06:11:47.519Z",
            "parentId": "uuid-2",
            "name": "Price and Sons"
          },
          {
            "cost": 1636,
            "createdAt": "2021-02-25T07:56:32.335Z",
            "parentId": "uuid-2",
            "name": "Zieme - Mills"
          },
          {
            "cost": 794,
            "createdAt": "2021-02-25T21:06:18.777Z",
            "parentId": "uuid-2",
            "name": "Schneider - Adams"
          }
        ]
      },
      {
        "id": "uuid-3",
        "cost": 15713,
        "createdAt": "2021-02-25T15:16:30.887Z",
        "name": "Blanda, Langosh and Barton",
        "parentId": "uuid-1",
        "children": [
          {
            "cost": 1288,
            "createdAt": "2021-02-25T13:35:57.923Z",
            "parentId": "uuid-3",
            "name": "Hane - Windler"
          },
          {
            "cost": 2512,
            "createdAt": "2021-02-26T01:41:06.479Z",
            "parentId": "uuid-3",
            "name": "Vandervort - Bechtelar"
          },
          {
            "cost": 3086,
            "createdAt": "2021-02-25T16:02:49.099Z",
            "parentId": "uuid-3",
            "name": "Kuhic - Swift"
          },
          {
            "cost": 4072,
            "createdAt": "2021-02-25T11:17:52.132Z",
            "parentId": "uuid-3",
            "name": "Rohan, Mayer and Haley"
          },
          {
            "cost": 908,
            "createdAt": "2021-02-26T01:51:25.421Z",
            "parentId": "uuid-3",
            "name": "Kunde, Armstrong and Hermann"
          }
        ]
      },
      {
        "id": "uuid-4",
        "cost": 1340,
        "createdAt": "2021-02-25T06:11:47.519Z",
        "name": "Price and Sons",
        "parentId": "uuid-2",
        "children": []
      },
      {
        "id": "uuid-5",
        "cost": 1288,
        "createdAt": "2021-02-25T13:35:57.923Z",
        "name": "Hane - Windler",
        "parentId": "uuid-3",
        "children": []
      },
      {
        "id": "uuid-6",
        "cost": 2512,
        "createdAt": "2021-02-26T01:41:06.479Z",
        "name": "Vandervort - Bechtelar",
        "parentId": "uuid-3",
        "children": []
      },
      {
        "id": "uuid-7",
        "cost": 1636,
        "createdAt": "2021-02-25T07:56:32.335Z",
        "name": "Zieme - Mills",
        "parentId": "uuid-2",
        "children": []
      },
      {
        "id": "uuid-8",
        "cost": 19453,
        "createdAt": "2021-02-25T23:47:57.596Z",
        "name": "Bartell - Mosciski",
        "parentId": "uuid-1",
        "children": [
          {
            "cost": 4288,
            "createdAt": "2021-02-26T01:39:33.438Z",
            "parentId": "uuid-8",
            "name": "Lockman Inc"
          },
          {
            "cost": 12236,
            "createdAt": "2021-02-26T00:32:01.307Z",
            "parentId": "uuid-8",
            "name": "Parker - Shanahan"
          },
          {
            "cost": 1686,
            "createdAt": "2021-02-25T20:45:53.518Z",
            "parentId": "uuid-8",
            "name": "Balistreri - Bruen"
          },
          {
            "cost": 4725,
            "createdAt": "2021-02-25T18:00:26.864Z",
            "parentId": "uuid-8",
            "name": "Predovic and Sons"
          },
          {
            "cost": 3277,
            "createdAt": "2021-02-26T01:50:50.354Z",
            "parentId": "uuid-8",
            "name": "Weissnat - Murazik"
          }
        ]
      },
      {
        "id": "uuid-9",
        "cost": 3086,
        "createdAt": "2021-02-25T16:02:49.099Z",
        "name": "Kuhic - Swift",
        "parentId": "uuid-3",
        "children": []
      },
      {
        "id": "uuid-10",
        "cost": 4288,
        "createdAt": "2021-02-26T01:39:33.438Z",
        "name": "Lockman Inc",
        "parentId": "uuid-8",
        "children": []
      }
    ]
  }
}
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
