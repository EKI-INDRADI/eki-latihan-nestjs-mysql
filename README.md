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

"sebelumnya terimakasih kepada "Web App Project" Youtube Channel saya tambahkan penjelasan beliau & disini saya tambahkan juga pemahaman typescript saya & beberapa informasi penting dari video tutorial pada comment code" ,

"pentingnya dokumentasi karena disini saya memiliki pengalaman Research & Development tanpa dokumentasi, tanpa portfolio, tanpa bukti nyata adalah 'BULLSHIT' ".

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
generate entry points Y

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



```bash
//012
buat controller nest g crontroller <name>
buat services nest g service <name>
buat module nest g module <name>
tapi saran menggunkan resource saja agar lebih mudah

nest g res auth
REST API
generate CRUD entry points? n

npm i @nestjs/passport
npm i @nestjs/jwt
npm i passport
npm i passport-jwt
npm i -D @types/passport-jwt

buat file pada src/auth/jwt.strategy.ts

tambah .env  JWT_SECRET_KEY= 'eki-secret-key'

---info
dokumentasi :
https://docs.nestjs.com/security/authentication
https://docs.nestjs.com/security/authorization

ini digunakan (extends) dari PassportStrategy  (memodifikasinya) disesuaikan konfigurasi
---/info

```

```bash
//013
nest g guard auth/jwt  (bawaan dari CLI codenya beberapa di hapus & di rubah)

buat dto manual auth.dto.ts
---info
setting expiresIn (waktu expired) & setting penggunaan Jwt strategy pada auth module,
login authentication & generate token
---/info

---bug info & bug fix
ada bug jika menggunakan extend UserDto, karena pada UserDto memiliki unique validator (memvalidasi jika username sama), akibatnya tidak dapat login(generate token)
---/bug info & bug fix
```


```bash
//014

---info
  ----- CODE
  @Get()
  @UseGuards(JwtGuard) // melindungin request dengan JWT menggunakan Guard
  checkUserController(@Request() req) {
    ...
    ...
  ----- /CODE

  UseGuard, berfungsi untuk mengamankan routes JWT, contoh :
  ------ SESUDAH GUARD
  {
  "statusCode": 401,
  "message": "Unauthorized"
  }
  ------ /SESUDAH GUARD
---/info

---bug info & bug fix
    // ======================== ERROR 1, KETIKA NENAMBAHKAN UseGuard
    // Error: Strategy#authenticate must be overridden by subclass
    // at JwtStrategy.Strategy.authenticate (D:\_eki-latihan-nestjs-mysql\rnd-nestjs-mysql\node_modules\passport-strategy\lib\strategy.js:21:9)
    // at attempt (D:\_eki-latihan-nestjs-mysql\rnd-nestjs-mysql\node_modules\passport\lib\middleware\authenticate.js:366:16)
    // at authenticate (D:\_eki-latihan-nestjs-mysql\rnd-nestjs-mysql\node_modules\passport\lib\middleware\authenticate.js:367:7)
    // at D:\_eki-latihan-nestjs-mysql\rnd-nestjs-mysql\node_modules\@nestjs\passport\dist\auth.guard.js:91:3
    // at new Promise (<anonymous>)
    // at D:\_eki-latihan-nestjs-mysql\rnd-nestjs-mysql\node_modules\@nestjs\passport\dist\auth.guard.js:83:83
    // at JwtGuard.<anonymous> (D:\_eki-latihan-nestjs-mysql\rnd-nestjs-mysql\node_modules\@nestjs\passport\dist\auth.guard.js:49:36)
    // at Generator.next (<anonymous>)
    // at fulfilled (D:\_eki-latihan-nestjs-mysql\rnd-nestjs-mysql\node_modules\@nestjs\passport\dist\auth.guard.js:17:58)
    // at processTicksAndRejections (internal/process/task_queues.js:95:5)
    // ======================== /ERROR 1, KETIKA NENAMBAHKAN UseGuard

    // ======================== SOLUSI ERROR 1
    // pada JWT strategy (src\auth\jwt.strategy.ts), seharusnya mengambil dari passport-jwt
    // ------------ SEBELUM
    // import { Strategy } from "passport";
    // import { ExtractJwt } from "passport-jwt";
    // ------------ /SEBELUM

    //------------- SESUDAH
    // import { ExtractJwt, Strategy } from "passport-jwt";
    //------------- /SESUDAH
    // ======================== /SOLUSI ERROR 1

    // ======================== ERROR 2, import { Strategy } from "passport-jwt"; 
    //    TypeError: JwtStrategy requires a function to retrieve jwt from requests (see option jwtFromRequest)
    //    at new JwtStrategy (D:\_eki-latihan-nestjs-mysql\rnd-nestjs-mysql\node_modules\passport-jwt\lib\strategy.js:55:15)
    //    at new MixinStrategy (D:\_eki-latihan-nestjs-mysql\rnd-nestjs-mysql\node_modules\@nestjs\passport\dist\passport\passport.strategy.js:32:13)
    //    at new JwtStrategy (D:\_eki-latihan-nestjs-mysql\rnd-nestjs-mysql\src\auth\jwt.strategy.ts:14:9)
    //    at Injector.instantiateClass (D:\_eki-latihan-nestjs-mysql\rnd-nestjs-mysql\node_modules\@nestjs\core\injector\injector.js:291:19)
    //    at callback (D:\_eki-latihan-nestjs-mysql\rnd-nestjs-mysql\node_modules\@nestjs\core\injector\injector.js:43:41)
    //    at processTicksAndRejections (internal/process/task_queues.js:95:5)
    //    at Injector.resolveConstructorParams (D:\_eki-latihan-nestjs-mysql\rnd-nestjs-mysql\node_modules\@nestjs\core\injector\injector.js:119:24)
    //    at Injector.loadInstance (D:\_eki-latihan-nestjs-mysql\rnd-nestjs-mysql\node_modules\@nestjs\core\injector\injector.js:47:9)
    //    at Injector.loadProvider (D:\_eki-latihan-nestjs-mysql\rnd-nestjs-mysql\node_modules\@nestjs\core\injector\injector.js:69:9)
    //    at async Promise.all (index 4)
    // ======================== /ERROR 2, import { Strategy } from "passport-jwt"; 
            
    // ======================== SOLUSI ERROR 2
    // https://stackoverflow.com/questions/51131480/jwtstrategy-requires-a-function-to-retrieve-jwt-from-requests
    // SEBELUMNYA : // JwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),  
    // SEHARUSNYA : (menggunakan j kecil)
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // ini merima tokenya dari mana , kalo ini dari authorization : Bearer <token>
    // ======================== /SOLUSI ERROR 2
    
---/bug info & bug fix
```

