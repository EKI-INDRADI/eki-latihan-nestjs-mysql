<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
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

##  EKI NOTE :

"disini saya tambahkan pemahaman typescript saya & beberapa informasi penting dari video tutorial pada comment code"

## 1. install Docker, Phpmyadmin & Mariadb

```bash
https://github.com/EKI-INDRADI/eki-latihan-docker-phpmyadmin-mariadb

create db simple_pos
```

## 2. install nodejs & nestjs

```bash
install nodejs   (https://nodejs.org)

npm i -g @nestjs/cli
nest --version
```

## 3. CLI & note

```bash
//001
generate project :
nest new rnd-nestjs-mysql
npm

run project :
cd rnd-nestjs-mysql
npm run start
npm run start:dev
```

```bash
//002
depedency injection :
npm i @nestjs/typeorm typeorm mysql2 @nestjs/config

---info
@nestjs/typeorm typeorm = https://docs.nestjs.com/recipes/sql-typeorm
mysql2 = mysql driver
@nestjs/config  = untuk config .env
---/info
```

```bash
//003
nest g res user
REST API
generate end-point Y

---info
nest generate resource user = generate user module https://docs.nestjs.com/recipes/crud-generator
---/info

```

```bash
//004
npm run start:dev
---info
npm run start:dev = untuk running project,
setelah entity selesai di buat maka pada database simple_pos akan otomatis terbuat tabel user
---/info
```

```bash
//005
---info
data transfer object = https://docs.nestjs.com/controllers
---/info
```

```bash
//006
---info
postman = https://www.postman.com/
inject repository user (entity user), agar memudahkan ketika membuat CRUD
---/info
```

```bash
//007
npm i class-validator class-transformer
---info
informasi lebih lanjut : https://docs.nestjs.com/techniques/validation
kedua dependecy tersebut berguna untuk request validation pada API, validasi request berdasarkan class dengan memanfaatkan fungsi global middleware validationPipe
---/info
```

```bash
//008
npm install -g node-gyp (perlu di install ketika npm i bcrypt , error/stuck node-pre-gyp install --fallback-to-build )
npm i bcrypt
npm i -D @types/bcrypt
---info
encryption dan hash : https://docs.nestjs.com/security/encryption-and-hashing
---/info
```

```bash
//009
---info
Duplicate entry validator
pada src\user\entities\user.entity.ts :
    @Column({ unique: true })
    email: string
karena error handle yang tidak detail pada class validator,
maka diperlukanya manual duplicate validator 
---/info

nest g provider etc/validator/unique-validator

---info
nest g provider = membuat class / provider yang nantinya akan di panggil kembali (contoh digunakan untuk manual validasi unique), 
bertujuan untuk validasi jika data ditemukan maka tidak boleh dieksekusi

response :
{
    "statusCode": 400,
    "message": [
        "email admin@gmail.com sudah digunakan",
        "username admineki sudah digunakan"
    ],
    "error": "Bad Request"
}
---/info

nest g provider etc/validator/exist-validator

---info
copy dari unique-validator
---/info
```

```bash
//010

nest g provider etc/validator/exist-validator

---info
copy dari unique-validator & rubah beberapa code, bertujuan untuk validasi jika data ditemukan maka boleh dieksekusi (contoh delete data)
response :
{
    "statusCode": 400,
    "message": [
        "id 2 tidak ditemukan"
    ],
    "error": "Bad Request"
}
---/info
```

```bash
//011

npm i @nestjs/swagger 
npm i swagger-ui-express

---info
openapi documentation, digunakan untuk membuat dokumentasi API, https://docs.nestjs.com/openapi/introduction ,
konfigurasi routes swagger src\main.ts
http://localhost:3000/api-docs/  ,
dan yang keren dari nestJs, ada auto generate swagger

-- auto generate swagger controller -- 
import { ApiTags } from '@nestjs/swagger';
@ApiTags('User') // AUTO GENERATE OPEN API SWAGGER  , langsung jadi dokumentasi

-- auto generate swagger property -- 
import { ApiProperty } from "@nestjs/swagger"
export class UserDto { 
    @ApiProperty() // swagger auto generate property
    @IsOptional()
    @IsExist([User, 'id'])
    id?: number  

    @ApiProperty({required:true}) // {required:true} sama aja kyk @IsNotEmpty()
    @IsString()
    @MaxLength(64)
    @MinLength(8)
    @IsNotEmpty()
    nama_user: string

    ...
    ...
}
---/info

---bug info & bug fix
disini saya menemukan bug :
  "@nestjs/swagger": "^5.0.9",
  "swagger-ui-express": "^4.1.6",
  "class-transformer": "^0.4.0",
  "class-validator": "^0.13.1",
src\user\dto\create-user.dto.ts
BUG schema swagger karena SWAGGER VS CLASS-VALIDATOR , 
kadang terjadi masalah pada @ApiProperty() (swagger) vs (class-validator) ,
BUG schema swagger tidak muncul

cara fix nya
referensi : https://github.com/nestjs/swagger/issues/459
edit nest-cli.json
{
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",

  "compilerOptions": {
    "plugins": [
      {
        "name": "@nestjs/swagger/plugin"
      }
    ]
  }

}

---/bug info & bug fix
```


## REFERENSI :

NestJs (express) - MySQL - https://www.youtube.com/watch?v=WuGKMQpVQRA (thanks to Web App Project)

## EKI INDRADI

"TIME > KNOWLEDGE > MONEY". #STILL_ONE_DIGIT
