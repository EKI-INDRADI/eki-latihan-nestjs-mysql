import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator"

//=================== @IsUnique
import { IsUnique } from "src/etc/validator/unique-validator"
import { User } from "../entities/user.entity"
//=================== @IsUnique
//=================== @IsExist
import { IsExist } from "src/etc/validator/exist-validator"
import { OmitType, PickType } from "@nestjs/mapped-types"
//=================== @IsExist

export class UserDto { // DTO data transfer object (schema) untuk keperluan controller //https://docs.nestjs.com/controllers
    @IsOptional()
    @IsExist([User,'id'])
    id?: number  // ? = optional

    @IsString()
    @MaxLength(64)
    @MinLength(8)
    @IsNotEmpty()
    nama_user: string

    @IsEmail()
    @IsUnique([User,'email']) // src\etc\validator\unique-validator.ts
    @MaxLength(32)
    @MinLength(6)
    @IsNotEmpty()
    email: string

    @IsString()
    @MaxLength(32)
    @MinLength(8)
    @IsNotEmpty()
    @IsUnique([User,'username']) // src\etc\validator\unique-validator.ts
    username: string

    @IsString()
    @MaxLength(32)
    @MinLength(8)
    @IsNotEmpty()
    password: string
    // create_at : Date // tidak digunakan karena auto generate create new Date()
    // update_at : Date // tidak digunakan karena auto generate update new Date()
}


// extends = copy class
// OmitType(UserDto,['id']) = membuang hanya object id  / hapus object id
export class CreateUserDto extends OmitType(UserDto,['id']){}

// PickType(UserDto,['id']) = mengambil hanya object id , yang lainnya tidak digunakan
export class UserIdDto extends PickType(UserDto,['id']){}
