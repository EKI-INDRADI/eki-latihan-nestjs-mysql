import { Injectable } from '@nestjs/common';
import { CreateRekeningDto } from './dto/create-rekening.dto';
import { UpdateRekeningDto } from './dto/update-rekening.dto';

@Injectable()
export class RekeningService {
  create(createRekeningDto: CreateRekeningDto) {
    return 'This action adds a new rekening';
  }

  findAll() {
    return `This action returns all rekening`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rekening`;
  }

  update(id: number, updateRekeningDto: UpdateRekeningDto) {
    return `This action updates a #${id} rekening`;
  }

  remove(id: number) {
    return `This action removes a #${id} rekening`;
  }
}
