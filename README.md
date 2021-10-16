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



mohon maaf lama update, karena tidak memiliki banyak waktu karena saya bekerja pada salah 1 perusahaan startup dengan waktu kerja 11-12 jam per hari

semoga dokumentasi ini bermanfaat cukup liat setiap branch nya, akan langsung paham (sudah dibuat komentar code untuk di pahami juga)

next video  02:55:13
 
## REFERENSI :

NestJs (express) - MySQL - https://www.youtube.com/watch?v=WuGKMQpVQRA (thanks to Web App Project)

## EKI INDRADI

"TIME > KNOWLEDGE > MONEY". #STILL_ONE_DIGIT
