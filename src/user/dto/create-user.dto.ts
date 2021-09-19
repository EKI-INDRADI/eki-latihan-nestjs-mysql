import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator"

export class CreateUserDto { // DTO data transfer object (schema) untuk keperluan controller //https://docs.nestjs.com/controllers
    @IsOptional()
    id?: number  // ? = optional

    @IsString()
    @MaxLength(64)
    @MinLength(8)
    @IsNotEmpty()
    nama_user: string

    @IsEmail()
    @MaxLength(32)
    @MinLength(6)
    @IsNotEmpty()
    email: string

    @IsString()
    @MaxLength(32)
    @MinLength(8)
    @IsNotEmpty()
    username: string

    @IsString()
    @MaxLength(32)
    @MinLength(8)
    @IsNotEmpty()
    password: string
    // create_at : Date // tidak digunakan karena auto generate create new Date()
    // update_at : Date // tidak digunakan karena auto generate update new Date()
}
