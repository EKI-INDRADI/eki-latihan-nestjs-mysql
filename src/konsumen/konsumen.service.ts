import { Injectable } from '@nestjs/common';
import { CreateKonsumanDto } from './dto/create-konsuman.dto';
import { UpdateKonsumanDto } from './dto/update-konsuman.dto';

@Injectable()
export class KonsumenService {
  create(createKonsumanDto: CreateKonsumanDto) {
    return 'This action adds a new konsuman';
  }

  findAll() {
    return `This action returns all konsumen`;
  }

  findOne(id: number) {
    return `This action returns a #${id} konsuman`;
  }

  update(id: number, updateKonsumanDto: UpdateKonsumanDto) {
    return `This action updates a #${id} konsuman`;
  }

  remove(id: number) {
    return `This action removes a #${id} konsuman`;
  }
}
