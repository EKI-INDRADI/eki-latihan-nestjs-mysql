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

- Author - [Kamil My??liwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

##  EKI NOTE :

"sebelumnya terimakasih kepada "Web App Project" Youtube Channel saya tambahkan penjelasan beliau & disini saya tambahkan juga pemahaman typescript saya & beberapa informasi penting dari video tutorial pada comment code" ,

"pentingnya dokumentasi karena disini saya memiliki pengalaman Research & Development tanpa dokumentasi, tanpa portfolio, tanpa bukti nyata adalah 'BULLSHIT' ".

## 1. installation Docker, Phpmyadmin & Mariadb
```bash
install vm alpine + docker
https://github.com/EKI-INDRADI/eki-latihan-vm-alpine-docker-portable

install Docker, Phpmyadmin & Mariadb
https://github.com/EKI-INDRADI/eki-latihan-docker-phpmyadmin-mariadb

create database simple_pos
```

## 2. install nodejs & nestjs

```bash
install nodejs   (https://nodejs.org)

npm i -g @nestjs/cli
nest --version
```

## 3. CLI & note

## ==== STAGE 1 = BASIC, USER, JWT & SWAGGER

<details>
  <summary>20210918-0001-INSTALLATION</summary>

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

</details>

<details>
  <summary>20210918-0002-ENVIRONMENT</summary>

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

</details>

<details>
  <summary>20210918-0003-GENERATE_USER_MODULE</summary>

```bash
//003
nest g res user
REST API
generate entry points Y

---info
nest generate resource user = generate user module https://docs.nestjs.com/recipes/crud-generator
---/info

```

</details>

<details>
  <summary>20210918-0004-ENTITY_USER_MODULE</summary>

```bash
//004
npm run start:dev
---info
npm run start:dev = untuk running project,
setelah entity selesai di buat maka pada database simple_pos akan otomatis terbuat tabel user
---/info
```

</details>

<details>
  <summary>20210918-0005-DATA_TRANSFER_OBJECT</summary>

```bash
//005
---info
data transfer object = https://docs.nestjs.com/controllers
---/info
```

</details>

<details>
  <summary>20210918-0006-INJECT_USER_REPO_N_CRUD</summary>

```bash
//006
---info
postman = https://www.postman.com/
inject repository user (entity user), agar memudahkan ketika membuat CRUD
---/info
```

</details>

<details>
  <summary>20210919-0007-REQUEST_VALIDATION</summary>

```bash
//007
npm i class-validator class-transformer
---info
informasi lebih lanjut : https://docs.nestjs.com/techniques/validation
kedua dependecy tersebut berguna untuk request validation pada API, validasi request berdasarkan class dengan memanfaatkan fungsi global middleware validationPipe
---/info
```

</details>

<details>
  <summary>20210919-0008-BCRYPT_HASH</summary>

```bash
//008
npm install -g node-gyp (perlu di install ketika npm i bcrypt , error/stuck node-pre-gyp install --fallback-to-build )
npm i bcrypt
npm i -D @types/bcrypt
---info
encryption dan hash : https://docs.nestjs.com/security/encryption-and-hashing
---/info
```

</details>

<details>
  <summary>20210919-0009-UNIQUE_VALIDATOR</summary>

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

</details>

<details>
  <summary>20210919-0010-EXIST_VALIDATOR</summary>

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

</details>

<details>
  <summary>20210919-0011-SWAGGER_AUTO_GENERATE</summary>

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

</details>

<details>
  <summary>20210922-0012-JWT_STRATEGY</summary>

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

</details>

<details>
  <summary>20210923-0013-JWT_AUTH</summary>

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

NOTE : pada video youtube baru menjelaskan bug fix ini pada menit 2:33:00 +
atau pada branch : 20211014-0027-BUG_FIX_UNIQUE_VALIDATOR

```

</details>

<details>
  <summary>20210923-0014-JWT_GUARD_ROUTES</summary>

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

</details>

<details>
  <summary>20210923-0015-SWAGGER_HEADER_JWT_AUTH</summary>

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

</details>

<details>
  <summary>20210924-0016-JWT_PAYLOAD</summary>

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

</details>

<details>
  <summary>20210926-0017-GLOBAL_JWT_AUTH_SWAGGER_N_CONTROLLER</summary>

```bash
//017


// AUTH USER SWAGGER :
@ApiTags('User') 
@ApiBearerAuth()  // ini aktifkan Bearer Auth untuk seluruh routes controller user (hanya swagger)
@Controller('user')

---info
// AUTH USER SWAGGER :
ini sama seperti 015 , @ApiBearerAuth() ini dapat dibuat secara spesifik dan juga sekaligus pada seluruh controller
contohnya pada user controller (hanya swagger)
---/info

// AUTH USER CONTROLLER :

@ApiTags('User')
@ApiBearerAuth()
@UseGuards(JwtGuard)  // ini aktifkan Bearer Auth untuk seluruh routes controller user (membutuhkan header Authorization : Bearer <token>)
@Controller('user')

---info
// AUTH USER CONTROLLER :
ini sama seperti 014 , @UseGuards(JwtGuard) ini dapat dibuat secara spesifik dan juga sekaligus pada seluruh controller
contohnya pada user controller  (membutuhkan header Authorization : Bearer <token>)
---/info
```

</details>

## ==== /STAGE 1 = BASIC, USER, JWT & SWAGGER

## ==== STAGE 2 = PRODUK, FILE UPLOAD

<details>
  <summary>20210926-0018-GENERATE_PRODUK_MODULE</summary>

```bash
//018
nest g res produk


---info
membuat resource produk
---/info

src\produk\entities\produk.entity.ts
    @UpdateDateColumn({ onUpdate: "CURRENT_TIMESTAMP(6)" }) 
    update_at: Date

---info
generate langsung waktu updatenya memunculkan pada object {onUpdate : value} , nanti akan otomatis keluar pada result object
---/info

src\produk\entities\produk.entity.ts
    @ManyToOne(() => User, data => data.id) // User dari User entities
    user: User // User dari User entities

---info
relasi kepada user  
ERD : produk - user
ERD : * - 1

membuat foreign key userId pada product
---/info

src\app.module.ts
      entities : [
        .....,
        Produk 
      ],
      synchronize : true 

---info
 karena adanya  synchronize : true, maka produk tabel akan otomatis digenerate di database
---/info

src\user\entities\user.entity.ts
    @OneToMany(()=>Produk, data => data.id)
    produk : Produk

---info
relasi kepada produk
ERD : user - produk
ERD : 1 - *

agar user dapat melakukan relasi pada produk  (hanya optional, lebih baik ditambahkan)
---/info


```

</details>

<details>
  <summary>20210926-0019-PRODUK_DATA_TRANSFER_OBJECT</summary>

```bash
//019
    @IsObject()
    user: UserDto
---info
setting DTO Produk,
datanya user harus object (karena relasi dari user)
pake fieldnya mengikuti object UserDto
---/info

export class CreateProdukDto extends OmitType(ProdukDto, ['id']){}
export class ProdukIdDto extends PickType(ProdukDto, ['id']){}

---info
OmitType dari swagger & buang id nya  // OmitType = buang sebagian
PickType dari swagger & hanya ambil id nya  // PickType = ambil sebagian
---/info

```

</details>

<details>
  <summary>20210928-0020-CRUD-PRODUK-SERVICE</summary>

```bash
//020
src\produk\produk.module.ts

import { Produk } from './entities/produk.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports : [
    TypeOrmModule.forFeature([Produk])
  ],

---info
register entities produk pada module produk, agar entity dapat digunakan pada module produk
---/info

src\produk\produk.service.ts
src\produk\dto\update-produk.dto.ts

---info
buat services CRUD produk berdasarkan entity dan edit UpdateProdukDto
---/info

```

</details>

<details>
  <summary>20210928-0021-FILE-UPLOAD-MULTIPART-FORM-DATA</summary>

```bash
//021
npm i -D @types/multer

---info
sebelumnya menggunakan JSON konsep untuk mengeluarkan data, tetapi karena ada FILE UPLOAD ,maka perlu menggunakan 'multipart/form-data'
---/info

src\produk\produk.controller.ts
import { ...., UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@ApiTags('Produk')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('produk')

...
...
...

src\produk\produk.controller.ts

  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: CreateProdukDto })
  create(@Body() createProdukDto: CreateProdukDto, @UploadedFile() foto: Express.Multer.File) {
    createProdukDto.foto = foto.filename
    return this.produkService.create(createProdukDto);
  }

---info
agar swagger merubah format default (JSON) , menjadi multipart/form-data,
karena swagger ada perubahan multipart maka Request Body nya perlu disesuaikan lagi
memanfaatkan depedency multer
---/info




---bug info & bug fix

nestjs BUG Swagger (muncul data user pada swagger, padahal tidak menggunakan  @ApiProperty() )
src\produk\dto\create-produk.dto.ts
 
    @IsObject() 
    user: UserDto 


cara fix nya :
referensi : https://github.com/nestjs/swagger/issues/493
tambahkan  @ApiHideProperty()  untuk menghilangkan pada swagger (agar tidak diinput)

    @ApiHideProperty() 
    @IsObject() 
    user: UserDto 


---/bug info & bug fix

    @ApiProperty({format:'binary'})
    @IsOptional() 
    foto: string
    
---info
agar format swagger berubah untuk merubah menjadi "file upload" tambahkan {format:'binary'} (pada kondisi multipart/form-data),
sebelumnya IsString() rubah menjadi @IsOptional() karena image sudah berbentuk binary
---/info


Note :

{
    "statusCode": 400,
    "message": [
        "user must be an object"
    ],
    "error": "Bad Request"
}


Karena :

    @IsObject() 
    user: UserDto 


ini akan mengalami masalah solusinya ada pada code selanjutnya (tujuan nya agar dapat otomatis simpan data user, 
menggunakan teknologi nestjs & payload jwt)
  
```

</details>

<details>
  <summary>20210929-0022-INJECT-DECORATOR-USER</summary>

```bash
//022


{
    "statusCode": 400,
    "message": [
        "user must be an object"
    ],
    "error": "Bad Request"
}

solusinya :

nest g decorator etc/decorator/inject-user

---info
decorator InjectUser,
decorator adalah mirip sebuah function / services contoh : @ApiTags() , @Post() , @ApiBody() , dll

yang mana decorator tersebut bisa kita costum atau membuatnya,
agar produk dapat otomatis simpan data user, 
menggunakan teknologi nestjs & payload jwt
---/info

src\etc\decorator\inject-user.decorator.ts

export const InjectUser = createParamDecorator((data: any, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest()
    req.body.user = { id : req.user.id}
    return req.body
})



src\produk\produk.controller.ts
  create(@InjectUser() createProdukDto: CreateProdukDto, @UploadedFile() foto: Express.Multer.File) { // SETELAH INJECT USER
    createProdukDto.foto = foto.filename
    return this.produkService.create(createProdukDto);
  }

---info
menambahkan object user pada request (body) yang di kirim

setelah ditambahkan ketika di test maka responsenya otomatis akan inject user

{
  "barcode": "test",
  "nama_produk": "test",
  "deskripsi_produk": "test",
  "harga_beli": 111,
  "harga_jual": 110,
  "user": {
    "id": 2
  },
  "foto": "27d9b92cc2a95aceb288dac7861252cb",
  "id": 1,
  "create_at": "2021-09-28T19:11:29.644Z",
  "update_at": "2021-09-28T19:11:29.644Z"
}
---/info
  
```

</details>

<details>
  <summary>20211003-0023-UPLOAD-CUSTOMIZE-FILENAME</summary>

```bash
//023