```bash
//015

---code
  const configSwagger = new DocumentBuilder()
  ....
  ....
    .addBearerAuth()  // karena token disini menggunakan Bearer Aeuth , ada banyak security contoh lainnya : // .addApiKey('x-access-token') // .
  ....
  ....
---/code

---info
swagger header jwt auth (swagger security), berguna untuk memasukan token pada OPEN-API (dokumentasi API) SWAGGER, untuk mengijinkan beberapa routes yang memerlukan akses token jwt,

 .addBearerAuth() mengaktifkan header jwt auth (swagger security) untuk token access , akan muncul tombol Authorize pada pojok kanan atas
---/info


---code
  @Get()
  @ApiBearerAuth() 
---/code

---info
dokumentasi https://swagger.io/docs/specification/authentication/bearer-authentication/
Authorization: Bearer <token>
ini berfungsi agar swagger tau bahwa API ini memerlukan header (Bearer token) untuk authorize routesnya (contoh gambar gembok dikanan nama routes pada controller yang diset @ApiBearerAuth() )
---/info
```

```bash
//016

silahkan di coba pada http://localhost:3000/auth 
untuk memuncukan request perlu authorization
pada swagger (masukan token pada button Authorize) 
atau
pada postman (masukan header Authorization : Bearer <token>)

---info
contoh memodifikasi JWT PAYLOAD
src\auth\jwt.strategy.ts
src\auth\auth.service.ts
src\auth\auth.controller.ts
Json Web Token memiliki fitur untuk memasukan payload data pada token nya,
nah disini payload token tersebut akan di enkripsi/hashing/encode (tergantung algoritma) 
kemudian setelah login berhasil payload tersebut akan di decode/dekripsi berupa data/object yang mana data tersebut dapat langsung digunakan kembali sesuai kebutuhan

dokumentasi jwt : https://jwt.io/
---/info
```



mohon maaf lama update, karena tidak memiliki banyak waktu karena saya bekerja pada salah 1 perusahaan startup dengan waktu kerja 11-12 jam per hari

semoga dokumentasi ini bermanfaat cukup liat setiap branch nya, akan langsung paham (sudah dibuat komentar code untuk di pahami juga)

next video  1:48:27
 
## REFERENSI :

NestJs (express) - MySQL - https://www.youtube.com/watch?v=WuGKMQpVQRA (thanks to Web App Project)

## EKI INDRADI

"TIME > KNOWLEDGE > MONEY". #STILL_ONE_DIGIT
