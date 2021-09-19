import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator"
//=================== @IsExist
import { IsExist } from "src/etc/validator/exist-validator"
import { User } from "../entities/user.entity"
//=================== @IsExist

export class CreateUserDto { // DTO data transfer object (schema) untuk keperluan controller //https://docs.nestjs.com/controllers
    @IsOptional()
    id?: number  // ? = optional

    @IsString()
    @MaxLength(64)
    @MinLength(8)
    @IsNotEmpty()
    nama_user: string

    @IsEmail()
    @IsExist([User,'email']) // src\etc\validator\exist-validator.ts
    @MaxLength(32)
    @MinLength(6)
    @IsNotEmpty()
    email: string

    @IsString()
    @MaxLength(32)
    @MinLength(8)
    @IsNotEmpty()
    @IsExist([User,'username']) // src\etc\validator\exist-validator.ts
    username: string

    @IsString()
    @MaxLength(32)
    @MinLength(8)
    @IsNotEmpty()
    password: string
    // create_at : Date // tidak digunakan karena auto generate create new Date()
    // update_at : Date // tidak digunakan karena auto generate update new Date()
}
