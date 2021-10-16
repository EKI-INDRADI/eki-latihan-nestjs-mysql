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
    return this.konsumenRepo.save(createKonsumanDto)
  }

  findAll() {
    return this.konsumenRepo.find({relations : ['user']})
  }

  findOne(id: number) {
    return this.konsumenRepo.findOne(id)
  }

  update(id: number, updateKonsumanDto: UpdateKonsumanDto) {
    return this.konsumenRepo.save(updateKonsumanDto)
  }

  async remove(id: number) {
    let res_konsumen = await this.konsumenRepo.findOne(id)
    return this.konsumenRepo.remove(res_konsumen)
  }
}
