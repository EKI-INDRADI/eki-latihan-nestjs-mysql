import { Injectable } from '@nestjs/common';
import { CreatePenjualanDto } from './dto/create-penjualan.dto';
import { UpdatePenjualanDto } from './dto/update-penjualan.dto';

@Injectable()
export class PenjualanService {
  create(createPenjualanDto: CreatePenjualanDto) {
    return 'This action adds a new penjualan';
  }

  findAll() {
    return `This action returns all penjualan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} penjualan`;
  }

  update(id: number, updatePenjualanDto: UpdatePenjualanDto) {
    return `This action updates a #${id} penjualan`;
  }

  remove(id: number) {
    return `This action removes a #${id} penjualan`;
  }
}
