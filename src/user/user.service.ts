import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>
    // inject entity user 
    // Repository<User>   = menfaatkan Generic class 
    // sudah termasuk request response berdasarkan generic class user
  ) { }

  create(createUserDto: CreateUserDto) {
    return this.userRepo.save(createUserDto); // panggil generic class user  (schema) untuk melakukan create
  }

  findAll() {
    return this.userRepo.find();
  }

  findOne(id: number) {
    return this.userRepo.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    updateUserDto.id = id // inject id (berdasarkan request) , maka kondisi akan update
    return this.userRepo.save(updateUserDto); 
    // jika pada object/value dari .save memiliki ID sama  & kondisnya sama dengan existing maka akan replace.
    // tetapi jika tidak ada id maka otomatis akan create baru
  }

  async remove(id: number) { // async function
    let user = await this.userRepo.findOne(id) // cari data berdasarkan id request
    return this.userRepo.remove(user); // jika di temukan maka hapus
  }
}
