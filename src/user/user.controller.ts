import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UserIdDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User') // AUTO GENERATE OPEN API SWAGGER
// url = http://localhost
// + 
// src\main.ts
// url = http://localhost:3000
// +
@Controller('user')
// url = http://localhost:3000/user

export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) { // pada saat generate end point Y sudah automatic ter set DTO
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  // remove(@Param('id') id: string) {
  remove(@Param() get_UserIdDto: UserIdDto) {
    // karena id menggunakan DTO
    // maka return nya adalah {id:2}
    // return di bawah ini tidak dapat digunakan untuk delete
    // return this.userService.remove(+id);
    return this.userService.remove(get_UserIdDto.id);
  }
}
