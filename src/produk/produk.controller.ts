import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdukService } from './produk.service';
import { CreateProdukDto } from './dto/create-produk.dto';
import { UpdateProdukDto } from './dto/update-produk.dto';

@Controller('produk')
export class ProdukController {
  constructor(private readonly produkService: ProdukService) {}

  @Post()
  create(@Body() createProdukDto: CreateProdukDto) {
    return this.produkService.create(createProdukDto);
  }

  @Get()
  findAll() {
    return this.produkService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produkService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProdukDto: UpdateProdukDto) {
    return this.produkService.update(+id, updateProdukDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produkService.remove(+id);
  }
}
