import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KonsumenService } from './konsumen.service';
import { CreateKonsumanDto } from './dto/create-konsuman.dto';
import { UpdateKonsumanDto } from './dto/update-konsuman.dto';

@Controller('konsumen')
export class KonsumenController {
  constructor(private readonly konsumenService: KonsumenService) {}

  @Post()
  create(@Body() createKonsumanDto: CreateKonsumanDto) {
    return this.konsumenService.create(createKonsumanDto);
  }

  @Get()
  findAll() {
    return this.konsumenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.konsumenService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKonsumanDto: UpdateKonsumanDto) {
    return this.konsumenService.update(+id, updateKonsumanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.konsumenService.remove(+id);
  }
}
