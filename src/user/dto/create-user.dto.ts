import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator"
//=================== @IsUnique
import { IsUnique } from "src/etc/validator/unique-validator"
import { User } from "../entities/user.entity"
//=================== @IsUnique

export class CreateUserDto { // DTO data transfer object (schema) untuk keperluan controller //https://docs.nestjs.com/controllers
    @IsOptional()
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
