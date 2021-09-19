import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto, UserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(UserDto) {} 
// export class UpdateUserDto extends PartialType(CreateUserDto) {} 
// ini maksud dari extends adalah UpdateUserDto selalu memiliki class CreateUserDto
// untuk lebih detail silahkan pelajari typescript OOP , itulah menagapa disni tidak buat lagi DTO secara manual
