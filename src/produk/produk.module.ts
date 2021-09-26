import { Module } from '@nestjs/common';
import { ProdukService } from './produk.service';
import { ProdukController } from './produk.controller';

@Module({
  controllers: [ProdukController],
  providers: [ProdukService]
})
export class ProdukModule {}