// import { extname } from 'path/posix'; // rename 'path/posix' to 'path'
import { extname } from 'path';


 @UseInterceptors(FileInterceptor('foto', {  
    storage: diskStorage({ 
      destination: './assets/produk',
      filename: (req: any, file, cb) => {
        const fileName = [req.user.id, Date.now()].join('-') 
        let number_user_id = Number(req.user.id)
        let eki_auto_generate = new Date().getFullYear() + "-"
          + ("0" + (new Date().getMonth() + 1)).slice(-2) + "-"
          + ("0" + new Date().getDate()).slice(-2) + "-"
          + number_user_id.toString().padStart(4, '0')

        cb(null, eki_auto_generate + '.' + fileName + '.' + extname(file.originalname)) 
      }
    })
---info
- customize filename & extention file upload (multipart/form-data), karena nestjs secara default membuatfile generate yang unique tanpa ekstensi

contoh code diatas adalah cara autogenerate filename yang unique, dirubah pada function depedency multer dan memanfaatkan depedency 'path' (extname) untuk mendapatkan original filename (termasuk .)
response dari 

post file upload product :

{
  "barcode": "asdas1",
  "nama_produk": "asdas1",
  "deskripsi_produk": "asdas1",
  "harga_beli": 300,
  "harga_jual": 400,
  "user": {
    "id": 2
  },
  "foto": "2021-10-03-0002.2-1633275013383.png",
  "id": 4,
  "create_at": "2021-10-03T08:30:14.236Z",
  "update_at": "2021-10-03T08:30:14.236Z"
}

get product : 

[
....
....
  {
    "id": 4,
    "barcode": "asdas1",
    "nama_produk": "asdas1",
    "deskripsi_produk": "asdas1",
    "harga_beli": 300,
    "harga_jual": 400,
    "foto": "2021-10-03-0002.2-1633275013383.png",
    "create_at": "2021-10-03T08:30:14.236Z",
    "update_at": "2021-10-03T08:30:14.236Z"
  }
]

---/info
```

</details>


<details>
  <summary>20211010-0024-UPDATE-UPLOAD</summary>
  
```bash
//024

let number_user_id = Number(req.user.id)
let eki_auto_generate = new Date().getFullYear() 
  + ("0" + (new Date().getMonth() + 1)).slice(-2) 
  + ("0" + new Date().getDate()).slice(-2) + "-"
  + "USR" + number_user_id.toString().padStart((String(number_user_id).length > 4) ? String(number_user_id).length : 4, '0') + "-"
  + Date.now()
cb(null, eki_auto_generate + extname(file.originalname))

---info
Autogenerate product file
FILENAME : "PD20211010-USR0002-1633834448773.png"
---/info

 @Patch(':id')
//==============================COPY FROM POST CONTROLLER
  @UseInterceptors(FileInterceptor('foto', {
    storage: diskStorage({
      destination: './assets/produk',
      filename: (req: any, file, cb) => {
        let number_user_id = Number(req.user.id)
        let eki_auto_generate = "PD"
          + new Date().getFullYear()
          + ("0" + (new Date().getMonth() + 1)).slice(-2)
          + ("0" + new Date().getDate()).slice(-2) + "-"
          + "USR" + number_user_id.toString().padStart((String(number_user_id).length > 4) ? String(number_user_id).length : 4, '0') + "-"
          + Date.now()

        cb(null, eki_auto_generate + extname(file.originalname))
      }
    })
  }))
  @ApiConsumes('multipart/form-data') // agr swagger merubah format default (JSON) , menjadi multipart/form-data
  @ApiBody({ type: CreateProdukDto })
  //==============================/COPY FROM POST CONTROLLER
    update(@Param('id') id: string, @InjectUser() updateProdukDto: UpdateProdukDto, @UploadedFile() foto: Express.Multer.File) {
    if(foto){
      updateProdukDto.foto = foto.filename
    }
    return this.produkService.update(+id, updateProdukDto);
  }

---info
update file upload , pada patch id , copy post controller dan tambahkan pada controller patch
---/info

export class UpdateProdukDto extends PartialType(ProdukDto) {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    barcode: string
}

---info
bug fix BUG FIX update menghilangkan IsUnique ,
    {
        "statusCode": 400,
        "message": [
          "barcode test sudah digunakan"
        ],
        "error": "Bad Request"
    }

---/info

```

</details>


<details>
  <summary>20211011-0025-RELATION_PRODUCT_USER</summary>
  
```bash
//025


  findAll() {
    return this.produkRepo.find({
      relations:['user'] 
    }) 
  }


---info
relasi 
product dengan user ManyToOne 

// src\produk\entities\produk.entity.ts
    @ManyToOne(() => User, data => data.id)
    user: User 
---/info

// src\user\entities\user.entity.ts
    @Column({select : false})
    password: string

---info
{select : false}

berfungsi untuk menghilangkan password pada result, ini berlaku bukan hanya pada product, tapi seluruh data yang terkait dengan user.entity
password akan hilang diresult

sebelum :
GET : http://localhost:3000/produk
[
  {
    "id": 1,
    "barcode": "test",
    "nama_produk": "test",
    "deskripsi_produk": "test",
    "harga_beli": 2400,
    "harga_jual": 2000,
    "foto": "PD20211010-USR0002-1633837916127.png",
    "create_at": "2021-09-28T19:11:29.644Z",
    "update_at": "2021-10-09T20:51:56.000Z",
    "user": {
      "id": 2,
      "nama_user": "stringst",
      "email": "string@mail.com",
      "username": "stringst",
      "password": "$2b$10$646n44TYIPip12vmm2zz9OdBJJoniOKdcHNLVkdjDgwS0TmQ1n4Qy",
      "create_at": "2021-09-26T01:28:39.072Z",
      "update_at": "2021-09-26T01:28:39.072Z"
    }
  },
  ..
  ..
]

sesudah : 
GET : http://localhost:3000/produk
[
  {
    "id": 1,
    "barcode": "test",
    "nama_produk": "test",
    "deskripsi_produk": "test",
    "harga_beli": 2400,
    "harga_jual": 2000,
    "foto": "PD20211010-USR0002-1633837916127.png",
    "create_at": "2021-09-28T19:11:29.644Z",
    "update_at": "2021-10-09T20:51:56.000Z",
    "user": {
      "id": 2,
      "nama_user": "stringst",
      "email": "string@mail.com",
      "username": "stringst",
      "create_at": "2021-09-26T01:28:39.072Z",
      "update_at": "2021-09-26T01:28:39.072Z"
    }
  },
  ..
  ..
]

sesudah :
GET : http://localhost:3000/user
[
  ..
  ..,
  {
    "id": 2,
    "nama_user": "stringst",
    "email": "string@mail.com",
    "username": "stringst",
    "create_at": "2021-09-26T01:28:39.072Z",
    "update_at": "2021-09-26T01:28:39.072Z"
  }
]


---info

---/info

```

</details>

<details>
  <summary>20211013-0026-BUG_FIX_USER_ENTITY</summary>


```bash
//026

// src\user\entities\user.entity.ts
@Column({ name: 'password', select: false })
password: string

---bug info

karena ada perubahan pada entity user , 
untuk keperluan menghilangkan password pada setiap result yang berhubungan dengan user :

@Column({ name: 'password', select: false }) 

// {select : false} atau { name: 'password', select: false } 
// sama saja (name hanya untuk set name secara spesifik)

pada fungsi 

//src\auth\auth.service.ts
let user = await this.userService.findUsername(username)  

akan memiliki mendapaatkan password (password tidak akan muncul)

//src\user\user.service.ts
const valid = this.userService.compare(password, user.password) 

akibatnya password tidak dapat di validasi

//src\user\user.service.ts
compare(plaintextPassword, hashPassword) {
    const valid = bcrypt.compareSync(plaintextPassword, hashPassword)
    return valid
}

password dekripsi tidak akan sama 

ini semua karenakan  select: false.

---/bug info

---bug fix

src\user\user.service.ts
-- sebelum
findUsername(username) {
 return this.userRepo.findOne({ username: username });
}
-- 


-- sesudah
findUsername(username) {
    return this.userRepo.createQueryBuilder('user')
      .addSelect('password').where({ username: username }).getRawOne()
}
-- 

referensi :     
- https://stackoverflow.com/questions/65870541/typeorm-nestjs-using-querybuilder
- https://github.com/typeorm/typeorm/issues/5816

---/bug fix

```

</details>


<details>
  <summary>20211014-0027-BUG_FIX_UNIQUE_VALIDATOR</summary>

ini ada branch optional (saran tetap mengikuti branch ini) sebenarnya ini sudah dibug fix dicode saya (menggunakan versi saya),
sama saja, cumaa saya tetap sampaikan dari versi video cara bug fix nya yang sedikit berbeda dengan saya.
sebenarnya masalah ini sudah ada dari branch 20210923-0013-JWT_AUTH , tetapi sudah saya bug fix di branch tersebut dan selanjutnya.

```bash

//027
1. BUG FIX AUTH_DTO keperluan untuk get token saat login agar tidak error username telah digunakan


A. src\auth\auth.dto.ts
--- sebelum BUG FIX
export class AuthDto extends PickType(UserDto,['username','password']){}
--- 
--- sesudah - OLD BUG FIX (VERSI SAYA) & NEW BUG FIX (VERSI VIDEO) = SAMA
export class AuthDto {
    @ApiProperty()
    @IsString()
    @MaxLength(32)
    @MinLength(8)
    @IsNotEmpty()
    username: string

    @ApiProperty()
    @IsString()
    @MaxLength(32)
    @MinLength(8)
    @IsNotEmpty()
    password: string
}
--- 

B. src\user\user.service.ts
--- sebelum BUG FIX
findUsername(username) {
   return this.userRepo.findOne({ username: username });
}
--- 

--- sesudah - OLD BUG FIX (VERSI SAYA)
findUsername(username) {
  return this.userRepo.createQueryBuilder('user')
    .addSelect('password').where({ username: username }).getRawOne()
}
--- 

--- sesudah - NEW BUG FIX (VERSI VIDEO)
findUsername(username) {
   return this.userRepo.findOne({ username: username }, { select: ['id', 'password'] });
}
--- 


NOTE BUG FIX USER : 

Kedua fungsi bug fix tersebut sama fungsinya tetapi untuk BUG FIX VERSI SAYA itu memanfaatkan createQueryBuilder


2. BUG FIX UPDATE PRODUCT, agar barcode tidak error telah digunakan

A1. src\etc\validator\unique-validator.ts (NEW BUG FIX (VERSI VIDEO))
--- sebelum BUG FIX
async validate(value: any, args: ValidationArguments) {
   let find = { [args.constraints[1]]: args.value }
   let check = await getConnection().getRepository(args.constraints[0]).findOne(find)
   if (check) return false // jika ada return false
   return true
}
--- 

--- sesudah - NEW BUG FIX (VERSI VIDEO)
async validate(value: any, args: ValidationArguments) {
    let find = {
        where: { [args.constraints[1]]: args.value }
    }

    if (args.object['id']){
        find.where['id'] = Not(args.object['id']) // { Not } from 'typeorm';
    }

    let check = await getConnection().getRepository(args.constraints[0]).findOne(find)
    if (check) return false // jika ada return false
    return true
}
--- 

B1. src\produk\produk.controller.ts (NEW BUG FIX (VERSI VIDEO))

--- sebelum BUG FIX
 @Patch(':id')
  @UseInterceptors(FileInterceptor('foto', {
    storage: diskStorage({
      destination: './assets/produk',
      filename: (req: any, file, cb) => {
        let number_user_id = Number(req.user.id)
        let eki_auto_generate = "PD"
          + new Date().getFullYear()
          + ("0" + (new Date().getMonth() + 1)).slice(-2)
          + ("0" + new Date().getDate()).slice(-2) + "-"
          + "USR" + number_user_id.toString().padStart((String(number_user_id).length > 4) ? String(number_user_id).length : 4, '0') + "-"
          + Date.now()
        cb(null, eki_auto_generate + extname(file.originalname))
      }
    })
  }))
  @ApiConsumes('multipart/form-data') 
  @ApiBody({ type: CreateProdukDto }) 
  
  update(@Param('id') id: string, @InjectUser() updateProdukDto: UpdateProdukDto, @UploadedFile() foto: Express.Multer.File) {
    if (foto) {
      updateProdukDto.foto = foto.filename
    }
    return this.produkService.update(+id, updateProdukDto);
  }
--- 

--- sesudah - NEW BUG FIX (VERSI VIDEO)
 @Patch(':id')
  @UseInterceptors(FileInterceptor('foto', {
    storage: diskStorage({
      destination: './assets/produk',
      filename: (req: any, file, cb) => {
        let number_user_id = Number(req.user.id)
        let eki_auto_generate = "PD"
          + new Date().getFullYear()
          + ("0" + (new Date().getMonth() + 1)).slice(-2)
          + ("0" + new Date().getDate()).slice(-2) + "-"
          + "USR" + number_user_id.toString().padStart((String(number_user_id).length > 4) ? String(number_user_id).length : 4, '0') + "-"
          + Date.now()
        cb(null, eki_auto_generate + extname(file.originalname))
      }
    })
  }))
  @ApiConsumes('multipart/form-data') 
  @ApiBody({ type: UpdateProdukDto })
  
  update(@Param('id') id: string, @InjectUser() updateProdukDto: UpdateProdukDto, @UploadedFile() foto: Express.Multer.File) {
    if (foto) {
      updateProdukDto.foto = foto.filename
    }
    return this.produkService.update(+id, updateProdukDto);
  }

--- 

C1. src\produk\dto\update-produk.dto.ts (NEW BUG FIX (VERSI VIDEO))

--- sebelum BUG FIX
export class UpdateProdukDto extends PartialType(ProdukDto) {} 
--- 

--- sesudah - NEW BUG FIX (VERSI VIDEO)
export class UpdateProdukDto extends PartialType(ProdukDto) {}  // tidak ada perubahan
---


A2. src\produk\dto\update-produk.dto.ts (OLD BUG FIX (VERSI SAYA))

--- sebelum BUG FIX
export class UpdateProdukDto extends PartialType(ProdukDto) {} 
--- 

--- sesudah - NEW BUG FIX (VERSI VIDEO)
export class UpdateProdukDto extends PartialType(ProdukDto) {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  barcode: string
 }
---


NOTE BUG FIX PRODUCT : 

BUG FIX VERSI VIDEO (A1-B1-C1), jauh lebih baik untuk penanganan barcode,
kelebihannya parameter barcode tidak dapat di hacking / inject dari luar karena ada validasi lebih dalam untuk barcode (hanya barcode yang di perbolehkan yang jika id yang digunakan sesuai dengan barcode)

BUG FIX VERSI SAYA (A2), lebih sedikit kenapa ? 
secara logika barcode tidak mungkin dapat di rubah artinya barcode pada aplikasi akan di disable (tidak dapat di rubah), maka jika case seperti tersebut tidak perlu banyak bug fix



```

</details>


## ==== /STAGE 2 = PRODUK, FILE UPLOAD

## ==== STAGE 3 = KONSUMEN

<details>
  <summary>20211016-0028-GENERATE_KONSUMEN_N_REKENING</summary>

```bash

//028

nest g res konsumen

- rest api
- crud yes

---info
generate resource konsumen
---


nest g res rekening

- rest api
- crud yes

---info
generate resource rekening
---

```

</details>


<details>
  <summary>20211016-0029-ENITITY_KONSUMEN</summary>

```bash

//029
update src\konsumen\entities\konsuman.entity.ts
update src\app.module.ts

---info bug
NestJs BUG Entity classs name

Konsuman // (yang di generate adalah Konsumen) tetapi classnya Konsuman, entities\konsuman.entity.ts  
ini adalah kesalahan dari nest, kemungkinan karena auto checking english translate men jadi man
---

---info 
selanjutnya tabel schema konsumen akan auto generate pada databases
---

update src\user\entities\user.entity.ts
update src\konsumen\konsumen.module.ts
update src\konsumen\konsumen.service.ts

---info 
update Entity
---

```

</details>


<details>
  <summary>20211017-0030-CRUD_JWT_SWAGGER_VALIDATOR_KONSUMEN</summary>

```bash

//030
update src\konsumen\konsumen.service.ts
update src\konsumen\dto\create-konsuman.dto.ts
update src\konsumen\dto\update-konsuman.dto.ts
update src\konsumen\konsumen.controller.ts


---info 
jika error 
inject-user.decorator ....

berarti perlu login dahulu untuk dapat data user
@ApiBearerAuth() // (LOGO GEMBOK SWAGGER) perlu tambahkan di controller
@UseGuards(JwtGuard) // verifikasi token swagger (by swagger authorize)
---

update code bug fix src\konsumen\entities\konsuman.entity.ts

---info 
- sebelum -

    User: User 

- sesudah -

    user: User // bug fix user key kecil

---/info 

update code update src\konsumen\dto\create-konsuman.dto.ts

---info 
- sebelum -

    User: CreateUserDto 

- sesudah -

    user: CreateUserDto // bug fix user key kecil

---/info 


update code update src\produk\produk.controller.ts

---info 
- sebelum -

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produkService.remove(+id);
  }

- sesudah -

  @Delete(':id')
  remove(@Param() id: ProdukIdDto) {   // agar tervalidasi
    return this.produkService.remove(id.id); // agar tervalidasi
  }

---/info 

```

</details>

## ==== /STAGE 3 = KONSUMEN

## ==== STAGE 4 = EXPORT SWAGGER JSON & IMPORT TO POSTMAN

(OPTIONAL)

<details>
  <summary>20211017-0031-EXPORT_SWAGGER_JSON_N_IMPORT_TO_POSTMAN</summary>

```bash
//031
```

```bash
--- EXPORT SWAGGER JSON 
untuk generate file  json dapat menggunakan fitur fs ,

untuk membuatnya menjadi api dengan result json :

-- CODE :
SwaggerModule.setup('api-docs', app, swaggerDocument, configCustomSwagger)
-- /CODE :

http://localhost:3000/api-docs <-- OPEN API SWAGGER 
http://localhost:3000/api-docs-json <-- untuk membuatnya menjadi JSON tinggal tambahkan '-json'

--- /EXPORT SWAGGER JSON 

```

![EXAMPLE](https://github.com/EKI-INDRADI/eki-latihan-nestjs-mysql/raw/master/EXPORT_SWAGGER_JSON.png)


```bash

--- IMPORT SWAGGER JSON  TO POSTMAN
DOWNLOAD POSTMAN : https://www.postman.com/

import -> link -> http://localhost:3000/api-docs-json -> CONTINUE -> IMPORT
--- /IMPORT SWAGGER JSON  TO POSTMAN

```

![EXAMPLE](https://github.com/EKI-INDRADI/eki-latihan-nestjs-mysql/raw/master/IMPORT_SWAGGER_JSON_TO_POSTMAN_1.png)
![EXAMPLE](https://github.com/EKI-INDRADI/eki-latihan-nestjs-mysql/raw/master/IMPORT_SWAGGER_JSON_TO_POSTMAN_2.png)
![EXAMPLE](https://github.com/EKI-INDRADI/eki-latihan-nestjs-mysql/raw/master/IMPORT_SWAGGER_JSON_TO_POSTMAN_3.png)

referensi : 
- https://github.com/nestjs/swagger/issues/158 (EXPORT SWAGGER JSON)
- https://stackoverflow.com/questions/39072216/how-to-import-swagger-apis-into-postman (IMPORT SWAGGER JSON TO POSTMAN)



</details>

## ==== /STAGE 4 = EXPORT SWAGGER JSON & IMPORT TO POSTMAN

## ==== STAGE 5 = REKENING

<details>
  <summary>20211020-0032-CRUD_JWT_SWAGGER_VALIDATOR_REKENING</summary>

```bash
/032

update src\rekening\entities\rekening.entity.ts
update src\rekening\dto\create-rekening.dto.ts
update src\user\entities\user.entity.ts
update src\app.module.ts

---info
secara otomatis tabel rekening akan terbuat
---/info

update src\rekening\dto\create-rekening.dto.ts
update src\rekening\dto\update-rekening.dto.ts
update src\rekening\rekening.module.ts
update src\rekening\rekening.service.ts

---info
membuat services crud , schema untuk swagger & validasi
---/info

update src\rekening\rekening.controller.ts

---info
membuat controller crud , jwt & swagger
---/info

Note : ini mirip seperti crud sebelumnya

```

</details>

## ==== /STAGE 5 = REKENING


## ==== STAGE 6 = PENJUALAN

<details>
  <summary>20211031-0033-PENJUALAN-ENTITY</summary>

```bash
/033

nest g res penjualan -> rest api -> yes

update src\penjualan\entities\penjualan.entity.ts
update src\app.module.ts (Penjaualn)

---info
buat tabel penjualan
---/info

buat entity manual src\penjualan\entities\penjualan-item.entity.ts
update src\app.module.ts (Penjualan_item)

---info
buat tabel penjualanItem
---/info

buat entity manual src\penjualan\entities\penjualan-bayar.entity.ts
update src\app.module.ts (Penjualan_bayar)

---info
buat tabel penjualanBayar
---/info

update src\penjualan\penjualan.module.ts

---info
Import penjualan,penjualanItem,penjualanBayar
---/info

update src\penjualan\entities\penjualan.entity.ts

@OneToMany(() => PenjualanItem, data => data.id, {cascade:true})
item: PenjualanItem[] //ini array

@OneToMany(() => PenjualanBayar, data => data.id, {cascade:true})
bayar: PenjualanBayar[] //ini array

---info
{cascade:true} == ketika penjualan ini di hapus/di update, maka secara otomatis harus memutus relasi penjualanItem dan penjualanBayar, agar tidak ter-select kembali
---/info

update src\penjualan\entities\penjualan-item.entity.ts

@ManyToOne(() => Penjualan, data => data.id, { onDelete: "CASCADE", onUpdate: "CASCADE" })
penjualan: Penjualan

---info
Aktifkan CASCADE pada penjualanItem
---/info

update src\penjualan\entities\penjualan-bayar.entity.ts

@ManyToOne(() => Penjualan, data => data.id, { onDelete: "CASCADE", onUpdate: "CASCADE" })
penjualan: Penjualan

---info
Aktifkan CASCADE pada penjualanBayar
---/info


```

</details>

<details>
  <summary>20211105-0034-DTO-PENJUALAN-BAYAR-ITEM</summary>

```bash
/034

update src\penjualan\dto\create-penjualan.dto.ts

@ApiProperty({type:KonsumenId})
@ValidateNested())
@IsObject()
konsumen: KonsumenId 

---info
@ApiProperty({type:KonsumenId}) berguna untuk :
hanya perlu konsumen id nya saja

@ValidateNested() berguna untuk :
api ini akan memvalidasi dto konsumen ( src\konsumen\dto\create-konsuman.dto.ts), 
untuk keperluan IsExist ID nya (sudah ada atau tdk)

@IsObject()
konsumen: KonsumenId  berguna untuk :
hanya ambil id nya
---/info


buat manual src\penjualan\dto\penjualan-item.dto.ts 

@ApiProperty({type:ProdukIdDto})
@IsObject()
@ValidateNested()
produk: ProdukIdDto

---info
(untuk keperluan buat dto Penjualan agar bisa buat DTO dengan Array dari penjualanItem)
---/info

    
buat manual src\penjualan\dto\penjualan-bayar.dto.ts 

@ApiProperty({ type: RekeningIdDto })
@IsObject()
@ValidateNested()
rekening: RekeningIdDto

---info
(untuk keperluan buat dto Penjualan agar bisa buat DTO dengan Array dari penjualanBayar) 
---/info



update src\penjualan\dto\create-penjualan.dto.ts

@ApiProperty({ type: [PenjualanItemDto] }) 
@IsArray()
@ValidateNested({each : true}) 
item: PenjualanItemDto[]

@ApiProperty({ type: [PenjualanBayarDto] }) 
@ValidateNested()
@ValidateNested({each : true}) 
bayar: PenjualanBayarDto[]

---info
update penjualan menggunakan DTO dari penjaualn bayar & penjualan item

@ApiProperty({ type: [PenjualanItemDto] })  berguna untuk :
keperluan untuk data berupa array, menggunakan type : [...], perlu buat DTO nya

@IsArray()
@ValidateNested({each : true}) berguna untuk :
karena array maka perlu di each true (untuk loop data) & setiap arraynya akan di validasi

item: PenjualanItemDto[] berguna untuk :
mendefinisikan array
---/info

update src\penjualan\penjualan.controller.ts
@ApiTags('Penjualan')

update src\penjualan\dto\create-penjualan.dto.ts
export class CreatePenjualanDto extends OmitType(PenjualanDto, ['id']) { }

---info
keperluan untuk check swagger schema
http://localhost:3000/api-docs
---/info

```

</details>


<details>
  <summary>20211107-0035-CREATE-PENJUALAN-BAYAR-ITEM</summary>

```bash
/035

update src\penjualan\penjualan.service.ts 
update src\penjualan\dto\update-penjualan.dto.ts

---info
service & update dto 
---/info


nest g decorator penjualan/penjualan-proses
update src\penjualan\penjualan-proses.decorator.ts
update src\penjualan\penjualan.controller.ts

---info
untuk keperluan kalkulasi dari total/subtotal/proses lainnya pada penjualan saja (maka tidak perlu dibuat didalam etc)
---/info

update src\penjualan\penjualan-proses.decorator.ts (copy dari src\etc\decorator\inject-user.decorator.ts)
update src\penjualan\penjualan.controller.ts (ubah @Body() ke @PenjualanProses())

---info
ubah semua @Body() pada controller menjadi @PenjualanProses() (untuk otomatis kalkulasi dari request)
biar otomatis kalkulasi 
---/info

update src\penjualan\dto\create-penjualan.dto.ts (delete condition update for swagger)
update src\penjualan\penjualan.controller.ts (delete condition update for swagger)

---info
delete condition update
---/info

bug fix src\penjualan\entities\penjualan-bayar.entity.ts

---info
bug fix harusnya gak perlu ada 
@Column() 
potongan : number
---/info

bug fix src\penjualan\entities\penjualan.entity.ts (gak pake id, harusnya pake penjualan)

---info
perlu cek penjualan, penjualan_bayar dan penjualan_item 

    @OneToMany(() => PenjualanItem, data => data.id, {cascade:true}) // harusnya .penjualan  bukan id harus di liad dari array per element/object PenjualanItem // @OneToMany(() => PenjualanItem, data => data.id, {cascade:true})
    item: PenjualanItem[] //ini array

    @OneToMany(() => PenjualanBayar, data => data.id, {cascade:true}) // harusnya .penjualan  bukan id harus di liad dari array per element/object PenjualanBayar //    @OneToMany(() => PenjualanBayar, data => data.id, {cascade:true}) 
    bayar: PenjualanBayar[] //ini array
---/info


check database penjualan_bayar
check database penjualan_item
check database penjualan

---info
menit 3:40:00 s/d  3:48:00

menit 3:47:10 s/d 3:47:21  untuk id bayar dan id item sudah benar ( tidak null )

tetapi return nya tidak benar
---/info

bug fix src\penjualan\dto\create-penjualan.dto.ts
    
---info

------------- sebelum
@ApiProperty({ type: [PenjualanItemDto] }) 
@IsArray()
@ValidateNested({ each: true }) 
item: PenjualanItemDto[] 

@ApiProperty({ type: [PenjualanBayarDto] }) 
@ValidateNested()
@ValidateNested({ each: true }) 
------------- /sebelum


------------- sesudah
import { Type } from "class-transformer"

@ApiProperty({ type: [PenjualanItemDto] }) 
@IsArray()
@ValidateNested({ each: true }) 
@Type(()=>PenjualanItemDto)
item: PenjualanItemDto[] 

@ApiProperty({ type: [PenjualanBayarDto] }) 
@IsArray()
@Type(()=>PenjualanBayarDto)
@ValidateNested({ each: true }) 
------------- /sesudah

bug fix  src\penjualan\dto\penjualan-bayar.dto.ts

---info
jika error "Field , 'jumlah_bayar' doesn't have a default"

pada
src\penjualan\dto\penjualan-bayar.dto.ts  itu karena validasi value belum tambahkan

@IsNumber()
jumlah_bayar: number


hasilnya = 

request :
{
  "no_faktur": "FK-113",
  "tanggal": "2021-11-07",
  "konsumen": {
    "id": 4
  },
  "item": [
    {
      "jumlah_jual": 10,
      "harga_jual": 10000,
      "potongan": 1000,
      "produk": {
        "id": 7
      }
    },
    {
      "jumlah_jual": 10,
      "harga_jual": 5000,
      "potongan": 1500,
      "produk": {
        "id": 6
      }
    }
  ],
  "bayar": [
    {
      "tanggal_bayar": "2021-11-07",
      "jumlah_bayar": 100000,
      "rekening": {
        "id": 2
      }
    }
  ]
}


response :
{
  "no_faktur": "FK-113",
  "tanggal": "2021-11-07T00:00:00.000Z",
  "konsumen": {
    "id": 4
  },
  "item": [
    {
      "jumlah_jual": 10,
      "harga_jual": 10000,
      "potongan": 1000,
      "produk": {
        "id": 7
      },
      "user": {
        "id": 2
      },
      "id": 5,
      "create_at": "2021-11-06T23:48:19.043Z",
      "update_at": "2021-11-06T23:48:19.043Z"
    },
    {
      "jumlah_jual": 10,
      "harga_jual": 5000,
      "potongan": 1500,
      "produk": {
        "id": 6
      },
      "user": {
        "id": 2
      },
      "id": 6,
      "create_at": "2021-11-06T23:48:19.049Z",
      "update_at": "2021-11-06T23:48:19.049Z"
    }
  ],
  "bayar": [
    {
      "tanggal_bayar": "2021-11-07T00:00:00.000Z",
      "jumlah_bayar": 100000,
      "rekening": {
        "id": 2
      },
      "user": {
        "id": 2
      },
      "id": 3,
      "create_at": "2021-11-06T23:48:19.039Z",
      "update_at": "2021-11-06T23:48:19.039Z"
    }
  ],
  "total_transaksi": 150000,
  "total_potongan": 2500,
  "total_bayar": 100000,
  "id": 11,
  "create_at": "2021-11-06T23:48:19.033Z",
  "update_at": "2021-11-06T23:48:19.033Z"
}

---/info

bug fix src\penjualan\dto\create-penjualan.dto.ts

@ApiHideProperty() 
@IsObject()
user: UserIdDto

---info
bug fix src\penjualan\dto\create-penjualan.dto.ts

perlu validasi ( minimal 1 validator  cth :   @IsObject())
---/info

bug fix src\penjualan\penjualan-proses.decorator.ts

---info

jika error ( setelah menambahkan IsObject() )

Unknown column 'NaN' in 'field list'
QueryFailedError: Unknown column 'NaN' in 'field list'

------------- sebelum
let user = { id: req.user.id }
req.body.user = { id: user }
------------- /sebelum

------------- sesudah
let user = { id: req.user.id }
req.body.user = user
------------- /sesudah
---/info


```

</details>




<details>
  <summary>20211107-0036-RUD-PENJUALAN-BAYAR-ITEM</summary>

```bash
/036  

update src\penjualan\penjualan.service.ts

------------- sebelum
findOne(id: number) {
return this.penjualanRepo.findOne({ relations: ['user', 'konsumen', 'item', 'item.produk', 'bayar', 'bayar.rekening'] })
}
------------- sebelum

------------- sesudah
async findOne(id: number) {
  let result = await this.penjualanRepo.findOne(id, { relations: ['user', 'konsumen', 'item', 'item.produk', 'bayar', 'bayar.rekening'] })
  if (result) {
    return result
  } else {
    return ({ message: "data not found" })
  }
}
------------- sesudah

---info
bug fix findOne

result = {
  "id": 13,
  "no_faktur": "FK-115",
  "tanggal": "2021-11-07T00:00:00.000Z",
  "total_transaksi": 150000,
  "total_potongan": 2500,
  "total_bayar": 100000,
  "create_at": "2021-11-07T00:29:32.586Z",
  "update_at": "2021-11-07T00:29:32.586Z",
  "user": {
    "id": 2,
    "nama_user": "stringst",
    "email": "string@mail.com",
    "username": "stringst",
    "create_at": "2021-09-26T01:28:39.072Z",
    "update_at": "2021-09-26T01:28:39.072Z"
  },
  "konsumen": {
    "id": 4,
    "nama_konsumen": "string4",
    "alamat_konsumen": "string4",
    "email_konsumen": "string4@gmail.com",
    "no_hp_konsumen": "132131131",
    "create_at": "2021-10-16T11:26:55.096Z",
    "update_at": "2021-10-16T11:26:55.096Z"
  },
  "item": [
    {
      "id": 9,
      "jumlah_jual": 10,
      "harga_jual": 10000,
      "potongan": 1000,
      "create_at": "2021-11-07T00:29:32.597Z",
      "update_at": "2021-11-07T00:29:32.597Z",
      "produk": {
        "id": 7,
        "barcode": "tes123456",
        "nama_produk": "tes123456",
        "deskripsi_produk": "test123456",
        "harga_beli": 1000,
        "harga_jual": 1500,
        "foto": "PD20211010-USR0002-1633834448773.png",
        "create_at": "2021-10-09T19:54:09.537Z",
        "update_at": "2021-10-09T19:54:09.537Z"
      }
    },
    {
      "id": 10,
      "jumlah_jual": 10,
      "harga_jual": 5000,
      "potongan": 1500,
      "create_at": "2021-11-07T00:29:32.603Z",
      "update_at": "2021-11-07T00:29:32.603Z",
      "produk": {
        "id": 6,
        "barcode": "tes12345",
        "nama_produk": "tes12345",
        "deskripsi_produk": "test12345",
        "harga_beli": 1000,
        "harga_jual": 1500,
        "foto": "20211010-USR0002.png",
        "create_at": "2021-10-09T19:46:56.597Z",
        "update_at": "2021-10-09T19:46:56.597Z"
      }
    }
  ],
  "bayar": [
    {
      "id": 5,
      "tanggal_bayar": "2021-11-07T00:00:00.000Z",
      "jumlah_bayar": 100000,
      "create_at": "2021-11-07T00:29:32.592Z",
      "update_at": "2021-11-07T00:29:32.592Z",
      "rekening": {
        "id": 2,
        "nama_rekening": "BCA",
        "keterangan_rekening": "Melalui BCA",
        "type_rekening": "2",
        "create_at": "2021-10-19T23:16:59.906Z",
        "update_at": "2021-10-19T23:16:59.906Z"
      }
    }
  ]
}

---/info


update src\penjualan\penjualan.controller.ts

@Patch(':id')
@ApiBody({type:UpdatePenjualanDto})
update(@Param('id') id: string, @PenjualanProses() updatePenjualanDto: UpdatePenjualanDto) {  string, @Body() updatePenjualanDto: UpdatePenjualanDto) {
    return this.penjualanService.update(+id, updatePenjualanDto);
}
---info
tambahkan @ApiBody({type:UpdatePenjualanDto}) untuk schema swagger


example_update = 
id 11
{
  "id": 11,
  "no_faktur": "FK-113",
  "tanggal": "2021-11-07",
  "user": {
    "id": 2
  },
  "konsumen": {
    "id": 4
   
  },
  "item": [
    {
      "id": 9,  <--- jika menggunakan id maka id akan berubah (replace)
      "jumlah_jual": 10,
      "harga_jual": 10000,
      "potongan": 1000,
      "produk": {
        "id": 7
      }
    },
    {   <--- jika tidak menggunakan id maka id  tidak akan repace mirip $set  update (partial upadate pada mongodb)
      "jumlah_jual": 20,
      "harga_jual": 15000,
      "potongan": 1500,
      "produk": {
        "id": 6
      }
    }
  ],
  "bayar": [
    {
      "id": 5,
      "tanggal_bayar": "2021-11-07",
      "jumlah_bayar": 100000,
      "rekening": {
        "id": 2
      }
    }
  ]
}



response = {
  "id": 11,
  "no_faktur": "FK-113",
  "tanggal": "2021-11-07T00:00:00.000Z",
  "user": {
    "id": 2
  },
  "konsumen": {
    "id": 4
  },
  "item": [
    {
      "id": 9,
      "jumlah_jual": 10,
      "harga_jual": 10000,
      "potongan": 1000,
      "produk": {
        "id": 7
      },
      "user": {
        "id": 2
      },
      "update_at": "2021-11-07T03:00:07.000Z"
    },
    {
      "jumlah_jual": 20,
      "harga_jual": 15000,
      "potongan": 1500,
      "produk": {
        "id": 6
      },
      "user": {
        "id": 2
      },
      "id": 11,
      "create_at": "2021-11-07T03:00:07.662Z",
      "update_at": "2021-11-07T03:00:07.662Z"
    }
  ],
  "bayar": [
    {
      "id": 5,
      "tanggal_bayar": "2021-11-07T00:00:00.000Z",
      "jumlah_bayar": 100000,
      "rekening": {
        "id": 2
      },
      "user": {
        "id": 2
      },
      "update_at": "2021-11-07T03:00:07.000Z"
    }
  ],
  "total_transaksi": 400000,
  "total_potongan": 2500,
  "total_bayar": 100000,
  "update_at": "2021-11-07T03:00:07.000Z"
}
---/info


```

</details>

## ==== /STAGE 6 = PENJUALAN


## ==== STAGE 7 = PAGENATION

<details>
  <summary>20211122-0037-PAGENATION-MODULE</summary>

```bash
/037 untuk keperluan pembuatan pagenation, count data & pencarian 


---info

buatlah data dummy untuk test pagenation ,
disini saya menggunakan  Database Client (cweijan) pada extention visual studio code
untuk membuat data dummy

---

buat folder src\etc\dto

update src\etc\dto\page-dto.ts

generate service untuk implementasi pagenation

nest g service etc/service/page

update src\etc\service\page\page.service.ts


```

</details>

<details>
  <summary>20211124-0038-PRODUK-PAGENATION</summary>

```bash
/038 

update src\produk\dto\create-produk.dto.ts
update src\produk\produk.controller.ts
update src\produk\produk.service.ts

---before
export class ProdukService {
  constructor(
    @InjectRepository(Produk) private produkRepo: Repository<Produk> // inject produk entites
  ) {}
  ...
  ...
  ...

   findAll() {
    return this.produkRepo.find({relations: ['user']}) 
    ...
    ...
---/before

---after

export class ProdukService extends PageService {
  constructor(
    @InjectRepository(Produk) private produkRepo: Repository<Produk> // inject produk entites
  ) {
    super()
  }
  ...
  ...
  ...

  findAll(filter) {
    return this.generatePage(filter, this.produkRepo, {
      relations: ['user']
    })
    ...
    ...

---/after

update src\produk\produk.controller.ts

---before
...
...
  findAll(@Query() page: FindProdukDto) {
    return this.produkService.findAll();
  }
 ...
 ...
---/before

---after
...
...
  findAll(@Query() page: FindProdukDto) {
    return this.produkService.findAll(page);
  }
 ...
 ...
---/after



update src\etc\service\page\page.service.ts ( bug fix search update)

---info
fitur skip limit , find data & bearer maximum limit
---/info

```
  
</details>


<details>
  <summary>20211125-0039-PENJUALAN-PAGENATION</summary>

```bash
/039

update src\penjualan\dto\create-penjualan.dto.ts
update src\penjualan\penjualan.service.ts
update src\penjualan\penjualan.controller.ts

```
</details>


<details>
  <summary>20211125-0040-KONSUMEN-PAGENATION</summary>

```bash
/040

revisi update src\penjualan\dto\create-penjualan.dto.ts (pencarian tanggal tidak menggunakan like)
update src\konsumen\dto\create-konsuman.dto.ts
update src\konsumen\konsumen.service.ts
update src\konsumen\konsumen.controller.ts

```
</details>


<details>
  <summary>20211125-0041-REKENING-PAGENATION</summary>

```bash
/041

update src\rekening\dto\create-rekening.dto.ts
update src\rekening\rekening.service.ts
update src\rekening\rekening.controller.ts

```
</details>


## ==== /STAGE 7 = PAGENATION


## ==== STAGE 8 = MANUAL QUERY

<details>
  <summary>20211125-0042-PRODUK-MANUAL-QUERY</summary>

```bash
/042

update src\produk\produk.service.ts

--- code
import { InjectConnection , ...} from '@nestjs/typeorm';


 constructor(
    ...,
    @InjectConnection() private MySqlConnection: Connection

  ) {
   ...
  }

/=================== MANUAL QUERY

  async GetProduk(req_body: any) {

    let res_json: any = {}

    // let query_params = `
    // SELECT * 
    // FROM produk 
    // WHERE 
    // barcode LIKE '%${req_body.condition.barcode}%' OR 
    // nama_produk LIKE  '%${req_body.condition.nama_produk}%' OR 
    // deskripsi_produk LIKE '%${req_body.condition.deskripsi_produk}%'
    // LIMIT 10 
    // OFFSET 20 `

    let query_params = `
    SELECT * 
    FROM produk `

    if (req_body.condition.barcode) {
      query_params = query_params + `WHERE `
      query_params = query_params + `barcode LIKE '%${req_body.condition.barcode}%'  `
    }

    let query_count_params = query_params


    if (req_body.limit) {
      query_params = query_params + ` LIMIT ${req_body.limit}  `
    }

    if (req_body.skip) {
      query_params = query_params + ` OFFSET ${req_body.skip}  `
    }


    let result = await this.MySqlConnection.query(query_params)

    if (req_body.enable_count == 1) {
      let result_count = await this.MySqlConnection.query(query_count_params)

      res_json.total = result_count.length

      if (req_body.limit) {
        res_json.page = Math.ceil(req_body.skip / req_body.limit)
        res_json.pages = Math.ceil(result_count.length / req_body.limit)
      }
    }

    if (req_body.enable_manual_relation_user == 1) {
      for (let i_a = 0; i_a < result.length; i_a++) {
        let getUser = await this.MySqlConnection.query(`SELECT * FROM user WHERE id = ${result[i_a].userId} `)

        delete getUser[0].password
        result[i_a].user = getUser[0]
        delete result[i_a].userId
      }
    }

    res_json.data = result

    return res_json
  }

EKI NOTE : 
INI HANYA PEMBELAJARAN PADA CASE NYATA
QUERY INI AKAN BERAT KARENA MENGGUNAKAN LOOPING UNTUK SETIAP GET USER, 
SEBAIKNYA TETAP MENGGUNAKAN ENTITY RELATION 
UNTUK KECEPATAN YANG LEBIH BAIK DI SARANKAN  MENGGUNAKAN : 

ENTITY RELATION > QUERY BUILDER JOIN / RAW QUERY JOIN > QUERY BUILDER LOOPING / RAW QUERY LOOPING

(lebih besar lebih baik)

  //=================== MANUAL QUERY

--- / code 
- inject root connection
- manual raw query sql

update src\produk\produk.controller.ts 
- custom plural / url route 
- enable request handle
- enable request object swagger

--- code
import { Request } from 'express';

 @Post('/produk-manual-query')
  @ApiBody({ type: Object })
  produkManualQuery(
    @Req()
    req: Request
  ): any {

    let req_body_example = {
      "condition": {
        "barcode": "a"
      },
      "skip": 25,
      "limit": 10,
      "enable_count": 1,
      "enable_manual_relation_user": 1
    }

    return this.produkService.GetProduk(req.body)
  }
--- / code


--- REQUEST

   {
      "condition": {
        "barcode": "a"
      },
      "skip": 25,
      "limit": 10,
      "enable_count": 1,
      "enable_manual_relation_user": 1
    }

--- /REQUEST

--- RESPONSE

{
  "total": 34,
  "page": 3,
  "pages": 4,
  "data": [
    {
      "id": 151,
      "barcode": "ekhpvjckad",
      "deskripsi_produk": "axhbrvvoidntbdl",
      "harga_beli": 23036,
      "harga_jual": 147195,
      "foto": "oibmm",
      "create_at": "1982-02-18T09:50:30.000Z",
      "update_at": "1983-03-18T22:58:54.000Z",
      "nama_produk": "idiltwyqikrpene",
      "user": {
        "id": 1,
        "nama_user": "admin2021",
        "email": "admin2021@email.com",
        "username": "admin2021",
        "create_at": "2021-09-25T23:31:51.376Z",
        "update_at": "2021-09-25T23:31:51.376Z"
      }
    },
    {
      "id": 154,
      "barcode": "abofmytrot",
      "deskripsi_produk": "mxjomavulewyedd",
      "harga_beli": 92374,
      "harga_jual": 174320,
      "foto": "wdydl",
      "create_at": "1986-07-28T00:31:45.000Z",
      "update_at": "2020-09-20T01:08:43.000Z",
      "nama_produk": "ormqoagcgnynkue",
      "user": {
        "id": 1,
        "nama_user": "admin2021",
        "email": "admin2021@email.com",
        "username": "admin2021",
        "create_at": "2021-09-25T23:31:51.376Z",
        "update_at": "2021-09-25T23:31:51.376Z"
      }
    },
    {
      "id": 157,
      "barcode": "iqyzgswapx",
      "deskripsi_produk": "ityfxdwvdrsnjyh",
      "harga_beli": 30232,
      "harga_jual": 43575,
      "foto": "dqhtc",
      "create_at": "1988-06-23T05:27:58.000Z",
      "update_at": "1977-07-27T20:39:55.000Z",
      "nama_produk": "hgwyldfvlyjxvmx",
      "user": {
        "id": 1,
        "nama_user": "admin2021",
        "email": "admin2021@email.com",
        "username": "admin2021",
        "create_at": "2021-09-25T23:31:51.376Z",
        "update_at": "2021-09-25T23:31:51.376Z"
      }
    },
    {
      "id": 167,
      "barcode": "kxxakwvrox",
      "deskripsi_produk": "nqcsznshaucidvu",
      "harga_beli": 47406,
      "harga_jual": 146928,
      "foto": "pvker",
      "create_at": "2012-04-12T05:00:33.000Z",
      "update_at": "2000-06-07T21:39:41.000Z",
      "nama_produk": "urjclwwmfeoodxh",
      "user": {
        "id": 1,
        "nama_user": "admin2021",
        "email": "admin2021@email.com",
        "username": "admin2021",
        "create_at": "2021-09-25T23:31:51.376Z",
        "update_at": "2021-09-25T23:31:51.376Z"
      }
    },
    {
      "id": 168,
      "barcode": "dpngrnqagj",
      "deskripsi_produk": "nocjbjcuhyxqzfq",
      "harga_beli": 59072,
      "harga_jual": 185868,
      "foto": "ciuok",
      "create_at": "1981-02-13T00:06:21.000Z",
      "update_at": "2000-01-17T14:41:31.000Z",
      "nama_produk": "unbtfdamycipohu",
      "user": {
        "id": 1,
        "nama_user": "admin2021",
        "email": "admin2021@email.com",
        "username": "admin2021",
        "create_at": "2021-09-25T23:31:51.376Z",
        "update_at": "2021-09-25T23:31:51.376Z"
      }
    },
    {
      "id": 174,
      "barcode": "peagidnjiy",
      "deskripsi_produk": "nrtrnsriimgpuur",
      "harga_beli": 24073,
      "harga_jual": 44612,
      "foto": "ebsab",
      "create_at": "1997-01-13T13:22:23.000Z",
      "update_at": "2001-11-04T06:02:17.000Z",
      "nama_produk": "effbqzbiqjgvfrs",
      "user": {
        "id": 1,
        "nama_user": "admin2021",
        "email": "admin2021@email.com",
        "username": "admin2021",
        "create_at": "2021-09-25T23:31:51.376Z",
        "update_at": "2021-09-25T23:31:51.376Z"
      }
    },
    {
      "id": 175,
      "barcode": "pblkpaggqr",
      "deskripsi_produk": "adnoivrbksyxlce",
      "harga_beli": 75650,
      "harga_jual": 101387,
      "foto": "fcvxw",
      "create_at": "1980-11-08T00:43:43.000Z",
      "update_at": "1979-05-21T06:45:20.000Z",
      "nama_produk": "yhkjphpzvbmrgtr",
      "user": {
        "id": 1,
        "nama_user": "admin2021",
        "email": "admin2021@email.com",
        "username": "admin2021",
        "create_at": "2021-09-25T23:31:51.376Z",
        "update_at": "2021-09-25T23:31:51.376Z"
      }
    },
    {
      "id": 178,
      "barcode": "puplstksya",
      "deskripsi_produk": "taqbgbmtdwdeiot",
      "harga_beli": 9041,
      "harga_jual": 195108,
      "foto": "fcedq",
      "create_at": "1972-04-07T22:25:46.000Z",
      "update_at": "2018-01-28T04:15:20.000Z",
      "nama_produk": "combbifahqypgpe",
      "user": {
        "id": 1,
        "nama_user": "admin2021",
        "email": "admin2021@email.com",
        "username": "admin2021",
        "create_at": "2021-09-25T23:31:51.376Z",
        "update_at": "2021-09-25T23:31:51.376Z"
      }
    },
    {
      "id": 198,
      "barcode": "sspnracmgu",
      "deskripsi_produk": "fnwzuwzmguucnde",
      "harga_beli": 54297,
      "harga_jual": 49839,
      "foto": "blrqd",
      "create_at": "2021-09-25T12:53:03.000Z",
      "update_at": "2009-11-27T12:53:52.000Z",
      "nama_produk": "ghupmkpqsmmwpvx",
      "user": {
        "id": 1,
        "nama_user": "admin2021",
        "email": "admin2021@email.com",
        "username": "admin2021",
        "create_at": "2021-09-25T23:31:51.376Z",
        "update_at": "2021-09-25T23:31:51.376Z"
      }
    }
  ]
}

--- /RESPONSE

referensi :  https://docs.nestjs.com/techniques/database


EKI NOTE : 
Jika ingin lebih cepat lagi
- rubah adapter default NestJs (express) (-+ 6rb/sec) adapter dengan NestJs Fastify adapter (-+ 30rb/sec)
- compress request (untuk mengurangi proses request/response payload )
- jangan gunakan async function terlalu banyak lebih baik gunakan callback/promise function
- gunakan paralel request seperti child-process, atau bisa juga teknologi message broker (rabbit-mq , kafka, nsq , etc) / event driven
- gunakan teknologi cluster (untuk enable multi threads pada nodejs)







```

</details>


<details>
  <summary>20211126-0043-DTO-PRODUK-MANUAL-QUERY</summary>

```bash
/043

buat manual src\produk\dto\produk-manual-query.dto.ts
update src\produk\produk.controller.ts

--- info
agar muncul contoh parameter swagger
example :
{
  "condition": {
    "barcode": "string"
  },
  "skip": 0,
  "limit": 10,
  "enable_count": 1,
  "enable_manual_relation_user": 1
}
--- /info
```

</details>

## ==== /STAGE 8 = MANUAL QUERY


## ==== STAGE 9 = MIGRATION MYSQL TO POSTGRESQL TypeORM

<details>
  <summary>20211126-0044-MYSQL-TO-MIGRATION-POSTGRESQL</summary>

```bash
/044

// ===================== MIGRATION MYSQL TO POSTGRESQL
1. install postgresql database

2. create database simple_pos

3. npm uninstall mysql2

4. delete node_modules

5. npm i

6. npm install pg

7. rubah .env 

--- before

MYSQL_HOST = '127.0.0.1'
MYSQL_PORT = '3400'
MYSQL_USER = 'root'
MYSQL_PASSWORD = 'masuk123'
MYSQL_DATABASE = 'simple_pos'
JWT_SECRET_KEY= 'eki-secret-key'

--- /before

--- after

POSTGRESQL_HOST = '127.0.0.1'
POSTGRESQL_PORT = '5400'
POSTGRESQL_USER = 'postgres'
POSTGRESQL_PASSWORD = 'masuk123'
POSTGRESQL_DATABASE = 'simple_pos'
JWT_SECRET_KEY= 'eki-secret-key'

--- /after

8. disable sementara code pada src\user\user.controller.ts
// @ApiBearerAuth() 
// @UseGuards(JwtGuard) 

lalu buat pada http://localhost:3000/api-docs/
POST /USER 
{
  "nama_user": "stringst",
  "email": "string@mail.com",
  "username": "stringst",
  "password": "stringst"
}


9. setelah selesai code pada src\user\user.controller.ts
enable kembali 
@ApiBearerAuth() 
@UseGuards(JwtGuard) 

10. selesai maka seluruh table akan otomatis terbuat , dan langsung dapat digunakan, persis seperti pada MySQL

HASIL : https://github.com/EKI-INDRADI/eki-latihan-nestjs-postgresql

// ===================== MIGRATION MYSQL TO POSTGRESQL

```

</details>

## ==== /STAGE 9 = MIGRATION MYSQL TO POSTGRESQL TypeORM


## ==== STAGE 10 = MIGRATION EXPRESS ADAPTER TO FASTIFY ADAPTER


<details>
  <summary>20211212-0045-EXPRESS-TO-FASTIFY-ADAPTER</summary>

  

```bash
/045
```


MySql Fastify : https://github.com/EKI-INDRADI/eki-latihan-nestjs-fastify-mysql

PostgreSql Fastify : https://github.com/EKI-INDRADI/eki-latihan-nestjs-fastify-postgresql

Mongodb (mongoose) Fastify : https://github.com/EKI-INDRADI/eki-latihan-nestjs-fastify-mongodb



RESPONSE :

![EXAMPLE](https://github.com/EKI-INDRADI/eki-latihan-nestjs-mysql/blob/master/_BENCHMARK/AUTOCANNON_RESPONSE.png)


BENCHMARK :

![EXAMPLE](https://github.com/EKI-INDRADI/eki-latihan-nestjs-mysql/blob/master/_BENCHMARK/AUTOCANNON_1.png)

![EXAMPLE](https://github.com/EKI-INDRADI/eki-latihan-nestjs-mysql/blob/master/_BENCHMARK/AUTOCANNON_2_3.png)


BENCHMARK NOTE :

```bash
npm i autocannon -g

autocannon -c 100 -d 40 -p 10 localhost:3000 ( express nestjs )

autocannon -c 100 -d 40 -p 10 localhost:3001 ( fastify nestjs )
```

all result :
https://github.com/fastify/benchmarks


- backend ini sudah banyak menggunakan inject depedency dan perubahan middleware,

- tidak seperti benchmark list pada https://github.com/fastify/benchmarks yang polos tanpa ada inject dependency

- pada benchmark ini fastify adapter nestjs menunjukan kinerja 3x lipat lebih cepat dari express adapter nestjs

- untuk jangka panjang saya belum test lebih lanjut, tetapi jika saya mendapatkan informasi lebih lanjut saya akan infokan pada github ini


```bash

---info
npm uninstall @nestjs/platform-express
npm i --save @nestjs/platform-fastify

reference : 
https://docs.nestjs.com/techniques/performance

npm uninstall @nestjs/swagger swagger-ui-express
npm install --save @nestjs/swagger fastify-swagger

reference : 
https://docs.nestjs.com/openapi/introduction


//============================ MULTER NOT SUPPORT FASTIFY ADAPTER
NOTE : https://docs.nestjs.com/techniques/file-upload (fastify tidak support multer multipart form data di nestjs)

silahkan coba depedency alternative lain, 

atau mungkin untuk file upload dapat menggunakan nestjs express secara terpisah, 

toh jika tujuannya ingin membuat microservices, 

memang seharusnya terpisah
//============================ /MULTER NOT SUPPORT FASTIFY ADAPTER



//====================================FASITFY BUG FIX

---
UnhandledPromiseRejectionWarning: TypeError: this.setInstance is not a function
    at new FastifyAdapter (D:\_eki-latihan-nestjs-mysql-fastify\rnd-nestjs-mysql\node_modules\@nestjs\platform-fastify\adapters\fastify-adapter.js:72:14)
    at bootstrap (D:\_eki-latihan-nestjs-mysql-fastify\rnd-nestjs-mysql\src\main.ts:13:5)
    at Object.<anonymous> (D:\_eki-latihan-nestjs-mysql-fastify\rnd-nestjs-mysql\src\main.ts:55:1)
    at Module._compile (internal/modules/cjs/loader.js:1068:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1097:10)
    at Module.load (internal/modules/cjs/loader.js:933:32)
    at Function.Module._load (internal/modules/cjs/loader.js:774:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47
(Use `node --trace-warnings ...` to show where the warning was created)
(node:21788) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:21788) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
---


npm update @nestjs/core  


//====================================/FASITFY BUG FIX

---/info

---code
update src\main.ts

// const app = await NestFactory.create(AppModule); // OLD CODE

const app = await NestFactory.create<NestFastifyApplication>( // FASTIFY
  AppModule,
  new FastifyAdapter()
);

// await app.listen(3000); // 127.0.0.1/localhost
await app.listen(3000, '0.0.0.0'); // global ip


update src\produk\produk.controller.ts

---sebelum_0
import { Request } from 'express'; //MANUAL QUERY ganti request express nya pake default nestJs aja

  @Post('/produk-manual-query')
  @ApiBody({ type: ProdukManualQueryDto })
  produkManualQuery(
    @Req()
    req: Request
  ): any {

   return this.produkService.GetProduk(req.body)
  }

---/sebelum_0

---sesudah_0
// import { Request } from 'express'; //MANUAL QUERY ganti request express nya pake default nestJs aja

  @Post('/produk-manual-query')
  @ApiBody({ type: ProdukManualQueryDto })
  produkManualQuery(
    @Body()
    req_body: ProdukManualQueryDto
  ): any {

   return this.produkService.GetProduk(req_body)
  }
---/sesudah_0


  update src\produk\dto\create-produk.dto.ts

---sebelum_1
export class ProdukDto {
  ...
  ...
    @ApiProperty({ format: 'binary' })
    @IsOptional()
    foto: string
---/sebelum_1

---sesudah_1
    @ApiProperty() 
    @IsOptional()
    foto: string
---/sesudah_1

update src\produk\produk.controller.ts

---sebelum_2
  import { FileInterceptor } from  '@nestjs/platform-express';
  import { diskStorage } from 'multer';

  @Post() 
  @UseInterceptors(FileInterceptor('foto', {
       storage: diskStorage({ 
         destination: './assets/produk',
         filename: (req: any, file, cb) => {
           let number_user_id = Number(req.user.id)
           let eki_auto_generate = "PD"
             + new Date().getFullYear() 
             + ("0" + (new Date().getMonth() + 1)).slice(-2) //+ "-"
             + ("0" + new Date().getDate()).slice(-2) + "-"
             + "USR" + number_user_id.toString().padStart((String(number_user_id).length > 4) ? String(number_user_id).length : 4, '0') + "-"
             + Date.now()

           cb(null, eki_auto_generate + extname(file.originalname))
       }
     })
   }))
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: CreateProdukDto })
  create(@InjectUser() createProdukDto: CreateProdukDto, @UploadedFile() foto: Express.Multer.File) {
    createProdukDto.foto = foto.filename //DISABLE FASTIFY ADAPTER
    return this.produkService.create(createProdukDto);
  }
---/sebelum_2

---sesudah_2
  @Post()
  @ApiBody({ type: CreateProdukDto })
  create(@InjectUser() createProdukDto: CreateProdukDto) { 
    return this.produkService.create(createProdukDto);
  }
---/sesudah_2

---sebelum_3
 @Patch(':id')
  @UseInterceptors(FileInterceptor('foto', {
    storage: diskStorage({
      destination: './assets/produk',
      filename: (req: any, file, cb) => {
        let number_user_id = Number(req.user.id)
        let eki_auto_generate = "PD"
          + new Date().getFullYear()
          + ("0" + (new Date().getMonth() + 1)).slice(-2)
          + ("0" + new Date().getDate()).slice(-2) + "-"
          + "USR" + number_user_id.toString().padStart((String(number_user_id).length > 4) ? String(number_user_id).length : 4, '0') + "-"
          + Date.now()
        cb(null, eki_auto_generate + extname(file.originalname))
      }
    })
  }))
  @ApiConsumes('multipart/form-data') 
  @ApiBody({ type: UpdateProdukDto }) 
  update(@Param('id') id: string, @InjectUser() updateProdukDto: UpdateProdukDto, @UploadedFile() foto: Express.Multer.File) {
     if (foto) {
       updateProdukDto.foto = foto.filename
    }
    return this.produkService.update(+id, updateProdukDto);
  }
---/sebelum_3

---sesudah_3
  @Patch(':id')
  @ApiBody({ type: UpdateProdukDto })
  update(@Param('id') id: string, @InjectUser() updateProdukDto: UpdateProdukDto) {
    return this.produkService.update(+id, updateProdukDto);
  }
---/sesudah_3


//=========================== WAJIB REBUILD DIST FILE

delete /dist files

---- build kembali file /dist nya
npm run build
----

//=========================== /WAJIB REBUILD DIST FILE


---/code

```

</details>


## ==== /STAGE 10 = MIGRATION EXPRESS ADAPTER TO FASTIFY ADAPTER


## ==== STAGE 11 = MIGRATION MYSQL TO MONGODB


<details>
  <summary>20211219-0046-MYSQL-TO-MONGODB</summary>

```bash
/046

// ===================== MIGRATION MYSQL TO MONGODB
1. install mongodb database

2. create database simple_pos

3. npm uninstall @nestjs/typeorm typeorm mysql2

4. delete node_modules

5. npm i

6. npm install --save @nestjs/mongoose mongoose

7. rubah .env 

--- before

MYSQL_HOST = '127.0.0.1'
MYSQL_PORT = '3400'
MYSQL_USER = 'root'
MYSQL_PASSWORD = 'masuk123'
MYSQL_DATABASE = 'simple_pos'
JWT_SECRET_KEY= 'eki-secret-key'

--- /before

--- after

MONGODB_HOST=127.0.0.1
MONGODB_PORT=7000
MONGODB_USER=root
MONGODB_PASSWORD=masuk123
MONGODB_DATABASE=simple_pos
JWT_SECRET_KEY=eki-secret-key

--- /after

8. rubah code pada src\user\user.controller.ts
// @ApiBearerAuth()
// @UseGuards(JwtGuard)
@Controller('user')

------------------------

pasangkan  

@ApiBearerAuth()
@UseGuards(JwtGuard)

pada setiap controller src\user\user.controller.ts , kecuali :

@Post()
create(@Body() ....
...
...

untuk keperluan membuat account

10. update src\app.module.ts
11. update src\<resource_name>\dto\*
12. update src\<resource_name>\entities\*
13. update src\<resource_name>\<resource_name>.service.ts

lalu buat pada http://localhost:3000/api-docs/
POST /USER 
{
  "nama_user": "stringst",
  "email": "string@mail.com",
  "username": "stringst",
  "password": "stringst"
}


//=========================== WAJIB REBUILD DIST FILE

delete /dist files

---- build kembali file /dist nya
npm run build
----

//=========================== /WAJIB REBUILD DIST FILE

15. selesai maka seluruh table akan otomatis terbuat, dan langsung dapat digunakan, persis seperti pada MySQL

HASIL : https://github.com/EKI-INDRADI/eki-latihan-nestjs-mongodb

// ===================== MIGRATION MYSQL TO MONGODB

```

</details>


<details>
  <summary>20211219-0046-MYSQL-TO-MONGODB-001</summary>

```bash
/046-001 USER & AUTH (AUTO GENERATE & AUTO SWAGGER & AUTO VALIDASI)

update src\user\*
update src\app.module.ts

NOTE : migrasi perlahan karena depedency yang digunakan sedikit berbeda TypeORM != Mongoose

```

</details>

<details>
  <summary>20211228-0046-MYSQL-TO-MONGODB-002</summary>


```bash
// AUTO GENERATE ARROW FUNCTION MONGOOSE

    // =================== MONGOOSE PROGRESSIVE FRAMEWORK
    @Prop({
        type: Number,
        default: () =>  
            Number(Date.now()) // karena berupa arrow function maka Date.now() dibaca kembali ketika ada data masuk
    })
    id1: Number

    @Prop({
        type: Number,
        default:Number(Date.now()) // Date.now() dibaca ketika backend running diawal value akan selalu sama
    })
    id2: Number
 // =================== /MONGOOSE PROGRESSIVE FRAMEWORK
```
</details>

<details>
  <summary>20211228-0046-MYSQL-TO-MONGODB-003</summary>


```bash
// update custom validator IsUnique for Mongoose Version 
// (sekaligus contoh inject connection mongoose)
// berikut perbedaan dari IsUnique validator TypeORM Version MySql / PostgreSql

update src\main.ts

useContainer(app.select(AppModule), { fallbackOnErrors: true });  

// masalah ini cukup lama menemukannya
// ternyata harus menggunakan useContainer pada main.ts
// bertujuan agar dapat menggunakan depedency / mongoose connection / service / etc
// pada pada custom validator  

update src\app.module.ts (enable isUnique)

update src\user\dto\create-user.dto.ts (update code)

update src\etc\validator\unique-validator.ts (update code)

// version 1
import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

// version 2
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/user/entities/user.entity';
import { Model, Schema } from 'mongoose';

// version 3
import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

note untuk version 3 perlu update src\user\user.service.ts

export class UniqueValidator implements ValidatorConstraintInterface {
  ...
  ...

    constructor(
      // version 1
      @InjectConnection() private MongoDbConnection: Connection,

      // version 2
      // @InjectModel(User.name) private userRepo: Model<User>,

      // version 3
      // private userService: UserService
    ) { }
    
  ...
  ...
}


async validate(value: any, args: ValidationArguments) {
  ...
  ...

    //version 1 (menggunakan service)
    check = await this.userService.manualQuery('findOne', findCondition)

    //version 2 (menggunakan model repository)
    check = await this.userRepo.findOne(findCondition);

    //version 3 (menggunakan mongo conection langsung)
    check = await this.MongoDbConnection.model(args.constraints[0]).findOne(findCondition)

  ...
  ...
}

hasil :


{
  "statusCode": 400,
  "message": [
    "email string5@mail.com sudah digunakan",
    "username stringst5 sudah digunakan"
  ],
  "error": "Bad Request"
}
     
reference : 
https://stackoverflow.com/questions/60062318/how-to-inject-service-to-validator-constraint-interface-in-nestjs-using-class-va

https://docs.nestjs.com/techniques/mongodb

https://mongoosejs.com/docs/api.html#Connection

```
</details>


<details>
  <summary>20211228-0046-MYSQL-TO-MONGODB-004</summary>

```bash
// update custom validator IsExist for Mongoose Version 
// (sekaligus contoh inject connection mongoose)
// berikut perbedaan dari IsExist validator TypeORM Version MySql / PostgreSql

update src\etc\validator\exist-validator.ts

...
...
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';


export class ExistValidator implements ValidatorConstraintInterface {
    constructor(
        @InjectConnection() private MongoDbConnection: Connection,
    ) { }

    async validate(value: any, args: ValidationArguments) {
        let findCondition = { [args.constraints[1]]: args.value }
        let check: any = null
        check = await this.MongoDbConnection.model(args.constraints[0]).findOne(findCondition)
        
        if (check) return true
        return false
    }
...
...

hasil : 
{
"statusCode": 400,
"message": [
  "id 202112283300602 tidak ditemukan" << contoh IsExists
  ],
  "error": "Bad Request"
}

```

</details>


<details>
  <summary>20211229-0046-MYSQL-TO-MONGODB-005</summary>

```bash
// update modular pagenation / pagenator (auto injection) MongoDb (mongoose)
// parameter bisa menggunakan skip-limit atau page-limit keduanya support,
// karena ada beberapa frontend yang menggunakan konsep page dan limit , 
// ada juga yang masih menggunakan skip dan limit, 
// namun saya rekomendasikan sebaiknya menggunakan page karena implementasi di frontend lebih mudah
//
// dan ini sekaligus auto validation schema swagger + custom example dan description swagger nya
//
// (sekaligus contoh inject connection mongoose menggunakan function agar lebih modular)
// berikut contoh perbedaan dari autogenerate pagenator / pagenation dari MySql / PostgreSql (TypeORM)


update src\etc\dto\page-dto.ts
update src\etc\service\page\*
update src\etc\service\page\page.service.ts


contoh implementasi pada get user:
update src\user\dto\create-user.dto.ts
update src\user\user.controller.ts
update src\user\user.service.ts


---------contoh swagger pada parameternya (dapat dicustom)
{
  "page": "1 (number) , jangan gunakan page ketika menggunakan skip",
  "skip": "0 (number) , jangan gunakan skip ketika menggunakan page",
  "limit": 10,
  "sort": {
    "create_at": -1
  },
  "projection": {
    "_id": 0,
    "password": 0,
    "__v": 0
  },
  "id": 202112295441296,
  "nama_user": "",
  "email": "",
  "username": "ing"
}
---------/contoh swagger pada parameternya (dapat dicustom)

---------contoh menggunakan page-limit
request = 
{
  "page": 1,
  "limit": 5,
  "sort": {
    "create_at": -1
  },
  "projection": {
    "_id": 0,
    "password": 0,
    "__v": 0
  },
  "nama_user": "",
  "email": "",
  "username": "ing"
}

respose =
{
  "total": 10,
  "page": 1,
  "pages": 2,
  "data": [
    {
      "username": "ekitesting3",
      "email": "ekitesting3@mail.com",
      "nama_user": "ekitesting3",
      "update_at": "2021-12-29T11:51:38.361Z",
      "create_at": "2021-12-29T11:51:38.361Z",
      "id": 202112295138361
    },
    {
      "username": "ekitesting2",
      "email": "ekitesting2@mail.com",
      "nama_user": "ekitesting2",
      "update_at": "2021-12-29T11:51:31.725Z",
      "create_at": "2021-12-29T11:51:31.725Z",
      "id": 202112295131725
    },
    {
      "username": "ekitesting1",
      "email": "ekitesting1@mail.com",
      "nama_user": "ekitesting1",
      "update_at": "2021-12-29T11:51:23.965Z",
      "create_at": "2021-12-29T11:51:23.965Z",
      "id": 202112295123965
    },
    {
      "username": "ekitesting",
      "email": "ekitesting@mail.com",
      "nama_user": "ekitesting",
      "update_at": "2021-12-29T11:51:15.864Z",
      "create_at": "2021-12-29T11:51:15.864Z",
      "id": 202112295115864
    },
    {
      "username": "stringst",
      "email": "string@mail.com",
      "nama_user": "stringst",
      "update_at": "2021-12-29T11:50:59.039Z",
      "create_at": "2021-12-29T11:50:59.040Z",
      "id": 202112295059040
    }
  ]
}
---------/contoh menggunakan page-limit


---------contoh menggunakan skip-limit
request = 
{
  "skip": 5,
  "limit": 5,
  "sort": {
    "create_at": -1
  },
  "projection": {
    "_id": 0,
    "password": 0,
    "__v": 0
  },
  "nama_user": "",
  "email": "",
  "username": "ing"
}

respose =
{
  "total": 10,
  "page": 2,
  "pages": 2,
  "data": [
    {
      "username": "ekitesting10",
      "email": "ekitesting10@mail.com",
      "nama_user": "ekitesting10",
      "update_at": "2021-12-29T11:52:10.538Z",
      "create_at": "2021-12-29T11:52:10.538Z",
      "id": 202112295210538
    },
    {
      "username": "ekitesting7",
      "email": "ekitesting7@mail.com",
      "nama_user": "ekitesting7",
      "update_at": "2021-12-29T11:52:01.003Z",
      "create_at": "2021-12-29T11:52:01.003Z",
      "id": 20211229520103
    },
    {
      "username": "ekitesting6",
      "email": "ekitesting6@mail.com",
      "nama_user": "ekitesting6",
      "update_at": "2021-12-29T11:51:55.063Z",
      "create_at": "2021-12-29T11:51:55.063Z",
      "id": 202112295155063
    },
    {
      "username": "ekitesting5",
      "email": "ekitesting5@mail.com",
      "nama_user": "ekitesting5",
      "update_at": "2021-12-29T11:51:49.276Z",
      "create_at": "2021-12-29T11:51:49.276Z",
      "id": 202112295149276
    },
    {
      "username": "ekitesting4",
      "email": "ekitesting4@mail.com",
      "nama_user": "ekitesting4",
      "update_at": "2021-12-29T11:51:43.486Z",
      "create_at": "2021-12-29T11:51:43.486Z",
      "id": 202112295143486
    }
  ]
}
---------/contoh menggunakan skip-limit
```


reference : https://docs.nestjs.com/openapi/types-and-parameters
</details>


<details>
  <summary>20211230-0046-MYSQL-TO-MONGODB-006</summary>

```bash

update produk (sudah di migrasi menggunakan Mongoose dan
fungsi sama persis dengan TypeORM)

update src\produk\entities\produk.entity.ts

update src\produk\produk.module.ts

update src\produk\dto\create-produk.dto.ts

update src\produk\dto\update-produk.dto.ts

update src\produk\dto\produk-manual-query.dto.ts

update src\produk\produk.service.ts

update src\produk\produk.controller.ts

update src\app.module.ts

update src\etc\decorator\inject-user.decorator.ts

update src\etc\dto\page-dto.ts

```
</details>


<details>
  <summary>20220102-0046-MYSQL-TO-MONGODB-007</summary>

```bash

update konsumen & rekening (sudah di migrasi menggunakan Mongoose dan
fungsi sama persis dengan TypeORM)

update src\konsumen\*  [done]
update src\app.module.ts [done]

update src\rekening\*  [done]
update src\app.module.ts  [done]

update src\penjualan\*  [inprogress] // perlu check auto schema relation
update src\penjualan\*bayar*  [inprogress] // perlu check auto schema relation
update src\penjualan\*item*  [inprogress] // perlu check auto schema relation
update src\app.module.ts [inprogress] // perlu check auto schema relation



```
</details>


<details>
  <summary>20220108-0046-MYSQL-TO-MONGODB-008</summary>

```bash
update user payload (jwt login)
update src\auth\auth.controller.ts
update src\auth\auth.service.ts
update src\auth\jwt.strategy.ts

Inject user payload to req.body [DONE]

update src\produk\dto\create-produk.dto.ts (ProdukDtoRelation + @ValidateNested())
update src\penjualan\dto\penjualan-item.dto.ts ( @ValidateNested())
update src\user\dto\create-user.dto.ts (UserDtoRelation + @ValidateNested())
update src\penjualan\penjualan.controller.ts(@InjectUser() CreatePenjualanItemDto)

Penjualan Item [DONE]


update src\penjualan\dto\penjualan-bayar.dto.ts
update src\penjualan\penjualan.controller.ts(@InjectUser() CreatePenjualanItemDto)

Penjualan Bayar [PARTIAL DONE]

update all dto 

user: UserDto  -> user: UserDtoRelation (biar data lebih komplit)

update src\produk\dto\create-produk.dto.ts
update src\konsumen\dto\create-konsumen.dto.ts
update src\konsumen\dto\update-konsumen.dto.ts
update src\penjualan\dto\create-penjualan.dto.ts
update src\rekening\dto\create-rekening.dto.ts

Rekening [DONE]

update src\penjualan\dto\penjualan-bayar.dto.ts
update src\penjualan\penjualan.controller.ts(@InjectUser() CreatePenjualanBayarDto)

Penjualan Bayar [DONE]


next update terkahir Penjualan [INPROGRESS]

```

</details>



<details>
  <summary>20220109-0046-MYSQL-TO-MONGODB-009</summary>

```bash

update src\konsumen\dto\create-konsumen.dto.ts (KonsumenDtoRelation)
update src\penjualan\dto\penjualan-item.dto.ts (PenjualanItemDtoRelation)
update src\penjualan\dto\penjualan-bayar.dto.ts (PenjualanBayarDtoRelation)
update src\penjualan\penjualan-proses.decorator.ts (inject PenjualanProses)

example parameter penjualan :

src\penjualan\dto\penjualan-item.dto.CreatePenjualanItemDto.ex.json
src\penjualan\dto\penjualan-bayar.dto.CreatePenjualanBayarDto.ex.json
src\penjualan\dto\create-penjualan.dto.CreatePenjualanDto.ex.json

Finish
```
</details>

## ==== / STAGE 11 = MIGRATION MYSQL TO MONGODB


## ==== STAGE 12 = MIGRATION MONGOOSE EXPRESS ADAPTER TO FASTIFY ADAPTER


<details>
  <summary>20220116-0047-MONGOOSE-EXPRESS-TO-FASTIFY-ADAPTER</summary>

  

```bash
/047
```


MySql Fastify : https://github.com/EKI-INDRADI/eki-latihan-nestjs-fastify-mysql

PostgreSql Fastify : https://github.com/EKI-INDRADI/eki-latihan-nestjs-fastify-postgresql

Mongodb (mongoose) Fastify : https://github.com/EKI-INDRADI/eki-latihan-nestjs-fastify-mongodb



RESPONSE :

![EXAMPLE](https://github.com/EKI-INDRADI/eki-latihan-nestjs-mysql/blob/master/_BENCHMARK/AUTOCANNON_RESPONSE.png)


BENCHMARK :

![EXAMPLE](https://github.com/EKI-INDRADI/eki-latihan-nestjs-mysql/blob/master/_BENCHMARK/AUTOCANNON_1.png)

![EXAMPLE](https://github.com/EKI-INDRADI/eki-latihan-nestjs-mysql/blob/master/_BENCHMARK/AUTOCANNON_2_3.png)


BENCHMARK NOTE :

```bash
npm i autocannon -g

autocannon -c 100 -d 40 -p 10 localhost:3000 ( express nestjs )

autocannon -c 100 -d 40 -p 10 localhost:3001 ( fastify nestjs )
```

all result :
https://github.com/fastify/benchmarks


- backend ini sudah banyak menggunakan inject depedency dan perubahan middleware,

- tidak seperti benchmark list pada https://github.com/fastify/benchmarks yang polos tanpa ada inject dependency

- pada benchmark ini fastify adapter nestjs menunjukan kinerja 3x lipat lebih cepat dari express adapter nestjs

- untuk jangka panjang saya belum test lebih lanjut, tetapi jika saya mendapatkan informasi lebih lanjut saya akan infokan pada github ini


```bash

---info
npm uninstall @nestjs/platform-express
npm i --save @nestjs/platform-fastify

reference : 
https://docs.nestjs.com/techniques/performance

npm uninstall @nestjs/swagger swagger-ui-express
npm install --save @nestjs/swagger fastify-swagger

reference : 
https://docs.nestjs.com/openapi/introduction


//============================ MULTER NOT SUPPORT FASTIFY ADAPTER
NOTE : https://docs.nestjs.com/techniques/file-upload (fastify tidak support multer multipart form data di nestjs)

silahkan coba depedency alternative lain, 

atau mungkin untuk file upload dapat menggunakan nestjs express secara terpisah, 

toh jika tujuannya ingin membuat microservices, 

memang seharusnya terpisah
//============================ /MULTER NOT SUPPORT FASTIFY ADAPTER



//====================================FASITFY BUG FIX

---
UnhandledPromiseRejectionWarning: TypeError: this.setInstance is not a function
    at new FastifyAdapter (D:\_eki-latihan-nestjs-mysql-fastify\rnd-nestjs-mysql\node_modules\@nestjs\platform-fastify\adapters\fastify-adapter.js:72:14)
    at bootstrap (D:\_eki-latihan-nestjs-mysql-fastify\rnd-nestjs-mysql\src\main.ts:13:5)
    at Object.<anonymous> (D:\_eki-latihan-nestjs-mysql-fastify\rnd-nestjs-mysql\src\main.ts:55:1)
    at Module._compile (internal/modules/cjs/loader.js:1068:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1097:10)
    at Module.load (internal/modules/cjs/loader.js:933:32)
    at Function.Module._load (internal/modules/cjs/loader.js:774:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47
(Use `node --trace-warnings ...` to show where the warning was created)
(node:21788) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:21788) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
---


npm update @nestjs/core  


//====================================/FASITFY BUG FIX

---/info

---code
update src\main.ts

// const app = await NestFactory.create(AppModule); // OLD CODE

const app = await NestFactory.create<NestFastifyApplication>( // FASTIFY
  AppModule,
  new FastifyAdapter()
);

// await app.listen(3000); // 127.0.0.1/localhost
await app.listen(3000, '0.0.0.0'); // global ip


update src\produk\produk.controller.ts

---sebelum_0
import { Request } from 'express'; //MANUAL QUERY ganti request express nya pake default nestJs aja

  @Post('/produk-manual-query')
  @ApiBody({ type: ProdukManualQueryDto })
  produkManualQuery(
    @Req()
    req: Request
  ): any {

   return this.produkService.GetProduk(req.body)
  }

---/sebelum_0

---sesudah_0
// import { Request } from 'express'; //MANUAL QUERY ganti request express nya pake default nestJs aja

  @Post('/produk-manual-query')
  @ApiBody({ type: ProdukManualQueryDto })
  produkManualQuery(
    @Body()
    req_body: ProdukManualQueryDto
  ): any {

   return this.produkService.GetProduk(req_body)
  }
---/sesudah_0


  update src\produk\dto\create-produk.dto.ts

---sebelum_1
export class ProdukDto {
  ...
  ...
    @ApiProperty({ format: 'binary' })
    @IsOptional()
    foto: string
---/sebelum_1

---sesudah_1
    @ApiProperty() 
    @IsOptional()
    foto: string
---/sesudah_1

update src\produk\produk.controller.ts

---sebelum_2
  import { FileInterceptor } from  '@nestjs/platform-express';
  import { diskStorage } from 'multer';

  @Post() 
  @UseInterceptors(FileInterceptor('foto', {
       storage: diskStorage({ 
         destination: './assets/produk',
         filename: (req: any, file, cb) => {
           let number_user_id = Number(req.user.id)
           let eki_auto_generate = "PD"
             + new Date().getFullYear() 
             + ("0" + (new Date().getMonth() + 1)).slice(-2) //+ "-"
             + ("0" + new Date().getDate()).slice(-2) + "-"
             + "USR" + number_user_id.toString().padStart((String(number_user_id).length > 4) ? String(number_user_id).length : 4, '0') + "-"
             + Date.now()

           cb(null, eki_auto_generate + extname(file.originalname))
       }
     })
   }))
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: CreateProdukDto })
  create(@InjectUser() createProdukDto: CreateProdukDto, @UploadedFile() foto: Express.Multer.File) {
    createProdukDto.foto = foto.filename //DISABLE FASTIFY ADAPTER
    return this.produkService.create(createProdukDto);
  }
---/sebelum_2

---sesudah_2
  @Post()
  @ApiBody({ type: CreateProdukDto })
  create(@InjectUser() createProdukDto: CreateProdukDto) { 
    return this.produkService.create(createProdukDto);
  }
---/sesudah_2

---sebelum_3
 @Patch(':id')
  @UseInterceptors(FileInterceptor('foto', {
    storage: diskStorage({
      destination: './assets/produk',
      filename: (req: any, file, cb) => {
        let number_user_id = Number(req.user.id)
        let eki_auto_generate = "PD"
          + new Date().getFullYear()
          + ("0" + (new Date().getMonth() + 1)).slice(-2)
          + ("0" + new Date().getDate()).slice(-2) + "-"
          + "USR" + number_user_id.toString().padStart((String(number_user_id).length > 4) ? String(number_user_id).length : 4, '0') + "-"
          + Date.now()
        cb(null, eki_auto_generate + extname(file.originalname))
      }
    })
  }))
  @ApiConsumes('multipart/form-data') 
  @ApiBody({ type: UpdateProdukDto }) 
  update(@Param('id') id: string, @InjectUser() updateProdukDto: UpdateProdukDto, @UploadedFile() foto: Express.Multer.File) {
     if (foto) {
       updateProdukDto.foto = foto.filename
    }
    return this.produkService.update(+id, updateProdukDto);
  }
---/sebelum_3

---sesudah_3
  @Patch(':id')
  @ApiBody({ type: UpdateProdukDto })
  update(@Param('id') id: string, @InjectUser() updateProdukDto: UpdateProdukDto) {
    return this.produkService.update(+id, updateProdukDto);
  }
---/sesudah_3


//=========================== WAJIB REBUILD DIST FILE

delete /dist files

---- build kembali file /dist nya
npm run build
nest build
------jika masih error

npm uninstall @nestjs/core
npm install @nestjs/core@8.2.3

npm uninstall @nestjs/platform-fastify
npm install @nestjs/platform-fastify@8.2.3

npm uninstall @nestjs/swagger fastify-swagger
npm install @nestjs/swagger@5.1.5 fastify-swagger@4.12.6

npm cache clean --force
delete node_modules
delete dist
delete package-lock.json

npm i
npm run build
----
//=========================== /WAJIB REBUILD DIST FILE


---/code

```

</details>


## ==== /STAGE 12 = MIGRATION MONGOOSE EXPRESS ADAPTER TO FASTIFY ADAPTER

## ==== STAGE 13 = PORTABLE FILE UPLOAD UP TO 274k GB


<details>
  <summary>20220117-0048-SQLITE-EXPRESS-CRUD-FILE-UPLOAD</summary>

```bash
https://github.com/EKI-INDRADI/eki-latihan-nestjs-sqlite-portable-file-upload

database client menggunakan
"Database Client for Visual Studio Code cweijan"
cari extention "cweijan" pada extention visual studio code
atau menggunakan "SQLite Studio" https://sqlitestudio.pl/

npm install @nestjs/serve-static (public folder)
npm install sqlite3 --save


https://www.sqlite.org/limits.html


Maximum Database Size

Every database consists of one or more "pages". Within a single database, every page is the same size, but different database can have page sizes that are powers of two between 512 and 65536, inclusive. The maximum size of a database file is 4294967294 pages. At the maximum page size of 65536 bytes, this translates into a maximum database size of approximately 1.4e+14 bytes (281 terabytes, or 256 tebibytes, or 281474 gigabytes or 256,000 gibibytes).

This particular upper bound is untested since the developers do not have access to hardware capable of reaching this limit. However, tests do verify that SQLite behaves correctly and sanely when a database reaches the maximum file size of the underlying filesystem (which is usually much less than the maximum theoretical database size) and when a database is unable to grow due to disk space exhaustion.


Note : 
1 GiB = 1.073741824 GB
256.000 GiB = -+ 274.878 GB

keungulan database SQLite berbentuk file dah mudah dibuat synology server (auto backup)


ketika di running selesai 
file database akan otomatis terbuat dengan nama simple_pos 
pada direktory ./simple_pos

.env

SQLITE_DATABASE = 'simple_pos'
JWT_SECRET_KEY= 'eki-secret-key'


```

</details>

## ==== /STAGE 13 = PORTABLE FILE UPLOAD UP TO 274k GB

mohon maaf lama update, karena tidak memiliki banyak waktu karena saya bekerja pada salah 1 perusahaan startup dengan waktu kerja 11-12 jam per hari

semoga dokumentasi ini bermanfaat cukup liat setiap branch nya, akan langsung paham (sudah dibuat komentar code untuk di pahami juga)

end video  04:24:41 [pagenation rekening done]

stage 8 - update manual raw query SQL

stage 9 - migrasi MySql to PostgreSql

stage 10 - migrasi express adapter nestjs to fastify adapter nestjs

stage 11 - migrasi MySql (TypeORM) to Mongodb (Moongose) [DONE]

stage 12 - migrasi express adapter nestjs Mongoose to fastify adapter nestjs Mongoose [done]

 
## REFERENSI :

```bash
NestJs (express) - MySQL - https://www.youtube.com/watch?v=WuGKMQpVQRA (thanks to Web App Project)

https://nestjs.com/


https://github.com/EKI-INDRADI/eki-latihan-vm-alpine-docker-portable

https://github.com/EKI-INDRADI/eki-latihan-docker-phpmyadmin-mariadb
https://github.com/EKI-INDRADI/eki-latihan-nestjs-mysql
https://github.com/EKI-INDRADI/eki-latihan-nestjs-fastify-mysql

https://github.com/EKI-INDRADI/eki-latihan-docker-postgresql
https://github.com/EKI-INDRADI/eki-latihan-nestjs-postgresql
https://github.com/EKI-INDRADI/eki-latihan-nestjs-fastify-postgresql 

https://github.com/EKI-INDRADI/eki-latihan-docker-mongodb
https://github.com/EKI-INDRADI/eki-latihan-nestjs-mongodb
https://github.com/EKI-INDRADI/eki-latihan-nestjs-fastify-mongodb

https://github.com/EKI-INDRADI/eki-latihan-nestjs-http-module-rxjs-8

https://github.com/EKI-INDRADI/eki-latihan-docker-rabbitmq
https://github.com/EKI-INDRADI/eki-latihan-nestjs-rabbitmq

https://github.com/EKI-INDRADI/eki-latihan-nestjs-sqlite-portable-file-upload

```

## EKI INDRADI

"TIME > KNOWLEDGE > MONEY". #STILL_ONE_DIGIT
