import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProdukDto } from './dto/create-produk.dto';
import { UpdateProdukDto } from './dto/update-produk.dto';
import { Produk } from './entities/produk.entity';

@Injectable()
export class ProdukService {
  // buat constructor()
  constructor(
    @InjectRepository(Produk) private produkRepo: Repository<Produk> // inject produk entites
  ) { }

  create(createProdukDto: CreateProdukDto) {
    return this.produkRepo.save(createProdukDto) //'This action adds a new produk';
  }

  findAll() {
    return this.produkRepo.find({
      relations:['user'] // ManyToOne // src\produk\entities\produk.entity.ts
    }) //`This action returns all produk`;
  }

  findOne(id: number) {
    return this.produkRepo.findOne(id) //`This action returns a #${id} produk`;
  }

  update(id: number, updateProdukDto: UpdateProdukDto) {
    updateProdukDto.id = id
    return this.produkRepo.save(updateProdukDto) //`This action updates a #${id} produk`;
  }

  async remove(id: number) {
    let produk_result = await this.produkRepo.findOne(id) // cari data produk
    return this.produkRepo.remove(produk_result) //This action removes a #${id} produk`;
  }
}
