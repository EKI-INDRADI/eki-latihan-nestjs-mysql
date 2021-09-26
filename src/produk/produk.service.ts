import { Injectable } from '@nestjs/common';
import { CreateProdukDto } from './dto/create-produk.dto';
import { UpdateProdukDto } from './dto/update-produk.dto';

@Injectable()
export class ProdukService {
  create(createProdukDto: CreateProdukDto) {
    return 'This action adds a new produk';
  }

  findAll() {
    return `This action returns all produk`;
  }

  findOne(id: number) {
    return `This action returns a #${id} produk`;
  }

  update(id: number, updateProdukDto: UpdateProdukDto) {
    return `This action updates a #${id} produk`;
  }

  remove(id: number) {
    return `This action removes a #${id} produk`;
  }
}
