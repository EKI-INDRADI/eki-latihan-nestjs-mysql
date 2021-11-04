import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PenjualanService } from './penjualan.service';
import { CreatePenjualanDto } from './dto/create-penjualan.dto';
import { UpdatePenjualanDto } from './dto/update-penjualan.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Penjualan')
@Controller('penjualan')
export class PenjualanController {
  constructor(private readonly penjualanService: PenjualanService) {}

  @Post()
  create(@Body() createPenjualanDto: CreatePenjualanDto) {
    return this.penjualanService.create(createPenjualanDto);
  }

  @Get()
  findAll() {
    return this.penjualanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.penjualanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePenjualanDto: UpdatePenjualanDto) {
    return this.penjualanService.update(+id, updatePenjualanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.penjualanService.remove(+id);
  }
}
