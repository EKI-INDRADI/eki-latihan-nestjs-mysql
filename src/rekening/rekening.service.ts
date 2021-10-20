import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRekeningDto } from './dto/create-rekening.dto';
import { UpdateRekeningDto } from './dto/update-rekening.dto';
import { Rekening } from './entities/rekening.entity';

@Injectable()
export class RekeningService {
  constructor(
    @InjectRepository(Rekening) private rekeningRepo: Repository<Rekening>
  ) { }
  create(createRekeningDto: CreateRekeningDto) {
    return this.rekeningRepo.save(createRekeningDto)
  }

  findAll() {
    return this.rekeningRepo.find({relations:['user']});
  }

  findOne(id: number) {
    return this.rekeningRepo.findOne(id);
  }

  update(id: number, updateRekeningDto: UpdateRekeningDto) {
    updateRekeningDto.id = id
    return this.rekeningRepo.save(updateRekeningDto);
  }

  async remove(id: number) {
    let rekening = await this.rekeningRepo.findOne(id)
    return this.rekeningRepo.remove(rekening)
  }
}
