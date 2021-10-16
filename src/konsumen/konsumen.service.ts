import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateKonsumanDto } from './dto/create-konsuman.dto';
import { UpdateKonsumanDto } from './dto/update-konsuman.dto';
import { Konsuman } from './entities/konsuman.entity';

@Injectable()
export class KonsumenService {

  constructor(
    @InjectRepository(Konsuman) private konsumenRepo: Repository<Konsuman> // (yang di generate adalah Konsumen) tetapi classnya Konsuman, entities\konsuman.entity.ts  
    //ini adalah kesalahan dari nest, kemungkinan karena auto checking english translate men jadi man
  ) { }

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
